
import './App.css'
import { GitHubCalendar } from 'react-github-calendar'
import { EmblaCarousel as ProjectCarousel } from './components/projectCarousel'

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
      'REST & GraphQL APIs'
    ]
  }
]

function App() {
  return (
    <>
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

        <GitHubCalendar
          username="BeatsNCode"
          blockSize={11}
        />
      </section>
    </>
  )
}

export default App
