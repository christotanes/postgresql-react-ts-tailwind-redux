import Button from "../components/Button";

export default function LoginPage() {
  // const handleClick = () => {};
  return (
    <div className="w-full h-screen flex align-middle justify-items-center">
      <div className="m-auto border border-slate-200 p-10 rounded shadow-lg">
        <form>
          <h3>Login</h3>
          <label>Email:</label>
          <Button rounded primary>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
