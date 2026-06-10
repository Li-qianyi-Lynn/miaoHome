import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 20 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
})

const modes = [
  {
    num:     '01',
    title:   '寄养',
    titleEn: 'Home Boarding',
    desc:    '把你的猫咪带来我家，由我全程照顾。猫咪在真实的家庭环境里自由活动，而不是笼舍。每天发照片和视频给你。',
    descEn:  'Your cat comes to my place and stays here while you\'re away. Free-roaming in a real home — not a kennel. Daily photo and video updates included.',
    includes: [
      'Full-time home environment · 全天候家庭环境',
      'Meals, water & litter · 餐食、饮水、猫砂',
      'Daily play & attention · 每日互动陪玩',
      'Photo & video updates · 每日照片视频',
      'Vet coordination if needed · 就医陪护',
    ],
  },
  {
    num:     '02',
    title:   '上门陪住',
    titleEn: 'Home Sitting',
    desc:    '你出门旅行时，我住到你家里帮你照顾猫咪。猫咪待在熟悉的环境里，不用适应新地方，压力更小。',
    descEn:  'I come stay at your home while you\'re traveling. Your cat stays in their own familiar space — no new environment to adjust to.',
    includes: [
      'Sleep-over at your home · 留宿你家',
      'Full care in familiar surroundings · 猫咪无需离开家',
      'Plant / mail watering as needed · 顺带帮忙浇花收信',
      'Daily updates · 每日汇报',
      'Emergency vet if needed · 紧急情况就医',
    ],
  },
  {
    num:     '03',
    title:   '上门喂养',
    titleEn: 'Drop-in Visits',
    desc:    '你不在家期间，我定期上门来喂猫、换水、铲砂、陪玩一会儿。适合比较独立、不需要全天陪伴的猫咪。',
    descEn:  'I visit your home regularly to feed, water, clean the litter, and spend some time with your cat. Good for independent cats who just need check-ins.',
    includes: [
      'Feeding & fresh water · 喂食换水',
      'Litter clean · 铲砂清洁',
      'Playtime & check-in · 陪玩巡检',
      'Quick update message · 简短汇报',
    ],
  },
]

