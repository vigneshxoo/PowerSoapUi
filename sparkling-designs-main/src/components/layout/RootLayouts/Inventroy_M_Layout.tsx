import { InventoryManagement_Nav } from "../navconfig/navConfig";
import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
export function InventoryManagemntLayout() {
    return (
        <>
            <Header navItems={InventoryManagement_Nav} />
            <Sidebar navItems={InventoryManagement_Nav} />
            <Outlet />
        </>
    );
}