"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "@/helpers/icons";

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState("dark");

  function handleTheme(value: string) {
    setTheme(value);
    document.documentElement.setAttribute("id", value);
  }

  return (
    <nav className="gl-navbar">
      <ul>
        <li className={pathname === "/" ? "active" : ""}>
          <Link href="/">Home</Link>
        </li>
        {/* <li className={pathname === "/about" ? "active" : ""}>
          <Link href="/about">Sobre</Link>
        </li>
        <li className={pathname === "/contact" ? "active" : ""}>
          <Link href="/contact">Contato</Link>
        </li> */}
      </ul>

      {theme === "light" ? (
        <button id="btnTheme" onClick={() => handleTheme("dark")}>
          {Moon}
        </button>
      ) : (
        <button id="btnTheme" onClick={() => handleTheme("light")}>
          {Sun}
        </button>
      )}
    </nav>
  );
}
