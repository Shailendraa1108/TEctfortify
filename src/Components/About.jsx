import React from "react";
import "./About.css";
import HaveYouProject from "./HaveYouProject";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

function About() {
  return (
    <>
      <div className="container3AboutSec">
        <div className="middleheadingAbout">
          <h1
            style={{
              fontSize: "55px",
              padding: "2rem",
              textAlign: "center",
              padding: "6rem",
            }}
          >
            About Tecfortify
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "32px",
              lineHeight: "1.23",
            }}
          >
            For more than 10 years, we’ve helped some of the world’s biggest
            organizations build a competitive advantage through digital.
          </p>
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <button className="btnAbout">
              {" "}
              <span
                style={{ fontSize: "23px", fontWeight: "700", color: "white" }}
              >
                GET KNOW MORE
              </span>
            </button>
          </div>
        </div>
        <div className="mainBoxAbout">
          <div className="box2About">
            <span style={{ color: "blueviolet" }}>50+ </span>
            <h1 style={{ color: "black" }}>Project Completed</h1>
          </div>
          <div className="box2About">
            <span style={{ color: "blueviolet" }}>50+ </span>
            <h1 style={{ color: "black" }}>Project Completed</h1>
          </div>
          <div className="box2About">
            <span style={{ color: "blueviolet" }}>50+ </span>
            <h1 style={{ color: "black" }}>Project Completed</h1>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="parentAvout">
        <div className="containeAbout">
          <div className="imagebOx">
            <img
              src="images/Founder.jpg"
              alt="tect"
            />
          </div>
          <div className="aboutText">
            <p>
              “Digital business transformation is a holistic approach to
              changing the way an organization thinks, organizes, operates and
              behaves.”
            </p>
            <h1 style={{ color: "blue" }}>Founder</h1>
            <h1>Satyajeet Maurya</h1>
            <h1>Vineet</h1>
            <h1>Shailendra</h1>
          </div>
        </div>
      </div>
      {/* section4 */}
      <div className="parentAvout">
        <div className="containeAbout">
          <div className="imagebOx">
            <img
              src="images/Meeting.jpg"
              alt="tect"
            />
          </div>
          <div className="aboutText">
            <h1> Our Purpose</h1>

            <h1>We help people thrive in the brave pursuit of next</h1>
            <p>
              At Tecfortify, we help companies and the public sector keep up with
              the pace of technological, societal and cultural change—all while
              meeting the ever-evolving demands and expectations of their
              customers. How? By elevating customer experiences, modernizing
              organizations and unlocking value through technology and data. By
              setting bold but achievable visions for digital transformation, we
              empower our business partners with true speed and agility.
            </p>
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div className="parentAvout">
        <div className="containeAbout">
        <div className="aboutText">
            <h1> Our Values</h1>

            <p>
              Tecfortify is dedicated to diversity, equity and inclusion. Our
              experience has shown us that progress is rarely found along the
              known paths, so we make openness, collaboration, learning and
              unlearning some of our greatest priorities.
            </p>
          </div>
        
          <div className="imagebOx">
            <img
              src="images/MeetingSmile.jpg"
              alt="tect"
            />
          </div>
        </div>

      </div>

      {/* section 6 next 7  next  8 */}
      <div className="founderconatiner">
    <div className="HaediggSixfunder">
      <h1 style={{ fontSize: "50px", color: "white", padding: "2rem" }} >
        Software Development Engineering Services
      </h1>
    </div>
    <div className="mainBoxsection6founder">
      <div className="box2section6founder">
      
      <img src="https://www.okoders.com/static/media/ayush.43f3c14d381fbb48a9f6.png" alt="tech" style={{height:"130px",width:"130px"}}/>
      <h1  style={{color:"black",fontSize:"25px"}}>Founder</h1>
      <p  style={{color:"black",fontSize:"20px",fontWeight:"600"}}>Satyajeet Maurya</p>
      </div>
     
      <div className="box2section6">
   
       <img src="https://www.okoders.com/static/media/ayush.43f3c14d381fbb48a9f6.png" alt="tech" style={{height:"130px",width:"130px"}}/>
       <h1  style={{color:"black",fontSize:"25px"}}>Founder</h1>
      <p style={{color:"black",fontSize:"20px",fontWeight:"600"}}>Vineet Kushwaha</p>
      </div>

      
      <div className="box2section6">
  
      <img src="https://www.okoders.com/static/media/ayush.43f3c14d381fbb48a9f6.png" alt="tech" style={{height:"130px",width:"130px"}}/>
      <h1  style={{color:"black",fontSize:"25px"}}>Founder</h1>
      <p  style={{color:"black",fontSize:"20px",fontWeight:"600"}}>Shailendra Prajapati</p>
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

export default About;
