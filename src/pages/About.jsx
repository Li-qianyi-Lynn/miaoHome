import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { cats } from '../data/cats'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 20 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

const photos = [
  { src: '/about/lynn-sunset.jpeg',    alt: 'Lynn at golden hour',               pos: 'object-top'    },
  { src: '/about/lynn-tulips.jpeg',    alt: 'Lynn in the tulip fields',           pos: 'object-center' },
  { src: '/about/benben.jpeg',          alt: 'Bentley the skinny orange cat',      pos: 'object-top'    },
  { src: '/about/lynn-waterfront.jpeg',alt: 'Lynn by the lake at dusk',           pos: 'object-center' },
  { src: '/about/landlord-cat.jpeg',  alt: 'The first cat i cared: didi',pos: 'object-center'},
  { src: '/about/lynn-snow.jpg',       alt: 'Lynn in the snow',                  pos: 'object-center' },
  { src: '/about/lynn-ferry.jpg',      alt: 'Lynn on the ferry',                 pos: 'object-top'    },
]

function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', fn)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', fn)
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-ink/75 backdrop-blur-sm" />

      <motion.div
        initial={{ scale: 0.93, opacity: 0 }}
        animate={{ scale: 1,    opacity: 1 }}
        exit={{ scale: 0.93,    opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="block rounded-2xl shadow-2xl object-contain"
          style={{ maxWidth: 'min(90vw, 900px)', maxHeight: '88vh' }}
        />
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-surface shadow-lg flex items-center justify-center hover:bg-surface-2 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X size={14} className="text-ink" />
        </button>
      </motion.div>
    </motion.div>
  )
}

