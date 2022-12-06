import { useEffect, useState, useRef, useMemo } from 'react'
import './App.css'
import styles from "./styles/App.module.scss"

import Basic from './components/basic/basic.component';
import About from './components/about/about.component';
import Featured from './components/featured/featured.component';
import Past from './components/past/past.component';
import Posts from './components/posts/posts.component';
import Footer from './components/footer/footer.component';


import FixedBg from './components/fixedBg/fixedBg.component';
import Nav from './components/nav/nav.component';

function App() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  function scrollTo(section) {

    section.current.scrollIntoView({behavior: "smooth"});
  }

  const isInSection1 = useIsInViewport(section1);
  console.log('isInViewport1: ', isInSection1);

  const isInSection2 = useIsInViewport(section2);
  console.log('isInViewport2: ', isInSection2);

  const isInSection3 = useIsInViewport(section3);
  console.log('isInViewport3: ', isInSection3);

  const isInSection4 = useIsInViewport(section4);
  console.log('isInViewport4: ', isInSection4);

  const isInSection5 = useIsInViewport(section5);
  console.log('isInViewport5: ', isInSection5);

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

      <div className='sections-space'></div> 
      <div ref={section1}>
        <About
          image={`url(/src/assets/bg-2.jpg)`}
          headline={`About shitbad`}
          scrollTo={scrollTo}
          goToSectionRef={section2}
          showArrow={true}
        />
      </div>

      <div className='sections-space'></div> 
      <div ref={section2}>
        <Featured
          image={`url(/src/assets/bg-2.jpg)`}
          headline={`About shitbad`}
          scrollTo={scrollTo}
          goToSectionRef={section3}
          showArrow={true}
        />
      </div>

      <div className='sections-space'></div> 
      <div ref={section3}>
        <Past
          image={`url(/src/assets/bg-2.jpg)`}
          headline={`About shitbad`}
          scrollTo={scrollTo}
          goToSectionRef={section4}
          showArrow={true}
        />
      </div>

      <div className='sections-space'></div> 
      <div ref={section4}>
        <Posts
          image={`url(/src/assets/bg-2.jpg)`}
          headline={`About shitbad`}
          scrollTo={scrollTo}
          goToSectionRef={section5}
          showArrow={true}
        />
      </div>

      <div className='sections-space'></div> 
      <div ref={section5}>
        <Footer
          image={`url(/src/assets/bg-2.jpg)`}
          headline={`About shitbad`}
          showArrow={false}
        />
      </div>

    </div>
    </div>
  )
}


export default App