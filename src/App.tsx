import './App.css'
import { Hero } from './components/hero'
import { NavBar } from './components/nav-bar'
import { Projects } from './components/projects'
import { MoreAbout } from './components/more-about-me'
import { Contact } from './components/contact'
import { FadeIn } from './components/fade-in'
import { Footer } from './components/footer'

function App() {
  return (
    <main className='space-y-10 px-2 md:px-11 transition-all duration-300'>
      <NavBar/>

      <FadeIn>
        <Hero/>
      </FadeIn>

      <FadeIn>
        <hr className="border-t border-white/40 w-full mx-auto" />
        <Projects />
      </FadeIn>

      <FadeIn>
        <hr className="border-t border-white/40 w-full mx-auto" />
        <MoreAbout/>
      </FadeIn>

      <FadeIn>
        <hr className="border-t border-white/40 w-full mx-auto" />
        <Contact/>
      </FadeIn>

      <FadeIn>
        <hr className="border-t border-white/40 w-full mx-auto" />
        <Footer/>
      </FadeIn>
    </main>
  )
}

export default App
