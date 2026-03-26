import { InventoryManagement_Nav } from "../navconfig/navConfig";
import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { DailySummeryManagement_Nav } from "../navconfig/navConfig";
export function SummeryMnagemet_Layout() {
    return (
        <>
            <Header navItems={DailySummeryManagement_Nav} />
            <Sidebar navItems={DailySummeryManagement_Nav} />
            <Outlet />
        </>
    );
}
