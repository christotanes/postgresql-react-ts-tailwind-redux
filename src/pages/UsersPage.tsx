import { useGetUsersQuery } from "../store";
import { Link } from "react-router-dom";

interface User {
  id: number;
  username: string;
  email: string;
  full_name: string;
  contact_number: number;
  created_at: string;
  is_admin: boolean;
}

export default function UsersPage() {
  const { data, isFetching, error } = useGetUsersQuery();

  if (isFetching) {
    return <div>Fetching data...</div>;
  } else if (error) {
    return <div>Error fetching data...</div>;
  }

  const renderedUsers = data?.map((user: User) => {
    return (
      <div key={user.id} className="my-3">
        Username:{" "}
        <Link to={`/users/${user.id}`} className="text-blue-300">
          {user.username}
        </Link>
      </div>
    );
  });

  return <div className="mt-10 ml-10">{renderedUsers}</div>;
}
