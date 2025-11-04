import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function Projects() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    const projects = [
        {
            id: 1,
            title: "One Network Information Management System (ONIMS)",
            category: "Enterprise System / NGO",
            description:
                "The ONIMS project is a modular, scalable ERP system developed for Hold The Child, a non-profit operating in South Sudan, Uganda, and Kenya. It digitizes and integrates HR, program management, and operations (including procurement, logistics, assets, and finance) into one secure platform with dashboards, audit trails, and mobile access. The system enhances accountability, reduces manual errors, streamlines workflows, and enables data-driven decision-making across the organization.",
            image: "/images/onims.png", // Add screenshot here
            link: "#",
        },
        {
            id: 2,
            title: "Mawunyo Market",
            category: "E-commerce Platform",
            description:
                "An innovative e-commerce platform where vendors can register to sell products and buyers can register to shop seamlessly. I contributed to requirements engineering and full-stack development, implementing secure authentication, product management, and a responsive marketplace interface.",
            image: "/images/mawunyo.png", // Add screenshot here
            link: "https://www.mawunyomarket.com/",
        },
        {
            id: 3,
            title: "All Events Kampala",
            category: "Web Platform / Events",
            description:
                "All Events Kampala is a one-stop digital platform showcasing what's happening in Kampala — before, during, and after events. Users can explore event rundowns, read highlights, and buy or sell tickets securely. The platform connects event organizers, promoters, and attendees in one interactive hub.",
            image: "/images/allevents.png", // Add screenshot here
            link: "https://allevents.ug/",
        },
    ];

    return (
        <section id="projects" className="bg-[#0e0e0e] text-white py-20 px-6 md:px-16">
            {/* Header */}
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                {/* <p className="text-sm uppercase tracking-widest text-gray-400">
                    Latest Works
                </p> */}
                <h2 className="text-4xl md:text-5xl font-bold">
                    Explore My Popular <span className="text-pink-500">Projects</span>
                </h2>
            </motion.div>

            {/* Projects List */}
            <div className="space-y-32 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.7 }}
                        className={`flex flex-col lg:flex-row items-center justify-between gap-10 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Project Image */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full lg:w-1/2 shadow-lg rounded-xl overflow-hidden"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded-xl border border-[#1f1f1f]"
                            />
                        </motion.div>

                        {/* Project Details */}
                        <div className="w-full lg:w-1/2 space-y-4">
                            <p className="uppercase text-sm tracking-widest text-pink-500 font-semibold">
                                {project.category}
                            </p>
                            <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
                            <p className="text-gray-400 text-base leading-relaxed">
                                {project.description}
                            </p>

                            {/* Link Button */}
                            <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                                className="inline-flex items-center justify-center mt-4 w-12 h-12 rounded-full border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-all"
                            >
                                <FiArrowUpRight className="text-xl" />
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
