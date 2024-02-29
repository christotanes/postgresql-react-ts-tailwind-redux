import Button from "../components/Button";

export default function LoginPage() {
  return (
    <div>
      Login Page!
      <Button
        primary={true}
        rounded={true}
        secondary={false}
        success={false}
        warning={false}
        danger={false}
        outline={false}
      >
        Login
      </Button>
    </div>
  );
}
