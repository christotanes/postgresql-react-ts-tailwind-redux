import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { RootState } from "../../store";
import type { ProductsGetResponse } from "../../util/productTypes";

export const productsApi = createApi({
  reducerPath: "products",
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
    getProducts: build.query<ProductsGetResponse, void>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      transformResponse: (res: ProductsGetResponse) => {
        return res;
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
