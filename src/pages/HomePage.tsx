import { useGetProductsQuery } from "../store";
import type { ProductsGetResponse } from "../util/productTypes";

export default function HomePage() {
  const { data, isFetching, error } = useGetProductsQuery();

  console.log(data);
  return <div>HomePage</div>;
}
