import { useGetUsersQuery } from "../store";
import { Link, Navigate } from "react-router-dom";

// start of useAuth hook
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/authSlice";

const useAuth = () => {
  const user = useSelector(selectCurrentUser);
  console.log(user);
  return useMemo(() => ({ user }), [user]);
};
// end of useAuth hook

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
  const auth = useAuth();
  const { data, isFetching, error } = useGetUsersQuery();

  if (isFetching) {
    return <div>Fetching data...</div>;
  } else if (error) {
    return <div>Error fetching data...</div>;
  }
  console.log(data);
  const renderedUsers = data?.map((user: User) => {
    return (
      <div key={user.id} className="my-3">
        Username:
        <Link to={`/users/${user.id}`} className="text-blue-300">
          {user.username}
        </Link>
      </div>
    );
  });
  console.log(auth);
  return auth.user && auth.user.isAdmin ? (
    <div className="mt-10 ml-10">{renderedUsers}</div>
  ) : (
    <Navigate to="/login" />
  );
}
