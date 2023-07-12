import React from "react";
import "./CustomSectionSix.css";
import Footer from "./Footer";
import HaveYouProject from "./HaveYouProject";
import ContactForm from "./ContactForm";

function CustomSectionSix() {
  return (
    <>
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
  );
}

export default CustomSectionSix;
