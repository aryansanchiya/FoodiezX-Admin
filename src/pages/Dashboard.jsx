import React from 'react'
import HeaderComponent from '../componenets/Header';
import Grid from '@mui/material/Grid2';
import { GroupOutlined } from '@mui/icons-material';
import CustomLineChart from '../Charts/CustomLineChart';
import CustomPolarRadar from '../Charts/CustomPolarRadar';

const breadcrumbList = [
  { link: "/dashboard", name: "dashboard", current: true }
]

const Dashboard = () => {

  return (
    <div className='page-container'>
      <HeaderComponent title="Dashboard" notification={true} profile={true} breadcrumb={breadcrumbList} />

      <Grid container className="m-3" spacing={2}>
        {/* cards */}
        <Grid className='rounded' size={{ xs: 12, md: 12, lg: 12 }}>
          <Grid container spacing={2}>
            <Grid className='rounded p-3 bg-white' size={{ xs: 12, md: 6, lg: 3 }}>
              <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='fw-bold text-secondary m-0' style={{ fontSize: "smaller", opacity: 0.8 }}>
                    Total Users
                  </p>
                  <h5 className='fw-bold text-success m-0'>
                    3982
                  </h5>
                </div>
                <div className='text-success' style={{ opacity: 0.7 }}>
                  <GroupOutlined style={{ fontSize: "2.5rem" }} />
                </div>
              </div>
            </Grid>
            <Grid className='rounded p-3 bg-white' size={{ xs: 12, md: 6, lg: 3 }}>
              <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='fw-bold text-secondary m-0' style={{ fontSize: "smaller", opacity: 0.8 }}>
                    Total Users
                  </p>
                  <h5 className='fw-bold text-success m-0'>
                    3982
                  </h5>
                </div>
                <div className='text-success' style={{ opacity: 0.7 }}>
                  <GroupOutlined style={{ fontSize: "2.5rem" }} />
                </div>
              </div>
            </Grid>
            <Grid className='rounded p-3 bg-white' size={{ xs: 12, md: 6, lg: 3 }}>
              <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='fw-bold text-secondary m-0' style={{ fontSize: "smaller", opacity: 0.8 }}>
                    Total Users
                  </p>
                  <h5 className='fw-bold text-success m-0'>
                    3982
                  </h5>
                </div>
                <div className='text-success' style={{ opacity: 0.7 }}>
                  <GroupOutlined style={{ fontSize: "2.5rem" }} />
                </div>
              </div>
            </Grid>
            <Grid className='rounded p-3 bg-white' size={{ xs: 12, md: 6, lg: 3 }}>
              <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='fw-bold text-secondary m-0' style={{ fontSize: "smaller", opacity: 0.8 }}>
                    Total Users
                  </p>
                  <h5 className='fw-bold text-success m-0'>
                    3982
                  </h5>
                </div>
                <div className='text-success' style={{ opacity: 0.7 }}>
                  <GroupOutlined style={{ fontSize: "2.5rem" }} />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        {/* line chart */}
        <Grid className='rounded bg-white p-3' size={{ xs: 12, md: 6, lg: 8 }}>
          <h6 className='fw-bold text-success mb-3'>
            Bookings
          </h6>
          <div className='w-100'>
            <CustomLineChart />
          </div>
        </Grid>
        {/* Pie chart */}
        <Grid className='rounded bg-white p-3 pb-5' size={{ xs: 12, md: 6, lg: 4 }}>
          <h6 className='fw-bold text-success mb-3'>
            Table Occupancy
          </h6>
          <div className='d-flex justify-content-center align-items-center h-100 pb-4'>
            <div style={{maxWidth: 250}} className='w-100'>
              <CustomPolarRadar />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard