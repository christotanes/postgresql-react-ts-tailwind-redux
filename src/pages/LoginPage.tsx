import { useLoginUserMutation } from "../store";
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/authSlice";
import React, { useState } from "react";

import Input from "../components/Input";
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

  function handleClear(event: React.MouseEvent) {
    event.preventDefault();
    setFormState((prevState) => ({ ...prevState, email: "", password: "" }));
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
      <div className="mx-auto border-2 border-slate-300 p-5 rounded shadow-lg bg-blue-100">
        <form className="w-full flex flex-col">
          <div className="mb-3 border-b-2 pb-3 border-slate-400">
            <h3>Login</h3>
          </div>
          <Input
            name="email"
            type="email"
            value={formState.email}
            placeholder="Enter your Email"
            onChange={handleChange}
          >
            Email:
          </Input>
          <Input
            name="password"
            type="password"
            value={formState.password}
            placeholder="Enter your Password"
            onChange={handleChange}
          >
            Password:
          </Input>
          <div className="min-w-2.5 flex justify-evenly mt-3">
            <Button rounded primary onClick={(event) => handleSubmit(event)}>
              Login
            </Button>
            <Button rounded danger onClick={(event) => handleClear(event)}>
              Clear
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
