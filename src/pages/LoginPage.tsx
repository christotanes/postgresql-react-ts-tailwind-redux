import Button from "../components/Button";

export default function LoginPage() {
  // const handleClick = () => {};
  return (
    <div className="w-full h-screen flex align-middle justify-items-center">
      <div className="size-40">
        <form>
          <h3>Login</h3>
          <label>Email:</label>
          <Button rounded outline primary>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
