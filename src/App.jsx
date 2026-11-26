import { useState } from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Stats from './components/stats/Stats'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Education from './components/education/Education'
import Certifications from './components/certifications/Certifications'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Toast from './components/common/Toast'
import ProjectModal from './components/modals/ProjectModal'
import ResumeModal from './components/modals/ResumeModal'
import './App.css'

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(''), 3000)
  }

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text)
    showToast(`✓ Copied ${label} to clipboard!`)
  }

  return (
    <>
      <Toast message={toastMessage} />

      <Header onOpenResume={() => setIsResumeOpen(true)} />

      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <Stats />
        <About />
        <Experience />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Skills />
        <Education />
        <Certifications />
        <Contact
          onOpenResume={() => setIsResumeOpen(true)}
          onCopy={copyToClipboard}
        />
      </main>

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onCopy={copyToClipboard}
      />
    </>
  )
}
