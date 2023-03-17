"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Moon, Sun } from "@/helpers/Icons";
import styles from "@/styles/nav.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState("dark");

  function handleTheme(value: string) {
    setTheme(value);
    document.body.setAttribute("id", value);
  }

  return (
    <nav id={styles.nav}>
      <ul>
        <li className={pathname === "/" ? "active" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === "/about" ? "active" : ""}>
          <Link href="/about">Sobre</Link>
        </li>
        <li className={pathname === "/contact" ? "active" : ""}>
          <Link href="/contact">Contato</Link>
        </li>
      </ul>

      {theme === "light" ? (
        <button id={styles.btnTheme} onClick={() => handleTheme("dark")}>
          {Moon}
        </button>
      ) : (
        <button id={styles.btnTheme} onClick={() => handleTheme("light")}>
          {Sun}
        </button>
      )}
    </nav>
  );
}
