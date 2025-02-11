import React, { useState } from 'react';
import HeaderComponent from '../componenets/Header';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import toast from 'react-hot-toast';

const breadcrumbList = [
  { link: "/", name: "dashboard", current: false },
  { link: "/", name: "profile", current: true }
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

const Account = () => {

  const inputs = {
    otp: {
      placeholder: "Enter OTP",
      label: "OTP",
      value: ""
    },
    password: {
      placeholder: "Enter password",
      label: "Password",
      value: "",
      ispwd: true
    },
    c_password: {
      placeholder: "Enter confirm password",
      label: "Confirm Password",
      value: "",
      ispwd: true
    },
  }

  const [values, setValues] = useState(inputs);
  const [loading, setLoading] = useState(false);
  const [isOtpClicked, setIsOtpClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: { ...prevValues[name], value }
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();

    if (!isOtpClicked) {
      toast.success("Otp sent successfully!")
      return setIsOtpClicked(true);
    }

    let isEmpty = false;

    Object.entries(values).map(([key, item], index) => {
      if (item.value == "") {
        isEmpty = true;
      }
    });

    if (isEmpty) {
      return toast.error("Please enter all require fields!")
    }

    setLoading(true);
    setTimeout(() => {
      console.log(values);
      setValues(inputs)
      toast.success("Password changed successfully!");
      setLoading(false);
    }, 1000);
  }


  return (
    <div className='p-4 py-3'>
      <form className='input-container' onSubmit={handleSave}>

        {
          isOtpClicked &&
          <Grid container className="my-3 mb-4" spacing={2}>
            {
              Object.entries(values).map(([key, item]) => (
                <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                  <div className='position-relative'>
                    <label className='text-secondary fw-bold mb-1'>{item.label}</label>
                    <input
                      type={item.ispwd ? (visible ? "text" : "password") : "text"}
                      className="border rounded p-2 w-full w-100"
                      placeholder={item.placeholder}
                      onChange={(e) => { handleChange(key, e.target.value) }}
                      value={item.value}
                    />
                    {
                      item.ispwd && <div style={{ position: 'absolute', bottom: 8, right: 12, cursor: 'pointer' }} onClick={() => { setVisible(!visible) }}>
                        {
                          !visible ? <Visibility fontSize="small" opacity={0.5} /> : <VisibilityOff fontSize="small" opacity={0.5} />
                        }
                      </div>
                    }
                  </div>
                </Grid>
              ))
            }
          </Grid>
        }

        <div className='d-flex justify-content-center mb-2'>
          <div style={{ maxWidth: 200 }} className='w-100'>
            <button
              onClick={handleSave}
              type="submit"
              disabled={loading}
              className="bg-success w-100 text-white px-3 py-2 rounded w-full mt-2"
              style={{ opacity: loading ? 0.7 : 1 }}
            >
              {isOtpClicked ? "Submit" : "Send OTP"}
            </button>
          </div>
        </div>

      </form>
    </div>
  )
}

const Profile = () => {

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
      <HeaderComponent title={"Profile"} breadcrumb={breadcrumbList} />


      <div className='bg-white rounded m-3'>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Basic Details" />
          <AntTab label="Change Password" />
        </AntTabs>

        {
          value == 0 ? <BasicInformation /> : <Account />
        }

      </div>
    </div>
  )
}

export default Profile