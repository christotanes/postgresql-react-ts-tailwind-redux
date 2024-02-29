import 'dotenv/config';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const userApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.REACT_APP_API_URL}`,
	}),
	endpoints(builder) {
		return {
			fetchUsers: builder.query({
				query: () => {
					return: {
						url: "/users",
						method: GET
					}
				}
			})
		}
	}
});
