import React from 'react'
import "./Footer.scss"
function Footer() {
  return (
    <footer>
        <div className='footer_width'>
            <div className='footer_name'>
                <p>Copyright © Your Website 2022</p>
            </div>
            <div className='footer_nav'>
                <ul>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Contac</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
export default Footer