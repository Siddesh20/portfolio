import React from "react"
import { Roboto } from 'next/font/google'
import styles from "../styles/Home.module.css"
import { initializeApp } from 'firebase/app'
import {  addDoc, getFirestore, collection } from 'firebase/firestore'

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const firebaseApp = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
})

export default function Form(){

    const firestore = getFirestore()
    const dataCollection = collection(firestore, 'formData')

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

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        const newDoc = await addDoc(dataCollection, formData)
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
