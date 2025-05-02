import React from 'react'
import '../style/contact.css'
import Tell from '../images/telegram.avif'
import Mail from '../images/mail.jpg'
function Contact() {
  return (
    <section>
        <div className="Contact">
            <div className="container">
                <div className="contact_wrapper">
                  <h1>If You Want To Contact Me</h1>
                  <p>I am real happy to work with you, I hope I will do my best</p>
                  <div className="contact_menu">
                  <div className="links">
                    <img className='logotip' width={40} src={Mail} alt="" />
                    <a href="#!">kwarstgaming@gmail.com</a>
                    </div>
                    <div className="links">
                    <img className='logotip' width={40} src={Tell} alt="" />
                    <a href="https://t.me/Seno4K">Telegram</a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact