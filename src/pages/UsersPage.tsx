import { useGetUsersQuery } from "../store";

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
      <div key={user.id}>
        {user.full_name}
        {user.email}
        {user.username}
        {user.contact_number}
        {user.is_admin}
      </div>
    );
  });

  return <div>{renderedUsers}</div>;
}
