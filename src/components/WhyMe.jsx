import { motion } from 'framer-motion'
import { Building2, FileText, Sparkles, Flag } from 'lucide-react'

const cards = [
  { category: '业务理解', icon: Building2, title: '真实业务理解', subtitle: '军工 / 消费电子 / 工业 / 快消数字化', desc: '参与真实客户项目，能从场景中快速识别痛点、目标用户与关键约束', highlight: false },
  { category: '方案设计', icon: FileText, title: '需求结构化与方案转译', subtitle: 'DFM 规则编辑器 / 参数智能体', desc: '将零散问题整理为结构化规则、文档与推进路径，支持方案落地与产品推进', highlight: true },
  { category: '工具应用', icon: Sparkles, title: '工具应用与效率提升', subtitle: 'AI 工作助手 / 知识沉淀机制', desc: '搭建 AI 助手与知识库，推动建库效率提升 60%+、输出效率提升 80%+', highlight: true },
  { category: '推进与赋能', icon: Flag, title: '交付推进与用户赋能', subtitle: '培训 / 售前演示 / 交付讲解', desc: '支持 10+ 项目与培训场景，把复杂功能讲清楚、教会用户并推动落地闭环', highlight: false },
]

export function WhyMe() {
  return (
    <section id="why-me" className="relative min-h-screen flex items-center py-16 sm:py-24 xl:py-32 px-4 sm:px-6 xl:px-8 bg-white" aria-labelledby="whyme-heading">
      <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl 3xl:max-w-8xl mx-auto w-full">
        <motion.div
          className="text-center mb-8 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] xl:text-[42px] 2xl:text-[48px] font-bold text-slate-900 tracking-tight mb-2 sm:mb-3 xl:mb-4" id="whyme-heading">
            为什么我适合这个岗位
          </h2>
          <p className="text-[12px] sm:text-[13px] xl:text-[15px] 2xl:text-base text-slate-400 max-w-sm sm:max-w-lg xl:max-w-xl mx-auto leading-relaxed">
            我在真实项目中持续参与业务理解、需求整理、方案推进与交付培训，这些经历让我能够更快理解岗位要求，并在实际场景中推进事情落地。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 xl:gap-7">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -3 }}
                className={`group rounded-2xl p-4 sm:p-5 xl:p-7 border transition-all duration-500 hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] ${
                  card.highlight ? 'bg-brand-50/40 border-brand-100' : 'bg-[#fafafa] border-slate-100'
                }`}
              >
                <div className={`text-[10px] xl:text-xs font-medium tracking-widest uppercase mb-2 sm:mb-3 ${card.highlight ? 'text-brand-500' : 'text-slate-300'}`}>
                  {card.category}
                </div>
                <div className="flex items-start gap-3 xl:gap-4">
                  <div className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 xl:w-11 xl:h-11 rounded-xl flex items-center justify-center ${
                    card.highlight ? 'bg-brand-100/80 text-brand-600' : 'bg-slate-100 text-slate-400'
                  }`}>
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 xl:w-5 xl:h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[12px] sm:text-[13px] xl:text-[15px] 2xl:text-base font-semibold text-slate-900 mb-0.5">{card.title}</h3>
                    <div className={`text-[10px] sm:text-[11px] xl:text-[13px] 2xl:text-sm mb-1 sm:mb-1.5 ${card.highlight ? 'text-brand-500' : 'text-slate-400'}`}>{card.subtitle}</div>
                    <p className="text-[10px] sm:text-[11px] xl:text-[13px] 2xl:text-sm text-slate-400 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
