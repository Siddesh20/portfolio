import React from "react"
import styles from "../../styles/Home.module.css"

export default function MultiCard(props) {
    const Style = {
        Large: {
            width: '60rem',
            height: '40rem',
            maxWidth: '24rem'
        },
        Medium: {
            width: '40rem',
            height: '40rem',
            maxWidth: '16rem'
        },
        Small: {
            width: '34rem',
            height: '40rem',
            maxWidth: '16rem'
        }
    };
    
    const { data: Data } = props

    const MultiCards = Data.map(({heading, points, size}, index) =>
        <div
            key={index}
            className={styles}
        >
            <div  className={styles.multicardChild}>
                <div className={styles.background}/>
                <h3 className={styles.muticardHeading}>{heading}</h3>
                {
                    points.map(({skill, img}, index) => {
                        const [hoveredIndex, setHoveredIndex] = React.useState(null)
                        return (
                            <div
                                key={index}
                                className={`${styles.multiCardBox} ${styles[`box${index+1}`]}`}
                            >
                                <div className={styles.multiCardBoxData}>
                                    <h3 className={styles.multiCardBoxName}>{skill}</h3>
                                    <div className={styles.multicardChildElements}>
                                        <img src={img} className={styles.multiCardIcon}/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
    return (
        <div className={styles.cards}>
            {MultiCards}
        </div>
    )
}
