import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Use from './Use'

export default function User() {
    const user = useLoaderData()
    return (
        <div >
            <h1>hi data{user.length}</h1>
           <div className='grid grid-cols-4 gap-4'>
             {
                user.map(use1 => <Use us={use1}></Use>)
            }
           </div>
        </div>
    )
}
