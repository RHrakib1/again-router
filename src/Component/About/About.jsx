import React from 'react'
import Form from '../From/Form'
import Reuseable from '../From/Reuseable.jsx/Reuseable'

export default function About() {

    const hendelsubmitsingup = e => {
        // e.preventDefault()
        console.log("singup from", e);

    }

    const hendleUpdate = e => {
        // e.preventDefault()
        console.log("update profile ", e);
    }

    return (
        <div>
            <h1>this is a about us page </h1>
            <p>baout my self hare</p>
            <Form></Form>
            <Reuseable
                fromtitle={"Sing UP"}
                hendelsubmit={hendelsubmitsingup}></Reuseable>
            <Reuseable
                fromtitle={"Update"}
                hendelsubmit={hendleUpdate}
                hendelBtn='Update'></Reuseable>
        </div>
    )
}
