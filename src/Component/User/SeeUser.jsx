import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function SeeUser() {
    const user = useLoaderData()
    const { name, email, website } = user
    return (
        <div>
            <h1 className='text-6xl font-bold'>User Name For Website info:{user.name} </h1>
            <h3>{user.website}</h3>
            <p>{user.email}</p>
        </div>
    )
}
