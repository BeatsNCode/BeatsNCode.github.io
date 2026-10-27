
import { useEffect, useState } from 'react'
import './App.css'
import { GitHubCalendar } from 'react-github-calendar'
import { EmblaCarousel as ProjectCarousel } from './components/projectCarousel'
import SoftAurora from './components/SoftAurora'

const skills = [
  { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Python'] },
  { category: 'Frameworks & Runtime', items: ['React', 'Node.js'] },
  { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQLite'] },
  {
    category: 'Engineering',
    items: ['Systems Integration & Automation', 'REST & GraphQL APIs', 'AI & LLM Integration']
  }
]

const sections = [
  { id: 'portfolio-header', label: 'Introduction' },
  { id: 'portfolio-skills', label: 'Skills' },
  { id: 'portfolio-projects', label: 'Projects' },
  { id: 'github-activity', label: 'GitHub' }
]

function App() {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const updateActiveSection = () => {
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
      if (maxScroll <= 0) {
        setActiveSection(0)
        return
      }

      if (window.scrollY <= 80) {
        setActiveSection(0)
        return
      }

      if (window.scrollY >= maxScroll - 2) {
        setActiveSection(sections.length - 1)
        return
      }
      const referencePoint = window.innerHeight * 0.15
      let closestIndex = 0
      let closestDistance = Infinity
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id)
        if (!element) return
        const distance = Math.abs(element.getBoundingClientRect().top - referencePoint)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })
      setActiveSection(closestIndex)
    }
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    updateActiveSection()
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <>
      <div className="soft-aurora-background">
        <SoftAurora
          speed={0.6}
          scale={1.5}
          brightness={0.5}
          color1="#ada4a4"
          color2="#e100ff"
          bandHeight={0.5}
          bandSpread={1}
          enableMouseInteraction
          mouseInfluence={0.15}
          spectrum={1}
          colorSpeed={1}
          noiseFrequency={2.5}
          noiseAmplitude={0.5}
          tilt={0}
          octaveDecay={0.1}
          layerOffset={0.2}
          clickPulse
          intro
          lightMode={false}
        />
      </div>
      <div className="starfield" aria-hidden="true">
        <div className="stars stars-small" />
        <div className="stars stars-medium" />
        <div className="stars stars-large" />
        <div className="twinkling-stars">
          {Array.from({ length: 35 }, (_, i) => {
            const random = (seed: number) => {
              const x = Math.sin(seed * 127.1 + 78.233) * 43758.5453
              return x - Math.floor(x)
            }
            return (
              <span
                key={i}
                className="twinkle-star"
                style={{
                  left: `${random(i * 7 + 1) * 100}%`,
                  top: `${random(i * 11 + 2) * 100}%`,
                  animationDelay: `${-random(i * 13 + 3) * 12}s`,
                  animationDuration: `${4 + random(i * 17 + 4) * 8}s`,
                  width: `${1 + random(i * 19 + 5) * 2}px`,
                  height: `${1 + random(i * 19 + 5) * 2}px`
                }}
              />
            )
          })}
        </div>
      </div>
      <div className="portfolio-content">
        <nav className="section-nav" aria-label="Page navigation">
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`section-dot ${activeSection === index ? 'active' : ''}`}
              aria-label={`Go to ${section.label}`}
              aria-current={activeSection === index ? 'location' : undefined}
            />
          ))}
        </nav>
        <header id="portfolio-header">
          <h3>Jean R. Augustin</h3>
          <h5 style={{ 
            fontSize: '85%', 
            fontWeight: 'bold' 
            }}
          >
            Engineer · Musician · Creative
          </h5>
          <p>
            Building at the intersection of technology, sound, and creativity.
          </p>
        </header>

        <nav className="portfolio-links" aria-label="Portfolio links">
          <a href="#portfolio-skills">Technical Skills</a>
          <a href="#portfolio-projects">Projects</a>
          <a href="#github-activity">GitHub</a>
        </nav>

        <section id="portfolio-skills">
          <h4>Technical Skills</h4>
          <div className="skills-container">
            {skills.map((group) => (
              <div className="skill-group" key={group.category}>
                <h5>{group.category}</h5>
                <div className="skill-items">
                  {group.items.map((skill) => (
                    <span className="skill-tag" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="portfolio-projects">
          <h4>Recent Projects</h4>
          <ProjectCarousel />
        </section>
        <section id="github-activity">
          <h4 id="follow-on-github">
            Follow{' '}
            <a href="https://github.com/BeatsNCode" target="_blank" rel="noopener noreferrer">
              @BeatsNCode
            </a>{' '}
            on GitHub
          </h4>
          <div className="github-calendar-wrapper">
            <GitHubCalendar username="BeatsNCode" blockSize={11} />
          </div>
        </section>
      </div>
    </>
  )
}

export default App
