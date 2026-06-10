import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/',         label: '首页'   },
  { to: '/cats',     label: '猫咪们' },
  { to: '/services', label: '寄养'   },
  { to: '/about',    label: '关于'   },
  { to: '/contact',  label: '联系'   },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const { pathname }            = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-surface/95 backdrop-blur-md border-b border-surface-3'
          : 'bg-surface/70 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="px-6">
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-between">

        {/* Wordmark */}
        <Link to="/" className="cursor-pointer">
          <span className="font-serif text-base font-semibold tracking-tight text-ink">
            MiaoStories
          </span>
          <span className="font-sans text-sm ml-2 text-ink-faint">
            · 喵故事
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {links.map(({ to, label }) => {
            const active = pathname === to
            return (
              <Link
                key={to}
                to={to}
                className={`relative font-sans text-sm transition-colors duration-200 cursor-pointer pb-0.5 ${
                  active ? 'text-ink' : 'text-ink-muted hover:text-ink'
                }`}
              >
                {label}
                {active && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-rose"
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden w-9 h-9 flex items-center justify-center text-ink-muted hover:text-ink transition-colors cursor-pointer"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-surface/98 backdrop-blur-md border-b border-surface-3"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`py-3 font-sans text-sm border-b border-surface-3 last:border-0 cursor-pointer transition-colors ${
                    pathname === to ? 'text-ink font-medium' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
