import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function SeePostDetails() {
    const post = useLoaderData()
    const { title, body } = post
    return (
        <div>
            <h1 className='text-4xl'>The Title is :{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}
