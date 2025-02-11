import { CloseOutlined, NotificationsOutlined, PersonOutline } from '@mui/icons-material';
import { Drawer } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = ({ list }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb m-0" style={{ fontSize: "small" }}>
        {
          list.map((item) => {
            if (item.current) {
              return <li class="breadcrumb-item active" aria-current="page">{item.name}</li>
            }
            return (
              <li class="breadcrumb-item"> <Link to={item.link}>{item.name}</Link> </li>
            )
          })
        }
      </ol>
    </nav>
  )
}

const HeaderComponent = ({ title, notification, profile, breadcrumb }) => {

  const [isOpen, setIsOpen] = useState(false);

  const notifications = [
    { title: "New Message", des: "You have a new message from John." },
    { title: "System Update", des: "System maintenance is scheduled for tomorrow." },
    { title: "System Update", des: "System maintenance is scheduled for tomorrow." },
    { title: "System Update", des: "System maintenance is scheduled for tomorrow." },
    { title: "System Update", des: "System maintenance is scheduled for tomorrow." },
    { title: "System Update", des: "System maintenance is scheduled for tomorrow." },
    { title: "System Update", des: "System maintenance is scheduled for tomorrow." },
    { title: "System Update", des: "System maintenance is scheduled for tomorrow." },
    { title: "System Update", des: "System maintenance is scheduled for tomorrow." },
    { title: "System Update", des: "System maintenance is scheduled for tomorrow." },
    { title: "System Update", des: "System maintenance is scheduled for tomorrow." },
    { title: "System Update", des: "System maintenance is scheduled for tomorrow." },
    { title: "System Update", des: "System maintenance is scheduled for tomorrow." },
  ];

  const NotificationList = ({ notifications }) => {
    return (
      notifications.length > 0 ? (
        notifications.map((notification, index) => (
          <div key={index} className='notification-item d-flex flex-column gap-1' >
            <h6 className='fw-bold text-success m-0' style={{ fontSize: "small" }}>
              {notification.title || 'No Title'}
            </h6>
            <p className='text-muted m-0' style={{ fontSize: "small", opacity: 0.6 }}>
              {notification.des || 'No Description'}
            </p>
          </div>
        ))
      ) : (
        <p className='text-muted'>No notifications available.</p>
      )
    );
  };

  return (
    <>
      <div className="header-container p-3 py-2 d-flex align-items-center pe-5" style={{zIndex: 3}}>
        <div>
          <h5 className="m-0 ml-3 fw-bold text-success">{title || "Title"}</h5>
          {
            breadcrumb &&
            <div className='mb-1'>
              <BreadCrumb list={breadcrumb} />
            </div>
          }
        </div>
        <div className="text-success cursor-pointer h-100 d-flex gap-2">
          {
            notification && <div onClick={() => { setIsOpen(true) }} className='h-100 d-flex justify-content-center'> <NotificationsOutlined fontSize='small' /> </div>
          }
          {
            profile &&
            <Link to={"/profile"} className='h-100 d-flex justify-content-center text-success'>
              <PersonOutline fontSize='small' />
            </Link>
          }
        </div>
      </div>

      <Drawer open={isOpen} onClose={() => { setIsOpen(false) }} anchor='right'>
        <div style={{ width: 250 }} className='position-relative h-100'>
          <div className='p-3'>
            <div className='d-flex justify-content-between text-success border-bottom mb-3 py-2'>
              <h6 className='fw-bold'>Notifications</h6>
              <div onClick={() => { setIsOpen(false) }} className='h-100 d-flex justify-content-center cursor-pointer'>
                <CloseOutlined fontSize='small' />
              </div>
            </div>
            <div className='d-flex flex-column gap-3' style={{ overflowY: 'scroll' }}>
              <NotificationList notifications={notifications} />
            </div>
          </div>
          <div style={{ position: "sticky", bottom: 0, width: 250 }} onClick={() => { setIsOpen(false) }} className='py-3 bg-success text-white hoverable-button d-flex justify-content-center cursor-pointer'>
            <h6 className='fw-bold m-0'>Remove all</h6>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default HeaderComponent;
