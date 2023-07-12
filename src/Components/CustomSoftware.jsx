import React from "react";
import "./CustomSoftware.css";
import CustomSectionFive from "./CustomSectionFive";
import CustomSectionSix from "./CustomSectionSix";
function CustomSoftware() {
  return (
    <>
      <div className="container">
        <form className="Search-bar">
          <input placeholder="Enter Your Email"></input>
          <button className="btn">
            {" "}
            <span>KNOW MORE</span>
          </button>
        </form>
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
            <div className="child4 child1">
              <h1>Financial Management</h1>
            </div>
            <div className="child4 child2">
              <h1>Workforce Management</h1>
            </div>
            <div className="child4 child3">
              <h1>E-learning</h1>
            </div>
            <div className="child4 child4">
              <h1>Content Management System</h1>
            </div>
            <div className="child4 child5">
              <h1>Full track Devlopers</h1>
            </div>
            <div className="child4 child6">
              <h1>Web App Portals</h1>
            </div>
            <div className="child4 child7">
              <h1>Devlopment IOS & Android</h1>
            </div>
            <div className="child4 child8">
              <h1>EnterPrise resource learning (ERP)</h1>
            </div>
            <div className="child4 child9">
              <h1>Web devlopment</h1>
            </div>
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
