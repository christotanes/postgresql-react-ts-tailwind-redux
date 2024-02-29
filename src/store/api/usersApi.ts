import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { faker } from "@faker-js/faker";

interface User {
  id: number;
  username: string;
  email: string;
  full_name: string;
  contact_number: number;
  created_at: string;
  is_admin: boolean;
}

export const userApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints(builder) {
    return {
      getUsers: builder.query<User, string>({
        query: () => {
          return {
            url: "/users",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useGetUsersQuery } = userApi;
