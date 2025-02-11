import { DashboardOutlined, DiscountOutlined, HistoryOutlined, InfoOutlined, PersonOutline, StorefrontOutlined } from "@mui/icons-material";
import Login from "../auth/Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Discounts from "../pages/Discounts";
import Restaurant from "../pages/Restaurant";
import RestaurantAdd from "../pages/RestaurantAdd";

export const mainLayoutPaths = [
    {
        path: "/",
        title: "Dashboard",
        element: <Dashboard />,
        icon: <DashboardOutlined fontSize='small' />
    },
    {
        path: "/restaurants",
        title: "Restaurants",
        element: <Restaurant />,
        icon: <StorefrontOutlined fontSize='small' />
    },
    {
        path: "/restaurants/add",
        title: "Restaurants",
        element: <RestaurantAdd />,
        icon: <StorefrontOutlined fontSize='small' />,
        hide: true
    },
    {
        path: "/discounts",
        title: "Discount & Promotions",
        element: <Discounts />,
        icon: <DiscountOutlined fontSize='small' />
    },
    {
        path: "/profile",
        title: "Profile",
        element: <Profile />,
        icon: <PersonOutline fontSize='small' />,
        hide: true
    },
    // {
    //     path: "/profile",
    //     title: "Profile",
    //     element: <Profile />,
    //     icon: <PersonOutline fontSize='small' />,
    //     children: [
    //         {
    //             path: "/profile/user-details",
    //             title: "User Details",
    //             element: <Profile />,
    //             icon: <InfoOutlined fontSize='small' />,
    //         },
    //         {
    //             path: "/profile/order-history",
    //             title: "Order History",
    //             element: <OrderHistory />,
    //             icon: <HistoryOutlined fontSize='small' />,
    //         }
    //     ]
    // }
]

export const path_sideoff = [
    {
        path: "/login",
        title: "Login",
        element: <Login />
    }
]