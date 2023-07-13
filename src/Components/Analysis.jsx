import React from "react";
import "./Analysis.css";
import CustomSectionSix from "./CustomSectionSix";
import HaveYouProject from "./HaveYouProject";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
function Analysis() {
  return (
    <>
    <div className="AnalysisCotainer">
      <div className="AnalysismiddleContainer">
        <div className="AnalysisPAdding">
          <h1>Instantaneous Evaluation Outcomes</h1>
          <p>Review the status of each and every evaluation at a glance.</p>
          <br></br>      &nbsp;  &nbsp;
        <div>
        <h1>Instantaneous Evaluation Outcomes</h1>
          <p>Review the status of each and every evaluation at a glance.</p>
        </div>
        &nbsp;  &nbsp; &nbsp;  &nbsp;
        <div>
        <h1>Instantaneous Evaluation Outcomes</h1>
          <p>Review the status of each and every evaluation at a glance.</p>
        </div>
        &nbsp;  &nbsp;
        </div>
        <div>
          <img
            src="https://www.okoders.com/static/media/Evaluation.72ef48f8774913d0e3c0baff75591c11.svg"
            alt=""
            style={{ maxHeight: "80%", maxWidth: "80%" }}
          />
        </div>
      </div>
    </div>
    <div className="containersectionAnalysis">
    <div className="HaediggSixAnalysis">
      <h1 style={{ fontSize: "50px", color: "white", padding: "2rem",textAlign:"center" }} >
      Why<b> Hiring</b> Okoders Services?
      </h1>
    </div>
    <div className="mainBoxsectionAna">
      <div className="box2sectionAna">
     
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

export default Analysis;
