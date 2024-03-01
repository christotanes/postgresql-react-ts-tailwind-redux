import { useCreateUserMutation } from "../store";
import Button from "../components/Button";
import { useState } from "react";

export default function LoginPage() {
  const [createUser, isLoading] = useCreateUserMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.MouseEvent) => {
    event.preventDefault();
    console.log(isLoading);
    const user = {
      email,
      password,
    };
    console.log(user);
    const res = await createUser(user);
    const data = await JSON.stringify(res);
    console.log(data);
    console.log(isLoading);
    setEmail("");
    setPassword("");
  };

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
