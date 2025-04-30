import React from 'react'
import '../style/hero.css'
import Heros from '../images/herpo.jpg'
function Hero() {
  return (
    <section>
        <div className="Hero">
            <div className="container">
                <div className="hero_wrapper">
                    <div className="hero_content">
                        <h1>What's up!!!</h1>
                        <h1>I Am Seno Seikaru</h1>
                        <p>To be honest this is not my real name because I am not from Japan. I am a <span>FrondEnt Developer </span>
                        and I'm training with this job since <span>two years</span> I always do my best that's my rule...</p>
                        <button>See more...</button>
                    </div>
                    <img src={Heros} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero