import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Post from './Post'

export default function Posts() {
    const post = useLoaderData()
    return (
        <div>
            <h1>post number is :{post.length}</h1>
            <div className='gap-5 grid grid-cols-5'>
                {
                    post.map(p => <Post p={p}></Post>)
                }
            </div>
        </div>
    )
}
