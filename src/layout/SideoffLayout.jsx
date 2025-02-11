import React from 'react'
import "../css/sideofflayout.css"
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const SideoffLayout = () => {
    return (
        <div className='layout-container'>
            <div className='outlet-container'>
                <Outlet />
            </div>
            <Toaster />
        </div>
    )
}

export default SideoffLayout