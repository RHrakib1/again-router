import React from 'react'

export default function Use({us}) {
    const {title,username}=us
    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{us.name}</h2>
                    <p>{us.username}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
