import { useEffect, useRef } from "react";
import styles from './posts.module.scss'

import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// https://www.youtube.com/watch?v=hnbOIVBREUM
export default function Posts({ 
  image, 
  headline,
  scrollTo,
  goToSectionRef,
  showArrow
}) {
  const headlineRef = useRef();
  const sectionRef = useRef();

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
    )
  }, []);
  return(
    <div className={styles.section} ref={sectionRef}>
      {/* style={{backgroundImage: `${image}`}}> */}
      <div className={styles.copy}>
        <h2 ref={headlineRef}>Posts here</h2>
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