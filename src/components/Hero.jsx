import heroImg from "../assets/hero.png";

export default function Hero() {
    return (
        <section className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between bg-[#0D0D0D] px-6 md:px-16 lg:px-24 pt-24 md:pt-32 text-white overflow-x-hidden">
            {/* ===== Left Section ===== */}
            <div className="max-w-xl space-y-6 text-center md:text-left mt-10 md:mt-0">
                <h4 className="uppercase text-gray-400 font-semibold tracking-wider">
                    Hello, I’m
                </h4>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                    <span className="text-pink-500">Timothy</span>{" "}
                    <span className="text-white drop-shadow-lg">Christian</span>{" "}
                    <span className="text-pink-400 animate-pulse">Waniaye</span>
                </h1>




                <h2 className="text-2xl sm:text-3xl font-bold text-pink-500">
                    Junior Software Engineer<span className="animate-pulse">|</span>
                </h2>

                <p className="text-gray-400 leading-relaxed">
                    Dynamic and results-oriented Software Engineer with over 2 years of
                    experience specializing in architecting scalable solutions and leading
                    transformative projects. Proven track record of diagnosing complex
                    challenges, delivering innovative solutions, and fostering collaborative
                    team environments.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <a
                        href="/resume"
                        className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-lg font-medium transition duration-300"
                    >
                        Download Resume
                    </a>

                    <a
                        href="/contact"
                        className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-5 py-2 rounded-lg font-medium transition duration-300"
                    >
                        Contact Me
                    </a>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center md:justify-start space-x-4 pt-6">
                    {/* GitHub */}
                    <a
                        href="https://github.com/TimothyWaniayeChristian"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1A1A1A] p-3 rounded-md hover:bg-pink-600 transition duration-300"
                    >
                        <i className="fab fa-github text-lg"></i>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/timothy-christian-waniaye-291788265/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1A1A1A] p-3 rounded-md hover:bg-pink-600 transition duration-300"
                    >
                        <i className="fab fa-linkedin-in text-lg"></i>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:tcwaniaye@gmail.com"
                        className="bg-[#1A1A1A] p-3 rounded-md hover:bg-pink-600 transition duration-300"
                    >
                        <i className="fas fa-envelope text-lg"></i>
                    </a>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/256778315407"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1A1A1A] p-3 rounded-md hover:bg-pink-600 transition duration-300"
                    >
                        <i className="fab fa-whatsapp text-lg"></i>
                    </a>

                    {/* X */}
                    <a
                        href="https://x.com/cristianwaniaye"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1A1A1A] p-3 rounded-md hover:bg-pink-600 transition duration-300"
                    >
                        <i className="fab fa-x-twitter text-lg"></i>
                    </a>
                </div>
            </div>

            {/* ===== Right Section (Image) ===== */}
            <div className="relative flex justify-center md:justify-end w-full md:w-1/2 overflow-hidden mb-10 md:mb-0">
                <div className="relative rounded-full border-4 border-pink-600 p-2 md:p-3 overflow-hidden max-w-full">
                    <img
                        src={heroImg}
                        alt="Timothy Christian Waniaye"
                        className="w-56 sm:w-72 md:w-96 lg:w-[420px] rounded-full object-cover max-w-full"
                    />
                </div>
            </div>
        </section>
    );
}
