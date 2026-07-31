import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';
import vehicleReducer from './vehicle/vehicleSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        vehicle: vehicleReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;