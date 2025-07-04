import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Home() {
    return (
        <div className='min-h-screen flex flex-col'>
            <Header></Header>
            <div className='flex-grow'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}
