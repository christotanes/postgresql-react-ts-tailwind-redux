import { useGetUsersQuery } from "./store";
// import Sidebar from "./components/Sidebar";

function App() {
  const response = useGetUsersQuery("user");

  console.log(response);

  return (
    <div className="flex flex-nowrap">
      <div className="text-3xl">sidebar</div>
      <div>main</div>
    </div>
  );
}

export default App;
