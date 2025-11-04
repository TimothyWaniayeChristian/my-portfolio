export default function Services() {
    const services = [
        {
            icon: "fas fa-code",
            title: "Software Development",
            desc: "Design and develop scalable, secure, and high-performing web and desktop applications tailored to client and enterprise needs.",
        },
        {
            icon: "fas fa-brain",
            title: "Artificial Intelligence & Machine Learning",
            desc: "Build and deploy intelligent systems, predictive models, and data-driven automation solutions that power smarter decision-making.",
        },
        {
            icon: "fas fa-database",
            title: "Data Science & Analytics",
            desc: "Transform raw data into actionable insights through analytics, visualization, and predictive modeling for informed business strategies.",
        },
        {
            icon: "fas fa-network-wired",
            title: "Systems Architecture & Infrastructure",
            desc: "Design and manage efficient IT systems, CI/CD pipelines, and infrastructure to ensure reliable performance and security compliance.",
        },
        {
            icon: "fas fa-cogs",
            title: "API Design & Integration",
            desc: "Develop and integrate RESTful and GraphQL APIs to connect systems, automate workflows, and enhance platform interoperability.",
        },
        {
            icon: "fas fa-chalkboard-teacher",
            title: "User Training & IT Support",
            desc: "Empower teams with digital literacy, system adoption, and best practices through structured training and responsive technical support.",
        },
    ];

    return (
        <section className="w-full min-h-screen bg-[#0D0D0D] text-white px-6 md:px-16 lg:px-24 py-24 text-center">

            {/* ===== Header ===== */}
            {/* <h4 className="uppercase text-gray-400 font-semibold tracking-wider mb-2">
                What I Do
            </h4> */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 leading-snug">
                <span className="text-pink-500">Engineering</span> Smart, Scalable &{" "}
                <span className="text-pink-500">Data-Driven</span> Solutions
            </h1>

            {/* ===== Services Grid ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-[#1A1A1A] p-8 rounded-lg hover:bg-[#2A2A2A] transition duration-300 shadow-lg"
                    >
                        <div className="text-pink-500 text-4xl mb-4">
                            <i className={service.icon}></i>
                        </div>
                        <h3 className="font-bold text-lg uppercase mb-3">
                            {service.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {service.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* ===== Social Icons (same as Hero & About) ===== */}
            <div className="flex justify-center space-x-4 pt-10">
                {/* GitHub */}
                <a
                    href="https://github.com/TimothyWaniayeChristian"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1A1A1A] p-3 rounded-md hover:bg-pink-600 transition duration-300"
                    aria-label="GitHub"
                >
                    <i className="fab fa-github text-lg"></i>
                </a>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/timothy-christian-waniaye-291788265/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1A1A1A] p-3 rounded-md hover:bg-pink-600 transition duration-300"
                    aria-label="LinkedIn"
                >
                    <i className="fab fa-linkedin-in text-lg"></i>
                </a>

                {/* Email */}
                <a
                    href="mailto:tcwaniaye@gmail.com"
                    className="bg-[#1A1A1A] p-3 rounded-md hover:bg-pink-600 transition duration-300"
                    aria-label="Email"
                >
                    <i className="fas fa-envelope text-lg"></i>
                </a>

                {/* WhatsApp */}
                <a
                    href="https://wa.me/256778315407"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1A1A1A] p-3 rounded-md hover:bg-pink-600 transition duration-300"
                    aria-label="WhatsApp"
                >
                    <i className="fab fa-whatsapp text-lg"></i>
                </a>

                {/* X */}
                <a
                    href="https://x.com/cristianwaniaye"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1A1A1A] p-3 rounded-md hover:bg-pink-600 transition duration-300"
                    aria-label="X (Twitter)"
                >
                    <i className="fab fa-x-twitter text-lg"></i>
                </a>
            </div>
        </section>
    );
}
