import { createBrowserRouter, useNavigate, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { mainLayoutPaths, path_sideoff } from "./paths";
import SideoffLayout from "../layout/SideoffLayout";

const mainLayoutPathsSorted = [];

for (const item of mainLayoutPaths) {
    if (item.children) {
        for (const subItem of item.children) {
            mainLayoutPathsSorted.push(subItem)
        }
        break;
    }
    mainLayoutPathsSorted.push(item);
}

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        errorElement: <div>Error 404</div>,
        children: mainLayoutPathsSorted
    },
    {
        element: <SideoffLayout />,
        errorElement: <div>Error 404</div>,
        children: path_sideoff
    }
])