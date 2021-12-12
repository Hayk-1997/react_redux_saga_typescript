import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'posts',
    refetchOnFocus: true,
    tagTypes: ['Post'],
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    endpoints: builder => ({
        getPosts: builder.query<any, string>({
            query: (title) => ({
                url: 'posts',
            }),
            providesTags: ['Post'],
            transformResponse: (response: Response) => response
        }),
        // addMovie: builder.mutation<void, void>({
        //     query: () => ({
        //         url: '/add-movie'
        //     }),
        //     invalidatesTags: ['Movie'],
        // })
    })
})

export const { useGetPostsQuery } = postsApi;