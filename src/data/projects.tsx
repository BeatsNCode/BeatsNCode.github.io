
export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    id: 'cassettelab',
    title: 'CassetteLab',
    description: 'A platform for artists to manage and share music.',
    image: '/src/assets/cassette-lab-social-preview.png',
    technologies: ['React', 'TypeScript', 'Electron', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/BeatsNCode/cassette-lab-releases',
    demo: 'https://cassettelab.com/'
  },
  {
    id: 'voice-ordering',
    title: 'Voice Ordering Service',
    description: 'A voice-powered restaurant ordering application.',
    image: '/projects/voice-ordering.webp',
    technologies: ['React', 'TypeScript', 'Node.js', 'Deepgram', 'Gemini'],
    github: 'https://github.com/BeatsNCode/voice-ordering-service',
    demo: '#'
  },
]
