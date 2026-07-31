import api from "./axios";
import { BOOKING } from "./constant";

export interface CreateBookingRequest {
  vehicleId: string;
  startDate: string;
  endDate: string;
}

export const createBooking = (data: CreateBookingRequest) => {
  return api.post(BOOKING, data);
};

export const getMyBookings = () => {
  return api.get(`${BOOKING}/my`);
};

export const cancelBooking = (id: string) => {
  return api.delete(`${BOOKING}/cancel/${id}`);
};
