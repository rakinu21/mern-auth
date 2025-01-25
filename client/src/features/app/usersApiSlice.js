import { apiSlice } from "./apiSlice";

const USER_URL = '/api/auth';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/login`,
                method: 'POST',
                body:data
            })
        }),
        logout: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/logout`,
                method: 'POST',
               
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/register`,
                method: 'POST',
                body:data
            })
        }),
        UserProfile: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `${USER_URL}/profile/${id}`,
                method: 'get',
                body: data,
            }),
        }),
     

        updateUserProfile: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `${USER_URL}/updateProfile/${id}`,
                method: 'PUT',
                body: data,
            }),
        }),
        getAllUser: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/users`,
                method: 'GET',
                body: data,
            }),
        }),
        
        


    })
})


export const {
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,
    useUpdateUserProfileMutation,
    useUserProfileMutation,
    useGetAllUserMutation } = userApiSlice