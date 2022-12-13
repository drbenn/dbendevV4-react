import styles from './fixedBg.module.scss'

export default function FixedBg() {
  const backgrounds = [
    {background : `linear-gradient(45deg, rgba(40,40,42,1) 10%, rgba(23,22,26,1) 100%)`},
    {background : `linear-gradient(125deg, rgba(46,48,54,1) 10%, rgba(15,14,17,1) 100%)`},
    {background : `linear-gradient(95deg, rgba(46,46,51,1) 10%, rgba(23,22,26,1) 100%)`},
    {background : `linear-gradient(132deg, rgba(22,14,21,1) 10%, rgba(15,14,17,1) 100%)`},

  ]
  let activeStyle = {background : `linear-gradient(45deg, rgba(40,40,42,1) 10%, rgba(23,22,26,1) 100%)`}
  
  return(
    <div className={styles.fixedbgcontainer}
    style={backgrounds[0]}
    
    
    >
      {/* <div className={styles.spotlightcontainer}>
        <div className={styles.spotlight}></div>
      </div> */}
      {/* <div className={styles.gradient}>HELLO</div> */}
    </div>

  )
}