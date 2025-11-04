import React, { useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
    FiGithub,
    FiLinkedin,
    FiMail,
    FiCheckCircle,
} from "react-icons/fi";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Select from "react-select";
import phoneCountryCodes from "../utils/phoneCountryCodes"; // ✅ Import country codes

export default function Contact() {
    const form = useRef();
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedCode, setSelectedCode] = useState({ label: "🇺🇬 +256", value: "+256" });
    const [phone, setPhone] = useState("");

    // ✅ Simplified labels for cleaner UI
    const options = phoneCountryCodes.map((country) => ({
        label: `${country.flag} ${country.code}`,
        value: country.code,
    }));

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        const fullPhone = `${selectedCode.value}${phone}`;
        const formData = new FormData(form.current);
        formData.set("phone", fullPhone);

        emailjs
            .sendForm(
                "service_cl2zplh",
                "template_szixux5",
                form.current,
                "D46zM-i5AMylcU5C1"
            )
            .then(
                () => {
                    setSent(true);
                    setLoading(false);
                    form.current.reset();

                    toast.success("Message sent successfully!", {
                        style: {
                            background: "#1A1A1A",
                            color: "#fff",
                            border: "1px solid #2A2A2A",
                            padding: "12px 16px",
                        },
                        iconTheme: {
                            primary: "#ec4899",
                            secondary: "#fff",
                        },
                    });

                    setTimeout(() => setSent(false), 4000);
                },
                (error) => {
                    console.error(error.text);
                    setLoading(false);
                    toast.error("Message failed to send. Please try again.", {
                        style: {
                            background: "#1A1A1A",
                            color: "#fff",
                            border: "1px solid #2A2A2A",
                            padding: "12px 16px",
                        },
                    });
                }
            );
    };

    return (
        <section
            id="contact"
            className="bg-[#0D0D0D] text-white min-h-screen flex flex-col md:flex-row justify-between items-start px-6 md:px-16 lg:px-24 py-20"
        >
            <Toaster position="top-right" reverseOrder={false} />

            {/* ===== Left Section ===== */}
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2 space-y-8"
            >
                <div>
                    <h5 className="uppercase text-gray-400 font-semibold tracking-widest mb-2">
                        Get In Touch
                    </h5>
                    <h2 className="text-4xl md:text-5xl font-bold leading-snug">
                        Let's Talk For Your <br />
                        <span className="text-pink-500">Next Project(s)</span>
                    </h2>
                    <p className="text-gray-400 mt-4 leading-relaxed">
                        Discuss a project or just want to say hi? Connect with me via email
                        or a phone call. I’d love to hear your ideas.
                    </p>
                </div>

                <ul className="space-y-3 text-gray-300">
                    {[
                        "2+ Years of Experience",
                        "Product Management",
                        "Mobile Apps Development",
                        "Data Science",
                        "Fullstack Developer",
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <FiCheckCircle className="text-pink-500" /> {item}
                        </li>
                    ))}
                </ul>

                {/* ===== Social Icons ===== */}
                <div className="flex gap-4 pt-6">
                    <a
                        href="https://github.com/TimothyWaniayeChristian"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1A1A1A] p-3 rounded-md hover:bg-pink-600 transition duration-300"
                    >
                        <FiGithub className="text-xl" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/timothy-christian-waniaye-291788265/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1A1A1A] p-3 rounded-md hover:bg-pink-600 transition duration-300"
                    >
                        <FiLinkedin className="text-xl" />
                    </a>
                    <a
                        href="mailto:tcwaniaye@gmail.com"
                        className="bg-[#1A1A1A] p-3 rounded-md hover:bg-pink-600 transition duration-300"
                    >
                        <FiMail className="text-xl" />
                    </a>
                    <a
                        href="https://wa.me/256778315407"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1A1A1A] p-3 rounded-md hover:bg-pink-600 transition duration-300"
                    >
                        <FaWhatsapp className="text-xl" />
                    </a>
                    <a
                        href="https://x.com/cristianwaniaye"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1A1A1A] p-3 rounded-md hover:bg-pink-600 transition duration-300"
                    >
                        <FaXTwitter className="text-xl" />
                    </a>
                </div>
            </motion.div>

            {/* ===== Right Section (Form) ===== */}
            <motion.form
                ref={form}
                onSubmit={sendEmail}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2 bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 mt-12 md:mt-0 space-y-6 shadow-lg"
            >
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block mb-2 text-sm text-gray-400">Full Name *</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-md px-4 py-3 focus:outline-none focus:border-pink-500"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm text-gray-400">Email Address *</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-md px-4 py-3 focus:outline-none focus:border-pink-500"
                            placeholder="you@example.com"
                        />
                    </div>
                </div>

                {/* ✅ Improved Phone + Country Code Selector */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block mb-2 text-sm text-gray-400">Phone Number</label>
                        <div className="flex gap-2 items-center">
                            <div className="w-1/3">
                                <Select
                                    options={options}
                                    value={selectedCode}
                                    onChange={setSelectedCode}
                                    isSearchable
                                    className="text-black"
                                    styles={{
                                        control: (base) => ({
                                            ...base,
                                            backgroundColor: "#1A1A1A",
                                            border: "1px solid #2A2A2A",
                                            borderRadius: "0.375rem",
                                            minHeight: "48px",
                                            color: "white",
                                            boxShadow: "none",
                                            "&:hover": {
                                                border: "1px solid #ec4899",
                                            },
                                        }),
                                        singleValue: (base) => ({
                                            ...base,
                                            color: "white",
                                            fontSize: "1rem",
                                        }),
                                        menu: (base) => ({
                                            ...base,
                                            backgroundColor: "#111",
                                            color: "white",
                                            zIndex: 50,
                                        }),
                                        option: (base, state) => ({
                                            ...base,
                                            backgroundColor: state.isFocused
                                                ? "#ec4899"
                                                : "#111",
                                            color: "white",
                                            cursor: "pointer",
                                        }),
                                        dropdownIndicator: (base) => ({
                                            ...base,
                                            color: "white",
                                        }),
                                    }}
                                />
                            </div>
                            <input
                                type="tel"
                                name="phone"
                                className="flex-1 bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-md px-4 py-[13px] focus:outline-none focus:border-pink-500"
                                placeholder="712 345 678"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-400">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            className="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-md px-4 py-3 focus:outline-none focus:border-pink-500"
                            placeholder="I have a project for you"
                        />
                    </div>
                </div>

                <div>
                    <label className="block mb-2 text-sm text-gray-400">Message *</label>
                    <textarea
                        name="message"
                        required
                        rows="5"
                        className="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-md px-4 py-3 focus:outline-none focus:border-pink-500"
                        placeholder="Write your message..."
                    ></textarea>
                </div>

                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    disabled={loading || sent}
                    className="flex items-center justify-center gap-2 bg-[#db2777] hover:bg-[#be185d] px-6 py-3 rounded-md font-semibold transition duration-300 w-full md:w-auto shadow-md shadow-pink-900/30"
                >
                    {loading ? "Sending..." : sent ? "Sent!" : "Send Message"}
                </motion.button>
            </motion.form>
        </section>
    );
}
