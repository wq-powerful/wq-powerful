import { motion } from 'framer-motion'
import { Building2, FileText, Flag, Sparkles } from 'lucide-react'

const steps = [
  { number: '01', title: '进入现场', desc: '参与军工、消费电子等项目，理解真实业务痛点与场景边界' },
  { number: '02', title: '承接需求', desc: '从客户问题中提取需求，整理为可执行方案与推进路径' },
  { number: '03', title: '借助 AI 提效', desc: '搭建 AI 助手与知识沉淀机制，推动内容输出效率提升' },
]

const abilities = [
  { icon: Building2, title: '真实场景理解', subtitle: '军工 / 消费电子 / 工业 / 快消', desc: '快速识别业务痛点、场景边界与交付重点', highlight: false },
  { icon: FileText, title: '需求转译能力', subtitle: '从客户问题中抽取需求', desc: '整理为可执行方案、文档和推进路径', highlight: false },
  { icon: Flag, title: '交付与培训闭环', subtitle: '10+ 项目与培训支持', desc: '把功能讲清楚、教会用户、推动落地', highlight: false },
  { icon: Sparkles, title: 'AI 工具辅助提效', subtitle: '搭建 AI 助手与知识沉淀机制', desc: '推动输出效率提升 80%+', highlight: true },
]

export function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center py-16 sm:py-20 xl:py-28 px-4 sm:px-6 xl:px-8 bg-[#fafafa]" aria-labelledby="about-heading">
      <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl 3xl:max-w-8xl mx-auto w-full">
        <motion.div
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="text-brand-500 text-[11px] xl:text-xs 2xl:text-sm font-medium tracking-widest uppercase mb-2 sm:mb-3">About</div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] xl:text-[42px] 2xl:text-[48px] font-bold text-slate-900 tracking-tight mb-2 sm:mb-3 xl:mb-4" id="about-heading">
            从业务现场，到方案落地
          </h2>
          <p className="text-[12px] sm:text-[13px] xl:text-[15px] 2xl:text-base text-slate-400 max-w-sm sm:max-w-lg xl:max-w-xl mx-auto leading-relaxed">
            过去 1 年多，我持续在真实客户场景中完成问题收集、需求整理、文档沉淀、用户培训与交付推进，逐步形成从问题识别到方案落地的完整闭环。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 xl:gap-6 mb-6 sm:mb-8 xl:mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-2xl p-4 sm:p-5 xl:p-7 border border-slate-100 hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-brand-500 text-white text-[11px] xl:text-sm font-bold flex items-center justify-center mb-3 sm:mb-4">
                {step.number}
              </div>
              <h3 className="text-[13px] sm:text-[14px] xl:text-base 2xl:text-lg font-semibold text-slate-900 mb-1 sm:mb-1.5">{step.title}</h3>
              <p className="text-[11px] sm:text-[12px] xl:text-sm 2xl:text-base text-slate-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-4 sm:mb-5">
            <span className="text-[12px] xl:text-sm font-medium text-slate-400 tracking-wide">能力闭环</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-5">
            {abilities.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`rounded-2xl p-3 sm:p-4 xl:p-6 border transition-all duration-500 hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.06)] ${
                    item.highlight ? 'bg-brand-50/50 border-brand-100' : 'bg-white border-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 xl:w-5 xl:h-5 mb-2 sm:mb-3 ${item.highlight ? 'text-brand-500' : 'text-slate-300'}`} />
                  <h4 className="text-[11px] sm:text-[12px] xl:text-sm 2xl:text-base font-semibold text-slate-900 mb-0.5">{item.title}</h4>
                  <div className={`text-[10px] sm:text-[11px] xl:text-xs 2xl:text-sm mb-1 sm:mb-1.5 ${item.highlight ? 'text-brand-500' : 'text-slate-400'}`}>{item.subtitle}</div>
                  <p className="text-[10px] sm:text-[11px] xl:text-xs 2xl:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
