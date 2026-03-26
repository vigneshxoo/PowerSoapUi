import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { order_management_Nav } from "../navconfig/navConfig";
export function OrdeerManagemntLayout() {
    return (
        <>
            <Header navItems={order_management_Nav} />
            <Sidebar navItems={order_management_Nav} />
            <Outlet />
        </>
    );
}