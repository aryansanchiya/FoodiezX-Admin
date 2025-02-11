import React from 'react'
import HeaderComponent from '../componenets/Header';
import TableComponent from '../componenets/TableComponent';
import { AddOutlined, DeleteOutline, EditOutlined, VisibilityOutlined } from '@mui/icons-material';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const breadcrumbList = [
    { link: "/", name: "restaurants", current: true }
];

const Restaurant = () => {


    const ActionComponent = ({ data }) => {
        return (
            <>
                <div className='d-flex gap-2 h-100 align-items-center'>
                    <Link to={"/restaurants/view/1"}>
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
            rowData.push({ rest_name: "MacD", number: 8378277773, rest_time: "09:00 - 22:00" });
            rowData.push({ rest_name: "Drizzles", number: 9388277718, rest_time: "10:00 - 23:00" });
        }
        return rowData;
    })();

    const columnDefs = [
        { field: "rest_name", headerName: "Name" },
        { field: "number", headerName: "Contact no." },
        { field: "rest_time", headerName: "Restaurant time" },
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
            Restaurants
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
            <HeaderComponent title="Restaurants" breadcrumb={breadcrumbList} />

            <TableComponent columnDefs={columnDefs} rowData={rowData} buttons={<Buttons />} title={<Title />} />
        </div>
    )
}

export default Restaurant