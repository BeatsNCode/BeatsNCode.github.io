import { useState } from 'react'
import './App.css'
import { GitHubCalendar } from 'react-github-calendar'

function App() {

  return (
    <>

      <div id="github-activity">
        <h4>Follow @BeatsNCode on Github</h4>
        <GitHubCalendar username="BeatsNCode" />
      </div>
    </>
  )
}

export default App
