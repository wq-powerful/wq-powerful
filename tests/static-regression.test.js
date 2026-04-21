import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const repoRoot = new URL('../', import.meta.url)
const siteUrl = 'https://wq-powerful.github.io/wq-powerful/'
const socialImageUrl = `${siteUrl}assets/profile-photo.jpg`

async function readRepoFile(relativePath) {
  return readFile(new URL(relativePath, repoRoot), 'utf8')
}

test('vite config keeps project Pages base path and removes broad allowedHosts', async () => {
  const viteConfig = await readRepoFile('vite.config.js')

  assert.match(viteConfig, /base:\s*['"]\/wq-powerful\/['"]/)
  assert.doesNotMatch(viteConfig, /allowedHosts:\s*true/)
})

test('index SEO metadata points to the project Pages URL', async () => {
  const html = await readRepoFile('index.html')

  assert.ok(html.includes(`<link rel="canonical" href="${siteUrl}" />`))
  assert.ok(html.includes(`<meta property="og:url" content="${siteUrl}" />`))
  assert.ok(html.includes(`<meta property="twitter:url" content="${siteUrl}" />`))
  assert.ok(html.includes(`<meta property="og:image" content="${socialImageUrl}" />`))
  assert.ok(html.includes(`<meta property="twitter:image" content="${socialImageUrl}" />`))
  assert.ok(html.includes(`"url": "${siteUrl}"`))
})

test('404 redirect uses the project Pages base path and stays out of the index', async () => {
  const notFoundHtml = await readRepoFile('public/404.html')

  assert.ok(notFoundHtml.includes("var basePath = '/wq-powerful/';"))
  assert.ok(notFoundHtml.includes('content="0; url=/wq-powerful/"'))
  assert.ok(notFoundHtml.includes('content="noindex"'))
  assert.doesNotMatch(notFoundHtml, /wq-powerful\.github\.io\//)
})

test('robots and sitemap reference the project Pages URL without fragment entries', async () => {
  const robots = await readRepoFile('public/robots.txt')
  const sitemap = await readRepoFile('public/sitemap.xml')
  const urlEntries = sitemap.match(/<url>/g) ?? []

  assert.ok(robots.includes(`Sitemap: ${siteUrl}sitemap.xml`))
  assert.ok(sitemap.includes(`<loc>${siteUrl}</loc>`))
  assert.equal(urlEntries.length, 1)
  assert.doesNotMatch(sitemap, /<loc>[^<]*#/)
})

test('deploy workflow adds a verify job for lint/tests and skips deploy on pull requests', async () => {
  const workflow = await readRepoFile('.github/workflows/deploy.yml')

  assert.match(workflow, /pull_request:\s*\n\s*branches: \['main'\]/)
  assert.match(workflow, /verify:\s*\n\s*runs-on: ubuntu-latest[\s\S]*?- name: Run lint\s*\n\s*run: npm run lint/)
  assert.match(workflow, /verify:[\s\S]*?- name: Run tests\s*\n\s*run: npm test/)
  assert.match(workflow, /build:\s*\n\s*runs-on: ubuntu-latest[\s\S]*?- name: Build site\s*\n\s*run: npm run build/)
  assert.match(workflow, /deploy:\s*\n\s*if: github\.event_name != 'pull_request'/)
})
