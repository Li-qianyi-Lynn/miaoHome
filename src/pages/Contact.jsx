import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, MapPin, ArrowRight, Check } from 'lucide-react'

const inputCls =
  'w-full px-4 py-3 bg-surface-2 border border-surface-3 rounded-xl font-sans text-sm text-ink ' +
  'focus:outline-none focus:border-rose/50 focus:bg-white transition-all duration-200 placeholder:text-ink-faint'

export default function Contact() {
  const [form, setSub] = useState({ name: '', contact: '', catName: '', breed: '', duration: '', note: '' })
  const [done, setDone] = useState(false)
  const onChange = e => setSub(f => ({ ...f, [e.target.name]: e.target.value }))
  const onSubmit = e => { e.preventDefault(); setDone(true) }

  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 border-b border-surface-3 pb-12"
        >
          <p className="label mb-4">Contact · 联系</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-semibold text-ink leading-tight mb-4">
            Say hello
          </h1>
          <p className="font-serif italic text-ink-muted text-lg max-w-lg">
            如果你是朋友的朋友，需要有人在西雅图照顾你的猫——<br className="hidden sm:block" />
            欢迎先聊聊。
          </p>
          <p className="font-sans text-sm text-ink-faint mt-2">
            If you're looking for somewhere in Seattle for your cat, send a note. We'll see if it's a good fit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Contact sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-10"
          >
            <div>
              <p className="label mb-5">Get in touch · 联系方式</p>
              {[
                { icon: <MessageCircle size={15} />, label: 'WeChat · 微信',    val: 'miaofriends_cat' },
                { icon: <Mail size={15} />,           label: 'Email',           val: 'hello@miaofriends.com' },
                { icon: <MapPin size={15} />,          label: 'Location · 地点', val: 'Seattle, WA' },
              ].map(({ icon, label, val }) => (
                <div key={label} className="flex items-start gap-3 py-4 border-b border-surface-3 last:border-0">
                  <span className="mt-0.5 text-rose flex-shrink-0">{icon}</span>
                  <div>
                    <p className="label">{label}</p>
                    <p className="font-sans text-sm text-ink mt-0.5">{val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="label mb-3">Response time · 回复时间</p>
              <p className="font-sans text-sm text-ink-muted leading-relaxed">
                Usually within 24 hours.<br />
                <span className="text-ink-faint">通常 24 小时内回复。</span>
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {done ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="min-h-[480px] flex flex-col items-center justify-center text-center border border-surface-3 rounded-2xl p-12"
              >
                <div className="w-14 h-14 rounded-full bg-rose/10 flex items-center justify-center mb-6">
                  <Check size={24} className="text-rose" />
                </div>
                <p className="label text-rose mb-2">Received · 已收到</p>
                <h3 className="font-serif text-3xl font-semibold text-ink mb-3">Thank you.</h3>
                <p className="font-sans text-sm text-ink-muted mb-8 max-w-xs leading-relaxed">
                  I'll be in touch within 24 hours.<br />
                  <span className="text-ink-faint">24小时内会联系你。</span>
                </p>
                <button onClick={() => setDone(false)} className="btn-ghost text-sm cursor-pointer">
                  Send another · 再发一封
                </button>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="border border-surface-3 rounded-2xl p-8 flex flex-col gap-5">
                <p className="label mb-1">Enquiry form · 咨询表单</p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="label mb-2 block" htmlFor="name">Your name · 你的名字</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={onChange}
                      placeholder="Your name" className={inputCls} />
                  </div>
                  <div>
                    <label className="label mb-2 block" htmlFor="contact">Contact · 联系方式</label>
                    <input id="contact" name="contact" type="text" required value={form.contact} onChange={onChange}
                      placeholder="Email or WeChat" className={inputCls} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="label mb-2 block" htmlFor="catName">Cat's name · 猫咪名字</label>
                    <input id="catName" name="catName" type="text" value={form.catName} onChange={onChange}
                      placeholder="What's their name?" className={inputCls} />
                  </div>
                  <div>
                    <label className="label mb-2 block" htmlFor="breed">Breed · 品种</label>
                    <input id="breed" name="breed" type="text" value={form.breed} onChange={onChange}
                      placeholder="Any breed" className={inputCls} />
                  </div>
                </div>

                <div>
                  <label className="label mb-2 block" htmlFor="duration">How long · 寄养时长</label>
                  <select id="duration" name="duration" value={form.duration} onChange={onChange}
                    className={inputCls + ' cursor-pointer'}>
                    <option value="">Select duration · 请选择</option>
                    <option value="1-3">1 – 3 nights</option>
                    <option value="4-6">4 – 6 nights</option>
                    <option value="7-14">1 – 2 weeks (extended rate)</option>
                    <option value="15+">15+ nights</option>
                    <option value="monthly">Monthly · 月租</option>
                  </select>
                </div>

                <div>
                  <label className="label mb-2 block" htmlFor="note">Anything else · 备注</label>
                  <textarea id="note" name="note" rows={4} value={form.note} onChange={onChange}
                    placeholder="Diet, health, medication needs, temperament, or anything you want me to know... 饮食习惯、健康情况、用药需求、性格特点等"
                    className={inputCls + ' resize-none'} />
                </div>

                <button type="submit" className="btn-primary justify-center">
                  Send · 发送
                  <ArrowRight size={14} />
                </button>
                <p className="font-sans text-xs text-ink-faint text-center">
                  I reply within 24 hours · 24小时内回复
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
