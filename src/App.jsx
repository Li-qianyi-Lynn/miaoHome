import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home     from './pages/Home'
import Cats     from './pages/Cats'
import CatDetail from './pages/CatDetail'
import Services from './pages/Services'
import About    from './pages/About'
import Contact  from './pages/Contact'

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  enter:   { opacity: 1, y: 0,  transition: { duration: 0.35, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.2,  ease: 'easeIn'  } },
}

function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"          element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/cats"      element={<PageWrapper><Cats /></PageWrapper>} />
            <Route path="/cats/:id"  element={<PageWrapper><CatDetail /></PageWrapper>} />
            <Route path="/services"  element={<PageWrapper><Services /></PageWrapper>} />
            <Route path="/about"     element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/contact"   element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
