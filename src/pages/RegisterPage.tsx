import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import type { UserRegister } from "../util/types";

//DEV
import { faker } from "@faker-js/faker";

const randomUsername = faker.word.adjective(100);
const randomName = faker.person.fullName();
const randomEmail = faker.internet.email();
const randomContactNumber = faker.phone.number();
//DEV END

export default function RegisterPage() {
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

  async function handleSubmit(event: React.MouseEvent) {
    event.preventDefault();
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
        <div className="border-t-2 text-center mt-3 pt-5 border-t-cyan-500">
          <Button rounded primary onClick={(event) => handleSubmit(event)}>
            Register
          </Button>
          <Button rounded danger>
            Cancel
          </Button>
        </div>
      </div>
    </section>
  );
}
