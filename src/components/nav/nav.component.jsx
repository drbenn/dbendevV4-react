import { useEffect, useState } from 'react';
import styles from './nav.module.scss'

export default function Nav() {

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
    </div>
  )
}