import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const navItems = [
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Resume", path: "/resume" },
        { name: "Skills", path: "/skills" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">
                {/* Logo */}
                <NavLink to="/" className="text-2xl font-semibold">
                    <span className="text-pink-500 font-script">Wilson</span> Kinyua
                </NavLink>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8 text-sm font-medium">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `transition hover:text-pink-500 ${isActive ? "text-pink-500" : ""
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                {/* Hire Me */}
                <NavLink
                    to="/contact"
                    className="hidden md:block bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg font-medium transition"
                >
                    Hire Me
                </NavLink>

                {/* Mobile menu toggle */}
                <button onClick={() => setOpen(!open)} className="md:hidden text-pink-500">
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-black border-t border-gray-800 py-4">
                    <div className="flex flex-col items-center space-y-4 text-sm">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    `transition hover:text-pink-500 ${isActive ? "text-pink-500" : ""
                                    }`
                                }
                                onClick={() => setOpen(false)}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                        <NavLink
                            to="/contact"
                            className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg font-medium transition"
                            onClick={() => setOpen(false)}
                        >
                            Hire Me
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
}
