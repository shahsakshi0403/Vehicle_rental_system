import api from "./axios";
import { VEHICLES } from "./constant";

export const getVehicles = (params?: any) => {
  return api.get(VEHICLES, {
    params,
  });
};

export const getVehicleById = (id: string) => {
  return api.get(`${VEHICLES}/${id}`);
};

export const createVehicle = (data: FormData) => {
  return api.post(VEHICLES, data);
};

export const updateVehicle = (
  id: string,
  data: FormData
) => {
  return api.put(`${VEHICLES}/${id}`, data);
};

export const deleteVehicle = (id: string) => {
  return api.delete(`${VEHICLES}/${id}`);
};