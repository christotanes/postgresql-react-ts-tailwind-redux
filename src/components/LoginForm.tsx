import Input from "../components/Input";
import Button from "../components/Button";
import { LoginFormProps } from "../util/userTypes";

export default function LoginForm({
  formState,
  handleChange,
  handleSubmit,
  handleClear,
}: LoginFormProps) {
  return (
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
  );
}
