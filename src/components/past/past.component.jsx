import { useEffect, useRef, useState } from "react";
import styles from './past.module.scss'
import Projects from '../../assets/data/projectData.json';

import github from '../../assets/contact/icons8-github-96.png';
import demo from '../../assets/contact/icons8-linking-96.png';

import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// https://www.youtube.com/watch?v=hnbOIVBREUM
export default function Past({ 
  scrollTo,
  goToSectionRef,
  showArrow
}) {
  const [viewedProject, setViewedProject] = useState(
    {
      active: true,
      projectObject:  [
        {
          "index":14,
          "title":"EV Charging",
          "oneLine": "A sleek, dark interactive design",
          "timeLine": "Dec 2022",
          "detail":"After completing a couple fun and retro projects I wanted to display a darker, cleaner project, showcasing my improvement in overall design, organization and skills with leaflet and scrollspy",
          "img":"/dbendev-v4/project-img/preview/charging-stations.png",
          "tech": ["/dbendev-v4/project-img/icons/angular.png","/dbendev-v4/project-img/icons/ngxs.png","/dbendev-v4/project-img/icons/leaflet.png"],
          "gitLink": "https://github.com/drbenn/charging-stations",
          "demoLink": "https://danbennett.dev/charging-stations",
          "date": "12/10/2022"
        },
      ]
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

// console.log(year2021);
// console.log(year2022);

let selectProjectForView = (project) => {
  // console.log('clicked!!!!');
  // console.log(project);
  setViewedProject({active:true, projectObject:[project]})
}
  const headlineRef = useRef();
  const sectionRef = useRef();
  const projectViewportRef = useRef();

  const yearRef = useRef();


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
      projectViewportRef.current,
      {
        autoAlpha:0,
        y: 1,
      },
      {
        y: 0,
        autoAlpha:1,
        duration:2,
        delay: 0.8,
        scrollTrigger: {
          // .container is ref to className in app.jsx for entire site container
          scroller: ".container",
          trigger: projectViewportRef.current,
          start: "top 60%",
          end: "bottom 0%",
          toggleActions: "play none restart reverse",
        }
      }
    ),
    gsap.fromTo(
      yearRef.current,
      {
        autoAlpha:0,
        y: 1,
      },
      {
        y: 0,
        autoAlpha:1,
        duration:3,
        delay: 2,
        scrollTrigger: {
          // .container is ref to className in app.jsx for entire site container
          scroller: ".container",
          trigger: year2022.current,
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
    };
  }, []);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  // --------------- END REACT CSS MEDIA QUERY SUBSTITUTE -------------
  return(
    <div className={styles.section} ref={sectionRef}  id='pastRefSignal'>
      {/* style={{backgroundImage: `${image}`}}> */}
      <div className={styles.copy}>
        <h2 ref={headlineRef}>All Projects</h2>
      </div>

      {!viewedProject.active &&
        <div className={styles.projectViewportPlaceholder}>
        
        </div>
      
      }
      {viewedProject.active &&
        <div ref={projectViewportRef} >
          {viewedProject.projectObject.map((project) => {
            return (
              <div key={Math.random()} className={styles.projectViewport}>

                {windowSize.innerWidth >= 1100 &&
                  <div className={styles.imgContainer} >
                    <img src= { project.img } />
                  </div>
                }   
                
                {/* {windowSize.innerWidth < 1100 &&
                  <div className={styles.thinImgContainer} >
                    <img src= { project.img } />
                  </div>
                }    */}

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
                    </div>
                    <div className={styles.projectDetail}>
                      {project.detail}
                    </div>
                    <div className={styles.linkContainer}>

                        <div className={styles.linkImageContainer}>
                          <a href={project.demoLink} target="_blank">
                            <img src= { demo }  alt={"Live Demo"}/>
                          </a>  
                        </div>

                        <div>
                          <a href={project.demoLink} target="_blank">&nbsp;Live Demo</a>
                        </div>
                        <div className={styles.linkImageContainer}>
                          <a href={project.gitLink} target="_blank">
                            <img src= { github }  alt={"Github"}/>
                          </a>  
                        </div>

                        <div>
                          <a href={project.demoLink} target="_blank">&nbsp;Github Repo</a>
                        </div>

                      </div>
                </div>
              </div>
            )})
          }
        </div>
      }   
  

      <div  ref={yearRef}>
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
                  <img src={project.img} onClick={() => selectProjectForView(project)} />
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
                  <img src={project.img} onClick={() => selectProjectForView(project)} />
                </div>
              )})}
          </div>
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