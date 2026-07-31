import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Vehicle, VehicleState, Pagination } from "./vehicleTypes";

const initialState: VehicleState = {
  vehicles: [],
  loading: false,
  error: null,
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  },
};

interface VehiclePayload {
  vehicles: Vehicle[];
  pagination: Pagination;
}

const vehicleSlice = createSlice({
  name: "vehicle",

  initialState,

  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setVehicles: (
      state,
      action: PayloadAction<VehiclePayload>
    ) => {
      state.vehicles = action.payload.vehicles;
      state.pagination = action.payload.pagination;
      state.loading = false;
      state.error = null;
    },

    setVehicleError: (
      state,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearVehicles: (state) => {
      state.vehicles = [];
      state.pagination = {
        page: 1,
        limit: 10,
        total: 0,
        totalPages: 0,
      };
      state.error = null;
    },
  },
});

export const {
  setLoading,
  setVehicles,
  setVehicleError,
  clearVehicles,
} = vehicleSlice.actions;

export default vehicleSlice.reducer;