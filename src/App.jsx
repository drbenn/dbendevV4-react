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
  const sectionOptions = [section1,section2,section3,section4]
  const [sectionSignal, setSectionSignal ] = useState('');

  // const section5 = useRef();
  function scrollTo(section) {
    console.log(section);
    section.current.scrollIntoView({behavior: "smooth"});
  }

  const isInSection1 = useIsInViewport(section1);
  // console.log('isInViewport1: ', isInSection1);

  const isInSection2 = useIsInViewport(section2);
  // console.log('isInViewport2: ', isInSection2);

  const isInSection3 = useIsInViewport(section3);
  // console.log('isInViewport3: ', isInSection3);

  const isInSection4 = useIsInViewport(section4);
  // console.log('isInViewport4: ', isInSection4);

  // const isInSection5 = useIsInViewport(section5);
  // // console.log('isInViewport5: ', isInSection5);

  function useIsInViewport(ref) {


    const [isIntersecting, setIsIntersecting] = useState(false);
    
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            let first100 = entry.target.innerHTML.slice(0,100);
            emitSection(first100);
          }
          setIsIntersecting(entry.isIntersecting)
        }
        ),
      [],
    );
      
    useEffect(() => {
      observer.observe(ref.current);
      console.log(observer.observe(ref.current))
      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);
  
    return isIntersecting;

    function emitSection(first100) {
      let activeSection;
      // console.log('--------------------------------------------');
      // console.log(first100);
      // console.log('--------------------------------------------');
      if ( first100.search("aboutRefSignal") > 1 ) {
        activeSection = 'about';
        setSectionSignal('about');
          
      }
      if ( first100.search("featuredRefSignal") > 1 ) {
        console.log('setting featured');
        activeSection = 'featured';
        setSectionSignal('featured');
      }
      if ( first100.search("pastRefSignal") > 1 ) {
        console.log('setting past');
        activeSection = 'past';
        setSectionSignal('past');
      }
      if ( first100.search("footerRefSignal") > 1 ) {
        console.log('setting footer');
        activeSection = 'footer';
        setSectionSignal('footer');
      }
      // setSectionSignal(activeSection);
      console.log(sectionSignal);
    }
  }
  

  return (
    <div>
      <FixedBg></FixedBg>
      <Nav scrollTo={scrollTo} 
        goToSectionRef= {sectionOptions} 
        sectionSignal= { sectionSignal}>
      </Nav>
    {/* the standalong non-module className 'container' is for gsap to id the page as all scroll components are contained within this container  */}
    <div className={`container ${styles.container}`}>

      <div className='sections-space'></div> 
      <div ref={section1}>
        <About
          image={`url(/src/assets/bg-2.jpg)`}
          headline={`About bad`}
          scrollTo={scrollTo}
          goToSectionRef={section2}
          showArrow={true}

        />
      </div>

      <div className='sections-space'></div> 
      <div ref={section2}>
        <Featured
          image={`url(/src/assets/bg-2.jpg)`}
          headline={`About bad`}
          scrollTo={scrollTo}
          goToSectionRef={section3}
          showArrow={true}
          id='FEATURED ID'
        />
      </div>

      <div className='sections-space'></div> 
      <div ref={section3}>
        <Past
          image={`url(/src/assets/bg-2.jpg)`}
          headline={`About bad`}
          scrollTo={scrollTo}
          goToSectionRef={section4}
          showArrow={true}
          id='PAST ID'
        />
      </div>

      {/* <div className='sections-space'></div> 
      <div ref={section4}>
        <Posts
          image={`url(/src/assets/bg-2.jpg)`}
          headline={`About bad`}
          scrollTo={scrollTo}
          goToSectionRef={section5}
          showArrow={true}
        />
      </div> */}

      <div className='sections-space'></div> 
      <div ref={section4}>
        <Footer
          image={`url(/src/assets/bg-2.jpg)`}
          headline={`About bad`}
          showArrow={false}
          id='FOOTER ID'
        />
      </div>

    </div>
    </div>
  )
}


export default App