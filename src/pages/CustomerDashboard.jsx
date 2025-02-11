import React from 'react'
import HeaderComponent from '../componenets/Header';
import Grid from '@mui/material/Grid2';
import { AddOutlined, ClearAll, ClearAllOutlined, CreditScoreOutlined, GroupOutlined, LibraryAddCheckOutlined, ListOutlined, RecentActorsOutlined, SegmentOutlined } from '@mui/icons-material';
import CustomLineChart from '../Charts/CustomLineChart';
import CustomPolarRadar from '../Charts/CustomPolarRadar';
import TableComponentSmall from '../componenets/TableComponentSmall';

const breadcrumbList = [
  { link: "/", name: "customers", current: true }
]

const CustomerDashboard = () => {

  const rowData = (() => {
    const rowData = [];
    for (let i = 0; i < 4; i++) {
      rowData.push({ id: "001", username: "meetgohel", rating: 4.5, restaurant: "MacD", datetime: "10/11/2024 11:11:00" });
      rowData.push({ id: "002", username: "aryansanchiya", rating: 3.3, restaurant: "Drizzle's", datetime: "10/11/2024 11:11:00" });
    }
    return rowData;
  })();

  const columnDefs = [
    { field: "id", flex: 0.5, minWidth: 60 },
    { field: "username", flex: 1 },
    { field: "datetime", headerName: "Date & Time", flex: 1 },
  ];

  const columnDefsBookings = [
    { field: "id", flex: 0.5, minWidth: 60 },
    { field: "username", flex: 1 },
    { field: "restaurant", headerName: "Date & Time", flex: 1 },
    { field: "datetime", headerName: "Date & Time", flex: 1 },
  ];

  const Title = () => (
    <p className='m-0'>
      Reviews
    </p>
  );

  return (
    <div className='page-container'>
      <HeaderComponent title="Customers" breadcrumb={breadcrumbList} />

      <Grid container className="m-3" spacing={2}>
        {/* cards */}
        <Grid className='rounded' size={{ xs: 12, md: 12, lg: 12 }}>
          <Grid container spacing={2}>
            <Grid className='rounded p-3 bg-white' size={{ xs: 12, md: 6, lg: 3 }}>
              <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='fw-bold text-secondary m-0' style={{ fontSize: "smaller", opacity: 0.8 }}>
                    Total Bookings
                  </p>
                  <h5 className='fw-bold text-success m-0'>
                    3982
                  </h5>
                </div>
                <div className='text-success' style={{ opacity: 0.7 }}>
                  <LibraryAddCheckOutlined style={{ fontSize: "2.5rem" }} />
                </div>
              </div>
            </Grid>
            <Grid className='rounded p-3 bg-white' size={{ xs: 12, md: 6, lg: 3 }}>
              <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='fw-bold text-secondary m-0' style={{ fontSize: "smaller", opacity: 0.8 }}>
                    Total Bookings
                  </p>
                  <h5 className='fw-bold text-success m-0'>
                    3982
                  </h5>
                </div>
                <div className='text-success' style={{ opacity: 0.7 }}>
                  <LibraryAddCheckOutlined style={{ fontSize: "2.5rem" }} />
                </div>
              </div>
            </Grid>
            <Grid className='rounded p-3 bg-white' size={{ xs: 12, md: 6, lg: 3 }}>
              <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='fw-bold text-secondary m-0' style={{ fontSize: "smaller", opacity: 0.8 }}>
                    Total Bookings
                  </p>
                  <h5 className='fw-bold text-success m-0'>
                    3982
                  </h5>
                </div>
                <div className='text-success' style={{ opacity: 0.7 }}>
                  <LibraryAddCheckOutlined style={{ fontSize: "2.5rem" }} />
                </div>
              </div>
            </Grid>
            <Grid className='rounded p-3 bg-white' size={{ xs: 12, md: 6, lg: 3 }}>
              <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <p className='fw-bold text-secondary m-0' style={{ fontSize: "smaller", opacity: 0.8 }}>
                    Total Bookings
                  </p>
                  <h5 className='fw-bold text-success m-0'>
                    3982
                  </h5>
                </div>
                <div className='text-success' style={{ opacity: 0.7 }}>
                  <LibraryAddCheckOutlined style={{ fontSize: "2.5rem" }} />
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
            <div style={{ maxWidth: 250 }} className='w-100'>
              <CustomPolarRadar />
            </div>
          </div>
        </Grid>
        <Grid className='rounded bg-white p-3' size={{ xs: 12, md: 6, lg: 4 }}>
          <div className='mb-3 d-flex justify-content-between align-items-start'>
            <h6 className='fw-bold text-success'>
              New Customers
            </h6>
            <div className="d-flex justify-content-center align-items-center px-2 rounded gap-1" onClick={() => { setOpen(true) }} style={{ height: 28, backgroundColor: "#97D0B6", }}>
              <p className='m-0 fw-bold' style={{ fontSize: "small" }}>
                <SegmentOutlined style={{ fontSize: "1rem" }} />
              </p>
              <p className='m-0' style={{ fontSize: "small" }}>
                View all
              </p>
            </div>
          </div>

          <div>
            <TableComponentSmall columnDefs={columnDefs} rowData={rowData} title={<Title />} height={"80%"} />
          </div>
        </Grid>
        <Grid className='rounded bg-white p-3' size={{ xs: 12, md: 6, lg: 8 }}>
          <div className='mb-3 d-flex justify-content-between align-items-start'>
            <h6 className='fw-bold text-success'>
              Latest Bookings
            </h6>
            <div className="d-flex justify-content-center align-items-center px-2 rounded gap-1" onClick={() => { setOpen(true) }} style={{ height: 28, backgroundColor: "#97D0B6", }}>
              <p className='m-0 fw-bold' style={{ fontSize: "small" }}>
                <SegmentOutlined style={{ fontSize: "1rem" }} />
              </p>
              <p className='m-0' style={{ fontSize: "small" }}>
                View all
              </p>
            </div>
          </div>

          <div>
            <TableComponentSmall columnDefs={columnDefsBookings} rowData={rowData} title={<Title />} height={"80%"} />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CustomerDashboard