
import './App.css'
import { GitHubCalendar } from 'react-github-calendar'
import { EmblaCarousel as ProjectCarousel } from './components/projectCarousel'
import SectionNav from './components/sectionNav'
import SoftAurora from './components/SoftAurora';


const skills = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python']
  },
  {
    category: 'Frameworks & Runtime',
    items: ['React', 'Node.js']
  },
  {
    category: 'Databases',
    items: ['PostgreSQL']
  },
  {
    category: 'Engineering',
    items: [
      'API Integration',
      'Systems Integration',
      'REST & GraphQL APIs',
      'LLM Integration'
    ]
  }
]


function App() {
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
                  height: `${1 + random(i * 19 + 5) * 2}px`,
                }}
              />
            )
          })}
        </div>
      </div>

      <div className="portfolio-content">
        <SectionNav />

        <header id="portfolio-header">
          <h1>Jean R. Augustin</h1>
          <h5>Engineer · Musician</h5>
          <p>
            Building software and products at the intersection
            of technology, music, and creativity.
          </p>
        </header>

        <section id="portfolio-skills">
          <h4>Technical Skills</h4>

          <div className="skills-container">
            {skills.map((group) => (
              <div className="skill-group" key={group.category}>
                <h5>{group.category}</h5>

                <div className="skill-items">
                  {group.items.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
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
            <a
              href="https://github.com/BeatsNCode"
              target="_blank"
              rel="noopener noreferrer"
            >
              @BeatsNCode
            </a>{' '}
            on GitHub
          </h4>

          <div className="github-calendar-wrapper">
            <GitHubCalendar
              username="BeatsNCode"
              blockSize={11}
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default App
