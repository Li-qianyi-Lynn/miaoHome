import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import SpaceNeedle from './SpaceNeedle'

// ─── Hero component ──────────────────────────────────────────────────────────
export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const contentY  = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentOp = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const needleY   = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])

  const fadeIn = (delay, duration = 0.9) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
  })

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-surface"
    >
      {/* Subtle warm ambient gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 80% 90%, rgba(155,107,122,0.07) 0%, transparent 65%), ' +
            'radial-gradient(ellipse 50% 40% at 20% 10%, rgba(155,107,122,0.04) 0%, transparent 60%)',
        }}
      />

      {/* ── Main content ── */}
      <motion.div
        style={{ y: contentY, opacity: contentOp }}
        className="relative z-10 flex-1 flex items-center"
      >
        <div className="w-full max-w-5xl mx-auto px-6 pt-28 pb-10">

          {/* Location pill */}
          <motion.div {...fadeIn(0.4)} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-surface-3 bg-surface-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-sans text-xs text-ink-faint tracking-widest uppercase">
                Seattle, WA · Pacific Northwest
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeIn(0.7, 1.0)}
            className="font-serif font-semibold leading-[0.95] tracking-tight text-ink mb-8"
            style={{ fontSize: 'clamp(3.2rem, 8.5vw, 7.5rem)' }}
          >
            Friends' cats.<br />
            <span style={{ color: '#9B6B7A' }}>One borrowed</span><br />
            home.
          </motion.h1>

          {/* Diary intro */}
          <motion.p
            {...fadeIn(1.0, 0.9)}
            className="font-serif italic text-ink-muted text-lg sm:text-xl leading-relaxed max-w-lg mb-10"
          >
            It started as a favour for a friend.
            Then another friend called. Then another.
            <span className="text-ink-faint"> This is the story of how my Seattle home became a place for friends' cats.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeIn(1.3, 0.8)} className="flex flex-wrap gap-3 mb-16">
            <Link to="/cats" className="btn-primary">
              Meet the cats
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              to="/about"
              aria-label="Read the full story"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-ink-muted hover:text-ink
                         font-sans text-sm transition-colors duration-200 cursor-pointer"
            >
              Read the story →
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeIn(1.6, 0.8)}
            className="flex flex-wrap gap-10 border-t border-surface-3 pt-8"
          >
            {[
              { num: '2+',   unit: 'yrs', label: 'Of cat stories' },
              { num: '730+', unit: 'days',    label: 'Nights of good company' },
              { num: 'SEA',  unit: '',    label: 'Seattle, WA' },
            ].map(({ num, unit, label }) => (
              <div key={label}>
                <p className="font-serif text-3xl font-semibold text-ink leading-none">
                  {num}
                  <span className="text-ink-faint text-lg ml-0.5">{unit}</span>
                </p>
                <p className="font-sans text-xs text-ink-faint tracking-widest uppercase mt-1">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ── Space Needle — faint watermark on light bg ── */}
      <motion.div
        style={{ y: needleY }}
        className="absolute bottom-0 right-[8%] sm:right-[12%] z-10 pointer-events-none"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <SpaceNeedle className="h-[44vh] sm:h-[52vh] w-auto opacity-[0.12]" />
      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-8 left-8 z-10 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-px bg-ink/20"
          animate={{ height: [16, 32, 16] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ height: 24 }}
        />
        <span className="font-sans text-[10px] text-ink-faint tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}
