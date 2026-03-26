import { InventoryManagement_Nav } from "../navconfig/navConfig";
import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { Employee_Management_Nav } from "../navconfig/navConfig";
export function Employee_Management_Layout() {
    return (
        <>
            <Header navItems={Employee_Management_Nav} />
            <Sidebar navItems={Employee_Management_Nav} />
            <Outlet />
        </>
    );
}
