import React from "react"
import styles from "../styles/Home.module.css"

export default function Card(props) {
    const [hoveredIndex, setHoveredIndex] = React.useState(null)
    
    const { data: Data, cardSize: CardSize } = props
    const MaxWidth = {
        cardLarge: {
            maxWidth: '24rem'
        },
        cardMedium: {
            maxWidth: '16rem'
        },
        cardSmall: {
            maxWidth: '16rem'
        }
    }

    const Cards =  Data.map(({heading, points, image}, index) => 
           <div 
                key={index} 
                className={styles.card} 
                style={image ? { 
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right center',
                    backgroundSize: hoveredIndex === index  ? '6rem' : '0rem',
                    transition: 'background-size .5s ease',
                }:{}}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <span style={MaxWidth[CardSize]}>
                    <h3>{heading}</h3>
                    {
                        points.map(
                            (point, index) => <p key={index}>{point}</p>
                        )   
                    }
                </span>
           </div>         
    )

    return (
        <div className={`${styles.cards} ${styles[CardSize]}`}>
            {Cards}
        </div>
    )
}
