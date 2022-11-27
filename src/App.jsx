import { useEffect, useState, useRef, useMemo } from 'react'
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

  const isInSection1 = useIsInViewport(section1);
  console.log('isInViewport1: ', isInSection1);

  const isInSection2 = useIsInViewport(section2);
  console.log('isInViewport2: ', isInSection2);

  const isInSection3 = useIsInViewport(section3);
  console.log('isInViewport3: ', isInSection3);

  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
        ),
      [],
    );
  
    useEffect(() => {
      observer.observe(ref.current);
  
      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);
  
    return isIntersecting;
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
    {/* section space, gives some leeway for intersection to observe only 1 section as when sections have 100vh both are identified as being in the viewport */}
    <div className='sections-space'></div>
      <div ref={section2}>
        <Basic 
          image={`url(/src/assets/bg-2.jpg)`}
          headline={`Basic Scrollsnap 2!`}
          scrollTo={scrollTo}
          goToSectionRef={section3}
          showArrow={true}
        />
      </div>
      {/* section space, gives some leeway for intersection to observe only 1 section as when sections have 100vh both are identified as being in the viewport */}
      <div className='sections-space'></div> 
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