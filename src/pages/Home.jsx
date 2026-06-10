import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import CatCard from '../components/CatCard'
import { cats } from '../data/cats'

/* Fade-up on scroll */
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 22 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true, margin: '-60px' },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Home() {
  return (
    <div>
      <Hero />

      {/* ── Intro / Diary entry ─────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.p {...fadeUp(0)} className="label mb-6">
            The Story · 故事的开始
          </motion.p>

          {/* Pull quote */}
          <motion.blockquote {...fadeUp(0.1)} className="pull-quote mb-8">
            "我没有想到，说了一声'好啊'，<br />
            <span className="text-ink-muted">会带来这么多只猫。"</span>
          </motion.blockquote>

          <motion.div {...fadeUp(0.2)} className="space-y-5 prose-diary text-ink-muted">
            <p>
              It started simply: a friend was traveling and needed someone to watch their cat.
              I said yes. The cat was fine. My friend came back. Then another friend asked.
              Then another.
            </p>
            <p>
              Several years later, I've had a growing number of regular guests — all of them
              belonging to people I care about. Each one arrived with their own quirks, their own
              rhythms, their own small demands. This site is a record of all of them.
            </p>
            <p className="font-sans text-sm text-ink-faint italic">
              如果你也是朋友的朋友，需要有人照顾你的猫——欢迎联系我。<br />
              If you're a friend of a friend who needs someone for your cat, feel free to reach out.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.3)} className="mt-10 flex gap-4">
            <Link to="/about" className="btn-primary">
              Read the full story
              <ArrowRight size={15} />
            </Link>
            <Link to="/cats" className="btn-ghost">
              Meet the cats
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Thin divider ─────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-surface-3" />
      </div>

      {/* ── Cat preview grid ─────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <motion.div {...fadeUp()}>
              <p className="label mb-3">The cats · 猫咪们</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-ink leading-tight">
                Meet the cats
              </h2>
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <Link to="/cats" className="btn-ghost text-sm">
                View all · 查看全部
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {cats.slice(0, 4).map((cat, i) => (
              <CatCard key={cat.id} cat={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Seattle note ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-surface-2">
        <div className="max-w-3xl mx-auto">
          <motion.p {...fadeUp()} className="label mb-6">Seattle, WA · 西雅图</motion.p>
          <motion.p {...fadeUp(0.1)} className="pull-quote mb-6">
            All of this happens in Seattle —
            <em className="text-ink-muted"> where it rains enough that the cats prefer staying inside anyway.</em>
          </motion.p>
          <motion.p {...fadeUp(0.2)} className="font-sans text-sm text-ink-faint leading-relaxed max-w-xl">
            西雅图经常下雨，猫咪们有时候会趴在窗边看雨。但更多时候，他们其实更希望有太阳出现。只要阳光照进来，他们就会第一时间找到那个被晒到的角落，躺倒，翻来翻去，顺便给自己舔舔毛。<br /><br />
            这是一群很会享受生活的小可爱。<br /><br />
            Seattle rains a lot, and the cats do love a window. But what they really want is sun. The moment it breaks through, they find the warm patch on the floor, collapse into it, roll around, and groom themselves with great satisfaction. They know how to live.
          </motion.p>
        </div>
      </section>

      {/* ── Soft boarding mention ────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...fadeUp()}
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-surface-3 border border-surface-3 rounded-2xl overflow-hidden"
          >
            {[
              {
                label: 'How it works · 怎么运作的',
                title: 'Not a business.\nA favour that grew.',
                body:  'I don\'t run a kennel. I take care of cats for people I know — in my actual home, the way I\'d want someone to care for mine. If you\'re looking for that, I might have space.\n\n这不是生意，是一种方式——在真实的家里，用我自己希望别人对待我的猫的方式来照顾你的猫。',
              },
              {
                label: 'Availability · 名额',
                title: 'Current spots\nare limited.',
                body:  'Because I\'m not a kennel, I can only take a small number of cats at any time. If you\'re interested, reach out first and we can talk about whether it\'s a good fit.\n\n因为只是家里，名额有限。如果你感兴趣，先联系我，我们聊聊看是否合适。',
                cta:   true,
              },
            ].map(({ label, title, body, cta }) => (
              <div key={label} className="bg-surface p-10 hover:bg-rose-faint transition-colors duration-300">
                <p className="label mb-5">{label}</p>
                <h3 className="font-serif text-2xl font-semibold text-ink mb-5 whitespace-pre-line">{title}</h3>
                <p className="font-sans text-sm text-ink-muted leading-relaxed mb-6 whitespace-pre-line">{body}</p>
                {cta && (
                  <Link to="/contact" className="btn-primary text-sm">
                    Get in touch · 联系我
                    <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
