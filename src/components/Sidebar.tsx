import { Link } from "react-router-dom";

export default function Sidebar() {
  const links = [
    { label: "Users", path: "/users" },
    { label: "Login", path: "/login" },
    { label: "Logout", path: "/" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        to={link.path}
        key={link.label}
        className="text-blue-500 border-l border-l-cyan-900 pl-2"
      >
        {link.label}
      </Link>
    );
  });
  return (
    <section className="flex flex-col h-screen mx-10 mt-10">
      {renderedLinks}
    </section>
  );
}
