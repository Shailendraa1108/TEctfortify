import React, { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";
import "./Homepage.css";
import img1 from "../Components/image/handshake.jpg";

import styled, { keyframes, css } from "styled-components";
// import img01 from '../../public/images/brand-01.png';
// import img02 from '../../public/images/brand-02.png';
// import img03 from '../../public/images/brand-03.png';
// import img04 from '../../public/images/brand-04.png';
// import img05 from '../../public/images/brand-05.png';
// import img06 from '../../public/images/brand-06.png';
// import img07 from '../../public/images/brand-07.png';
// import img08 from '../../public/images/brand-08.png';
import { AiFillCaretDown } from "react-icons/ai";
import HomeSection from "./HomeSection";

function HomePage() {
  const row1 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  ];

  const row2 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  ];
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const [toggleSecond, setToggleSecond] = useState(false);
  const [heightSecond, setHeightSecond] = useState();

  const [togglethird, setTogglethired] = useState(false);
  const [heightthird, setHeightthird] = useState();

  const refHeight = useRef();

  useEffect(() => {
    console.log(refHeight);
    setHeightEl(`${refHeight.current.scrollHeight}px`);
    setHeightSecond(`${refHeight.current.scrollHeight}px`);
    setHeightthird(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };
  const toggleStateSecond = () => {
    setToggleSecond(!toggleSecond);
  };
  const toggleStatethird = () => {
    setTogglethired(!togglethird);
  };

  console.log(toggle);
  const animations = {
    h1: {
        initial: {
            x: "-100%",
            opacity: 0,
        },
        whileInView: {
            x: 0,
            opacity: 1,
        },
    },
    button: {
        initial: {
            y: 0,
            opacity: 0,
        },
        whileInView: {
            y: "-100%",
            opacity: 1,
        },
    },
    p: {
        initial: {
            x: "-100%",
            opacity: 0,
        },
        whileInView: {
            x: 0,
            opacity: 1,
        },
    },
    button: {
        initial: {
            y: "-100%",
            opacity: 0,
        },
        whileInView: {
            y: 0,
            opacity: 1,
        },
    },
};
const Cleincount=useRef(null)
const projectCount=useRef(null)
const projectCount2=useRef(null)
const animationCleintProject1=()=>{
  animate(0,50,{
      duartion:1,
      onUpdate:(v)=>(Cleincount.current.textContent=v.toFixed())
  })
      }
  const animationProjectsCount2=()=>{
      animate(0, 50, {
          duration:1,
          onUpdate:(v)=>(projectCount.current.textContent=v.toFixed())
      }
  )}
  const animationProjectsCount3=()=>{
      animate(0, 50, {
          duration:1,
          onUpdate:(v)=>(projectCount2.current.textContent=v.toFixed())
      }
  )}
  return (
    <>
      <section className="hero">
        <div className="containerone">
          <div className="width-50">
            <div className="Ver-center">
              <motion.div>
                <motion.h1 {...animations.h1} style={{}}>TECFORTIFY</motion.h1>
                <motion.h1  {...animations.h1} >Design Studio</motion.h1>
                <motion.p  {...animations.h1} >Service thats lead the why</motion.p>
                <motion.button className="button-knowmore" {...animations.h1}>
                  {" "}
                  <span>KNOW MORE</span>
                </motion.button>
              </motion.div>
            </div>
          </div>

          <div className="width-50">
            <motion.div
              className="widthone-25 active"
              whileHover={{ scale: 1.3, originY: 0 }}
            >
              <img
                src="https://www.okoders.com/static/media/homeHeader2.e44907083265e791b566.png"
                alt=""
                className="imgg2"
              />
            </motion.div>
            <motion.div
              className="widthtwo-25"
              whileHover={{ scale: 1.3, originY: 0 }}
            >
              <img
                src="https://www.okoders.com/static/media/homeHeader3.9a9c4b10da395b461643.png"
                alt=""
                className="imgg2"
              />
            </motion.div>
            <motion.div
              className="widththree-25"
              whileHover={{ scale: 1.1, originX: 0 }}
            >
              <img
                src="https://www.okoders.com/static/media/homeHeader1.4df06b85a1ca908354f2.png"
                alt=""
                className="imgg2"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <div className="grand_parant">
          <div className="boxCenter">
            <div className="parent">
              <div className="child">
                <div>
                  <img src="images/blog-1.jpg" alt="tect" />
                </div>
              </div>
              <div className="child">
                <div>
                  <img src="images/blog-1.jpg" alt="tect" />
                </div>
              </div>

              <div className="child">
                <div>
                  <img src="images/blog-1.jpg" alt="tect" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero3">
        <div className="containeronethree">
          <div
            className="width33"
            initial={{ opacity: 0 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            animate={{ opacity: 1 }}
          >
            <div className="Ver-centerthree">
              <div style={{ display: "flex" }} className="plusitem">
                <motion.h1  ref={Cleincount}        whileInView={animationCleintProject1}>50+</motion.h1>
                &nbsp; &nbsp; &nbsp;
                <p>Employees in Team</p>
              </div>
            </div>
          </div>

          <div className="width33">
            <div className="Ver-centerthree">
              <div style={{ display: "flex" }} className="plusitem">
                <motion.h1 ref={projectCount}        whileInView={animationProjectsCount2}>50+</motion.h1>
                &nbsp; &nbsp; &nbsp;
                <p>Employees in Team</p>
              </div>
            </div>
          </div>
          <div className="width33">
            <div className="Ver-centerthree">
              <div style={{ display: "flex" }} className="plusitem">
                <motion.h1 ref={projectCount2}        whileInView={animationProjectsCount3}>50+</motion.h1>
                &nbsp; &nbsp; &nbsp;
                <p>Employees in Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero2">
        <div className="containeronefour">
          <div
            className="width-50four"
            initial={{ opacity: 0 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            animate={{ opacity: 1 }}
          >
            <div>
              <div className="accordion">
                <button onClick={toggleState} className="accordion-visible">
                  <span>Lorem ipsum dolor sit amet.</span>
                  <AiFillCaretDown className={toggle && "active"} />
                </button>

                <div
                  className={
                    toggle ? "accordion-toggle animated" : "accordion-toggle"
                  }
                  style={{ height: toggle ? `${heightEl}` : "0px" }}
                  ref={refHeight}
                >
                  <p aria-hidden={toggle ? "true" : "false"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, suscipit quae maiores sunt ducimus est dolorem
                    perspiciatis earum corporis unde, dicta quibusdam aut
                    placeat dignissimos distinctio vel quo eligendi ipsam.
                  </p>
                </div>
              </div>

              <div className="accordion">
                <button
                  onClick={toggleStateSecond}
                  className="accordion-visible"
                >
                  <span>Lorem ipsum dolor sit amet.</span>
                  <AiFillCaretDown className={toggleSecond && "active"} />
                </button>

                <div
                  className={
                    toggleSecond
                      ? "accordion-toggle animated"
                      : "accordion-toggle"
                  }
                  style={{ height: toggleSecond ? `${heightSecond}` : "0px" }}
                  ref={refHeight}
                >
                  <p aria-hidden={toggleSecond ? "true" : "false"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, suscipit quae maiores sunt ducimus est dolorem
                    perspiciatis earum corporis unde, dicta quibusdam aut
                    placeat dignissimos distinctio vel quo eligendi ipsam.
                  </p>
                </div>
              </div>

              <div className="accordion">
                <button
                  onClick={toggleStatethird}
                  className="accordion-visible"
                >
                  <span>Lorem ipsum dolor sit amet.</span>
                  <AiFillCaretDown className={togglethird && "active"} />
                </button>

                <div
                  className={
                    togglethird
                      ? "accordion-toggle animated"
                      : "accordion-toggle"
                  }
                  style={{ height: togglethird ? `${heightthird}` : "0px" }}
                  ref={refHeight}
                >
                  <p aria-hidden={togglethird ? "true" : "false"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, suscipit quae maiores sunt ducimus est dolorem
                    perspiciatis earum corporis unde, dicta quibusdam aut
                    placeat dignissimos distinctio vel quo eligendi ipsam.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="width-50four">
            <div className="flexboxfour">
              <div className="partnerIMage">
                <img
                  src="https://www.okoders.com/static/media/homeChooseImage.ba31a142a81d63ce4aa9.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppContainer className="Appcontainer">
        <Wrapper>
          <Text>With Great Outcomes.</Text>
          <Note>Our customers have gotten offers from awesome companies.</Note>
          <Marquee className="MarquMedia">
            <MarqueeGroup>
              {row1.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
            <MarqueeGroup>
              {row1.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>
          <Marquee className="MarquMedia">
            <MarqueeGroup2>
              {row2.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
            <MarqueeGroup2>
              {row2.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
          </Marquee>
        </Wrapper>
      </AppContainer>

      <section>
        <div className="div6-width100">
          <div className="centersection6">
            <div className="divinnerboxwidth80">
              <div className="centerflex6">
                <div>
                  <h1 style={{ textAlign: "center" }}>
                    Design for User, Build To Scale
                  </h1>
                  <p style={{ textAlign: "center", width: "100%" }}>
                    We thrive at the intersection of design and business, and
                    craft beautiful andfunctional
                    <br /> experiences that can be launched quickly.
                  </p>
                  <div style={{ textAlign: "center" }}>
                    <button className="button-knowmore">
                      {" "}
                      <span>KNOW MORE</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeSection />
    </>
  );
}

export default HomePage;

const AppContainer = styled.div`
  width: 100%;
  height: 50vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
