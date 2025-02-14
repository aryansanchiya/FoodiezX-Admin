import { createBrowserRouter, redirect } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import SideoffLayout from "../layout/SideoffLayout";
import { mainLayoutPaths, path_sideoff } from "./paths";
import { getFromLocal } from "../auth/authentication";

const authLoader = async () => {
    const user = getFromLocal();
    if (!user) {
        return redirect("/login");
    }
    return null;
};

const mainLayoutPathsProtected = mainLayoutPaths.map(route => ({
    ...route,
    loader: authLoader
}));

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        errorElement: <div>Error 404</div>,
        children: mainLayoutPathsProtected
    },
    {
        element: <SideoffLayout />,
        errorElement: <div>Error 404</div>,
        children: path_sideoff
    },
]);
