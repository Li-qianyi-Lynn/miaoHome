import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cats } from '../data/cats'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 20 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function About() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20 border-b border-surface-3 pb-14"
        >
          <p className="label mb-5">About · 关于我</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-semibold text-ink leading-tight mb-6">
            How this started
          </h1>
          <p className="pull-quote text-ink-muted max-w-2xl">
            "猫猫是最能治愈我的生物。我看见猫猫，就不自觉地心情好。"
          </p>
        </motion.div>

        {/* Profile + story */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">

          {/* Photo placeholder */}
          <motion.div
            {...fadeUp()}
            className="md:col-span-2 aspect-[3/4] bg-surface-2 rounded-2xl overflow-hidden relative"
          >
            {/* Replace with: <img src="/about.jpg" alt="Lynn" className="w-full h-full object-cover" /> */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="label text-ink-faint text-center px-6">
                放一张你的照片<br />
                <span className="normal-case not-italic font-sans text-xs text-ink-faint">public/about.jpg</span>
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose to-rose-dark opacity-60" />
          </motion.div>

          {/* Bio */}
          <div className="md:col-span-3">
            <motion.div {...fadeUp(0.1)}>
              <p className="label text-rose mb-2">Seattle, WA · 东北大学西雅图</p>
              <h2 className="font-serif text-4xl font-semibold text-ink mb-1">Lynn</h2>
              <p className="font-sans text-ink-faint text-sm mb-10">
                CS student · 睡觉 · vibe coding · 吸猫
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="space-y-6 prose-diary text-ink-muted mb-10">

              {/* Intro */}
              <p>
                我在东北大学西雅图校区读计算机。平时最喜欢睡觉、vibe coding，还有吸猫。
                世界上不能没有猫猫——这是我坚定不移的信念。
              </p>
              <p className="font-sans text-sm text-ink-faint italic">
                I study CS at Northeastern University Seattle. I like sleeping, vibe coding, and cats.
                The world would be worse without cats. This is not up for debate.
              </p>

              {/* 罐罐的故事 */}
              <div className="border-l-2 border-rose/30 pl-5 space-y-3">
                <p>
                  但我和猫猫的故事，有一个不太好的开头。
                </p>
                <p>
                  2023年，我还在国内做心理咨询师。有一天我捡到了一只刚出生大概十天的小猫——他很小，
                  全身大部分是白的，头顶有一点黑。我希望他这辈子有数不清的罐头可以吃，就给他取名叫
                  <strong className="text-ink">罐罐</strong>。
                </p>
                <p>
                  捡到他的第二天我就带他去体检，医生说他健康，活蹦乱跳。罐罐陪了我整整一周。
                  一周后的某个早晨，他突然不吃不喝，开始抽搐。
                  我送他到医院的时候，他已经晚了。
                </p>
                <p className="font-sans text-xs text-ink-faint italic">
                  In 2023, I found a kitten that was maybe ten days old — mostly white, a little black on his head.
                  I named him Guanguan, because I wanted him to have endless canned food in his life.
                  The vet said he was healthy. A week later, he was gone.
                </p>
              </div>

              {/* 恢复 */}
              <p>
                那之后，我有很长一段时间不敢靠近猫咪。我总觉得是自己没做好。
              </p>
              <p className="font-sans text-sm text-ink-faint italic">
                After that, I stayed away from cats for a long time. I kept thinking it was my fault.
              </p>

              {/* 重新开始 */}
              <p>
                2024年，我搬来了西雅图。房东养了两只猫——一只小狸花，一只小白猫。
                他出差或出去玩的时候，我就顺手帮忙照顾。
                没想太多，就是顺手的事。
              </p>
              <p>
                后来又有朋友问我：他们要回国一个月，能不能住到他们家帮忙看猫？
                就是弟弟。我反复思考，鼓足勇气，答应了。
              </p>
              <p>
                就是从那时候开始，我和猫猫们的故事，重新步入正轨。
              </p>
              <p className="font-sans text-sm text-ink-faint italic">
                In 2024, I moved to Seattle. My landlord had two cats — a tabby and a white one.
                I started looking after them when he travelled. Then a friend asked if I could house-sit
                for a month while they went back to China. That was Didi. I thought about it for a while,
                said yes, and that was the beginning of everything getting better.
              </p>

            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.2)} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {[
                { n: '2+',              l: 'Years in Seattle' },
                { n: `${cats.length}+`, l: 'Cats over time'   },
                { n: '100+',            l: 'Nights together'  },
                { n: 'NEU',             l: 'Seattle Campus'   },
              ].map(({ n, l }) => (
                <div key={l} className="p-4 border border-surface-3 rounded-xl text-center">
                  <p className="font-serif text-2xl font-semibold text-ink">{n}</p>
                  <p className="label mt-1">{l}</p>
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.25)}>
              <Link to="/contact" className="btn-primary">
                Say hello · 打个招呼
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* 关于接猫 */}
        <motion.div
          {...fadeUp()}
          className="bg-surface-2 rounded-2xl p-10 border border-surface-3"
        >
          <p className="label mb-4">On taking new cats · 关于接受新猫咪</p>
          <p className="font-serif text-xl text-ink mb-4">
            I do occasionally take cats from people outside my immediate circle —
            <em className="text-ink-muted"> but it works best when we talk first.</em>
          </p>
          <p className="font-sans text-sm text-ink-muted leading-relaxed mb-6">
            我偶尔也接受圈子以外的猫咪——但最理想的方式是先聊一聊，了解彼此的情况。
            我不是一个商业机构，是一个住在西雅图、认真对待这件事的普通人。
            如果你觉得这听起来像是你在寻找的，欢迎联系我。<br /><br />
            <span className="text-ink-faint italic text-xs">
              If that sounds like what you're looking for, reach out.
              If it feels like a good fit, we'll figure it out.
            </span>
          </p>
          <Link to="/contact" className="btn-ghost text-sm">
            Contact me · 联系我
            <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>
    </div>
  )
}