function Photo({ src, alt, pos, className, onClick }) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`查看大图：${alt}`}
      className={`${className} overflow-hidden cursor-zoom-in group`}
      onClick={() => onClick({ src, alt })}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick({ src, alt }) } }}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${pos} transition-transform duration-500 group-hover:scale-[1.04]`}
      />
    </div>
  )
}

export default function About() {
  const [light, setLight] = useState(null)

  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 border-b border-surface-3 pb-14"
        >
          <p className="label mb-5">About · 关于我</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-semibold text-ink leading-tight mb-6">
            How this started
          </h1>
          <p className="pull-quote text-ink-muted max-w-2xl">
            "猫猫是最能治愈我的生物。我看见猫猫，就不自觉地心情好。"
          </p>
        </motion.div>

        {/* Photo mosaic — full width, 3 rows */}
        <motion.div {...fadeUp()} className="mb-20">

          {/* Row 1: three tall portraits */}
          <div className="grid grid-cols-3 gap-2 mb-2">
            <Photo {...photos[0]} className="aspect-[3/4] rounded-2xl" onClick={setLight} />
            <Photo {...photos[1]} className="aspect-[3/4] rounded-2xl" onClick={setLight} />
            <Photo {...photos[2]} className="aspect-[3/4] rounded-2xl" onClick={setLight} />
          </div>

          {/* Row 2: wide landscape + square */}
          <div className="grid grid-cols-3 gap-2 mb-2">
            <Photo {...photos[3]} className="col-span-2 aspect-[2/1] rounded-xl" onClick={setLight} />
            <Photo {...photos[4]} className="aspect-square rounded-xl"           onClick={setLight} />
          </div>

          {/* Row 3: square + wide landscape */}
          <div className="grid grid-cols-3 gap-2">
            <Photo {...photos[5]} className="aspect-square rounded-xl"           onClick={setLight} />
            <Photo {...photos[6]} className="col-span-2 aspect-[2/1] rounded-xl" onClick={setLight} />
          </div>

        </motion.div>

        {/* Bio */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">

          {/* Name card + stats */}
          <div className="md:col-span-2">
            <motion.div {...fadeUp(0.05)}>
              <p className="label text-rose mb-2">Seattle, WA · 东北大学西雅图</p>
              <h2 className="font-serif text-4xl font-semibold text-ink mb-1">Lynn</h2>
              <p className="font-sans text-ink-faint text-sm mb-10">
                Edinburgh MSc → NEU CS · 前心理咨询师 · 吸猫
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.1)} className="grid grid-cols-2 gap-3 mb-10">
              {[
                { n: 'EDI',             l: 'Univ. of Edinburgh' },
                { n: 'NEU',             l: 'Northeastern Univ.' },
                { n: `${cats.length}+`, l: 'Cats over time'     },
                { n: '730+',            l: 'Nights together'    },
              ].map(({ n, l }) => (
                <div key={l} className="p-4 border border-surface-3 rounded-xl text-center">
                  <p className="font-serif text-2xl font-semibold text-ink">{n}</p>
                  <p className="label mt-1">{l}</p>
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.15)}>
              <Link to="/contact" className="btn-primary">
                Say hello · 打个招呼
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          {/* Story */}
          <div className="md:col-span-3">
            <motion.div {...fadeUp(0.1)} className="space-y-6 prose-diary text-ink-muted">
              <p>
                Hello 朋友们，这里是Lynn，目前住在Bel-Red。本科毕业后，我在英国爱丁堡大学读了心理咨询方向的硕士，并且做过一年多的心理咨询师。后来机缘巧合，来到了西雅图，在东北大学（NEU）开始学习计算机。
              </p>
              <p>
                我很好奇，人是怎么运作的，又需要什么。我想探索这个问题——<strong className="text-ink">人和技术之间，究竟可以有怎样的关系。</strong>
              </p>
              <p>
                我平时最喜欢睡觉、vibe coding，还有吸猫。<strong className="text-ink">世界上不能没有猫猫，</strong>这是我坚定不移的信念。
              </p>
              <p className="font-sans text-sm text-ink-faint italic">
                Hi, I'm Lynn. After my undergrad, I did a master's in psychological counselling at the University of Edinburgh, then worked as a counsellor for over a year. Eventually I found my way to Seattle and started studying computer science at Northeastern University.
                <br /><br />
                Two paths that look different on paper — but both are really asking the same question: how do people work, and what do they need? Now I'm exploring that through the lens of human–computer interaction. And also: the world would be worse without cats. This is not up for debate.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── 罐罐的故事：文字左，图片右 ── */}
        <motion.div {...fadeUp()} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 pt-4">

          {/* 文字 */}
          <div className="space-y-4 prose-diary text-ink-muted">
            <div className="border-l-2 border-rose/30 pl-5 space-y-4">
              <p>但我和猫猫的故事，有一个不太好的开头。</p>
              <p>
                2023年，我还在国内做心理咨询师。有一天我捡到了一只刚出生大概十天的小猫——她很小，
                全身大部分是白的，头顶有两点黑。我希望她这辈子有数不清的罐头可以吃，就给她取名叫
                <strong className="text-ink">罐罐</strong>。
              </p>
              <p>
                捡到她的第二天我就带他去体检，医生说她很健康，活蹦乱跳。罐罐陪了我整整一周。
                一周后的某个早晨，她突然不吃不喝，开始抽搐。
                我送她到医院的时候，已经晚了。
              </p>
              <p className="font-sans text-xs text-ink-faint italic">
                In 2023, I found a kitten that was maybe ten days old — mostly white, a little black on her head.
                I named her Guanguan, because I wanted her to have endless canned food in her life.
                The vet said she was healthy. A week later, she was gone.
              </p>
            </div>
            <p>那之后，我有很长一段时间不敢靠近猫咪。我总觉得是自己没做好。</p>
            <p className="font-sans text-sm text-ink-faint italic">
              After that, I stayed away from cats for a long time. I kept thinking it was my fault.
            </p>
          </div>

          {/* 图片 */}
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img
              src="/about/guanguan.jpeg"
              alt="罐罐——那只陪了我一周的小猫"
              className="w-full h-full object-cover object-top"
            />
          </div>

        </motion.div>

        {/* ── 重新开始：图片左，文字右 ── */}
        <motion.div {...fadeUp()} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">

          {/* 图片 — 手机端在文字上方 */}
          <div className="aspect-[3/4] rounded-2xl overflow-hidden order-first">
            <img
              src="/about/gaogaoxixi.jpeg"
              alt="高高和西西——让我重新开始照顾猫咪的两只猫"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* 文字 */}
          <div className="space-y-4 prose-diary text-ink-muted">
            <p>
              2024年，我搬来了西雅图。房东养了两只猫——一只小狸花（高高），一只小白猫（西西）。
              他出差或出去玩的时候，我就顺手帮忙照顾。
              没想太多，就是顺手的事。
            </p>
            <p>
              后来又有朋友问我：他们要回国一个月，能不能住到他们家帮忙看猫？
              （就是弟弟喵）我反复思考，鼓足勇气，答应了。
            </p>
            <p>
              就是从那时候开始，我和猫猫们的故事，<strong className="text-ink">重新步入正轨</strong>。
            </p>
            <p className="font-sans text-sm text-ink-faint italic">
              In 2024, I moved to Seattle. My landlord had two cats — a tabby and a white one.
              I started looking after them when he travelled. Then a friend asked if I could house-sit
              for a month while they went back to China. That was Didi. I said yes,
              and that was the beginning of everything getting better.
            </p>
          </div>

        </motion.div>

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

      {/* Lightbox */}
      <AnimatePresence>
        {light && <Lightbox src={light.src} alt={light.alt} onClose={() => setLight(null)} />}
      </AnimatePresence>
    </div>
  )
}
