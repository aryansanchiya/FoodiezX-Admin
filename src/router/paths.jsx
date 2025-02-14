import { CollectionsBookmarkOutlined, CreditScoreOutlined, DashboardOutlined, DiscountOutlined, Diversity1Outlined, HistoryOutlined, InfoOutlined, PersonOutline, StorefrontOutlined } from "@mui/icons-material";
import Login from "../auth/Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Discounts from "../pages/Discounts";
import Restaurant from "../pages/Restaurant";
import RestaurantAdd from "../pages/RestaurantAdd";
import RestaurantView from "../pages/RestaurantView";
import CustomerDashboard from "../pages/CustomerDashboard";
import CustomerList from "../pages/CustomersList";
import CustomerView from "../pages/CustomerView";
import BookingsList from "../pages/Bookings";
import RestaurantDashboard from "../pages/RestaurantDashboard";
import BookingCanceledList from "../pages/BookingCanceled";

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
        element: <RestaurantDashboard />,
        icon: <StorefrontOutlined fontSize='small' />
    },
    {
        path: "/restaurants/list",
        title: "Restaurants",
        element: <Restaurant />,
        icon: <StorefrontOutlined fontSize='small' />,
        hide: true
    },
    {
        path: "/restaurants/add",
        title: "Restaurants",
        element: <RestaurantAdd />,
        icon: <StorefrontOutlined fontSize='small' />,
        hide: true
    },
    {
        path: "/restaurants/view/:id",
        title: "Name of Restaurant",
        element: <RestaurantView />,
        icon: <StorefrontOutlined fontSize='small' />,
        hide: true
    },
    {
        path: "/customers",
        title: "Customers",
        element: <CustomerDashboard />,
        icon: <Diversity1Outlined fontSize='small' />
    },
    {
        path: "/customers/list",
        title: "Customers",
        element: <CustomerList />,
        icon: <Diversity1Outlined fontSize='small' />,
        hide: true
    },
    {
        path: "/customers/view/:id",
        title: "Customers",
        element: <CustomerView />,
        icon: <Diversity1Outlined fontSize='small' />,
        hide: true
    },
    {
        path: "/bookings",
        title: "Bookings",
        element: <BookingsList />,
        icon: <CreditScoreOutlined fontSize='small' />
    },
    {
        path: "/bookings/canceled",
        title: "Bookings",
        element: <BookingCanceledList />,
        icon: <CreditScoreOutlined fontSize='small' />,
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