import React from 'react'

export default function Simple_From() {

    const heandelSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.number.value);
    }
    return (
        <div className='bg-amber-400'>
            <form onSubmit={heandelSubmit}>
                <input type="text" name='name' />
                <input type="email" name='email' />
                <input type="number" name='number' />
                <input type="submit" value='Submit' />

            </form>
        </div>
    )
}
