interface User {
  id: number;
  username: string;
  email: string;
  full_name: string;
  contact_number: number;
  created_at: string;
  is_admin: boolean;
}

export default function UserItem({ user }: User) {
  return <div>{user}</div>;
}
