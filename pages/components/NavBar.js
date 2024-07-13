import React from "react"
import styles from '../../styles/Home.module.css';

export default function NavBar() {
    const NavbarItems = [
        {
            section: "😄About me", 
            href: "#intro"
        },
        {
            section: "🎓Education",
            href: "#education"
        },
        {
            section: "💼Work Experience",
            href: "#work"
        },
        {
            section: "🛠️Skills"
        },
        {
            section: "📂Projects",
            href: "#projects"
        },
        {
            section: "🌟PORs",
            href: "#por"
        }
    ]
    
    return (
        <nav>
            <ul className={styles.nav}>
                {
                    NavbarItems.map(({section, href},index) => 
                        <li key={index}>
                            <a href={href ? href : null} className={styles.nav_a}>
                                {section}
                            </a>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}
