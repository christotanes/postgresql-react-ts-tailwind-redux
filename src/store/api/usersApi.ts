import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store";
import type { LoginUserResponse, UsersResponse } from "../../util/types";

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
    registerUser: build.mutation({
      query: (user) => ({
        url: `/users/register`,
        method: "POST",
        body: user,
      }),
    }),
  }),
});
export const {
  useGetUsersQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
} = userApi;
