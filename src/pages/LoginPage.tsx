import { useLoginUserMutation } from "../store";
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/authSlice";
import { useState } from "react";

import Button from "../components/Button";

interface LoginRequest {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [loginUser, { isLoading, isError }] = useLoginUserMutation();
  const [formState, setFormState] = useState<LoginRequest>({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  function handleChange({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) {
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(event: React.MouseEvent) {
    // can delete preventDefault once useNavigate is set up
    event.preventDefault();
    console.log(formState);
    try {
      const user = await loginUser(formState).unwrap();
      dispatch(setCredentials(user));
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  }

  if (isLoading) {
    return <div>Fething login credentials...</div>;
  } else if (isError) {
    return <div>Error logging in...</div>;
  }

  return (
    <div className="w-full flex align-middle justify-items-center">
      <div className="mx-auto border-1 border-slate-200 p-5 rounded shadow-lg">
        <form className="w-full flex flex-col">
          <h3>Login</h3>
          <label>Email:</label>
          <input
            className="border border-slate-700 mb-2 rounded pl-2"
            name="email"
            type="email"
            placeholder="Enter your Email"
            onChange={handleChange}
          />
          <label>Password:</label>
          <input
            className="border border-slate-700 mb-2 rounded pl-2"
            name="password"
            type="password"
            placeholder="Enter your Password"
            onChange={handleChange}
          />
          <Button rounded primary onClick={(event) => handleSubmit(event)}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
