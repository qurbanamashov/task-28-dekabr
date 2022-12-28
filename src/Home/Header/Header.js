import React from 'react'
import "./Header.scss"
function Header() {
    return (
            <header className='HeaderHome'>
                <div className='header_width'>
                    <div className='header_text'>
                        <h1>A Bootstrap 5 template for modern businesses</h1>
                        <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world's most popular front-end open source toolkit!</p>
                        <div className='header_text-btn'>
                            <button className='White'>Get Started</button>
                            <button className='blue'>Loarn More</button>
                        </div>
                    </div>
                    <div className='Header_foto'>
                        <img src='https://dummyimage.com/600x400/343a40/6c757d'/>
                    </div>
                </div>
            </header>
    )
}
export default Header