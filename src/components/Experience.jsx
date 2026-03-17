import { motion } from 'framer-motion'

const experiences = [
  { company: '深圳信息职业技术大学', role: '校企合作', type: '授课 / 教学设计 / 实训手册', desc: '沉淀 10+ 项教学资产供后续复用，助力 2 名学生获得实习机会。负责授课 PPT、讲解路径设计、教学版软件适配。' },
  { company: '宁波德业', role: '企业交付', type: '部署适配 / 专项培训 / 增购支撑', desc: '企业复杂场景中的部署适配、专项培训与后续 10+ license 增购支撑，确保客户顺利上线。' },
  { company: '军工项目群', role: '售前支持', type: '售前演示 / 技术方案 / 卡点处理', desc: '售前演示、技术卡点处理、技术方案文档与高要求场景下的稳定推进。' },
  { company: '北京纷扬科技', role: '产品实习', type: '快消行业 / DMS / ERP', desc: '参与 DMS / ERP 模块相关工作，进入渠道、销售与运营流程，理解企业级产品的业务逻辑。' },
]

const stats = [
  { value: '10+', label: '累计项目' },
  { value: '6个', label: '重点交付' },
  { value: '3+', label: '行业覆盖' },
]

export function Experience() {
  return (
    <section id="experience" className="relative min-h-screen flex items-center py-20 px-6 bg-dark-bg" aria-labelledby="exp-heading">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="text-brand-400 text-[11px] font-medium tracking-widest uppercase mb-3">Experience</div>
          <h2 className="text-[28px] md:text-[36px] font-bold text-white tracking-tight mb-3" id="exp-heading">更多经历</h2>
          <p className="text-[13px] text-slate-400 max-w-md mx-auto leading-relaxed">在多个行业场景中积累的交付、培训和产品化经验</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -2 }}
              className="group rounded-2xl p-5 border border-slate-700/50 bg-dark-card/50 backdrop-blur-sm hover:border-brand-500/30 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[13px] font-semibold text-white group-hover:text-brand-400 transition-colors">{exp.company}</h3>
                <span className="px-2.5 py-0.5 bg-brand-500/10 text-brand-400 text-[10px] font-medium rounded-full">{exp.role}</span>
              </div>
              <div className="text-[10px] text-slate-500 tracking-wide uppercase mb-2">{exp.type}</div>
              <p className="text-[12px] text-slate-400 leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-8 bg-dark-card/50 backdrop-blur-sm rounded-2xl px-8 py-5 border border-slate-700/50">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-[24px] font-bold text-brand-400 tracking-tight">{stat.value}</div>
                  <div className="text-[10px] text-slate-500 mt-1">{stat.label}</div>
                </div>
                {i < stats.length - 1 && <div className="w-px h-8 bg-slate-700/50" />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
