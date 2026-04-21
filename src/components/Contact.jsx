import { motion as Motion } from 'framer-motion'
import { Mail, Phone, Github } from 'lucide-react'

const contacts = [
  { icon: Phone, label: '电话', value: '19101469874', href: 'tel:19101469874' },
  { icon: Mail, label: '邮箱', value: '2541830361@qq.com', href: 'mailto:2541830361@qq.com' },
  { icon: Github, label: 'GitHub', value: 'wq-powerful', href: 'https://github.com/wq-powerful', external: true },
]

export function Contact() {
  return (
    <footer id="contact" className="relative min-h-screen flex items-center py-16 sm:py-24 xl:py-32 px-4 sm:px-6 xl:px-8 bg-white" aria-labelledby="contact-heading">
      <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl 3xl:max-w-8xl mx-auto w-full">
        {/* 标题区 */}
        <Motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="text-brand-500 text-[11px] xl:text-xs 2xl:text-sm font-medium tracking-widest uppercase mb-2 sm:mb-3">Contact</div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] xl:text-[42px] 2xl:text-[48px] font-bold text-slate-900 tracking-tight mb-2 sm:mb-3 xl:mb-4" id="contact-heading">
            联系我
          </h2>
          <p className="text-[12px] sm:text-[13px] xl:text-[15px] 2xl:text-base text-slate-400 max-w-sm sm:max-w-md xl:max-w-lg mx-auto leading-relaxed">
            如果您对我的经历或项目感兴趣，欢迎通过以下方式与我取得联系
          </p>
        </Motion.div>

        {/* 联系方式 */}
        <Motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 xl:gap-6 max-w-sm sm:max-w-2xl xl:max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          {contacts.map((item, i) => {
            const Icon = item.icon
            return (
              <a
                key={i}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="group flex flex-col items-center gap-2 xl:gap-3 rounded-2xl p-4 sm:p-5 xl:p-7 bg-[#fafafa] border border-slate-100 hover:border-brand-200 hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.06)] transition-all duration-500"
                aria-label={`${item.label}: ${item.value}`}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 xl:w-12 xl:h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-brand-500 group-hover:border-brand-200 transition-all duration-300">
                  <Icon className="w-4 h-4 xl:w-5 xl:h-5" />
                </div>
                <div className="text-[10px] xl:text-xs 2xl:text-sm text-slate-400">{item.label}</div>
                <div className="text-[12px] sm:text-[12px] xl:text-sm 2xl:text-base font-medium text-slate-700 break-all">{item.value}</div>
              </a>
            )
          })}
        </Motion.div>
      </div>
    </footer>
  )
}
