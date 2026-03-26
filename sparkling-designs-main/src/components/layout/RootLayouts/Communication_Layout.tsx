import { Communication_Nav, InventoryManagement_Nav } from "../navconfig/navConfig";
import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { DailySummeryManagement_Nav } from "../navconfig/navConfig";
export function Communication_Layout() {
    return (
        <>
            <Header navItems={Communication_Nav} />
            <Sidebar navItems={Communication_Nav} />
            <Outlet />
        </>
    );
}
