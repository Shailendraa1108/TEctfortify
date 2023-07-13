import React from 'react'
import './Section7.css'
import HaveYouProject from '../HaveYouProject'
import ContactForm from '../ContactForm'
import Footer from '../Footer'
function Section7() {
  return (
    <>
<div className='SectionDS7'>
    <div className='Section7Child'>
<div>
    <img src='images/businessman-showing-changes-report.jpg'  alt='tech' className='image7ds'/>
</div>

<div>
    <img src='images/businessman-showing-changes-report.jpg' alt='tech' className='image7ds'/>
</div>
<div>
    <img src='images/businessman-showing-changes-report.jpg' alt='tech' className='image7ds'/>
</div>
</div>
<div className='Section7Child'>
<div>
    <img src='images/businessman-showing-changes-report.jpg' alt='tech'className='image7ds'/>
</div>
<div>
    <img src='images/businessman-showing-changes-report.jpg' alt='tech'className='image7ds'/>
</div>
<div>
    <img src='images/businessman-showing-changes-report.jpg' alt='tech'className='image7ds'/>
</div>
    </div>

</div>
<div className="containersection6">
    <div className="HaediggSix">
      <h1 style={{ fontSize: "50px", color: "white", padding: "2rem" }} >
        Software Development Engineering Services
      </h1>
    </div>
    <div className="mainBoxsection6">
      <div className="box2section6">
     
      <img src="https://www.okoders.com/static/media/ayush.43f3c14d381fbb48a9f6.png" alt="tech" style={{height:"130px",width:"130px"}}/>
      <h1>name</h1>
      <p>paragraph</p>
      </div>
     
      <div className="box2section6">
        
       <img src="https://www.okoders.com/static/media/ayush.43f3c14d381fbb48a9f6.png" alt="tech" style={{height:"130px",width:"130px"}}/>
       <h1>namenamename</h1>
      <p>paragraphparagraphparagraph</p>
      </div>

      
      <div className="box2section6">
       
      <img src="https://www.okoders.com/static/media/ayush.43f3c14d381fbb48a9f6.png" alt="tech" style={{height:"130px",width:"130px"}}/>
      <h1>name</h1>
      <p>paragraph</p>
      </div>
     
     
    </div>
  </div>
  <section>
    <HaveYouProject/>
  </section>
  <ContactForm/>
  <section>
<Footer/>
  </section>
</>
  )
}

export default Section7