import { useEffect, useState } from 'react';
import styles from './nav.module.scss'

export default function Nav() {
  const [burgerStyle, burgerSetStyle] = useState(["styles.line1", "styles.line2", "styles.line3"]);

  const changeStyle = () => {
    console.log("you just clicked");
    style[0] === "styles.line1" ? burgerSetStyle(["styles.line1x", "styles.line2x", "styles.line3x"]) : burgerSetStyle(["styles.line1", "styles.line2", "styles.line3"]);
  };


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
      {windowSize.innerWidth > 1100 &&
        <div className={styles.navcontainer}>
          <ul>
            <ol>ABOUT</ol>
            <ol>FEATURED</ol>
            <ol>ALL</ol>
            <ol>CONTACT</ol>
          </ul>
        </div>
      }

      {windowSize.innerWidth > 1100 &&
        <div className={styles.burgerPosition}>
          <div className={styles.navBurger} onClick={changeStyle}>
            {/* <div className={burgerStyle[0]}>I</div>
            <div className={burgerStyle[1]}>d</div>
            <div className={burgerStyle[2]}>r</div> */}
            <div className={styles.line1}>I</div>
            <div className={styles.line2}>d</div>
            <div className={styles.line3}>r</div>
          </div>
        </div>
      }


    </div>
  )
}