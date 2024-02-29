import { useGetUsersQuery } from "./store";

function App() {
  const response = useGetUsersQuery("user");

  console.log(response);

  // console.log(import.meta.env.VITE_API_URL);
  return <h1 className="text-3xl font-bold underline">Hello World!</h1>;
}

export default App;
