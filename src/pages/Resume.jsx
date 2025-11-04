import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function Resume() {
    const [activeTab, setActiveTab] = useState("experience");

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="resume" className="bg-[#0e0e0e] text-white py-20 px-6 md:px-16">
            {/* Header */}
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-semibold mt-2">
                    Real <span className="text-pink-500">Problem Solutions</span> Experience
                </h2>
            </motion.div>

            {/* Tabs */}
            <div className="flex justify-center mb-12">
                <div className="bg-[#1a1a1a] rounded-md flex">
                    <button
                        onClick={() => setActiveTab("experience")}
                        className={`px-8 py-3 font-semibold transition-all rounded-md ${activeTab === "experience"
                            ? "text-pink-500"
                            : "text-gray-400 hover:text-pink-500 hover:bg-pink-600"
                            }`}
                    >
                        Experience
                    </button>
                    <button
                        onClick={() => setActiveTab("education")}
                        className={`px-8 py-3 font-semibold transition-all rounded-md ${activeTab === "education"
                            ? "text-pink-500"
                            : "text-gray-400 hover:text-pink-500 hover:bg-pink-600"
                            }`}
                    >
                        Education
                    </button>
                </div>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
                {activeTab === "experience" ? (
                    <motion.div
                        key="experience"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.5 }}
                        className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto"
                    >
                        {/* Pelere Group */}
                        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#2a2a2a] shadow-lg">
                            <h3 className="text-pink-500 font-semibold text-lg mb-1">
                                Pelere Group Uganda
                            </h3>
                            <div className="flex justify-between items-center mb-4">
                                <p className="font-semibold text-gray-200">IT Officer</p>
                                <span className="text-pink-500 text-sm">Aug 2024 – Aug 2025</span>
                            </div>
                            <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm leading-relaxed">
                                <li>
                                    Oversaw IT operations, including network configuration, software deployment, and systems troubleshooting, improving uptime by 20%.
                                </li>
                                <li>
                                    Designed and implemented automated reporting workflows, streamlining internal communications.
                                </li>
                                <li>
                                    Trained staff in digital literacy and cybersecurity best practices, increasing compliance with IT protocols.
                                </li>
                                <li>
                                    Documented processes and workflows aligned with ISO quality management principles.
                                </li>
                            </ul>
                        </div>

                        {/* Computing Palace */}
                        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#2a2a2a] shadow-lg">
                            <h3 className="text-pink-500 font-semibold text-lg mb-1">
                                Computing Palace Technologies
                            </h3>
                            <div className="flex justify-between items-center mb-4">
                                <p className="font-semibold text-gray-200">Software Engineer (Intern)</p>
                                <span className="text-pink-500 text-sm">May 2022 – Sept 2022</span>
                            </div>
                            <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm leading-relaxed">
                                <li>
                                    Contributed to UI/UX design improvements, enhancing system usability and accessibility.
                                </li>
                                <li>
                                    Developed technical and test documentation, improving team collaboration.
                                </li>
                                <li>
                                    Produced end-user guides that reduced support tickets by 15%.
                                </li>
                                <li>
                                    Participated in debugging and code reviews, ensuring high deployment quality.
                                </li>
                            </ul>
                        </div>

                        {/* Refactory Apprenticeship */}
                        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#2a2a2a] shadow-lg md:col-span-2">
                            <h3 className="text-pink-500 font-semibold text-lg mb-1">
                                Refactory Uganda — Software Engineering Apprenticeship
                            </h3>
                            <div className="flex justify-between items-center mb-4">
                                <p className="font-semibold text-gray-200">Team Lead / Software Engineer</p>
                                <span className="text-pink-500 text-sm">Mar 2025 – Oct 2025</span>
                            </div>
                            <p className="text-sm text-gray-300 mb-2">
                                <strong>Project:</strong> ONIMS (One Network Information System) — for Hold The Child NGO, South Sudan
                            </p>
                            <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm leading-relaxed">
                                <li>
                                    Led a cross-functional team in designing and developing ONIMS to streamline HR, project tracking, and document management.
                                </li>
                                <li>
                                    Designed database schemas, CRUD endpoints, and implemented authentication with role-based access control.
                                </li>
                                <li>
                                    Collaborated in an Agile setup to build RESTful APIs and backend logic using Node.js and Express.
                                </li>
                                <li>
                                    Contributed to UI/UX design to ensure intuitive and accessible user experiences.
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="education"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.5 }}
                        className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto"
                    >
                        {/* Makerere University */}
                        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#2a2a2a] shadow-lg">
                            <h3 className="text-pink-500 font-semibold text-lg mb-1">
                                Makerere University
                            </h3>
                            <div className="flex justify-between items-center mb-4">
                                <p className="font-semibold text-gray-200">
                                    Bachelor of Science in Software Engineering
                                </p>
                                <span className="text-pink-500 text-sm">Aug 2019 – Jan 2025</span>
                            </div>
                            <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm leading-relaxed">
                                <li>
                                    Focused on Requirements Engineering, UI/UX, Software Principles, Data Science, and Computer Networks.
                                </li>
                                <li>
                                    Projects included Data Science analysis using Python and Jupyter Notebooks.
                                </li>
                            </ul>
                        </div>

                        {/* Refactory Uganda AI Certificate */}
                        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#2a2a2a] shadow-lg">
                            <h3 className="text-pink-500 font-semibold text-lg mb-1">
                                Refactory Uganda
                            </h3>
                            <div className="flex justify-between items-center mb-4">
                                <p className="font-semibold text-gray-200">
                                    Certificate in Artificial Intelligence & Machine Learning
                                </p>
                                <span className="text-pink-500 text-sm">Oct 2023 – Jun 2024</span>
                            </div>
                            <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm leading-relaxed">
                                <li>
                                    Gained hands-on experience building AI models and implementing ML algorithms.
                                </li>
                                <li>
                                    Applied data-driven solutions to real-world problems and automation systems.
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
