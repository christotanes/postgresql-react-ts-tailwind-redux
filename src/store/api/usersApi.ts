import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store";
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

interface LoginUserResponse {
  user: {
    id: number;
    username: string;
    isAdmin: boolean;
  };
  token: string;
}

type UsersResponse = User[];

export const userApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    getUsers: build.query<UsersResponse, void>({
      query: () => ({
        url: `/users`,
        method: "GET",
      }),
      transformResponse: (res: UsersResponse) => {
        return res;
      },
    }),
    loginUser: build.mutation({
      query: (credentials) => ({
        url: `/users/login`,
        method: "POST",
        body: credentials,
      }),
      transformResponse: (res: LoginUserResponse) => {
        return res;
      },
    }),
  }),
});
export const { useGetUsersQuery, useLoginUserMutation } = userApi;
