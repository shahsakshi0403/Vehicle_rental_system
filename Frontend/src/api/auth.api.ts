import api from "./axios";
import { LoginRequest, RegisterRequest } from "../redux/auth/authTypes";
import { LOGIN, REGISTER } from "./constant";

export const loginUser = async (data: LoginRequest) => {
    const response = await api.post(LOGIN, data);
    return response.data;
}

export const registerUser = async (data: RegisterRequest) => {
    const response = await api.post(REGISTER, data);
    return response.data;
}