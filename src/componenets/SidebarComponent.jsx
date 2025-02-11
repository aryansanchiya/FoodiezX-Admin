import { DashboardOutlined } from '@mui/icons-material';
import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { mainLayoutPaths } from '../router/paths';
import { RemoveFromLocal } from '../auth/authentication';

const SidebarComponent = () => {

  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const subLocationPathname = "/" + pathname.split("/")[1];

  function handleLogout() {
    const confirm = window.confirm("Are you sure you want to sign out?");
    if (!confirm) {
      return;
    }
    RemoveFromLocal();
    navigate("/login");
  }

  return (
    <div className='w-100 bg-white position-relative' style={{ height: "100vh", borderRight: '1px solid lightgray' }}>
      <div className='ps-3 py-3'>
        <h5 className='fw-bold text-success'>Foodiez-X</h5>
      </div>
      <Sidebar style={{ minWidth: "100%", width: '100%' }} className='border-0'>
        <Menu className='bg-white'>
          {
            mainLayoutPaths.map((item, index) => {

              if (item.hide) {
                return;
              }

              if (item.children) {
                return (
                  <SubMenu
                    className='bg-white sidebar-item-only-text-effect'
                    style={{ height: 'auto', padding: 0, paddingRight: 15, backgroundColor: 'white', borderRight: pathname == item.path && "1px solid #198754", color: subLocationPathname == item.path && "#198754" }}
                    key={index}
                    label={
                      <div
                        className='py-2 bg-white px-3 m-0  d-flex gap-2 '
                        style={{ fontSize: 'small' }}
                      >
                        {item.icon}
                        <p className='m-0'>
                          {item.title}
                        </p>
                      </div>
                    }
                  >

                    {
                      item.children.map((subItem, subIndex) => (
                        <MenuItem
                          style={{ height: 'auto', padding: 0 }}
                          key={index + subIndex}
                          component={
                            <Link to={subItem.path} />
                          }
                        >
                          <div
                            className='py-2 bg-white px-3 m-0  d-flex gap-2 sidebar-item-only-text-effect'
                            style={{ fontSize: 'small', color: (pathname == subItem.path) && "#198754" }}
                          >
                            <div className='vr' style={{ marginLeft: 10, marginRight: 5 }}></div>
                            {subItem.icon}
                            <p className='m-0'>
                              {subItem.title}
                            </p>
                          </div>
                        </MenuItem>
                      ))
                    }

                  </SubMenu>
                )
              }

              return (
                <MenuItem
                  style={{ height: 'auto', padding: 0 }}
                  key={index}
                  component={
                    <Link to={item.path} />
                  }
                >
                  <div
                    className='py-2 bg-white px-3 m-0  d-flex gap-2 sidebar-item-only-text-effect'
                    style={{ fontSize: 'small', color: pathname == item.path && "#198754" }}
                  // style={{ fontSize: 'small', borderRight: pathname == item.path && "1px solid #198754", color: pathname == item.path && "#198754" }}
                  >
                    {item.icon}
                    <p className='m-0'>
                      {item.title}
                    </p>
                  </div>
                </MenuItem>
              )
            })
          }
        </Menu>
      </Sidebar>


      <div className='px-3 w-100' style={{ position: 'absolute', bottom: 20 }}>
        <button
          onClick={handleLogout}
          className="bg-success w-100 text-white px-3 py-2 rounded w-full mt-2 hoverable-button"
          style={{ fontSize: "small" }}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default SidebarComponent