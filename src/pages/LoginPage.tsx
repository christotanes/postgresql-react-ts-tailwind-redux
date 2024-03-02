import { useLoginUserMutation } from "../store";
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/authSlice";
import React, { useState } from "react";

import type { LoginRequest } from "../util/types";
import LoginForm from "../components/LoginForm";

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
    try {
      const user = await loginUser(formState).unwrap();
      dispatch(setCredentials(user));
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
        <LoginForm
          formState={formState}
          handleChange={handleChange}
          handleClear={handleClear}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
