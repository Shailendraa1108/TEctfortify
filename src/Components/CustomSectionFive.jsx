import React from "react";
import "./CustomSectionfive.css";
import CustomSectionSix from "./CustomSectionSix";

function CustomSectionFive() {
  return (
    <>
      <div className="container3section5">
        <div className="middleheading5">
          <h1 style={{ fontSize: "50px", color: "white", padding: "2rem" }}>
            Software Development Engineering Services
          </h1>
        </div>
        <div className="flexBox5">
          <div className="boxsection5">
            <span>Project</span>
          </div>
          <div className="boxsection5">
            <span>Project</span>
          </div>
          <div className="boxsection5">
            <span>Project</span>
          </div>
        </div>
        <br />
        <br />
        <div className="flexBox5two">
          <div className="boxsection5">
            <span>Project</span>
          </div>
          <div className="boxsection5">
            <span>Project</span>
          </div>
          <div className="boxsection5">
            <span>Project</span>
          </div>
        </div>
      </div>
      <section>
        <CustomSectionSix />
      </section>
    </>
  );
}

export default CustomSectionFive;
