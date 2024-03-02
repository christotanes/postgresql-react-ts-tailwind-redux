import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState("");
  const links = [
    { label: "Users", path: "/users" },
    { label: "Login", path: "/login" },
    { label: "Logout", path: "/" },
  ];

  const activeClasses = "text-blue-500 font-bold border-b-cyan-900 border-b-2";

  const classes = "text-blue-500 border-b hover:border-b-cyan-500";

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
    <section className="flex justify-center gap-5 m-10">
      {renderedLinks}
    </section>
  );
}
