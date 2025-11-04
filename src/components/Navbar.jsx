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
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800 overflow-x-hidden">
            <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 text-white">
                {/* Logo */}
                <NavLink to="/" className="text-2xl font-semibold tracking-tight">
                    <span className="text-pink-500 font-script">Timothy</span> Christian <span className="text-pink-500 font-script">Waniaye</span>
                </NavLink>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8 text-sm font-medium">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `
                  relative transition duration-300
                  ${isActive ? "text-pink-500" : "text-gray-300"}
                  hover:text-white
                  before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[2px]
                  before:bg-pink-500 before:transition-all before:duration-300
                  hover:before:w-full
                `
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                {/* Hire Me */}
                <NavLink
                    to="/contact"
                    className="hidden md:block bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg font-medium transition duration-300"
                >
                    Hire Me
                </NavLink>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-pink-500 focus:outline-none transition duration-300 hover:text-white"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* ===== Mobile Menu (Animated) ===== */}
            <div
                className={`md:hidden bg-black border-t border-gray-800 overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
                    }`}
            >
                <div className="flex flex-col items-center space-y-4 text-sm transition duration-300">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `
                  transition duration-300
                  ${isActive ? "text-pink-500" : "text-gray-300"}
                  hover:text-white
                `
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}

                    <NavLink
                        to="/contact"
                        onClick={() => setOpen(false)}
                        className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg font-medium transition duration-300"
                    >
                        Hire Me
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
