import React, { useEffect, useState } from 'react';
import "../css/mainlayout.css";
import "../App.css";
import "../componenets/component.css";
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { getFromLocal } from '../auth/authentication';
import { Toaster } from 'react-hot-toast';
import Sidebar from '../componenets/SidebarComponent';
import { MenuOpenOutlined } from '@mui/icons-material';

// charts
import { Chart as ChartJS, LineElement, BarElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, ArcElement, RadialLinearScale } from 'chart.js';

ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, ArcElement, RadialLinearScale);

const MainLayout = () => {

  const location = useLocation();
  const pathname = location.pathname;

  const [collapsed, setCollapsed] = useState(window.innerWidth < 500);

  useEffect(() => {
    if (window.innerWidth < 500) {
      setCollapsed(true)
    }
  }, [pathname])

  return (
    <div className='main-layout-container position-relative'>
      <div className={collapsed ? 'main-layout-sidebar-container ' : "main-layout-sidebar-container sidebar-width"} style={{ minWidth: collapsed ? "0px" : "auto", width: collapsed ? "0px" : "auto" }} >
        <Sidebar />
      </div>

      <div className='main-layout-outlet-container position-relative'>
        <Outlet />

        <div onClick={() => { setCollapsed(!collapsed) }} className='text-success position-absolute py-3 background-arrow ' style={{ right: 18, top: 2, cursor: 'pointer', zIndex: 10 }}>
          <MenuOpenOutlined fontSize='medium' />
        </div>
      </div>

      <Toaster />
    </div>
  )
}

export default MainLayout