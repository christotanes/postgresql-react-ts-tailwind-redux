import { useCreateUserMutation } from "../store";
import Button from "../components/Button";
import { useState } from "react";

export default function LoginPage() {
  const [createUser, { isLoading, isError }] = useCreateUserMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.MouseEvent) => {
    event.preventDefault();
    try {
      const user = {
        email,
        password,
      };
      console.log(user);
      const res = await createUser(user).unwrap();
      console.log(res);
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return <div>Fething login credentials...</div>;
  } else if (isError) {
    return <div>Error loggin in...</div>;
  }

  return (
    <div className="w-full flex align-middle justify-items-center">
      <div className="mx-auto border-1 border-slate-200 p-5 rounded shadow-lg">
        <form className="w-full flex flex-col">
          <h3>Login</h3>
          <label>Email:</label>
          <input
            className="border border-slate-700 mb-2 rounded pl-2"
            value={email}
            type="email"
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            className="border border-slate-700 mb-2 rounded pl-2"
            value={password}
            type="password"
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button rounded primary onClick={(event) => handleSubmit(event)}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
