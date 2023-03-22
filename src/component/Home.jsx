import React from 'react'
import './home.css'
import sec from '../assests/sec.webp'
function Home() {
  return (
    <div className="section-container">
    <div className="con content">
      <div className="content-container">
        <h2>Plagiarism Checker</h2>
        <h3>
        To be specific, Plagiarism checking or content's similarity detection is a process of identifying the occurrence of plagiarism or copyright infringement within a work of content for writer, teacher, student blogger, webmaster, or any document.
        </h3>
      </div>
    </div>
    <div className="con image1">
      <img src={sec}></img>
    </div>
  </div>
  )
}

export default Home
