import heroImg from "../assets/hero.png";

export default function About() {
    return (
        <section className="w-full min-h-screen bg-[#0D0D0D] text-white px-6 md:px-16 lg:px-24 py-24 flex flex-col md:flex-row items-center justify-between overflow-x-hidden">

            {/* ===== Left Section (Profile Image) ===== */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0">
                <div className="relative rounded-lg overflow-hidden">
                    <img
                        src={heroImg}
                        alt="Timothy Christian Waniaye"
                        className="rounded-lg w-80 sm:w-96 md:w-[420px] object-cover grayscale hover:grayscale-0 transition duration-500"
                    />
                </div>
            </div>

            {/* ===== Right Section (About Content) ===== */}
            <div className="w-full md:w-1/2 space-y-6 md:pl-12">

                <h2 className="text-sm uppercase tracking-wider text-gray-400 font-semibold">
                    About Me
                </h2>

                <h1 className="text-3xl sm:text-4xl font-extrabold leading-snug">
                    <span className="text-pink-500">Driven</span>, Innovative <br />
                    <span className="text-white">Software </span>
                    <span className="text-pink-500">Engineer</span>
                </h1>

                <p className="text-gray-400 leading-relaxed">
                    Motivated Software Engineer with a strong foundation in information systems, AI, and data-driven solutions.
                    Experienced in software development, systems architecture, CI/CD pipelines, and IT infrastructure support.
                    Skilled at building scalable, secure, and user-friendly applications while fostering cross-team collaboration.
                    Passionate about Industry 4.0, digital mobility platforms, and AI/ML in connected systems.
                </p>

                {/* ===== Key Skills / Highlights ===== */}
                <div className="space-y-2">
                    <p className="flex items-start gap-2">
                        <span className="text-pink-500">✔</span>
                        Develop and maintain scalable full-stack web applications.
                    </p>
                    <p className="flex items-start gap-2">
                        <span className="text-pink-500">✔</span>
                        Design and optimize AI and machine learning-driven systems.
                    </p>
                    <p className="flex items-start gap-2">
                        <span className="text-pink-500">✔</span>
                        Implement CI/CD pipelines and containerized deployments.
                    </p>
                    <p className="flex items-start gap-2">
                        <span className="text-pink-500">✔</span>
                        Conduct user training and technical documentation writing.
                    </p>
                    <p className="flex items-start gap-2">
                        <span className="text-pink-500">✔</span>
                        Support secure IT infrastructures and network environments.
                    </p>
                </div>



                {/* ===== Social Links (Same as Hero) ===== */}
                <div className="flex space-x-4 pt-6">
                    {/* GitHub */}
                    <a
                        href="https://github.com/TimothyWaniayeChristian"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1A1A1A] p-3 rounded-md hover:bg-pink-600 transition duration-300"
                        aria-label="GitHub Profile"
                    >
                        <i className="fab fa-github text-lg"></i>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/timothy-christian-waniaye-291788265/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1A1A1A] p-3 rounded-md hover:bg-pink-600 transition duration-300"
                        aria-label="LinkedIn Profile"
                    >
                        <i className="fab fa-linkedin-in text-lg"></i>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:tcwaniaye@gmail.com"
                        className="bg-[#1A1A1A] p-3 rounded-md hover:bg-pink-600 transition duration-300"
                        aria-label="Email Timothy"
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

                    {/* X (Twitter) */}
                    <a
                        href="https://x.com/cristianwaniaye"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1A1A1A] p-3 rounded-md hover:bg-pink-600 transition duration-300"
                        aria-label="X Profile"
                    >
                        <i className="fab fa-x-twitter text-lg"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}
