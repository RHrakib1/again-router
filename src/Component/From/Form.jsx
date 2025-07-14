import React, { useState } from 'react'

export default function Form() {
    const [name, setname] = useState(null)
    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)

    const heandelSubmit = (e) => {
        e.preventDefault()
        console.log('hoise');
        console.log(name);
    }

    const nameChager = (e) => {
        console.log(e.target.value);
        setname(e.target.value);
    }

    const emailChange = (e) => {
        console.log(e.target.value);
        setemail(e.target.value)
    }
    
    return (
        <div>
            <form onSubmit={heandelSubmit} >
                <input
                    className='border-2 px-0.5 mr-2.5'
                    onChange={nameChager}
                    type="text" name='name' placeholder='Enter your Name' />
                <input
                onChange={emailChange}
                    className='border-2 px-0.5 mr-2.5'
                    type="email" name='email' placeholder='enter your email' />
                <input
                    className='border-2 px-0.5 mr-2.5'
                    type="password" name='password' placeholder='enter your password' />
                <input type="submit" value='Submit' className='btn btn-accent' />

            </form>
        </div>
    )
}
