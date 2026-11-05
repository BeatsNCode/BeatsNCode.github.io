
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
    description: 'A desktop and web platform for musicians to discover, organize, and manage their music projects.',
    image: '/src/assets/cassette-lab-social-preview.png',
    technologies: ['React', 'TypeScript', 'Electron', 'Node.js', 'Supabase', 'PostgreSQL'],
    github: 'https://github.com/BeatsNCode/cassette-lab-releases',
    demo: 'https://cassettelab.com/'
  },
  {
    id: 'voice-ordering',
    title: 'Voice Ordering Service',
    description: 'An AI-powered restaurant ordering application that uses speech recognition and natural language processing to turn voice commands into orders.',
    image: '/src/assets/voice-ordering-service-preview.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'Deepgram', 'Gemini API'],
    github: 'https://github.com/BeatsNCode/voice-ordering-service',
    demo: '#'
  },
]
