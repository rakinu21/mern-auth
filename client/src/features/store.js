import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./app/apiSlice";
import authSlice from '../features/app/authSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})