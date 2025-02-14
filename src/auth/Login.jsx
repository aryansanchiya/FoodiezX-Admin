import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { setToLocal } from './authentication';

const Login = () => {

  const navigate = useNavigate();

  const inputs = {
    username: {
      placeholder: "Enter username",
      label: "Username",
      value: ""
    },
    password: {
      placeholder: "Enter password",
      label: "Password",
      value: ""
    },
  }

  const [values, setValues] = useState(inputs);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: { ...prevValues[name], value }
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();

    setLoading(true);
    if (values.password.value == "Admin@123" && values.username.value == "admin") {
      setToLocal(JSON.stringify({ username: values.username.value, password: values.password.value }));
      navigate('/');
    } else {
      toast.error("Invalid credentials!")
    }
    setLoading(false);
  }

  return (
    <div className='bg-white p-4 rounded'>
      <h3 className='m-0 fw-bold mt-2'>Login</h3>
      <div className='ui-divider-horizontal my-3 w-100'></div>

      {/* inputs */}
      <form className='input-container' onSubmit={handleSave}>

        {
          Object.entries(values).map(([key, item]) => (
            <div className='pb-3 position-relative'>
              <label className='text-dark fw-bold mb-1'>{item.label}</label>
              <input
                type={key == "password" ? (visible ? "text" : "password") : "text"}
                className="border rounded p-2 w-full w-100"
                placeholder={item.placeholder}
                onChange={(e) => { handleChange(key, e.target.value) }}
                value={item.value}
              />
              {
                key == "password" && <div style={{ position: 'absolute', bottom: 24, right: 12, cursor: 'pointer' }} onClick={() => { setVisible(!visible) }}>
                  {
                    !visible ? <Visibility fontSize="small" opacity={0.5} /> : <VisibilityOff fontSize="small" opacity={0.5} />
                  }
                </div>
              }
            </div>
          ))
        }
        <button
          type="submit"
          disabled={loading}
          className="bg-success w-100 text-white px-3 py-2 rounded w-full mt-2"
          style={{ opacity: loading ? 0.7 : 1 }}
        >
          Submit
        </button>

      </form>
    </div>
  )
}

export default Login