import React from 'react'
import { Link } from 'react-router-dom'

export default function Use({ us }) {
    const { name, username, id } = us
    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{us.name}</h2>
                    <p>{us.username}</p>
                    <Link to={`/userdetails/${id}`}><button className='btn'>show more</button> </Link>
                </div>
            </div>
        </div>
    )
}
