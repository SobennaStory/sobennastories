import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import AchievmentsSection from './components/AchievmentsSection'
import Parallax from './components/Parallax'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#24120c] ">
       {/* 
        <Navbar />
        Under Construction
            */}
      <Parallax />
      <div className="container mx-auto px-12 py-4 mt-24">

        {/* 
        <AchievmentsSection />
        I have no achievments
            */}
        <ProjectsSection />
        <AboutSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
