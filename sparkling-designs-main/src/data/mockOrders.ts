import { Product } from "./products";

export interface OrderItem {
    product: Product;
    quantity: number;
    priceAtOrder: number;
}

export type OrderStatus = "Pending" | "Delivered" | "Shipped" | "Cancelled";

export interface Order {
    id: string;
    date: string;
    items: OrderItem[];
    totalBoxes: number;
    totalAmount: number;
    status: OrderStatus;
}

// export const mockOrders: Order[] = [
//     {
//         id: "ORD-2024-001",
//         date: "2024-01-25",
//         totalBoxes: 15,
//         totalAmount: 5970,
//         status: "Delivered",
//         items: [
//             {
//                 product: {
//                     _id: "2",
//                     code: "FG00812",
//                     name: "Power Jumbo Detergent Cake Blue 110 Gms x 78 Pcs",
//                     image: "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_45671615_1766048110.jpeg",
//                     images: [],
//                     boxPieces: 78,
//                     division: "POWER JUMBO CAKE",
//                     netPrice: 5.10,
//                     boxPrice: 398,
//                     mfs: 0,
//                 },
//                 quantity: 10,
//                 priceAtOrder: 398,
//             },
//             {
//                 product: {
//                     _id: "3",
//                     code: "FG00813",
//                     name: "Power Jumbo Detergent Cake Pink 110 Gms x 78 Pcs",
//                     image: "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_28112053_1663223729.jpeg",
//                     images: [],
//                     boxPieces: 78,
//                     division: "POWER JUMBO CAKE",
//                     netPrice: 5.10,
//                     boxPrice: 398,
//                     mfs: 0,
//                 },
//                 quantity: 5,
//                 priceAtOrder: 398,
//             }
//         ]
//     },
//     {
//         id: "ORD-2024-002",
//         date: "2024-01-26",
//         totalBoxes: 8,
//         totalAmount: 6480,
//         status: "Shipped",
//         items: [
//             {
//                 product: {
//                     _id: "7",
//                     code: "FG00957",
//                     name: "Tyko Liquid Pouch 4L x 3Pcs MRP 340",
//                     image: "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_65007862_1723439028.jpeg",
//                     images: [],
//                     boxPieces: 3,
//                     division: "TYKO LIQUID DETERGENT",
//                     netPrice: 272,
//                     boxPrice: 810,
//                     mfs: 0,
//                 },
//                 quantity: 8,
//                 priceAtOrder: 810,
//             }
//         ]
//     },
//     {
//         id: "ORD-2024-003",
//         date: "2024-01-27",
//         totalBoxes: 12,
//         totalAmount: 11376,
//         status: "Pending",
//         items: [
//             {
//                 product: {
//                     _id: "5",
//                     code: "FG00484",
//                     name: "Tyko Liquid Pouch 1L x 12 Pcs MRP 99",
//                     image: "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_99597441_1711621186.png",
//                     images: [],
//                     boxPieces: 12,
//                     division: "TYKO LIQUID DETERGENT",
//                     netPrice: 79,
//                     boxPrice: 948,
//                     mfs: 0,
//                 },
//                 quantity: 12,
//                 priceAtOrder: 948,
//             }
//         ]
//     }
// ];
