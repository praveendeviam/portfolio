import Navbar  from './components/Navbar'
import Hero    from './screens/Hero'
import About   from './screens/About'
import Skills  from './screens/Skills'
import Contact from './screens/Contact'
import Footer  from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
