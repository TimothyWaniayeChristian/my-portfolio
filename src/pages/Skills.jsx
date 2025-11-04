import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
    SiJavascript,
    SiPython,
    SiHtml5,
    SiCss3,
    SiReact,
    SiNextdotjs,
    SiExpress,
    SiDjango,
    SiLaravel,
    SiVite,
    SiMocha,
    SiChai,
    SiGit,
    SiLinux,
    SiDocker,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiJupyter,
    SiNumpy,
    SiPandas,
    SiScikitlearn,
    SiTensorflow,
    SiKeras,
} from "react-icons/si";
import { FaNetworkWired, FaJava, FaTerminal, FaTools } from "react-icons/fa";

export default function Skills() {
    const [activeTab, setActiveTab] = useState("programming");

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const skills = {
        programming: [
            { name: "Python", icon: <SiPython /> },
            { name: "Java", icon: <FaJava /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "HTML", icon: <SiHtml5 /> },
            { name: "CSS", icon: <SiCss3 /> },
            { name: "Bash", icon: <FaTerminal /> },
        ],
        frameworks: [
            { name: "React.js", icon: <SiReact /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "Django", icon: <SiDjango /> },
            { name: "Laravel", icon: <SiLaravel /> },
            { name: "Vite", icon: <SiVite /> },
            { name: "Testing (Mocha/Chai)", icon: <FaTools /> },
        ],
        systems: [
            { name: "Linux", icon: <SiLinux /> },
            { name: "Git", icon: <SiGit /> },
            { name: "CI/CD Pipelines", icon: <FaNetworkWired /> },
            { name: "Docker", icon: <SiDocker /> },
            { name: "Firewalls", icon: <FaNetworkWired /> },
            { name: "Network Monitoring", icon: <FaNetworkWired /> },
            { name: "Data Integrity", icon: <FaNetworkWired /> },
        ],
        databases: [
            { name: "MySQL", icon: <SiMysql /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "MongoDB", icon: <SiMongodb /> },
        ],
        ai: [
            { name: "Machine Learning", icon: <SiScikitlearn /> },
            { name: "Predictive Analytics", icon: <SiNumpy /> },
            { name: "Jupyter Notebook", icon: <SiJupyter /> },
            { name: "NumPy", icon: <SiNumpy /> },
            { name: "Pandas", icon: <SiPandas /> },
            { name: "Scikit-learn", icon: <SiScikitlearn /> },
            { name: "TensorFlow", icon: <SiTensorflow /> },
            { name: "Keras", icon: <SiKeras /> },
            { name: "IoT Fundamentals", icon: <FaNetworkWired /> },
            { name: "Smart Mobility", icon: <FaNetworkWired /> },
        ],
    };

    return (
        <section id="skills" className="bg-[#0e0e0e] text-white py-20 px-6 md:px-16">
            {/* Header */}
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold">
                    Professional <span className="text-pink-500">Skills</span>
                </h2>
                <p className="text-gray-400 mt-3 text-sm md:text-base">
                    A showcase of my technical expertise — from full-stack development to AI & Data Science.
                </p>
            </motion.div>

            {/* Tabs */}
            <div className="flex justify-center mb-12 relative">
                <div className="flex bg-[#1a1a1a] rounded-xl px-2 py-2 shadow-lg border border-[#2a2a2a]">
                    {Object.keys(skills).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className="relative px-6 py-3 text-sm md:text-base font-semibold text-gray-400 hover:text-white transition-all capitalize"
                        >
                            {tab}
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 bottom-0 w-full h-[2px] bg-pink-500 rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Skills Grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
                >
                    {skills[activeTab].map((skill, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.07, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a] flex flex-col items-center justify-center text-center shadow-md hover:border-pink-500 hover:shadow-pink-500/30 transition-all"
                        >
                            <div className="text-4xl mb-3 text-pink-500">{skill.icon}</div>
                            <p className="text-gray-300 text-sm font-medium">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </section>
    );
}
