import React from "react"
import styles from "../styles/Home.module.css"

export default function Card(props) {
    const [hoveredIndex, setHoveredIndex] = React.useState(null)
    
    const { data: Data, cardSize: CardSize } = props
    const Style = {
        Large: {
            width: '60rem',
            height: '34rem'
        },
        Medium: {
            width: '40rem',
            height: '30rem'
        },
        Small: {
            width: '34rem',
            height: '20rem'
        }
    };
    const MaxWidth = {
        Large: {
            maxWidth: '24rem'
        },
        Medium: {
            maxWidth: '16rem'
        },
        Small: {
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
        <div style={Style[CardSize]} className={styles.cards}>
            {Cards}
        </div>
    )
}
