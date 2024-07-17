import React from "react"
import styles from '../../styles/Home.module.css';

export default function LinkBar(props) {
    const {data: Data, style: Style} = props
    
    return (
        <nav className={styles[Style]}>
            <ul className={styles.nav}>
                {
                    Data.map(({section, href, img},index) => 
                        <li key={index}>
                            <a href={href ? href : null} className={styles.nav_a}>
                                {
                                    img ? 
                                    <div className={styles.social}>
                                        <img src={img} alt={section} className={styles.socialsImg}/>
                                        <p className={styles.socialsName}>{section}</p>
                                    </div> 
                                    : section
                                }
                            </a>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}
