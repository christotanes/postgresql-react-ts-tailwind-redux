import { useGetUsersQuery } from "../store";
import { Link, Navigate } from "react-router-dom";
import useAuth from "../util/useAuthHook";
import type { UserGetRequest } from "../util/types";

export default function UsersPage() {
  const auth = useAuth();
  const { data, isFetching, error } = useGetUsersQuery();

  if (isFetching) {
    return <div>Fetching data...</div>;
  } else if (error) {
    return <div>Error fetching data...</div>;
  }

  const renderedUsers = data?.map((user: UserGetRequest) => {
    return (
      <div key={user.id} className="my-3">
        Username:
        <Link to={`/users/${user.id}`} className="text-blue-300">
          {user.username}
        </Link>
      </div>
    );
  });
  return auth.user && auth.user.isAdmin ? (
    <div className="mt-10 ml-10">{renderedUsers}</div>
  ) : (
    <Navigate to="/login" />
  );
}
