// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {basicApi} from "../basicApi";

// export const postsApi = createApi({
//     reducerPath: 'posts',
//     tagTypes: ['Post'],
//     baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
//     endpoints: builder => ({
//         getPosts: builder.query<any, string>({
//             query: () => ({
//                 url: 'posts',
//             }),
//             providesTags: ['Post'],
//             transformResponse: (response: Response) => response
//         })
//     })
// })

export const postsApi = basicApi.injectEndpoints({
    endpoints: (build) => ({
        getPosts: build.query({
            query: () => '/posts',
            transformResponse: (response: any) => response
        })
    }),
    overrideExisting: false,
})

export const { useGetPostsQuery } = postsApi;