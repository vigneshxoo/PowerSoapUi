import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { order_management_Nav, ReatilerManagement_Inside_Nav, ReatilerManageMent_Nav } from "../navconfig/navConfig";
export function Reatiler_Management_Layout() {
    return (
        <>
            <Header navItems={ReatilerManageMent_Nav} />
            <Sidebar navItems={ReatilerManageMent_Nav} />
            <Outlet />
        </>
    );
}


export function Reatiler_Management_isnide_Layout() {
    return (
        <>
            <Header navItems={ReatilerManagement_Inside_Nav} />
            <Sidebar navItems={ReatilerManagement_Inside_Nav} />
            <Outlet />
        </>
    );
}