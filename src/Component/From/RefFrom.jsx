import React, { useEffect, useRef } from 'react'

export default function RefFrom() {
    useEffect(() => {
        nameref.current.focus()
    }, [])

    const nameref = useRef(null)
    const emailref = useRef(null)
    const passref = useRef(null)
    const handelclick = (e) => {
        e.preventDefault()
        console.log(nameref.current.value);
        console.log(emailref.current.value);
        console.log(passref.current.value);


    }


    return (
        <div>
            <h1>update now</h1>
            <form onSubmit={handelclick}>
                <input className='border-2 ml-5 p-2' ref={nameref} type="text" name='name' />
                <input className='border-2 ml-5 p-2' ref={emailref} type="email" name='email' />
                <input className='border-2 ml-5 p-2' ref={passref} type="password" name='password' />
                <input className='border-2 ml-5 p-2 btn ' type="submit" value='Submit' />

            </form>
        </div>
    )
}
