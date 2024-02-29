import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState("");
  const links = [
    { label: "Users", path: "/users" },
    { label: "Login", path: "/login" },
    { label: "Logout", path: "/" },
  ];

  const activeClasses =
    "text-blue-500 pl-3 font-bold border-l-cyan-900 border-l-2";

  const classes = "text-blue-500 pl-2 border-l hover:border-l-cyan-500";

  const handleClick = (label: string) => {
    setActiveIndex(label);
  };

  const renderedLinks = links.map((link) => {
    return (
      <Link
        to={link.path}
        key={link.label}
        className={
          activeIndex === link.path ? `${activeClasses}` : `${classes}`
        }
        onClick={() => handleClick(link.path)}
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
