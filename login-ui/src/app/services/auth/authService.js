import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/',
        prepareHeaders: (headers, {getState}) => {
            const token = JSON.parse(getState().auth.userToken);
            if (token) {
                headers.set('Authorization', `Bearer ${token.access_token}`);
                return headers;
            }
        }
    }),
    endpoints: (builder) => ({
        getUserDetails: builder.query({
            query: () => ({
                url: 'api/v1/users',
                method: 'GET'
            }),
        })
    })
})

export const { useGetUserDetailsQuery } = authApi