export default function Services() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 border-b border-surface-3 pb-12"
        >
          <p className="label mb-4">How I can help · 照顾方式</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-semibold text-ink leading-tight mb-4">
            Three ways to care
          </h1>
          <p className="font-serif italic text-ink-muted text-lg max-w-xl">
            我不是机构，是一个认真对待这件事的普通人。
          </p>
          <p className="font-sans text-sm text-ink-faint mt-2">
            Not a business — just someone in Seattle who genuinely cares about cats.
            We can figure out what works best for you and your cat.
          </p>
        </motion.div>

        {/* Care modes */}
        <div className="flex flex-col gap-px bg-surface-3 border border-surface-3 rounded-2xl overflow-hidden mb-16">
          {modes.map((m, i) => (
            <motion.div
              key={m.num}
              {...fadeUp(i * 0.08)}
              className="bg-surface p-8 sm:p-10 hover:bg-rose-faint transition-colors duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

                {/* Left: title + desc */}
                <div className="lg:col-span-3">
                  <p className="label text-rose mb-3">{m.num}</p>
                  <h3 className="font-serif text-2xl font-semibold text-ink mb-0.5">{m.title}</h3>
                  <p className="font-sans text-xs text-ink-faint tracking-wider mb-5">{m.titleEn}</p>
                  <p className="font-sans text-sm text-ink-muted leading-relaxed mb-3">{m.desc}</p>
                  <p className="font-sans text-xs text-ink-faint leading-relaxed italic">{m.descEn}</p>
                </div>

                {/* Right: includes */}
                <div className="lg:col-span-2 flex items-start">
                  <ul className="flex flex-col gap-2.5 w-full">
                    {m.includes.map(item => (
                      <li key={item} className="flex items-start gap-3">
                        <Check size={13} className="mt-0.5 flex-shrink-0 text-rose" />
                        <span className="font-sans text-sm text-ink-muted leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing note */}
        <motion.div
          {...fadeUp()}
          className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-surface-3 border border-surface-3 rounded-2xl overflow-hidden"
        >
          <div className="bg-surface p-8 sm:p-10">
            <p className="label mb-4">Pricing · 价格</p>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="font-serif text-5xl font-semibold text-ink">$15</span>
              <span className="font-sans text-sm text-ink-faint">/ day or visit · 每天/每次起</span>
            </div>
            <p className="font-sans text-sm text-ink-muted leading-relaxed">
              大致参考价格，实际根据情况（猫咪数量、时长、出行方式等）一起商量。没有隐藏费用。
            </p>
            <p className="font-sans text-xs text-ink-faint mt-2 leading-relaxed italic">
              This is a rough reference. We'll figure out a fair number together based on your cat,
              the duration, and the type of care. No hidden fees.
            </p>
          </div>
          <div className="bg-surface p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <p className="label mb-4">Before we start · 开始之前</p>
              <p className="font-sans text-sm text-ink-muted leading-relaxed mb-6">
                我会希望先简单聊聊你的猫咪——她的性格、习惯、有没有特殊需求。
                这样我们都更放心。<br /><br />
                <span className="text-ink-faint text-xs italic">
                  I'd love a quick chat about your cat first — their personality, routine, any special needs.
                  It helps us both feel good about it.
                </span>
              </p>
            </div>
            <Link to="/contact" className="btn-primary self-start text-sm">
              Get in touch · 联系我
              <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div {...fadeUp()} className="mb-8">
          <p className="label mb-3">FAQ · 常见问题</p>
          <h2 className="font-serif text-3xl font-semibold text-ink">A few things people ask</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              q:    'Which option is right for my cat?',
              qZh:  '哪种方式更适合我的猫？',
              a:    'If your cat is social and adapts easily, boarding works great. If they\'re anxious or territorial, home sitting or drop-ins are less disruptive.',
              aZh:  '性格外向、适应力强的猫咪很适合寄养；容易紧张或地盘意识强的猫咪待在自己家里压力更小，推荐上门陪住或上门喂养。',
            },
            {
              q:    'How far in advance should I reach out?',
              qZh:  '需要提前多久联系？',
              a:    'At least 3 days for a quick trip, a week or more for longer stays. Holidays book up faster — the earlier the better.',
              aZh:  '短途出行建议提前3天以上，长假提前一两周会更稳妥。节假日特别容易满，越早联系越好。',
            },
            {
              q:    'My cat needs medication. Is that okay?',
              qZh:  '猫咪需要喂药，可以吗？',
              a:    'Yes. I\'m comfortable with oral meds and topical treatments. Tell me about it when we chat and we\'ll make sure it\'s covered.',
              aZh:  '没问题，口服药和外用药都可以。提前告诉我剂量和时间，我会严格按医嘱来。',
            },
            {
              q:    'Will I get updates while I\'m away?',
              qZh:  '出门期间可以收到猫咪消息吗？',
              a:    'Yes — photos and a short message every day. If something unusual happens, I\'ll reach out right away.',
              aZh:  '每天都会发照片和简短消息。如果有任何异常会第一时间联系你。',
            },
          ].map(({ q, qZh, a, aZh }, i) => (
            <motion.div
              key={q}
              {...fadeUp(i * 0.07)}
              className="p-6 border border-surface-3 rounded-2xl hover:border-rose/20 transition-colors"
            >
              <h4 className="font-serif text-base font-semibold text-ink mb-0.5">{q}</h4>
              <p className="font-sans text-xs text-ink-faint mb-3">{qZh}</p>
              <p className="font-sans text-sm text-ink-muted leading-relaxed">{a}</p>
              <p className="font-sans text-xs text-ink-faint italic mt-1">{aZh}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
