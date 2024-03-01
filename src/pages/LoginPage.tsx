import Button from "../components/Button";

export default function LoginPage() {
  // const handleClick = () => {};
  return (
    <div className="w-full flex align-middle justify-items-center">
      <div className="mx-auto border-1 border-slate-200 p-5 rounded shadow-lg">
        <form className="w-full flex flex-col">
          <h3>Login</h3>
          <label>Email:</label>
          <input
            className="border border-slate-700 mb-2 rounded pl-2"
            type="email"
            placeholder="Enter your Email"
          />
          <label>Password:</label>
          <input
            className="border border-slate-700 mb-2 rounded pl-2"
            type="password"
            placeholder="Enter your Password"
          />
          <Button rounded primary>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
