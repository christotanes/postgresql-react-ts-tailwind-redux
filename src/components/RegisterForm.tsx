import Input from "./Input";
import Button from "./Button";
import type { RegisterFormProps } from "../util/types";

export default function RegisterForm({
  registerForm,
  handleChange,
  handleClear,
  handleSubmit,
}: RegisterFormProps) {
  return (
    <form>
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
    </form>
  );
}
