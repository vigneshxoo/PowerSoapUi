import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { order_management_Nav, ReatilerManagement_Inside_Nav, ReatilerManageMent_Nav, ReportAnalytics_Nav } from "../navconfig/navConfig";
export function ReportAnalityical_Layout () {
    return (
        <>
            <Header navItems={ReportAnalytics_Nav} />
            <Sidebar navItems={ReportAnalytics_Nav} />
            <Outlet />
        </>
    );
}
