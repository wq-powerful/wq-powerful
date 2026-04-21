import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { WhyMe } from './components/WhyMe'
import { Cases } from './components/Cases'
import { Method } from './components/Method'
import { Expression } from './components/Expression'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <WhyMe />
        <Cases />
        <Method />
        <Expression />
      </main>
      <Contact />
    </div>
  )
}

export default App
