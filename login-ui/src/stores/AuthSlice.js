import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios';
import {API_LOGIN} from "../constants";
export const loginAsync = createAsyncThunk(
    'auth/login',
    async (credentials) => {
        const request = await axios.post(API_LOGIN, credentials);
        const response = await request.data;
        localStorage.setItem('tokens', JSON.stringify(response));
        return response;
    }
);

const userToken = localStorage.getItem("tokens") ? localStorage.getItem("tokens") : null;

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        userToken,
        userInfo: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.loading = true;
                state.userToken = null;
                state.error = null;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.userToken = action.payload;
                state.error = null;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.loading = false;
                state.userToken = null;
                console.log(action.error.message);
                if (action.error.message === 'Request failed with status code 401') {
                    state.error = 'Access Denied! Invalid Credentials';
                }else{
                    state.error = action.error.message;
                }
            })
    },
    reducers: {
        logout: (state) => {
            localStorage.removeItem("tokens");
            state.loading = false;
            state.userInfo = null;
            state.userToken = null;
            state.error = null;
        },
        setCredentials: (state, {payload}) => {
            state.userInfo = payload
        },
        afterOAuth2Login: (state) => {
            state.userToken = localStorage.getItem("tokens") ? localStorage.getItem("tokens") : null;
        }
    },

})
export const {logout, setCredentials, afterOAuth2Login} = authSlice.actions;
export default authSlice.reducer