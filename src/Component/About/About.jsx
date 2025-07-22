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
                hendelsubmit={hendelsubmitsingup}

            >
                <div>
                    <h1 className='text-3xl font-bold'>Singup</h1>
                    <p>please sing up</p>
                </div>
            </Reuseable>
            <Reuseable
                fromtitle={"Update"}
                hendelsubmit={hendleUpdate}
                hendelBtn='Update'>
                <div>
                    <h1 className='text-3xl font-bold'>update profile</h1>
                    <p>please you profile update first</p>
                </div>
            </Reuseable>
        </div>
    )
}
