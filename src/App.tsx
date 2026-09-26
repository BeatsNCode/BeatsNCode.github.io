import { useState } from 'react'
import './App.css'
import { GitHubCalendar } from 'react-github-calendar'

function App() {

  return (
    <>
      <header id="portfolio-header">
        <h1>Jean R. Augustin</h1>
        <h5>Software Engineer · Musician · Founder</h5>
        <p>Building software and products at the intersection of technology, music, and creativity.</p>
      </header>


      <div id="portfolio-projects">
        <h4>Recent Projects</h4>


      </div>
      <div id="github-activity">
        <h4>Follow @BeatsNCode on Github</h4>
        <GitHubCalendar 
          username="BeatsNCode"
          blockSize={11}
        />
      </div>
    </>
  )
}

export default App
