import {configureStore} from "@reduxjs/toolkit";
import authReducer from './AuthSlice'
import {authApi} from "../app/services/auth/authService";
const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
});

export default store;