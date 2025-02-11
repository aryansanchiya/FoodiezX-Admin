import React, { useState } from 'react';
import HeaderComponent from '../componenets/Header';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import toast from 'react-hot-toast';

const breadcrumbList = [
    { link: "/restaurants", name: "restaurants", current: false },
    { link: "/", name: "add", current: true },
];

const RestaurantAdd = () => {


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
        <div className='page-container'>
            <HeaderComponent title="Add Restaurant" breadcrumb={breadcrumbList} />

            <div className='bg-white p-3 m-3 rounded'>
                <div>
                    <form className='input-container' onSubmit={handleSave}>

                        <Grid container spacing={2} className="mb-4">
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
            </div>
        </div>
    )
}

export default RestaurantAdd