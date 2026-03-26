import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { order_management_Nav, Policy_nav } from "../navconfig/navConfig";
export function Privacy_policy_Layout() {
    return (
        <>
            <Header navItems={Policy_nav} />
            <Sidebar navItems={Policy_nav} />
            <Outlet />
        </>
    );
}