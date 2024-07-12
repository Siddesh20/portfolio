import React from "react"
import styles from '../../styles/Home.module.css';

export default function NavBar() {
    return (
        <nav>
            <ul className={styles.nav}>
                <li><a href="/" className={styles.nav_a}>😄About me</a></li>
                <li><a href="/" className={styles.nav_a}>🎓Education</a></li>
                <li><a href="/" className={styles.nav_a}>💼Work Experience</a></li>
                <li><a href="/" className={styles.nav_a}>🛠️Skills</a></li>
                <li><a href="/" className={styles.nav_a}>📂Projects</a></li>
                <li><a href="/" className={styles.nav_a}>🌟PORs</a></li>
            </ul>
        </nav>
    )
}
