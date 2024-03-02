import { useState } from "react";
import { useRegisterUserMutation } from "../store";
import RegisterForm from "../components/RegisterForm";
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
    return <div>Error Creating User... </div>;
  }

  return (
    <section className="mx-10 md:container md:mx-auto md:flex md:justify-items-center md:w-full">
      <div className="flex flex-col">
        <div className="border-b-2 text-center mb-3 pb-2 border-b-cyan-500">
          <h2>User Registration</h2>
        </div>
        <RegisterForm
          registerForm={registerForm}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleClear={handleClear}
        />
      </div>
    </section>
  );
}
