import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(
        () => localStorage.getItem("theme") === "dark"
    );

    // Apply dark mode on initial load & toggle
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <nav className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 dark:bg-gray-900 shadow">
            <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Muhammad Muneeb Naeem
            </h1>

            <div className="flex space-x-4 items-center">
                {/* Dark Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-110 transition"
                >
                    {darkMode ? (
                        <FaSun className="text-yellow-400" />
                    ) : (
                        <FaMoon className="text-gray-600" />
                    )}
                </button>
            </div>
        </nav>
    );
}
