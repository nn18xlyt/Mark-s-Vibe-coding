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
        <div className="absolute -top-44 left-[38%] h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-gradient-to-r from-moss/18 via-acid/10 to-ember/16 blur-3xl" />
        <div className="absolute bottom-[-280px] right-[-220px] h-[560px] w-[560px] rounded-full bg-gradient-to-tr from-ember/14 via-moss/10 to-acid/10 blur-3xl" />
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
