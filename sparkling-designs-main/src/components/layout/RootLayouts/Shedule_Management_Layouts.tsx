

import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { order_management_Nav, ReatilerManagement_Inside_Nav, ReatilerManageMent_Nav, SheduleManagement_Nav } from "../navconfig/navConfig";
export function Shedule_Management_Layouts() {
    return (
        <>
            <Header navItems={SheduleManagement_Nav} />
            <Sidebar navItems={SheduleManagement_Nav} />
            <Outlet />
        </>
    );
}
