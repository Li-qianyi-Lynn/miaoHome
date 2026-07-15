import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const CALENDAR_ID = import.meta.env.VITE_GOOGLE_CALENDAR_ID
const API_KEY     = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY

const WEEKDAYS  = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS_EN = ['January','February','March','April','May','June','July','August','September','October','November','December']
const MONTHS_ZH = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']

function toDateStr(date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export default function CalendarWidget() {
  const today = new Date()
  const [year,  setYear]  = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [events,  setEvents]  = useState([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  const loadEvents = useCallback(async () => {
    if (!CALENDAR_ID || !API_KEY) {
      setError('calendar_not_configured')
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Fetch wider than current month so multi-day events that start/end
      // outside the view are still included
      const timeMin = encodeURIComponent(new Date(year, month - 1, 1).toISOString())
      const timeMax = encodeURIComponent(new Date(year, month + 2, 0, 23, 59, 59).toISOString())
      const calId   = encodeURIComponent(CALENDAR_ID)

      const url =
        `https://www.googleapis.com/calendar/v3/calendars/${calId}/events` +
        `?key=${API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}` +
        `&singleEvents=true&orderBy=startTime&maxResults=250`

      const res = await fetch(url)
      if (!res.ok) throw new Error(`${res.status}`)
      const data = await res.json()
      setEvents(data.items || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [year, month])

  useEffect(() => { loadEvents() }, [loadEvents])

  // ── Build dateStr → event-name list map ──────────────────────────────────
  const eventMap = {}

  events.forEach(ev => {
    const rawStart = ev.start?.date || ev.start?.dateTime?.split('T')[0]
    const rawEnd   = ev.end?.date   || ev.end?.dateTime?.split('T')[0]
    if (!rawStart) return

    const startDate = new Date(rawStart + 'T12:00:00')
    // Google all-day event end is exclusive (day after last day)
    const endDate = ev.end?.date
      ? new Date(new Date(rawEnd + 'T12:00:00').getTime() - 86_400_000)
      : new Date(rawEnd + 'T12:00:00')

    const cur = new Date(startDate)
    while (cur <= endDate) {
      const key = toDateStr(cur)
      if (!eventMap[key]) eventMap[key] = []
      eventMap[key].push(ev.summary || '已入住')
      cur.setDate(cur.getDate() + 1)
    }
  })

  // ── Calendar grid math ───────────────────────────────────────────────────
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDow    = new Date(year, month, 1).getDay()
  const totalCells  = Math.ceil((firstDow + daysInMonth) / 7) * 7

  const prevMonth = () => {
    if (month === 0) { setYear(y => y - 1); setMonth(11) }
    else setMonth(m => m - 1)
  }
  const nextMonth = () => {
    if (month === 11) { setYear(y => y + 1); setMonth(0) }
    else setMonth(m => m + 1)
  }

  const todayStr = toDateStr(today)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="border border-surface-3 rounded-2xl overflow-hidden"
    >
      {/* ── Header bar ────────────────────────────────────────────────────── */}
      <div className="bg-surface px-6 py-5 flex items-center justify-between border-b border-surface-3">
        <div>
          <p className="font-sans text-xs text-ink-faint tracking-widest uppercase mb-1">
            Availability · 入住日历
          </p>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-xl font-semibold text-ink">
              {MONTHS_EN[month]}
            </span>
            <span className="font-sans text-sm text-ink-faint">{MONTHS_ZH[month]} {year}</span>
          </div>
        </div>

        <div className="flex gap-1">
          <button
            onClick={prevMonth}
            aria-label="Previous month"
            className="w-8 h-8 flex items-center justify-center rounded-lg
                       hover:bg-surface-2 transition-colors text-ink-muted hover:text-ink
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose/40"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={nextMonth}
            aria-label="Next month"
            className="w-8 h-8 flex items-center justify-center rounded-lg
                       hover:bg-surface-2 transition-colors text-ink-muted hover:text-ink
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose/40"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* ── Grid area ─────────────────────────────────────────────────────── */}
      <div className="bg-surface p-4 sm:p-6">

        {/* Weekday labels */}
        <div className="grid grid-cols-7 mb-1">
          {WEEKDAYS.map(d => (
            <div key={d} className="text-center font-sans text-[10px] text-ink-faint py-1 tracking-wider">
              {d}
            </div>
          ))}
        </div>

        {/* Day cells */}
        {loading ? (
          <div className="h-52 flex items-center justify-center">
            <span className="font-sans text-sm text-ink-faint animate-pulse">Loading…</span>
          </div>
        ) : error === 'calendar_not_configured' ? (
          <div className="h-52 flex flex-col items-center justify-center gap-2 text-center px-6">
            <span className="text-2xl">🐱</span>
            <p className="font-sans text-xs text-ink-faint">
              日历未配置 · Add your <code className="bg-surface-2 px-1 rounded">VITE_GOOGLE_CALENDAR_*</code> env vars
            </p>
          </div>
        ) : error ? (
          <div className="h-52 flex flex-col items-center justify-center gap-2 text-center px-6">
            <span className="text-2xl">😿</span>
            <p className="font-sans text-xs text-ink-faint">
              无法加载日历 · Could not load calendar ({error})
            </p>
            <button
              onClick={loadEvents}
              className="font-sans text-xs text-rose hover:text-rose-dark underline underline-offset-2"
            >
              重试 · Retry
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-7 gap-0.5">
            {Array.from({ length: totalCells }).map((_, i) => {
              const day     = i - firstDow + 1
              const isValid = day >= 1 && day <= daysInMonth
              if (!isValid) return <div key={i} className="aspect-square" />

              const dateStr  = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
              const evNames  = eventMap[dateStr] || []
              const hasEvent = evNames.length > 0
              const isToday  = dateStr === todayStr

              return (
                <div
                  key={i}
                  title={hasEvent ? evNames.join(' · ') : undefined}
                  className={[
                    'relative aspect-square flex flex-col items-center justify-center',
                    'rounded-lg transition-colors duration-150 select-none',
                    hasEvent
                      ? 'bg-rose/10 text-rose-dark'
                      : 'text-ink-muted hover:bg-surface-2',
                    isToday && !hasEvent ? 'ring-1 ring-rose/30' : '',
                    isToday &&  hasEvent ? 'ring-1 ring-rose/60' : '',
                  ].filter(Boolean).join(' ')}
                >
                  <span className={`font-sans text-xs ${hasEvent ? 'font-semibold' : ''}`}>
                    {day}
                  </span>
                  {hasEvent && (
                    <span className="absolute bottom-1 w-1 h-1 rounded-full bg-rose" />
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* Legend + note */}
        <div className="mt-5 pt-4 border-t border-surface-3 flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="flex items-center gap-2 font-sans text-xs text-ink-faint">
            <span className="w-3 h-3 rounded-sm bg-rose/10 ring-1 ring-rose/20 inline-block" />
            已入住 · Occupied
          </span>
          <span className="flex items-center gap-2 font-sans text-xs text-ink-faint">
            <span className="w-3 h-3 rounded-sm bg-surface-2 ring-1 ring-surface-3 inline-block" />
            空闲 · Available
          </span>
          <span className="ml-auto font-sans text-[10px] text-ink-faint italic">
            Hover a highlighted day to see who's staying
          </span>
        </div>
      </div>
    </motion.div>
  )
}
