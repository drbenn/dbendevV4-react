import { useEffect, useRef, useState } from "react";
import styles from './past.module.scss'
import Projects from '../../assets/data/projectData.json';

import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// https://www.youtube.com/watch?v=hnbOIVBREUM
export default function Past({ 
  image, 
  headline,
  scrollTo,
  goToSectionRef,
  showArrow
}) {
  const [viewedProject, setViewedProject] = useState(
    {
      active: true,
      projectObject:  [{
        "index":13,
        "title":"Guess Who",
        "oneLine": "First personal React project recreating the lengendary board game",
        "detail":"Wanted to build a project in React and I remembered it came to me that I hadn't played \"Guess Who\" in years...ahhh nostalgia will make you do extraordary things... ",
        "img": "/project-img/preview/guess-who.png",
        "timeLine": "Nov 2022",
        "tech": ["/project-img/icons/react.png"],
        "gitLink": "https://github.com/drbenn/guess-who-react",
        "demoLink": "https://drbenn.github.io/guess-who-react/",
        "date": "11/28/2022"
      }]
    }
  );

  let year2021 = [];
  let year2022 = [];

  Projects.forEach((project)=> {
    if (project.date.substring(project.date.length-4) === "2021") {
      year2021.push(project)
    }
    if (project.date.substring(project.date.length-4) === "2022") {
      year2022.push(project)
    }
  })

console.log(year2021);
console.log(year2022);

let selectProjectForView = (project) => {
  console.log('clicked!!!!');
  console.log(project);
  setViewedProject({active:true, projectObject:[project]})
}
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
        <h2 ref={headlineRef}>All Projects</h2>
      </div>

      {!viewedProject.active &&
        <div className={styles.projectViewportPlaceholder}>
        
        </div>
      
      }
      {viewedProject.active &&
        <div>
          {viewedProject.projectObject.map((project) => {
            return (
              <div className={styles.projectViewport}>
                Full Project Detail here {project.title}
              </div>
            )})
          }
        </div>
      }   
  

      <div className={styles.yearContainer}>
        <div className={styles.yearDisplay}>
          <div>
            2022
          </div>
        </div>
        <div className={styles.timelineContainer}>
          <div className={styles.lineObject}></div>
          <div className={styles.verticalLineObject}></div>
          {year2022.map((project) => {
            return (
              <div key={Math.random()} className={styles.projectImgContainer}>
                <img src={project.img} onClick={() => selectProjectForView(project)}/>
              </div>
            )})}
        </div>
      </div>



      <div className={styles.yearContainer}>
        <div className={styles.yearDisplay}>
          <div>
            2021
          </div>
        </div>
        <div className={styles.timelineContainer}>
          <div className={styles.lineObject}></div>
          <div className={styles.verticalLineObject}></div>
          {year2021.map((project) => {
            return (
              <div key={Math.random()} className={styles.projectImgContainer}>
                <img src={project.img} onClick={() => selectProjectForView(project)}/>
              </div>
            )})}
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