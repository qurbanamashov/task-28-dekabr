import React from 'react'
import "./AboutHeader.scss"
function AboutHeader() {
    return (
        <header className='aboutHeader'>
            <div className="header_width">
                <h2>Our mission is to make building websites easier for everyone.</h2>
                <p>Start Bootstrap was built on the idea that quality, functional website templates and themes should be available to everyone. Use our open source, free products, or support us by purchasing one of our premium products or services.</p>
                <button>Read out story</button>
            </div>
        </header>
    )
}
export default AboutHeader