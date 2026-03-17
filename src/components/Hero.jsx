import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const heroPhoto = '/assets/zp1.jpg'

const pipelineSteps = ['客户现场', '需求整理', '方案表达', '培训赋能', '交付闭环', 'AI 提效']

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center px-4 sm:px-6 xl:px-8 pt-14 sm:pt-11 xl:pt-16 pb-10 bg-white" aria-label="个人简介">
      <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl 3xl:max-w-8xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 sm:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center">
          {/* 左侧 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[52px] xl:text-[60px] 2xl:text-[68px] font-bold text-slate-900 leading-[1.1] tracking-tight">
              把业务问题
            </h1>
            <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[52px] xl:text-[60px] 2xl:text-[68px] font-bold text-brand-500 leading-[1.1] tracking-tight mb-5 sm:mb-8">
              变成可落地的 AI 方案
            </h1>

            <p className="text-[14px] sm:text-[15px] xl:text-[17px] 2xl:text-lg text-slate-400 mb-5 sm:mb-8 leading-[1.7] max-w-md xl:max-w-lg">
              具备工业软件与企业数字化项目经验，能够从真实业务场景出发，完成需求拆解、方案验证与交付落地。
            </p>

            <div className="flex flex-wrap gap-2 xl:gap-3 mb-5 sm:mb-8">
              {['需求拆解', 'AI 验证', '交付落地'].map((tag) => (
                <span key={tag} className="px-3 sm:px-4 xl:px-5 py-1 sm:py-1.5 xl:py-2 bg-slate-50 text-slate-500 text-[12px] sm:text-[13px] xl:text-sm 2xl:text-base rounded-full border border-slate-100">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-10">
              <a href="#cases" className="btn-primary group">
                查看重点案例
                <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#contact" className="btn-outline">联系我</a>
            </div>

            <div className="flex flex-wrap items-center gap-y-1 text-[11px] sm:text-[13px] xl:text-sm 2xl:text-base text-slate-400">
              {['1年+ 项目交付', '6个重点项目', '3+ 行业场景', '80%+ 输出提效'].map((item, i) => (
                <span key={i} className={`px-2 sm:px-4 xl:px-5 ${i > 0 ? 'border-l border-slate-200' : ''}`}>{item}</span>
              ))}
            </div>
          </motion.div>

          {/* 右侧 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center gap-5 sm:gap-6"
          >
            <div className="relative w-44 h-52 sm:w-60 sm:h-72 xl:w-72 xl:h-[340px] 2xl:w-80 2xl:h-[380px] rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">
              <img
                src={heroPhoto}
                alt="吴倩个人照片"
                loading="eager"
                fetchpriority="high"
                width="240"
                height="288"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5" />
            </div>

            {/* 工作流 — 环形标签云 */}
            <div className="w-full max-w-[280px] sm:max-w-[300px] xl:max-w-[360px]">
              <div className="relative flex flex-wrap justify-center gap-x-2 sm:gap-x-3 gap-y-2 sm:gap-y-2.5">
                {pipelineSteps.map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, delay: 0.5 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <div className={`px-3 sm:px-3.5 xl:px-4 py-1 sm:py-1.5 xl:py-2 rounded-full text-[10px] sm:text-[11px] xl:text-xs 2xl:text-sm font-medium border cursor-default transition-all duration-300 hover:shadow-[0_2px_12px_-3px_rgba(31,163,122,0.2)] hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 ${
                      i === pipelineSteps.length - 1
                        ? 'bg-brand-50 text-brand-600 border-brand-200'
                        : 'bg-white text-slate-500 border-slate-150 shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
                    }`}>
                      {step}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
