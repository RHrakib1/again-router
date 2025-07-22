import React from 'react'

export default function Reuseable({ fromtitle, hendelBtn, hendelsubmit }) {

    const heandlelocal = e => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        hendelsubmit(data)
    }
    return (
        <div>
            <form onSubmit={heandlelocal}>
                <h1>{fromtitle}</h1>
                <input className='border-2 ml-4' type="text" name='name' />
                <input className='border-2 ml-4' type="email" name='email' />
                <input className='border-2 ml-4' type="password" name='password' />
                <input className='border-2 ml-4' type="submit" value={hendelBtn} />

            </form>
        </div>
    )
}
