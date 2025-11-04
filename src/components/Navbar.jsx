import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed w-full top-0 left-0 z-50 bg-black/90 text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <h1 className="text-2xl font-semibold">
                    <span className="text-pink-500 font-script">Wilson</span> Kinyua
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-sm font-medium">
                    {["About", "Services", "Resume", "Skills", "Projects", "Contact"].map(
                        (item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} className="hover:text-pink-500">
                                    {item}
                                </a>
                            </li>
                        )
                    )}
                </ul>

                {/* Hire Me Button */}
                <a
                    href="#contact"
                    className="hidden md:block bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg font-medium"
                >
                    Hire Me
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-pink-500"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-black border-t border-gray-800">
                    <ul className="flex flex-col items-center py-4 space-y-4 text-sm font-medium">
                        {["About", "Services", "Resume", "Skills", "Projects", "Contact"].map(
                            (item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="hover:text-pink-500"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item}
                                    </a>
                                </li>
                            )
                        )}
                        <a
                            href="#contact"
                            className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg font-medium"
                            onClick={() => setOpen(false)}
                        >
                            Hire Me
                        </a>
                    </ul>
                </div>
            )}
        </nav>
    );
}
