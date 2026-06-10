import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { diary } from '../data/diary'

const sorted = [...diary].sort((a, b) => new Date(b.date) - new Date(a.date))

function formatDate(str) {
  return new Date(str).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function DiaryEntry() {
  const { id } = useParams()
  const entry  = sorted.find(e => e.id === Number(id))
  const idx    = sorted.findIndex(e => e.id === Number(id))
  const prev   = sorted[idx + 1] ?? null
  const next   = sorted[idx - 1] ?? null

  if (!entry) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="font-serif text-3xl text-ink-faint mb-4">Entry not found</p>
        <Link to="/diary" className="label text-rose hover:underline cursor-pointer">← Back to diary</Link>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link to="/diary" className="inline-flex items-center gap-2 label text-ink-muted hover:text-ink transition-colors cursor-pointer mb-12">
            <ArrowLeft size={13} /> All entries · 所有日记
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Cat tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {entry.cats.map(c => (
              <span key={c} className="font-sans text-xs text-rose bg-rose/8 px-2.5 py-1 rounded-full">
                {c}
              </span>
            ))}
            {entry.tags.filter(t => !entry.cats.includes(t)).map(t => (
              <span key={t} className="font-sans text-xs text-ink-faint bg-surface-2 border border-surface-3 px-2.5 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>

          <time className="label block mb-4">{formatDate(entry.date)}</time>

          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-ink leading-tight mb-2">
            {entry.title}
          </h1>
          <p className="font-sans text-base text-ink-faint italic">{entry.titleEn}</p>
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mb-16"
        >
          {entry.content.map((para, i) => (
            <div key={i} className="mb-6">
              <p className="font-serif text-base text-ink leading-relaxed">
                {para}
              </p>
              {entry.contentEn[i] && (
                <p className="font-sans text-sm text-ink-faint italic leading-relaxed mt-2">
                  {entry.contentEn[i]}
                </p>
              )}
            </div>
          ))}
        </motion.div>

        {/* Prev / Next */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-t border-surface-3 pt-10 flex items-start justify-between gap-6"
        >
          {prev ? (
            <Link to={`/diary/${prev.id}`} className="group flex-1 flex flex-col gap-1">
              <span className="label text-ink-faint group-hover:text-ink transition-colors flex items-center gap-1.5">
                <ArrowLeft size={11} /> 上一篇
              </span>
              <span className="font-serif text-base text-ink-muted group-hover:text-ink transition-colors line-clamp-2">
                {prev.title}
              </span>
            </Link>
          ) : <div className="flex-1" />}

          {next ? (
            <Link to={`/diary/${next.id}`} className="group flex-1 flex flex-col gap-1 text-right items-end">
              <span className="label text-ink-faint group-hover:text-ink transition-colors flex items-center gap-1.5">
                下一篇 <ArrowRight size={11} />
              </span>
              <span className="font-serif text-base text-ink-muted group-hover:text-ink transition-colors line-clamp-2">
                {next.title}
              </span>
            </Link>
          ) : <div className="flex-1" />}
        </motion.div>

      </div>
    </div>
  )
}
