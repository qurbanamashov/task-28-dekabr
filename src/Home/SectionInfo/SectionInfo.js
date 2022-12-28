import React from 'react'
import "./SectionInfo.scss"
function SectionInfo() {
  return (
    <section className='sectionInfo'>
      <div className='sectionInfo_width'>
        <div className="info_text">
          <h2>A better way to start building.</h2>
        </div>
        <div className='info_cards'>
          <div className='card'>
            <i className="fa-solid fa-folder-open"></i>
            <h4>Featured title</h4>
            <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
          </div>
          <div className='card'>
            <i className="fa-solid fa-folder-open"></i>
            <h4>Featured title</h4>
            <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
          </div>
          <div className='card'>
            <i className="fa-solid fa-folder-open"></i>
            <h4>Featured title</h4>
            <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
          </div>
          <div className='card'>
            <i className="fa-solid fa-folder-open"></i>
            <h4>Featured title</h4>
            <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionInfo