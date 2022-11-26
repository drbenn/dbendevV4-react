import { useEffect, useState, useRef } from 'react'
import './App.css'
import styles from "./styles/App.module.scss"

import Basic from './components/basic/basic.component';
import FixedBg from './components/fixedBg/fixedBg.component';
import Nav from './components/nav/nav.component';

function App() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  function scrollTo(section) {

    section.current.scrollIntoView({behavior: "smooth"});
  }

  return (
    <div>
      <FixedBg></FixedBg>
      <Nav></Nav>
    {/* the standalong non-module className 'container' is for gsap to id the page as all scroll components are contained within this container  */}
    <div className={`container ${styles.container}`}>
      <div ref={section1}>
        <Basic 
          image={`url(/src/assets/bg-1.jpg)`}
          headline={`Basic Scrollsnap 1!`}
          scrollTo={scrollTo}
          goToSectionRef={section2}
          showArrow={true}
          />
      </div>

      <div ref={section2}>
        <Basic 
          image={`url(/src/assets/bg-2.jpg)`}
          headline={`Basic Scrollsnap 2!`}
          scrollTo={scrollTo}
          goToSectionRef={section3}
          showArrow={true}
        />
      </div>

      <div ref={section3}>
        <Basic 
          image={`url(/src/assets/bg-3.jpg)`}
          headline={`Basic Scrollsnap 3!`}
          showArrow={false}
        />
      </div>

    </div>
    </div>
  )
}

export default App