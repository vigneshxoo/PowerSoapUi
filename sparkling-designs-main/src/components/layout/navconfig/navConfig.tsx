import { ShoppingCart, History, Package, Tags } from "lucide-react";

interface NavItem {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    active?: boolean;
    badge?: number;
    link: any
}

export const InventoryManagement_Nav: NavItem[] = [
    { icon: ShoppingCart, label: "Order Product", link: "/products" },
    { icon: History, label: "Order History", link: "/orders" },
    { icon: Package, label: "Stock In Hand", link: "/stock" },
    { icon: Tags, label: "Scheme", badge: 3, link: "/schema" },
];

export const order_management_Nav = [
    { icon: ShoppingCart, label: "Sales Order", link: "/salesOrder" },
    { icon: History, label: "Van Order", link: "/vanOrder" },
    { icon: Package, label: "Retailer Order", link: "/Retialer" },

];

export const Employee_Management_Nav = [
    { icon: Package, label: "Employees", link: "/emp" },
];

export const ReatilerManageMent_Nav = [

    { icon: ShoppingCart, label: "Onboarded Retailer", link: "/onboard_reaitler" },
    { icon: History, label: "Retailer Request", link: "/Reatiler_Request" },
]
export const ReatilerManagement_Inside_Nav = [
    { icon: ShoppingCart, label: "Take Order", link: "/Reaitler_takeorder" },
    { icon: History, label: "Order History", link: "/Reatiler_history" },
    { icon: History, label: "Outstanding", link: "/Reatiler_outstanding" },
]
export const SheduleManagement_Nav = [
    { icon: ShoppingCart, label: "Daily Shedule", link: "/daily-shedule" },
    { icon: History, label: "Unit Grouping", link: "/unit_group" },
]

export const DailySummeryManagement_Nav = [
    { icon: ShoppingCart, label: "Daily Summery", link: "/summery" },
]
export const ReportAnalytics_Nav = [
    { icon: ShoppingCart, label: "Reports and Analytics", link: "/report" },
];
export const Communication_Nav = [
    { icon: ShoppingCart, label: "Notication List", link: "/message" },
]


export const Policy_nav = [
    { icon: ShoppingCart, label: "Privacy Policy ", link: "/privacy_policy" },
    { icon: History, label: "Terms And Conditions", link: "/Condition" },
    { icon: History, label: "About Us", link: "/about" },
]