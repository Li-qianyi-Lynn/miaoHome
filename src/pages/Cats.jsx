import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import CatCard from '../components/CatCard'
import { cats } from '../data/cats'

export default function Cats() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 border-b border-surface-3 pb-12"
        >
          <p className="label mb-4">Cat Journal · 猫咪日记 — {cats.length} cats</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-semibold text-ink leading-tight mb-4">
            All of them
          </h1>
          <p className="font-serif italic text-ink-muted text-lg max-w-xl leading-relaxed">
            每一只都是别人托付给我的，但他们在这里的那段时间，<br className="hidden sm:block" />
            感觉也是我的。
          </p>
          <p className="font-sans text-sm text-ink-faint mt-2 max-w-xl">
            Each one belongs to a friend. But while they were here, they felt like mine. Click any cat to read their story.
          </p>
        </motion.div>

        {/* Cat grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-20">
          {cats.map((cat, i) => (
            <CatCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>

        {/* Closing note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border border-surface-3 rounded-2xl p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <p className="label mb-2">Still boarding · 仍在接单</p>
            <p className="font-serif text-xl text-ink">
              If a friend of a friend needs somewhere for their cat in Seattle —
            </p>
            <p className="font-sans text-sm text-ink-muted mt-1">
              如果你是朋友的朋友，需要有人在西雅图照顾你的猫，欢迎联系。
            </p>
          </div>
          <Link to="/contact" className="btn-primary flex-shrink-0">
            Reach out
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
