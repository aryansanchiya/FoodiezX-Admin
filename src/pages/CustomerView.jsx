import React, { useState } from 'react';
import HeaderComponent from '../componenets/Header';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { DeleteOutline, Visibility, VisibilityOff } from '@mui/icons-material';
import toast from 'react-hot-toast';
import TableComponentSmall from '../componenets/TableComponentSmall';

const breadcrumbList = [
    { link: "/customers", name: "customers", current: false },
    { link: "/customers/list", name: "list", current: false },
    { link: "/", name: "customer", current: true },
];

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
        minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: '#198754',
    fontSize: '0.75rem',
    padding: '0px 16px',
    minHeight: 40,
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        color: '#198754',
        opacity: 1,
    },
    '&.Mui-selected': {
        color: '#198754',
        fontWeight: '600',
    },
    '&.Mui-focusVisible': {
        backgroundColor: '#198754',
    },
}));

const BasicInformation = () => {

    const inputs = {
        username: {
            placeholder: "Enter username",
            label: "Username",
            value: ""
        },
        fullname: {
            placeholder: "Enter full name",
            label: "Fullname",
            value: ""
        },
        email: {
            placeholder: "Enter email",
            label: "Email",
            value: ""
        },
        number: {
            placeholder: "Enter phone number",
            label: "Phone Number",
            value: ""
        },
        role: {
            placeholder: "Enter role",
            label: "Role",
            value: ""
        },
    }

    const [values, setValues] = useState(inputs);
    const [loading, setLoading] = useState(false);

    const handleChange = (name, value) => {
        setValues((prevValues) => ({
            ...prevValues,
            [name]: { ...prevValues[name], value }
        }));
    };

    const handleSave = (event) => {
        event.preventDefault();

        console.log(values)
    }


    return (
        <div className='p-4 py-3'>
            <form className='input-container' onSubmit={handleSave}>

                <Grid container spacing={2} className="my-3 mb-4">
                    {
                        Object.entries(values).map(([key, item]) => (
                            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                                <div className='pb-0 position-relative'>
                                    <label className='text-secondary fw-bold mb-1'>{item.label}</label>
                                    <input
                                        type={"text"}
                                        className="border rounded p-2 w-full w-100"
                                        placeholder={item.placeholder}
                                        onChange={(e) => { handleChange(key, e.target.value) }}
                                        value={item.value}
                                    />
                                </div>
                            </Grid>
                        ))
                    }
                </Grid>

                <div className='d-flex justify-content-center mt-4 mb-2'>
                    <div style={{ maxWidth: 200 }} className='w-100'>
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-success w-100 text-white px-3 py-2 rounded w-full mt-2"
                            style={{ opacity: loading ? 0.7 : 1 }}
                        >
                            Submit
                        </button>
                    </div>
                </div>

            </form>
        </div>
    )
}

const BookingHistory = () => {

    const ActionComponent = ({ data }) => {
        return (
            <>
                <div className='d-flex gap-2 h-100 align-items-center'>
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
            rowData.push({ id: "001", restaurant: "MacD", members: 6, amount: 1300, status: 0, datetime: "10/11/2024 11:11:00" });
            rowData.push({ id: "002", restaurant: "Drizzle's", members: 4, amount: 4200, status: 1, datetime: "11/11/2024 11:12:00" });
            rowData.push({ id: "003", restaurant: "RK", members: 9, amount: 3600, status: 2, datetime: "10/12/2024 12:11:00" });
        }
        return rowData;
    })();

    const columnDefs = [
        { field: "id", flex: 0.5 },
        { field: "restaurant", flex: 1 },
        { field: "members", flex: 0.5 },
        { field: "amount", flex: 0.5 },
        { field: "status", flex: 0.5, cellRenderer: StatusComponent },
        { field: "datetime", headerName: "Date & Time", flex: 1 },
        {
            field: "",
            headerName: "Action",
            pinned: 'right',
            width: 80,
            minWidth: 80,
            cellRenderer: ActionComponent, // Pass the component directly as a reference
            filter: false
        }
    ];

    const Title = () => (
        <p className='m-0'>
            Reviews
        </p>
    );

    return (
        <div className='p-3'>
            <TableComponentSmall columnDefs={columnDefs} rowData={rowData} title={<Title />} height={"100%"} pagination={true} tabs={true} />
        </div>
    )
}

const PaymentHistory = () => {

    const ActionComponent = ({ data }) => {
        return (
            <>
                <div className='d-flex gap-2 h-100 align-items-center'>
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
            rowData.push({ transaction_id: "001432243443", restaurant: "MacD", method: "UPI", amount: 1300, status: 0, datetime: "10/11/2024 11:11:00" });
            rowData.push({ transaction_id: "002243123234", restaurant: "Drizzle's", method: "NET BANKING", amount: 4200, status: 1, datetime: "11/11/2024 11:12:00" });
            rowData.push({ transaction_id: "003423431333", restaurant: "RK", method: "CREDIT CARD", amount: 3600, status: 2, datetime: "10/12/2024 12:11:00" });
        }
        return rowData;
    })();

    const columnDefs = [
        { field: "transaction_id", flex: 0.6, headerName: "Transaction Id", minWidth: 130 },
        { field: "restaurant", flex: 1 },
        { field: "amount", flex: 0.5 },
        { field: "method", flex: 0.7, minWidth: 130 },
        { field: "status", flex: 0.5, cellRenderer: StatusComponent },
        { field: "datetime", headerName: "Date & Time", flex: 1 },
        {
            field: "",
            headerName: "Action",
            pinned: 'right',
            width: 80,
            minWidth: 80,
            cellRenderer: ActionComponent, // Pass the component directly as a reference
            filter: false
        }
    ];

    const Title = () => (
        <p className='m-0'>
            Reviews
        </p>
    );

    return (
        <div className='p-3'>
            <TableComponentSmall columnDefs={columnDefs} rowData={rowData} title={<Title />} height={"100%"} pagination={true} tabs={true} />
        </div>
    )
}

const RestaurantView = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const AntTabs = styled(Tabs)({
        borderBottom: '1px solid #e8e8e8',
        '& .MuiTabs-indicator': {
            backgroundColor: '#198754',
        },
        minHeight: 20
    });

    return (
        <div className='page-container'>
            <HeaderComponent title={"Customer"} breadcrumb={breadcrumbList} />


            <div className='bg-white rounded m-3'>
                <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                    <AntTab label="Basic Details" />
                    <AntTab label="Booking History" />
                    <AntTab label="Payment History" />
                </AntTabs>

                {
                    value == 0 ? <BasicInformation /> : value == 1 ? <BookingHistory /> : <PaymentHistory />
                }

            </div>
        </div>
    )
}

export default RestaurantView;