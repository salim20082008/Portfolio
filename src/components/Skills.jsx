import React from 'react'
import '../style/skill.css'
function Skills() {
  return (
    <section>
        <div className="Skill">
            <div className="container">
                <div className="skill_text">
                    <h1>My skills</h1>
                </div>
                <div className="skill_wrapper">
                    <div className="skill_card">
                        <h4>React</h4>
                        <p>React has been designed from the start for gradual adoption. You can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to an HTML page, or start a complex React-powered app.</p>
                        <button>see more...</button>
                    </div>
                    <div className="skill_card">
                        <h4>HTML</h4>
                        <p>HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the …
                        "Hypertext" refers to links that connect web pages to one another, either within a single website or between websites. Thanks for seeing!</p>
                        <button>see more...</button>
                    </div>
                    <div className="skill_card">
                        <h4>CSS</h4>
                        <p>Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a do…
                        CSS is among the core languages of the open web and is standardized across Web browsers according to W3C specifications</p>
                        <button>see more...</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills