import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'

export default function App() {
  return (
    <div className="min-h-screen">
      {/* 背景光晕（渐变强调色），营造类似 AI 导航站的氛围 */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/25 via-blue-500/20 to-fuchsia-500/25 blur-3xl" />
        <div className="absolute bottom-[-260px] right-[-260px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-fuchsia-500/18 via-blue-500/12 to-cyan-500/18 blur-3xl" />
      </div>

      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
