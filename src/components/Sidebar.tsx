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
    "text-blue-500 font-bold border-b-2 border-b-cyan-900 md:border-l-cyan-700 md:border-l-2 md:border-b-0 md:pl-2";

  const classes =
    "text-blue-500 border-b hover:border-b-cyan-500 md:border-b-0 md:border-l md:hover:border-l-cyan-500 md:pl-1";

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
    <section className="flex md:flex-col justify-center md:justify-normal gap-5 md:gap-2 m-10">
      {renderedLinks}
    </section>
  );
}
