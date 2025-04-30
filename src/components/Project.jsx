import React from 'react'
import '../style/project.css'
import project from '../images/pro.jpg'
function Project() {
  return (
    <section>
        <div className="Project">
            <div className="container">
                <div className="project_wrapper">
                    <a className='projectus' href="https://faekjewelery.netlify.app/">
                    <div className="project_card">
                        <img src={project} alt="" />
                        <h1>Project name</h1>
                    </div>
                    </a>
                    <a className='projectus' href="https://faekjewelery.netlify.app/">
                    <div className="project_card">
                        <img src={project} alt="" />
                        <h1>Project name</h1>
                    </div>
                    </a>
                    <a className='projectus' href="https://faekjewelery.netlify.app/">
                    <div className="project_card">
                        <img src={project} alt="" />
                        <h1>Project name</h1>
                    </div>
                    </a>
                    <a className='projectus' href="https://faekjewelery.netlify.app/">
                    <div className="project_card">
                        <img src={project} alt="" />
                        <h1>Project name</h1>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project