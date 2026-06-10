import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cats } from '../data/cats'

export default function CatDetail() {
  const { slug } = useParams()
  const toSlug = (nameEn) => nameEn.toLowerCase().replace(/\s+/g, '-')
  const idx    = cats.findIndex(c => toSlug(c.nameEn) === slug)
  const cat    = cats[idx]
  const next   = cats[(idx + 1) % cats.length]

  if (!cat) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="font-serif text-3xl text-ink-faint mb-4">Cat not found</p>
        <Link to="/cats" aria-label="返回所有猫咪 — Back to all cats" className="label text-rose hover:underline cursor-pointer">← Back</Link>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link to="/cats" aria-label="返回所有猫咪 — Back to all cats" className="inline-flex items-center gap-2 label text-ink-muted hover:text-ink transition-colors cursor-pointer mb-10">
            <ArrowLeft size={13} aria-hidden="true" /> All cats · 所有猫咪
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[4/3] md:aspect-[3/4] rounded-2xl overflow-hidden bg-surface-2 md:sticky md:top-24"
          >
            {cat.photo ? (
              <img src={cat.photo} alt={`${cat.name}（${cat.nameEn}）的照片`} className="w-full h-full object-cover" />
            ) : (
              <div
                role="img"
                aria-label={`${cat.name} — 照片即将上传`}
                className="w-full h-full flex flex-col items-center justify-center gap-3"
                style={{ background: `linear-gradient(145deg, ${cat.accent}18, ${cat.accent}38)` }}
              >
                <span
                  aria-hidden="true"
                  className="font-serif font-semibold"
                  style={{ fontSize: '8rem', color: cat.accent, lineHeight: 1, opacity: 0.7 }}
                >
                  {cat.name.charAt(0)}
                </span>
                <span aria-hidden="true" className="label opacity-40">Photo coming</span>
              </div>
            )}
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <p className="label mb-4" style={{ color: cat.accent }}>
              {cat.breedZh} · {cat.breed}{cat.ageZh ? ` · ${cat.ageZh}` : ''}
            </p>

            <h1 className="font-serif text-5xl font-semibold text-ink leading-tight mb-1">
              {cat.name}
            </h1>
            <p className="font-sans text-xl text-ink-faint mb-8">{cat.nameEn}</p>

            {/* The diary entry */}
            <div className="border-l-2 pl-6 mb-8" style={{ borderColor: cat.accent + '50' }}>
              <p className="label mb-3">A memory · 一个故事</p>
              <p className="font-serif text-base text-ink-muted leading-relaxed mb-3 italic">
                {cat.story}
              </p>
              <p className="font-sans text-sm text-ink-faint leading-relaxed">
                {cat.storyEn}
              </p>
            </div>

            {/* Description */}
            <p className="font-sans text-sm text-ink-muted leading-relaxed mb-2">{cat.description}</p>
            <p className="font-sans text-sm text-ink-faint leading-relaxed italic mb-8">{cat.descriptionEn}</p>

            {/* Meta grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { l: 'Gender · 性别', v: `${cat.genderZh} / ${cat.gender}` },
                { l: 'Age · 年龄',    v: cat.ageZh ? `${cat.ageZh} / ${cat.age}` : '—' },
                { l: 'Breed · 品种',  v: `${cat.breedZh}` },
              ].map(({ l, v }) => (
                <div key={l} className="p-3 bg-surface-2 rounded-xl">
                  <p className="label mb-1">{l}</p>
                  <p className="font-sans text-sm text-ink">{v}</p>
                </div>
              ))}
              <div className="p-3 bg-surface-2 rounded-xl">
                <p className="label mb-2">Personality · 性格</p>
                <div className="flex flex-wrap gap-1">
                  {cat.personalityEn.map((p, i) => (
                    <span key={p} className="font-sans text-xs text-ink-muted">
                      {p}{i < cat.personalityEn.length - 1 ? ' ·' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-10">
              {cat.tags.map(t => (
                <span key={t} className="font-sans text-xs text-ink-muted bg-surface-2 border border-surface-3 px-2.5 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Next cat */}
        {next && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 pt-10 border-t border-surface-3 flex items-center justify-between"
          >
            <p className="label">Next · 下一位</p>
            <Link to={`/cats/${next.nameEn.toLowerCase().replace(/\s+/g, '-')}`} aria-label={`下一只猫：${next.name} — Next cat: ${next.nameEn}`} className="inline-flex items-center gap-3 group cursor-pointer">
              <span className="font-serif text-xl text-ink group-hover:text-rose transition-colors">
                {next.name} · {next.nameEn}
              </span>
              <ArrowRight size={15} aria-hidden="true" className="text-ink-faint group-hover:text-rose transition-colors" />
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  )
}
