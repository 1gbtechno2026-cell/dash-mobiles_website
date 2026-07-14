import { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import About from './pages/About'
import WhatWeDo from './pages/WhatWeDo'
import OurGroup from './pages/OurGroup'
import Leadership from './pages/Leadership'
import VisionMission from './pages/VisionMission'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Portfolio pulls in Three.js / R3F — code-split so the rest of the site
// never downloads it.
const Portfolio = lazy(() => import('./pages/Portfolio'))

function PortfolioFallback() {
  return <div style={{ minHeight: '100svh', background: '#05050a' }} />
}

function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="sync" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/what-we-do" element={<PageTransition><WhatWeDo /></PageTransition>} />
            <Route path="/our-group" element={<PageTransition><OurGroup /></PageTransition>} />
            <Route path="/leadership" element={<PageTransition><Leadership /></PageTransition>} />
            <Route path="/vision-mission" element={<PageTransition><VisionMission /></PageTransition>} />
            <Route
              path="/portfolio"
              element={
                <PageTransition>
                  <Suspense fallback={<PortfolioFallback />}>
                    <Portfolio />
                  </Suspense>
                </PageTransition>
              }
            />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

export default App
