import { useEffect, useRef } from "react";
import styles from './footer.module.scss'

import  email from '../../assets/contact/icons8-mail-100.png';
import github from '../../assets/contact/icons8-github-96.png';
import linkedin from '../../assets/contact/icons8-linkedin-48.png';

import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// https://www.youtube.com/watch?v=hnbOIVBREUM
export default function Footer({ 
  image, 
  headline,
  scrollTo,
  goToSectionRef,
  showArrow
}) {
  const emailRef = useRef();
  const sectionRef = useRef();

  // GSAP works with useEffect, headlineRef is the element, then animation from & to objects
  useEffect(() => {
    gsap.fromTo(
      emailRef.current,
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
          trigger: emailRef.current,
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
        <h2 ref={emailRef}>Contact</h2>
        <div className={styles.contactblock}>
          <div className={styles.contactimg}>
            <a href="mailto: bennett.daniel@gmail.com">
              <img 
              src={email}></img>
            </a>
          </div>
          <div className={styles.contactlink}>
            <div><a href="mailto: bennett.daniel@gmail.com">bennett.daniel@gmail.com</a></div>
          </div>
        </div>

        <div className={styles.contactblock}>
          <div className={styles.contactimg}>
            <a href="https://github.com/drbenn" target="_blank">
                <img 
                alt={"Github"}
                src={github}></img>
            </a>
          </div>
          <div className={styles.contactlink}>
            <div><a href="https://github.com/drbenn" target="_blank">github.com/drbenn</a></div>
          </div>
        </div>

        <div className={styles.contactblock}>
          <div className={styles.contactimg}>
          <a href="https://www.linkedin.com/in/bennettdanielr/" target="_blank">
              <img 
              alt={"Linkedin"}
              src={linkedin}></img>
          </a>    
          </div>
          <div className={styles.contactlink}>
            <div><a href="https://www.linkedin.com/in/bennettdanielr/" target="_blank">linkedin.com/in/bennettdanielr</a></div>
          </div>
        </div>


      <div className={styles.sitesignature}>danbennett.dev</div>


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