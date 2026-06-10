import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const links = [
  { to: '/',         label: '首页'   },
  { to: '/cats',     label: '猫咪们' },
  { to: '/services', label: '寄养'   },
  { to: '/about',    label: '关于'   },
  { to: '/contact',  label: '联系'   },
]

export default function Footer() {
  return (
    <footer className="border-t border-surface-3 bg-surface mt-24">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-10">

        {/* Closing statement */}
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif italic text-ink-muted text-3xl sm:text-4xl mb-2"
          >
            "每一只猫，都是一段故事。"
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-sans text-sm text-ink-faint"
          >
            Every cat, a story worth keeping.
          </motion.p>
        </div>

        {/* Nav row */}
        <div className="flex items-center justify-center flex-wrap gap-x-7 gap-y-2 mb-10">
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
