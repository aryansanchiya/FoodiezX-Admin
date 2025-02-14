import React from 'react'
import HeaderComponent from '../componenets/Header';
import TableComponent from '../componenets/TableComponent';
import { AddOutlined, DeleteOutline, EditOutlined, VisibilityOutlined } from '@mui/icons-material';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const breadcrumbList = [
    { link: "/customers", name: "customers", current: false },
    { link: "/", name: "list", current: true }
];

const CustomerList = () => {


    const ActionComponent = ({ data }) => {
        return (
            <>
                <div className='d-flex gap-2 h-100 align-items-center'>
                    <Link to={"/customers/view/1"}>
                        <div className='text-secondary cursor-pointer'>
                            <VisibilityOutlined fontSize='small' />
                        </div>
                    </Link>
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

    const rowData = (() => {
        const rowData = [];
        for (let i = 0; i < 50; i++) {
            rowData.push({ id: "001", username: "meetgohel", rating: 4.5, restaurant: "MacD", datetime: "10/11/2024 11:11:00" });
            rowData.push({ id: "002", username: "aryansanchiya", rating: 3.3, restaurant: "Drizzle's", datetime: "10/11/2024 11:11:00" });
        }
        return rowData;
    })();

    const columnDefs = [
        { field: "id", flex: 0.5, minWidth: 60 },
        { field: "username", flex: 1 },
        { field: "datetime", headerName: "Date & Time", flex: 1 },
        {
            field: "",
            headerName: "Action",
            pinned: 'right',
            width: 130,
            cellRenderer: ActionComponent, // Pass the component directly as a reference
        }
    ];

    const Title = () => (
        <p className='m-0'>
            Customers
        </p>
    );

    const Buttons = () => {
        return (
            <Link to="/restaurants/add">
                <div className="d-flex text-dark justify-content-center align-items-center px-2 rounded cursor-pointer gap-1" style={{ height: 28, backgroundColor: "#97D0B6", }}>
                    <p className='m-0 fw-bold' style={{ fontSize: "small" }}>
                        <AddOutlined style={{ fontSize: "1rem" }} />
                    </p>
                    <p className='m-0' style={{ fontSize: "small" }}>
                        Add
                    </p>
                </div>
            </Link>
        )
    }

    return (
        <div className='page-container'>
            <HeaderComponent title="Customers" breadcrumb={breadcrumbList} />

            <TableComponent columnDefs={columnDefs} rowData={rowData} title={<Title />} />
        </div>
    )
}

export default CustomerList