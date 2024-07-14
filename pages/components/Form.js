import React from "react"
import { Roboto } from 'next/font/google'
import styles from '../../styles/Home.module.css';

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

export default function Form(){
    const id = React.useId()

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    function onFormDataChange(event) {
        const { name, value } = event.target
        console.log(value)
        setFormData(
            prevFormData => ({
                ...prevFormData,
                [name]: value
            })
        )
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <form 
            className={`${styles.form} ${roboto.className}`}
            onSubmit={handleFormSubmit}
        >   
            <div className={styles.formTop}>
                <div className={styles.formDots}>
                    <div className={styles.formRedDot}/>
                    <div className={styles.formYellowDot}/>
                    <div className={styles.formGreenDot}/>
                </div>
                <h3 className={styles.formTitle}>Form</h3>
            </div>
            <label htmlFor={id + "-name"}>$ Name</label>
            <input 
                type="text"
                name="name"
                id={id + "-name"}
                placeholder="Siddesh Bharat Hazare"
                value={formData.name}
                onChange={onFormDataChange}
            />
            <label htmlFor={id + "-email"}>$ Email</label>
            <input
                type="email"
                name="email"
                id={id + "-email"}
                placeholder="siddeshhazare@gmail.com"
                value={formData.email}
                onChange={onFormDataChange}
            />
            <label htmlFor={id + "-subject"}>$ Subject</label>
            <input
                type="text"
                name="subject"
                id={id + "-subject"}
                placeholder="Want to have a little chat :) .."
                value={formData.subject}
                onChange={onFormDataChange}
            />
            <label htmlFor={id + "-message"}>$ Message</label>
            <textarea
                name="message"
                id={id+ "-message"}
                placeholder="message"
                value={formData.message}
                onChange={onFormDataChange}
            />
            <button>
                <img src="/images/send.png"/>
                <span>Send</span>
            </button>
        </form>
    )
}