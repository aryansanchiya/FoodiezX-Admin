import React, { useState } from 'react'
import HeaderComponent from '../componenets/Header';
import TableComponent from '../componenets/TableComponent';
import PopupComponent from '../componenets/PopupComponent';
import { AddOutlined, DeleteOutline, EditOutlined } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';
import DatetimeComponent from '../componenets/DatetimeComponent';
import { minWidth } from '@mui/system';
import dayjs from 'dayjs';
import toast from 'react-hot-toast';

const breadcrumbList = [
  { link: "/", name: "discounts", current: true }
];

const EditForm = ({ handleSave, values, handleChange, loading }) => {

  const handleChangeDate = (newValue) => {

    console.log({ newValue })
    handleChange(key, newValue);
  }

  return (
    <form className='input-container' onSubmit={handleSave}>

      <Grid container className="my-4" spacing={2}>
        {
          Object.entries(values).map(([key, item]) => (
            <Grid size={{ xs: 12, md: 12, lg: 12 }}>
              {
                item.key == "datetime" ?
                  <div className='position-relative'>
                    <label className='text-secondary fw-bold mb-1'>{item.label}</label>
                    <DatetimeComponent value={item.value} handleChange={handleChangeDate} />
                  </div>
                  :
                  <div className='position-relative'>
                    <label className='text-secondary fw-bold mb-1'>{item.label}</label>
                    <input
                      type={"text"}
                      className="border rounded p-2 w-full w-100"
                      placeholder={item.placeholder}
                      onChange={(e) => { handleChange(key, e.target.value) }}
                      value={item.value}
                    />
                  </div>
              }
            </Grid>
          ))
        }
        <Grid size={{ xs: 12, md: 12, lg: 12 }}>
        </Grid>
      </Grid>

      <div className='d-flex justify-content-center mb-2'>
        <div style={{ maxWidth: 200 }} className='w-100'>
          <button
            onClick={handleSave}
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
  )
}

const Discounts = () => {

  const rowData = (() => {
    const rowData = [];
    for (let i = 0; i < 50; i++) {
      rowData.push({ rest_name: "MacD", name: "Flat", discount: 20, validity: "10/12/2024 12:00", status: i % 2 == 0 });
      rowData.push({ rest_name: "Drizzles", name: "Platinum", discount: 19, validity: "10/12/2024 12:00", status: i % 2 == 0 });
    }
    return rowData;
  })();

  const StatusComponent = ({ data }) => {
    return (
      <span className={data.status ? "text-success fw-bold" : "text-danger fw-bold"}>{data.status ? "Active" : "Expired"}</span>
    )
  }

  const ActionComponent = ({ data }) => {

    const [open, setOpen] = useState(false);
    const inputs = {
      rest_name: {
        placeholder: "Enter restaurant name",
        label: "Restaurant name",
        value: data?.rest_name
      },
      name: {
        placeholder: "Enter discount name",
        label: "Discount name",
        value: data?.name
      },
      discount: {
        placeholder: "Enter discount in percentage",
        label: "Discount (in percentage)",
        value: data?.discount,
        ispwd: true
      },
      validity: {
        placeholder: "Enter validity",
        label: "Validity",
        value: dayjs(data?.validity, "DD/MM/YYYY HH:mm") || null,
        key: "datetime"
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
      setOpen(false);
    }

    return (
      <>
        <div className='d-flex gap-2 h-100 align-items-center'>
          <div className='text-success cursor-pointer' onClick={() => { setOpen(true) }}>
            <EditOutlined fontSize='small' />
          </div>
          <div className='text-danger cursor-pointer' onClick={() => { toast.success("Deleted successfully!") }}>
            <DeleteOutline fontSize='small' />
          </div>
        </div>
        <PopupComponent body={<EditForm values={values} handleSave={handleSave} handleChange={handleChange} loading={loading} />} open={open} title="Edit" handleClose={() => { setOpen(false) }} />
      </>
    )
  }

  const columnDefs = [
    { field: "rest_name" },
    { field: "name" },
    { field: "discount" },
    { field: "validity", minWidth: 150 },
    {
      field: "status",
      headerName: "Status",
      cellRenderer: StatusComponent, // Pass the component directly as a reference
    },
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
      <span className='text-secondary'>Active:</span> 100 &nbsp;
      <span className='text-secondary'>∙ Expired:</span> 100
    </p>
  );

  // add form

  const [open, setOpen] = useState(false);
  const inputs = {
    rest_name: {
      placeholder: "Enter restaurant name",
      label: "Restaurant name",
      value: ""
    },
    name: {
      placeholder: "Enter discount name",
      label: "Discount name",
      value: ""
    },
    discount: {
      placeholder: "Enter discount in percentage",
      label: "Discount (in percentage)",
      value: ""
    },
    validity: {
      placeholder: "Enter validity",
      label: "Validity",
      value: null,
      key: "datetime"
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
    setOpen(false);
  }

  const Buttons = () => {
    return (
      <div className="d-flex justify-content-center align-items-center px-2 rounded cursor-pointer gap-1" onClick={()=>{setOpen(true)}} style={{ height: 28, backgroundColor: "#97D0B6", }}>
        <p className='m-0 fw-bold' style={{ fontSize: "small" }}>
          <AddOutlined style={{ fontSize: "1rem" }} />
        </p>
        <p className='m-0' style={{ fontSize: "small" }}>
          Add
        </p>
      </div>
    )
  }

  return (
    <div className='page-container'>
      <HeaderComponent title="Discounts" breadcrumb={breadcrumbList} />
      <TableComponent columnDefs={columnDefs} rowData={rowData} buttons={<Buttons />} title={<Title />} />

      <PopupComponent body={<EditForm values={values} handleSave={handleSave} handleChange={handleChange} loading={loading} />} open={open} title="Add Discount" handleClose={() => { setOpen(false) }} />
    </div>
  )
}

export default Discounts;