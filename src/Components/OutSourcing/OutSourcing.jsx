import React from "react";
import "./OutSourcing.css";
import Analysis from "../Analysis";
import {motion} from 'framer-motion'
function OutSourcing() {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      x: "0",
      opacity: 0,
    },
    twoandthree: {
      y: "-100%",
      opacity: 0,
    },

    four: {
      x: "100%",
      opacity: 0,
    },
  };
  return (
    <>
      <div className="out">
        <motion.form className="search"
           whileInView={animations.whileInView}
           initial={animations.twoandthree}
        >
          <input placeholder="Email"></input>
          <button className="btn">
            {" "}
            <span
              style={{ color: "white", fontSize: "20px", fontWeight: "500" }}
            >
              GET START
            </span>
          </button>
        </motion.form>
      </div>
      {/* section 2 */}

      <div className="outsoucingsec_2"></div>

      {/* section 3 */}
      <section>
        <div className="container_three">
          <div className="ContainerFlex">
            <div className="Box11" style={{maxWidth:"40%"}}>
            <h1 style={{fontWeight:"800",fontSize:"20px",oxShadow:" rgba(255, 255, 255, 1.897) 9px 5px 15px"}}>TECFORTIFY</h1>

              <p style={{fontSize:"24px"}}>
                Technologies Experts We provides in Outsourcing Technologies
                Experts We provides in Outsourcing Domains Technologies Experts
                We provides in Outsourcing Domains
              
              </p>
            </div>
            <br/>
            <div className="Box12">
              <div className="boxwhite1">
              <h1>logo</h1>
                </div>   <br/>
              <div className="boxwhite1"><h1>logo</h1></div>   <br/>
              <div className="boxwhite1"><h1>logo</h1></div>   
            </div>   
            <br/>
            <div className="Box13">   
              <div className="boxwhite1"><h1>logo</h1></div>   <br/>
              <div className="boxwhite1"><h1>logo</h1></div>   <br/>
              <div className="boxwhite1"><h1>logo</h1></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Analysis/>
      </section>
    </>
  );
}

export default OutSourcing;
