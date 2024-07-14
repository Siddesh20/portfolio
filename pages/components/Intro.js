import React from "react"
import styles from '../../styles/Home.module.css';

export default function Intro() {
    const IntroHeaderTitle = "Hey, I'm Siddesh Bharat Hazare"
    const IntroHeaderSubTitle = "I enjoy trying new things :)"
    const Image = "/images/me.jpg"
    
    return (
        <div id="intro" className={styles.introDiv}>
            <div className={styles.introHeader}>
                <h3 className={styles.introHeaderTitle}>{IntroHeaderTitle}</h3>
                <h1 className={styles.introHeaderSubTitle}>{IntroHeaderSubTitle}</h1>
            </div>
            <img src={Image} className={styles.introImg}/>
        </div>
    )
}
