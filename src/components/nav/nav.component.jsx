import { useEffect, useState } from 'react';
import './nav.styles.scss';

export default function Nav({scrollTo, goToSectionRef, sectionSignal}) {
  const [ burgerStyle, setBurgerStyle] = useState(["line1", "line2", "line3"]);
  const [ navActiveSection, setNavActiveSection ] = useState(["","","",""])
  const [ navModalOpen, setNavModalOpen ] = useState(false);

  useEffect(() => {
    // if (sectionSignal !== navActiveSection) {

      // let navSection;
      // console.log('HIT');
      // if (sectionSignal === "about") {
      //   navSection = ["olFixedActive","","",""]
      // }
      // if (sectionSignal === "featured") {
      //   navSection = ["","olFixedActive","",""]
      // }
      // if (sectionSignal === "past") {
      //   navSection = ["","","olFixedActive",""]
      // }
      // if (sectionSignal === "footer") {
      //   navSection = ["","","","olFixedActive"]  
      // }
      // setNavActiveSection(navSection)  
      // console.log(navSection);
    // }

  }, []);


  const toggleNavModal = () => {
    // Change nav burger styling/animation
    const openBurger = ["line1", "line2", "line3"];
    const closeBurger = ["line1x", "line2x", "line3x"];
    const activeNavClass = []
    burgerStyle[0][5] === undefined ? setBurgerStyle(closeBurger) : setBurgerStyle(openBurger);
    setNavModalOpen(!navModalOpen);
  };

  const updateNavClassNameClick = (navLink) => {
    const aboutActive = ["olFixedActive", "", "", ""]
    const featuredActive = ["", "olFixedActive", "", ""]
    const allActive = ["", "", "olFixedActive", ""]
    const contactActive = ["", "", "", "olFixedActive"]
    if (navLink === 'about') {setNavActiveSection(aboutActive)};
    if (navLink === 'featured') {setNavActiveSection(featuredActive)};
    if (navLink === 'all') {setNavActiveSection(allActive)};
    if (navLink === 'contact') {setNavActiveSection(contactActive)};
  }


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
    <div>
      {windowSize.innerWidth >= 1100 &&
        <div className="navcontainer">
          <ul>
            <ol className={navActiveSection[0]} onClick={() => {
              scrollTo(goToSectionRef[0]);
              updateNavClassnameClick('about');
              
            }}>ABOUT</ol>
            <ol className={navActiveSection[1]} onClick={() => {
              scrollTo(goToSectionRef[1]);
              updateNavClassnameClick('featured');
              }}>FEATURED</ol>
            <ol className={navActiveSection[2]} onClick={() => {
              scrollTo(goToSectionRef[2]);
              updateNavClassnameClick('all');
              }}>ALL</ol>
            <ol className={navActiveSection[3]} onClick={() => {
              scrollTo(goToSectionRef[3]);
              updateNavClassnameClick('contact');
            }}>CONTACT</ol>
          </ul>
        </div>
      }

      {windowSize.innerWidth < 1100 &&
        <div className="burgerPosition">
          <div className="navBurger" onClick={toggleNavModal}>
            <div className={burgerStyle[0]}></div>
            <div className={burgerStyle[1]}></div>
            <div className={burgerStyle[2]}></div>
          </div>
        </div>
      }

      {windowSize.innerWidth < 1100 && navModalOpen &&
        <div className='navModalContainer'>
          <div className='navModalPosition'>
            <ul>
              <ol onClick={() => {
                scrollTo(goToSectionRef[0])
                toggleNavModal()  
              }}>ABOUT
              </ol>
              <ol onClick={() => {
                scrollTo(goToSectionRef[1])
                toggleNavModal()
                }}>FEATURED
              </ol>
              <ol onClick={() => {
                scrollTo(goToSectionRef[2])
                toggleNavModal()
                }}>ALL
              </ol>
              <ol onClick={() => {
                scrollTo(goToSectionRef[3]);
                toggleNavModal()
                }}>CONTACT
              </ol>
            </ul>
          </div>
        </div>

      }


    </div>
  )
}