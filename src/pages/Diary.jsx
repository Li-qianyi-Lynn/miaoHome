import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { diary } from '../data/diary'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 20 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
})

function formatDate(str) {
  const d = new Date(str)
  return d.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}

const sorted = [...diary].sort((a, b) => new Date(b.date) - new Date(a.date))

export default function Diary() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 border-b border-surface-3 pb-12"
        >
          <p className="label mb-4">Diary · 日记</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-semibold text-ink leading-tight mb-4">
            Cat stories
          </h1>
          <p className="font-serif italic text-ink-muted text-lg">
            养猫过程中遇到的一些事，记下来。
          </p>
          <p className="font-sans text-sm text-ink-faint mt-2">
            Small moments worth keeping.
          </p>
        </motion.div>

        {/* Entry list */}
        <div className="flex flex-col">
          {sorted.map((entry, i) => (
            <motion.article
              key={entry.id}
              {...fadeUp(i * 0.06)}
              className="group py-10 border-b border-surface-3 last:border-0"
            >
              <div className="flex items-start gap-6">

                {/* Date column */}
                <div className="hidden sm:block w-24 flex-shrink-0 pt-1 text-right">
                  <time className="font-sans text-xs text-ink-faint leading-relaxed">
                    {formatDate(entry.date).split('年')[0]}<br />
                    {'年' + formatDate(entry.date).split('年')[1]}
                  </time>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Mobile date */}
                  <time className="sm:hidden label block mb-2">{formatDate(entry.date)}</time>

                  {/* Cat tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {entry.cats.map(c => (
                      <span key={c} className="font-sans text-xs text-rose bg-rose/8 px-2 py-0.5 rounded-full">
                        {c}
                      </span>
                    ))}
                    {entry.tags.filter(t => !entry.cats.includes(t)).map(t => (
                      <span key={t} className="font-sans text-xs text-ink-faint bg-surface-2 border border-surface-3 px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>

                  <h2 className="font-serif text-2xl font-semibold text-ink leading-snug mb-1 group-hover:text-rose transition-colors duration-200">
                    {entry.title}
                  </h2>
                  <p className="font-sans text-xs text-ink-faint italic mb-4">{entry.titleEn}</p>

                  <p className="font-sans text-sm text-ink-muted leading-relaxed mb-1">{entry.excerpt}</p>
                  <p className="font-sans text-xs text-ink-faint italic leading-relaxed mb-5">{entry.excerptEn}</p>

                  <Link
                    to={`/diary/${entry.id}`}
                    className="inline-flex items-center gap-1.5 label text-rose hover:gap-2.5 transition-all duration-200 cursor-pointer"
                  >
                    读全文 · Read more
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  )
}
