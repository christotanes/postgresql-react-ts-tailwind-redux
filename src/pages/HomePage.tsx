import { useGetProductsQuery } from "../store";

export default function HomePage() {
  const { products, response } = useGetProductsQuery();

  console.log(products);
  console.log(response);
  return <div>HomePage</div>;
}
