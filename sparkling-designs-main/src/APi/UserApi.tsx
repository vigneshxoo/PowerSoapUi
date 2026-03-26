import axios from "axios";

export const loginUser = async (data: {
    email?: string;
    password?: string;
}) => {
    try {
        const res = await axios.post("http://localhost:4000/login", data);
        return res.data;
    } catch (error: any) {
        throw new Error(
            error.response?.data?.message || "Login failed"
        );
    }
};

export const registerUser = async (data: {
    username?: string;
    password?: string;
    phoneNumber?: string;
}) => {
    try {
        const res = await axios.post("http://localhost:4000/register", data);
        return res.data;
    } catch (error: any) {
        throw new Error(
            error.response?.data?.message || "Registration failed"
        );
    }
};
