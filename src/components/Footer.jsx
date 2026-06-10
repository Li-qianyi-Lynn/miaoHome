import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const links = [
  { to: '/',         label: '首页'   },
  { to: '/cats',     label: '猫咪们' },
  { to: '/services', label: '寄养'   },
  { to: '/about',    label: '关于'   },
  { to: '/contact',  label: '联系'   },
]

// Clean filled cat silhouette — simple shapes, no strokes
function CatSilhouette({ className }) {
  return (
    <svg viewBox="0 0 220 255" fill="currentColor" className={className} aria-hidden="true">
      {/* Head */}
      <circle cx="100" cy="80" r="44" />
      {/* Left ear */}
      <path d="M62 58 L46 10 L98 52 Z" />
      {/* Right ear */}
      <path d="M138 58 L154 10 L102 52 Z" />
      {/* Body */}
      <ellipse cx="100" cy="172" rx="63" ry="61" />
      {/* Tail — fat filled curve */}
      <path d="M158 180 Q208 158 203 118 Q199 94 183 110 Q172 122 177 150 Q179 168 158 180 Z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-surface-3 bg-surface-2 mt-24 relative overflow-hidden">

      {/* Large silhouette — bottom right */}
      <div className="absolute bottom-0 right-0 translate-x-16 translate-y-12 pointer-events-none select-none">
        <CatSilhouette className="h-96 sm:h-[28rem] w-auto text-ink opacity-[0.07]" />
      </div>

      {/* Small silhouette — top left, mirrored */}
      <div className="absolute top-10 left-0 -translate-x-8 pointer-events-none select-none scale-x-[-1]">
        <CatSilhouette className="h-28 w-auto text-ink opacity-[0.04]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-28 pb-24 relative z-10">

        {/* Closing statement */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif italic text-ink text-4xl sm:text-5xl leading-snug mb-4"
          >
            "每一只猫，都是一段故事。"
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm text-ink-muted tracking-wide"
          >
            Every cat, a story worth keeping.
          </motion.p>
        </div>

        {/* Nav row */}
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-2 mb-16">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="font-sans text-sm text-ink-muted hover:text-ink transition-colors duration-200 cursor-pointer"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-surface-3 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-serif text-sm font-semibold text-ink">MiaoStories</span>
            <span className="text-ink-faint text-sm">· 喵故事</span>
          </div>
          <p className="font-sans text-xs text-ink-faint text-center">
            Seattle, WA · 西雅图
          </p>
          <p className="font-sans text-xs text-ink-faint">
            © {new Date().getFullYear()} MiaoStories
          </p>
        </div>

      </div>
    </footer>
  )
}
