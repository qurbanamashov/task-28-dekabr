import React from 'react'
import "./AboutSectionCard.scss"
function AboutSectionCard() {
  return (
    <section className='AboutCard'>
            <div className='AboutCard-text_width'>
                <h2>Our team</h2>
                <p>Dedicated to quality and your success</p>
            </div>
        <div className='AboutCard-width'>
            <div className='card'>
                <img src='https://dummyimage.com/150x150/ced4da/6c757d'/>
                <h5>Arden Vasek</h5>
                <p>CFO</p>
            </div>
            <div className='card'>
                <img src='https://dummyimage.com/150x150/ced4da/6c757d'/>
                <h5>Toribio Nerthus</h5>
                <p>Operations Manager</p>
            </div>
            <div className='card'>
                <img src='https://dummyimage.com/150x150/ced4da/6c757d'/>
                <h5>Ibbie Eckart</h5>
                <p>Founder & CEO</p>
            </div>
            <div className='card'>
                <img src='https://dummyimage.com/150x150/ced4da/6c757d'/>
                <h5>Ibbie Eckart</h5>
                <p>CTO</p>
            </div>
        </div>
    </section>
  )
}

export default AboutSectionCard