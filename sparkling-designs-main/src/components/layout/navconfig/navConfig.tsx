import { useNavigate } from 'react-router-dom';
import { LuMessageCircleMore } from "react-icons/lu";

import { 
    ShoppingBag, 
    History, 
    Boxes, 
    Tags, 
    FileText, 
    Truck, 
    Store, 
    Users, 
    Building2, 
    UserPlus, 
    ListPlus, 
    ScrollText, 
    Wallet, 
    CalendarClock, 
    Layers, 
    BarChart3, 
    PieChart, 
    Bell, 
    ShieldCheck, 
    FileSignature, 
    Info 
} from "lucide-react";



interface NavItem {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    active?: boolean;
    badge?: number;
    link: any
    module?:string
}
export const InventoryManagement_Nav: NavItem[] = [
    { icon: ShoppingBag, label: "Order Product", link: "/products",module:"InventoryManagement" },
    { icon: History, label: "Order History", link: "/orders" },
    { icon: Boxes, label: "Stock In Hand", link: "/stock" },
    { icon: Tags, label: "Scheme", badge: 3, link: "/schema" },
];

export const order_management_Nav = [
    { icon: FileText, label: "Sales Order", link: "/salesOrder",module:"Order management" },
    { icon: Truck, label: "Van Order", link: "/vanOrder" },
    { icon: Store, label: "Retailer Order", link: "/Retialer" },
];

export const Employee_Management_Nav = [
    { icon: Users, label: "Employees", link: "/emp" ,module:"Employee Management"},
];

export const ReatilerManageMent_Nav = [
    { icon: Building2, label: "Onboarded Retailer", link: "/onboard_reaitler" ,module:"ReatilerManageMent"},
    { icon: UserPlus, label: "Retailer Request", link: "/Reatiler_Request" },
];

export const ReatilerManagement_Inside_Nav = [
    { icon: ListPlus, label: "Take Order", link: "/Reaitler_takeorder" ,module:"ReatilerManageMent"},
    { icon: ScrollText, label: "Order History", link: "/Reatiler_history" },
    { icon: Wallet, label: "Outstanding", link: "/Reatiler_outstanding" },
];

export const SheduleManagement_Nav = [
    { icon: CalendarClock, label: "Daily Shedule", link: "/daily-shedule",module:"SheduleManagement" },
    { icon: Layers, label: "Unit Grouping", link: "/unit_group" },
];

export const DailySummeryManagement_Nav = [
    { icon: BarChart3, label: "Daily Summery", link: "/summery" ,module:"DailySummeryManagement"},
];

export const ReportAnalytics_Nav = [
    { icon: PieChart, label: "Reports and Analytics", link: "/report",module:"ReportAnalytics" },
];

export const Communication_Nav = [
    { icon: Bell, label: "Notication List", link: "/message",module:"Communication" },
];

export const Policy_nav = [
    { icon: ShieldCheck, label: "Privacy Policy ", link: "/privacy_policy" ,module:"Policy"},
    { icon: FileSignature, label: "Terms And Conditions", link: "/Condition" },
    { icon: Info, label: "About Us", link: "/about" },
];