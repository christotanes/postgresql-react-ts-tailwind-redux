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

type UsersResponse = User[];

export const userApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (build) => ({
    getUsers: build.query<UsersResponse, void>({
      query: () => ({
        url: `/users`,
        method: "GET",
      }),
      transformResponse: (rawResponse: UsersResponse) => {
        return rawResponse;
      },
    }),
  }),
});
export const { useGetUsersQuery } = userApi;
