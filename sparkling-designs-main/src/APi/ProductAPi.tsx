// ProductApi.ts
import axios from "axios";
import { Product } from "@/data/products";

export const getProducts = async (): Promise<Product[]> => {
    const res = await axios.get("http://localhost:4000/product-details");
    return res.data;
};

// CRATE ORDER
// orderApi.ts
export const createOrder = async (payload: any) => {
    return axios.post("http://localhost:4000/order", payload, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
};

// get user api


export const getOrderHistory = async ({page,limit,searchQuery}: {page: number, limit: number, searchQuery: string}): Promise<any> => {
    const res = await axios.get(`http://localhost:4000/orders?page=${page}&limit=${limit}&search=${searchQuery}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
           

    });
    console.log(searchQuery+"from api componet")
    console.log("response data", res.data)
    return res.data;
};


// single order details api

export const getOrderSingleDetails = async ({id}: {id: string}): Promise<any> => {
    console.log("id", id)
    const res = await axios.get(`http://localhost:4000/single/orders${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    console.log("response data", res.data)
    return res.data;
};
