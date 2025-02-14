import React, { useState } from 'react'
import HeaderComponent from '../componenets/Header';
import TableComponent from '../componenets/TableComponent';
import { AddOutlined, CalendarMonthOutlined, DateRange, DeleteOutline, DoDisturbOutlined, EditOutlined, VisibilityOutlined } from '@mui/icons-material';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Popover } from '@mui/material';
import BasicDateRangePicker from '../componenets/DateRangePicker';

const breadcrumbList = [
    { link: "/", name: "restaurants", current: true }
];

const BookingsList = () => {


    const ActionComponent = ({ data }) => {
        return (
            <>
                <div className='d-flex gap-2 h-100 align-items-center'>
                    <div className='text-success cursor-pointer'>
                        <EditOutlined fontSize='small' />
                    </div>
                    <div className='text-danger cursor-pointer' onClick={() => { toast.success("Deleted successfully!") }}>
                        <DeleteOutline fontSize='small' />
                    </div>
                </div>
            </>
        )
    }

    const StatusComponent = ({ data }) => {
        return (
            <span className={data.status == 1 ? "text-success fw-bold" : data.status == 2 ? "text-danger" : "text-warning fw-bold"}>{data.status == 1 ? "Approved" : data.status ? "Rejected" : "Pending"}</span>
        )
    }

    const rowData = (() => {
        const rowData = [];
        for (let i = 0; i < 50; i++) {
            rowData.push({ id: "001", customer: "meetgohel", restaurant: "MacD", members: 6, amount: 1300, status: 0, datetime: "10/11/2024 11:11:00" });
            rowData.push({ id: "002", customer: "aryansanchiya", restaurant: "Drizzle's", members: 4, amount: 4200, status: 1, datetime: "11/11/2024 11:12:00" });
            rowData.push({ id: "003", customer: "shivamshukla", restaurant: "RK", members: 9, amount: 3600, status: 2, datetime: "10/12/2024 12:11:00" });
        }
        return rowData;
    })();

    const columnDefs = [
        { field: "id", flex: 0.5 },
        { field: "customer", flex: 1 },
        { field: "restaurant", flex: 1 },
        { field: "members", flex: 0.5 },
        { field: "amount", flex: 0.5 },
        { field: "status", flex: 0.5, cellRenderer: StatusComponent },
        { field: "datetime", headerName: "Date & Time", flex: 1 },
        {
            field: "",
            headerName: "Action",
            pinned: 'right',
            width: 130,
            cellRenderer: ActionComponent,
            filter: false
        }
    ];

    const Title = () => (
        <p className='m-0'>
            <span className='text-secondary'>Approved:</span> 100 &nbsp;
            <span className='text-secondary'>∙ Rejected:</span> 100 &nbsp;
            <span className='text-secondary'>∙ Pending:</span> 100
        </p>
    );

    const Buttons = () => {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        const open = Boolean(anchorEl);
        const id = open ? 'simple-popover' : undefined;

        return (
            <div className='d-flex gap-1 flex-wrap align-items-end justify-content-end mb-1'>
                <Link to={"/bookings/canceled"}>
                    <div className="d-flex text-dark justify-content-center align-items-center px-2 rounded cursor-pointer gap-1" style={{ height: 28, backgroundColor: "#97D0B6" }}>
                        <p className='m-0 fw-bold' style={{ fontSize: "small" }}>
                            <DoDisturbOutlined style={{ fontSize: "1rem" }} />
                        </p>
                        <p className='m-0' style={{ fontSize: "small" }}>
                            Canceled
                        </p>
                    </div>
                </Link>
                <div className="d-flex text-dark justify-content-center align-items-center px-2 rounded cursor-pointer gap-1" style={{ height: 28, backgroundColor: "#97D0B6", }} onClick={handleClick}>
                    <p className='m-0 fw-bold' style={{ fontSize: "small" }}>
                        <CalendarMonthOutlined style={{ fontSize: "1rem" }} />
                    </p>
                    <p className='m-0' style={{ fontSize: "small" }}>
                        Date
                    </p>
                </div>
                <Popover
                    id={"001"}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <div className='p-3'>
                        <BasicDateRangePicker />
                    </div>
                </Popover>

            </div>
        )
    }

    return (
        <div className='page-container'>
            <HeaderComponent title="Bookings" breadcrumb={breadcrumbList} />

            <TableComponent columnDefs={columnDefs} rowData={rowData} title={<Title />} buttons={<Buttons />} />
        </div>
    )
}

export default BookingsList