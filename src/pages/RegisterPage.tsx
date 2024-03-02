import { useState } from "react";
import { useRegisterUserMutation } from "../store";
import Input from "../components/Input";
import Button from "../components/Button";
import type { UserRegister } from "../util/types";

//DEV
import { faker } from "@faker-js/faker";

let randomUsername = faker.word.adjective(100);
let randomName = faker.person.fullName();
let randomEmail = faker.internet.email();
let randomContactNumber = faker.phone.number();
//DEV END

export default function RegisterPage() {
  const [registerUser, response] = useRegisterUserMutation();

  const [registerForm, setRegisterForm] = useState<UserRegister>({
    username: randomUsername,
    email: randomEmail,
    password: randomUsername + "password",
    confirmPassword: "",
    full_name: randomName,
    contact_number: randomContactNumber,
  });

  function handleChange({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) {
    setRegisterForm((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleClear(event: React.MouseEvent) {
    event.preventDefault();
    setRegisterForm((prevState) => ({
      ...prevState,

      //CHANGE on PROD
      username: (randomUsername = faker.word.adjective(100)),
      email: (randomEmail = faker.internet.email()),
      password: randomUsername + "password",
      confirmPassword: "",
      full_name: (randomName = faker.person.fullName()),
      contact_number: (randomContactNumber = faker.phone.number()),
    }));
  }

  async function handleSubmit(event: React.MouseEvent) {
    event.preventDefault();
    try {
      const res = await registerUser(registerForm);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  if (response.isLoading) {
    return <div>Creating User...</div>;
  } else if (response.isError) {
    console.log(response);
    return <div>Error Creating User... </div>;
  }

  return (
    <section className="mx-10 md:container md:mx-auto md:flex md:justify-items-center md:w-full">
      <div className="flex flex-col">
        <div className="border-b-2 text-center mb-3 pb-2 border-b-cyan-500">
          <h2>User Registration</h2>
        </div>
        <Input
          name="username"
          type="text"
          value={registerForm.username}
          placeholder="Enter Username"
          onChange={handleChange}
        >
          Username:
        </Input>
        <Input
          name="email"
          type="email"
          value={registerForm.email}
          placeholder="Enter Email"
          onChange={handleChange}
        >
          Email:
        </Input>
        <Input
          name="password"
          type="password"
          value={registerForm.password}
          placeholder="Enter Password"
          onChange={handleChange}
        >
          Password:
        </Input>
        <Input
          name="confirmPassword"
          type="password"
          value={registerForm.confirmPassword}
          placeholder="Please Confirm Password"
          onChange={handleChange}
        >
          Confirm Password:
        </Input>
        <Input
          name="full_name"
          type="text"
          value={registerForm.full_name}
          placeholder="Enter Full Name"
          onChange={handleChange}
        >
          Full Name:
        </Input>
        <Input
          name="contact_number"
          type="text"
          value={registerForm.contact_number}
          placeholder="Enter contact_number"
          onChange={handleChange}
        >
          Contact Number:
        </Input>
        <div className="border-t-2 text-center mt-3 pt-5 border-t-cyan-500 flex justify-evenly gap-3">
          <Button rounded primary onClick={(event) => handleSubmit(event)}>
            Register
          </Button>
          <Button rounded danger onClick={(event) => handleClear(event)}>
            Cancel / Random
          </Button>
        </div>
      </div>
    </section>
  );
}
