import { useEffect, useRef, require } from "react";
import styles from './featured.module.scss'
import Projects from '../../assets/data/projectData.json';

import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// https://www.youtube.com/watch?v=hnbOIVBREUM
export default function Featured({ 
  image, 
  headline,
  scrollTo,
  goToSectionRef,
  showArrow
}) {
  console.log(Projects);
  //Indexes of featured projects, UPDATE NEW TOP 3 HERE and rest will work automatically
  let featuredIndex = [13,12,10] 

  let featuredProjects = []; 
  featuredIndex.forEach((index)=> {
    Projects.forEach((project) => {
      if (project.index === index) {
        featuredProjects.push(project)
      }
    })
  })

  console.log(featuredProjects);

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
        <h2 ref={headlineRef}>Featured Projects</h2>
      </div>
    <div className={styles.featuredFlex}>
      {featuredProjects.map((project) => {
        console.log(project);
        return (
          <div className={styles.projectContainer}>
            <div className={styles.imgContainer}>
            <img src= { project.img } />

            </div>
            <div className={styles.projectTitle}>
              {project.title}
            </div>
            <div className={styles.projectDetail}>
              {project.detail}
            </div>
            <div className={styles.timeline}>
              {project.timeLine}
            </div>

            <div className={styles.techContainer}>
            {project.tech.map((tech) => {
              return (
                <div className={styles.techImageContainer}>

                </div>


              )
            })}
            

            </div>
          </div>


        )

          
      })}


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