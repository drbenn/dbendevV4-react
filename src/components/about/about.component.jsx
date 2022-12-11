import { useEffect, useRef } from "react";
import styles from './about.module.scss'

import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// https://www.youtube.com/watch?v=hnbOIVBREUM
export default function About({ 
  image, 
  headline,
  scrollTo,
  goToSectionRef,
  showArrow
}) {
  const headlineRef = useRef();
  const headlineNameRef = useRef();
  const sectionRef = useRef();
  const paragraphRef = useRef();

  // GSAP works with useEffect, headlineRef is the element, then animation from & to objects
  useEffect(() => {
    gsap.fromTo(
      headlineRef.current,
      {
        autoAlpha:0,
        y: 1,
      },
      {
        y: 0,
        autoAlpha:1,
        duration:5,

        scrollTrigger: {
          // .container is ref to className in app.jsx for entire site container
          scroller: ".container",
          trigger: headlineRef.current,
          start: "top 60%",
          end: "bottom 0%",
          toggleActions: "play none restart reverse",

        }
      }
    ),

    gsap.fromTo(
      headlineNameRef.current,
      {
        autoAlpha:0,
        y: 1,
      },
      {
        y: 0,
        autoAlpha:1,
        duration:5,
        delay:1.5,

        scrollTrigger: {
          // .container is ref to className in app.jsx for entire site container
          scroller: ".container",
          trigger: headlineNameRef.current,
          start: "top 60%",
          end: "bottom 0%",
          toggleActions: "play none restart reverse",

        }
      }
    ),

    gsap.fromTo(
      paragraphRef.current,
      {
        autoAlpha:0,
        y: 1,
      },
      {
        y: 0,
        autoAlpha:1,
        duration:5,
        delay:3,

        scrollTrigger: {
          // .container is ref to className in app.jsx for entire site container
          scroller: ".container",
          trigger: paragraphRef.current,
          start: "top 60%",
          end: "bottom 0%",
          toggleActions: "play none restart reverse",

        }
      }
    )
  }, []);

  return(
    <div className={styles.section} ref={sectionRef}>
      {/* style={{backgroundImage: `${image}`}}> */}
      <div className={styles.copy}>
        <div className={styles.header}><span ref={headlineRef}>Hello</span><span ref={headlineNameRef}>, I'm Dan</span></div>
        <div className={styles.paras} ref={paragraphRef}>
          <p ref={paragraphRef}>I started full-time as a software engineer at the beginning of 2022</p>
          <p ref={paragraphRef}>See below for the projects I have created in my free time</p>
        </div>

      </div>
    {/* ternary if statement, if showArrow, then show button, else, no button */}
    {showArrow && (
            <button 
            className={styles.downArrow} 
            onClick={() => scrollTo(goToSectionRef)}>
          </button>
    )}

    </div>
  )
}