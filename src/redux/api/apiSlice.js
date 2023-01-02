import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/posts" }),
    endpoints: (builder) => ({
      getAllPosts: builder.query({
          query: () => "/"
      }),
        createPost: builder.query({
            query: (newPosts) => ({
                url: "/create",
                method: "POST",
                body: newPosts,
                headers: {
                    "Content-Type" : "application/json; charset=UTF-8",
                }
            })
        })
  }),
});

export const { useGetAllPostsQuery } = blogApi;
