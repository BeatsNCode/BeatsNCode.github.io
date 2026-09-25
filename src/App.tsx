import { useState } from 'react'
import './App.css'
import { GitHubCalendar } from 'react-github-calendar'

function App() {

  return (
    <>

      <section id="github-activity">
        <h4>Follow @BeatsNCode on Github</h4>
        <GitHubCalendar username="BeatsNCode" />
      </section>
    </>
  )
}

export default App
