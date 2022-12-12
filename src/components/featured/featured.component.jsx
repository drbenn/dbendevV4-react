import { useState, useEffect, useRef } from "react";
import styles from './featured.module.scss'
import Projects from '../../assets/data/projectData.json';

import github from '../../assets/contact/icons8-github-96.png';
import demo from '../../assets/contact/icons8-linking-96.png';

import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// https://www.youtube.com/watch?v=hnbOIVBREUM
export default function Featured({ 
  scrollTo,
  goToSectionRef,
  showArrow
}) {
  let featuredIndex = [14,12,13] 

  let featuredProjects = []; 
  featuredIndex.forEach((index)=> {
    Projects.forEach((project) => {
      if (project.index === index) {
        featuredProjects.push(project)
      }
    })
  })

  const headlineRef = useRef();
  const sectionRef = useRef();
  const featureRef1 = useRef();

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
        duration:2,
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
      featureRef1.current,
      {
        autoAlpha:0,
        y: 1,
      },
      {
        y: 0,
        autoAlpha:1,
        duration:3,
        delay: 0.8,
        scrollTrigger: {
          // .container is ref to className in app.jsx for entire site container
          scroller: ".container",
          trigger: featureRef1.current,
          start: "top 60%",
          end: "bottom 0%",
          toggleActions: "play none restart reverse",
        }
      }
    )
  }, []);

  // --------------- START REACT CSS MEDIA QUERY SUBSTITUTE -------------
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      console.log(windowSize);
    };
  }, []);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  // --------------- END REACT CSS MEDIA QUERY SUBSTITUTE -------------

  return(
    <div className={styles.section} ref={sectionRef}>
      {/* style={{backgroundImage: `${image}`}}> */}
      <div className={styles.copy}>
        <h2 ref={headlineRef}>Featured Projects</h2>
      </div>
      <div ref={featureRef1} className={styles.featuredFlex}>
        {featuredProjects.map((project) => {
          return (
            <div key={Math.random()} className={styles.projectContainer} >
              {windowSize.innerWidth > 1100 &&
                <div className={styles.imgContainer} >
                  <img src= { project.img } />
                </div>
              }

              <div className={styles.verticalProjectContainer}>
                <div className={styles.horozontalProjectContainer}>
                  <div className={styles.projectTitle}>
                    {project.title}
                  </div>
                  <div className={styles.techContainer}>
                  {project.tech.map((tech) => {
                    return (
                      <div key={Math.random()} className={styles.techImageContainer}>
                        <img src= { tech } />
                      </div>
                    )
                  })}
                  </div>
                </div>
                  <div className={styles.timelineLinkContainer}>
                    <div className={styles.timeline}>
                      {project.timeLine}
                    </div>
                    <div className={styles.linkContainer}>
                      <div className={styles.linkImageContainer}>
                        <a href={project.demoLink} target="_blank">
                          <img src= { demo }  alt={"Live Demo"}/>
                        </a>  
                      </div>
                      <div className={styles.linkImageContainer}>
                        <a href={project.gitLink} target="_blank">
                          <img src= { github }  alt={"Github"}/>
                        </a>  
                      </div>
                    </div>
                  </div>
                  <div className={styles.projectDetail}>
                    {project.oneLine}
                  </div>
              </div>
            </div>
          )})}
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

