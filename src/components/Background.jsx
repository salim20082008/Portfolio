import React from 'react'
import '../style/background.css'
import background from '../images/back.jpg'
function Background() {
  return (
    <section>
        <div className="Background" style={{backgroundImage:`url(${background})`}}>
            <div className="back_content">
            <h1>INFORMATION</h1>
            <p>That's profolio is a web collection of information on paid or free Design and Development tools</p>
            <button>Contact Me</button>
            </div>
        </div>
    </section>
  )
}

export default Background