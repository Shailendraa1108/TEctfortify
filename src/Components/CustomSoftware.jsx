import React from "react";
import "./CustomSoftware.css";
import CustomSectionFive from "./CustomSectionFive";
import CustomSectionSix from "./CustomSectionSix";
import { motion } from "framer-motion";
function CustomSoftware() {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      x: "-100%",
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
      <div className="container"
  
      >
        <motion.form className="Search-bar"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <input placeholder="Enter Your Email"></input>
          <button className="btn">
            {" "}
            <span>KNOW MORE</span>
          </button>
        </motion.form>
      </div>

      <div className="container2"></div>
      <div className="container3">
        <div className="middleheading">
          <h1 style={{ fontSize: "50px", color: "white", padding: "2rem" }}>
            Software Development Engineering Services
          </h1>
        </div>
        <div className="mainBox">
          <div className="box2">
            <span>50+ </span>
            <h1>Project Completed</h1>
          </div>
          <div className="box2">
            <span>50+ </span>
            <h1>Project Completed</h1>
          </div>
          <div className="box2">
            <span>50+ </span>
            <h1>Project Completed</h1>
          </div>
        </div>
      </div>
      {/* project Emp */}
      <div className="containerbox4">
        <div className="grandParent4">
          <div className="parent">
            <motion.div className="child4 child1" 
             whileInView={animations.whileInView}
             initial={animations.one}
            >
              <h1>Financial Management</h1>
            </motion.div>
            <motion.div className="child4 child2"
               whileInView={animations.whileInView}
               initial={animations.twoandthree}
            >
              <h1>Workforce Management</h1>
            </motion.div>
            <motion.div className="child4 child3"
             whileInView={animations.whileInView}
             initial={animations.four}
                    transition={{
                      delay: 0.2,
                    }}
            >
              <h1>E-learning</h1>
            </motion.div>
            <motion.div className="child4 child4"
              whileInView={animations.whileInView}
              initial={animations.one}
            >
              <h1>Content Management System</h1>
            </motion.div>
            <motion.div className="child4 child5"
             whileInView={animations.whileInView}
             initial={animations.four}
                    transition={{
                      delay: 0.2,
                    }}
            >
              <h1>Full track Devlopers</h1>
            </motion.div>
            <motion.div className="child4 child6" 
             whileInView={animations.whileInView}
             initial={animations.four}
                    transition={{
                      delay: 0.2,
                    }}
            >
              <h1>Web App Portals</h1>
            </motion.div>
            <motion.div className="child4 child7"
             whileInView={animations.whileInView}
             initial={animations.four}
                    transition={{
                      delay: 0.2,
                    }}
            >
              <h1>Devlopment IOS & Android</h1>
            </motion.div>
            <motion.div className="child4 child8"
              whileInView={animations.whileInView}
              initial={animations.twoandthree}
            >
              <h1>EnterPrise resource learning (ERP)</h1>
            </motion.div>
            <motion.div className="child4 child9"
             whileInView={animations.whileInView}
             initial={animations.twoandthree}
            >
              <h1>Web devlopment</h1>
            </motion.div>
          </div>
        </div>
      </div>
      <section>
        <CustomSectionFive />
      </section>
    </>
  );
}

export default CustomSoftware;
