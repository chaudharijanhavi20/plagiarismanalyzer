import React from 'react'
import './home.css'
import main from '../assests/main.gif'
function Home() {
  return (
    <div className="section-containers">
    <div className="con content">
      <div className="content-containers">
        <h2>Plagiarism Checker</h2>
        <h3>
          Our plagiarism detection tool uses DeepSearch™ Technology to
          identify any content throughout your document that might be
          plagiarized.
        </h3>
      </div>
    </div>
    <div className="con image1">
      <img src={main}></img>
    </div>
  </div>
  )
}

export default Home
