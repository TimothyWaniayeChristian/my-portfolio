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

export default function Contact() {
    const form = useRef();
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                "service_xxxxxx", // 🔹 Replace with your EmailJS service ID
                "template_xxxxxx", // 🔹 Replace with your EmailJS template ID
                form.current,
                "YOUR_PUBLIC_KEY" // 🔹 Replace with your EmailJS public key
            )
            .then(
                () => {
                    setSent(true);
                    setLoading(false);
                    form.current.reset();
                    setTimeout(() => setSent(false), 4000);
                },
                (error) => {
                    console.error(error.text);
                    setLoading(false);
                    alert("Message failed to send. Please try again.");
                }
            );
    };

    return (
        <section
            id="contact"
            className="bg-[#0D0D0D] text-white min-h-screen flex flex-col md:flex-row justify-between items-start px-6 md:px-16 lg:px-24 py-20"
        >
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
                        "5+ Years of Experience",
                        "Professional Web Designer",
                        "Mobile Apps Development",
                        "Technical Mentorship",
                        "Fullstack Developer",
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <FiCheckCircle className="text-pink-500" /> {item}
                        </li>
                    ))}
                </ul>

                {/* ===== Social Icons (same as Hero) ===== */}
                <div className="flex gap-4 pt-6">
                    {/* GitHub */}
                    <a
                        href="https://github.com/TimothyWaniayeChristian"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1A1A1A] p-3 rounded-md hover:bg-pink-600 transition duration-300"
                    >
                        <FiGithub className="text-xl" />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/timothy-christian-waniaye-291788265/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1A1A1A] p-3 rounded-md hover:bg-pink-600 transition duration-300"
                    >
                        <FiLinkedin className="text-xl" />
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:tcwaniaye@gmail.com"
                        className="bg-[#1A1A1A] p-3 rounded-md hover:bg-pink-600 transition duration-300"
                    >
                        <FiMail className="text-xl" />
                    </a>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/256778315407"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1A1A1A] p-3 rounded-md hover:bg-pink-600 transition duration-300"
                    >
                        <FaWhatsapp className="text-xl" />
                    </a>

                    {/* X */}
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
                            name="user_name"
                            required
                            className="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-md px-4 py-3 focus:outline-none focus:border-pink-500"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm text-gray-400">Email Address *</label>
                        <input
                            type="email"
                            name="user_email"
                            required
                            className="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-md px-4 py-3 focus:outline-none focus:border-pink-500"
                            placeholder="you@example.com"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block mb-2 text-sm text-gray-400">Phone Number</label>
                        <input
                            type="tel"
                            name="user_phone"
                            className="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-md px-4 py-3 focus:outline-none focus:border-pink-500"
                            placeholder="+256 712 345 678"
                        />
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
                    className="flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-md font-semibold transition duration-300 w-full md:w-auto"
                >
                    {loading ? "Sending..." : sent ? "Sent!" : "Send Message"}
                </motion.button>
            </motion.form>
        </section>
    );
}
