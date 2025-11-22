"use client";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = dark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-2 border rounded-md text-sm"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
