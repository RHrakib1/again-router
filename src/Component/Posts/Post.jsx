import React from 'react'
import { Link } from 'react-router-dom'

export default function Post({ p }) {
    const { body, title, id } = p
    return (
        <div className='shadow-2xs p-4 bg-base-300 rounded-2xl'>
            <h1>{p.title}</h1>
            <Link to={`/postdetails/${id}`}><button className='btn'>More Details</button></Link>
        </div>
    )
}
