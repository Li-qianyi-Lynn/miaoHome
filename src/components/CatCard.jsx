import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function CatCard({ cat, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px' }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/cats/${cat.nameEn.toLowerCase().replace(/\s+/g, '-')}`} className="group block cursor-pointer">
        {/* Photo / placeholder */}
        <div className="relative aspect-square sm:aspect-[3/4] bg-surface-2 rounded-xl sm:rounded-2xl overflow-hidden mb-2.5 sm:mb-4">
          {cat.photo ? (
            <img
              src={cat.photo}
              alt={`${cat.name} — ${cat.nameEn}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div
              role="img"
              aria-label={`${cat.name} — 照片即将上传`}
              className="w-full h-full flex flex-col items-center justify-center gap-3 transition-transform duration-500 group-hover:scale-105"
              style={{ background: `linear-gradient(145deg, ${cat.accent}22, ${cat.accent}44)` }}
            >
              <span aria-hidden="true" className="font-serif text-5xl font-semibold" style={{ color: cat.accent }}>
                {cat.name.charAt(0)}
              </span>
              <span aria-hidden="true" className="font-sans text-xs text-ink-faint tracking-widest uppercase">Photo coming</span>
            </div>
          )}

          {/* Hover overlay with arrow */}
          <div aria-hidden="true" className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300 rounded-xl sm:rounded-2xl" />
          <div aria-hidden="true" className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/0 group-hover:bg-white flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
            <ArrowUpRight size={14} className="text-ink" />
          </div>

          {/* Gender pill */}
          <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm font-sans text-xs font-medium text-ink rounded-full">
            {cat.genderZh} · {cat.gender}
          </span>
        </div>

        {/* Info */}
        <div>
          <div className="flex items-baseline gap-2 mb-0.5">
            <h3 className="font-serif text-xl font-semibold text-ink group-hover:text-rose transition-colors duration-200">
              {cat.name}
            </h3>
            <span className="font-sans text-sm text-ink-faint">{cat.nameEn}</span>
          </div>
          <p className="font-sans text-sm text-ink-muted mb-2">
            {cat.breedZh} · {cat.breed} · {cat.ageZh}
          </p>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {cat.tags.map(tag => (
              <span key={tag} className="font-sans text-xs text-ink-muted bg-surface-2 px-2 py-0.5 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
