import React from 'react'
function SectionForm() {
  return (
    <section>
    <div className="container" style={{padding:"30px 0"}}>
            <div className="row bg-gradient bg-primary" style={{padding:"30px 0"}}>
                <div className="col-md-5 mt-4">
                    <h3>New products, delivered to you.</h3>
                    <p>Sign up for our newsletter for the latest updates.</p>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-5 mt-4">
                    <div className="input-group mb-2">
                        <input className="form-control" type="text" placeholder="Email address..." aria-label="Email address..." aria-describedby="button-newsletter"/>
                        <button className="btn btn-outline-light" id="button-newsletter" type="button">Sign up</button>
                    </div>
                    <div className="small text-white-50">We care about privacy, and will never share your data.</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionForm