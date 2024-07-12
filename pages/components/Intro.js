import React from "react"
import styles from '../../styles/Home.module.css';

export default function Intro() {
    return (
        <div className={styles.introDiv}>
            <div className={styles.introHeader}>
                <h3 className={styles.introHeaderTitle}>Hey, I'm Siddesh Bharat Hazare</h3>
                <h1 className={styles.introHeaderSubTitle}>I enjoy trying new things :)</h1>
                {/* <div className={styles.introHeaderSubTitle}>
                    <p>Coding enthusiast</p>
                    <p>Enjoy trying new things :)</p>
                </div> */}
            </div>
            <img src="/images/20240405_173541.jpg" className={styles.introImg}/>
        </div>
    )
}
