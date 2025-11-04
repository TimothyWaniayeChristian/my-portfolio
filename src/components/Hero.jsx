import heroImg from "../assets/hero.png"; // replace with your image path

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between bg-black text-white px-6 md:px-16 pt-24 md:pt-32">
            {/* Left Content */}
            <div className="max-w-lg space-y-6">
                <h4 className="text-gray-400 uppercase font-semibold">Hello, I’m</h4>
                <h1 className="text-4xl md:text-5xl font-extrabold">
                    <span className="text-pink-500">Wilson</span> Kinyua
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-pink-500">
                    Experienced Software Engineer|
                </h2>

                <p className="text-gray-400 leading-relaxed">
                    Dynamic and results-oriented Software Engineer with over 5 years of
                    experience specializing in architecting scalable solutions and leading
                    transformative projects. Proven track record of diagnosing complex
                    challenges, delivering innovative solutions, and fostering
                    collaborative team environments.
                </p>

                <div className="flex space-x-4">
                    <a
                        href="#resume"
                        className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg font-medium"
                    >
                        Download Resume
                    </a>
                    <a
                        href="#contact"
                        className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-4 py-2 rounded-lg font-medium"
                    >
                        Contact Me
                    </a>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-4 pt-4">
                    {["linkedin", "twitter", "github", "email"].map((icon) => (
                        <div
                            key={icon}
                            className="bg-gray-900 p-2 rounded-md hover:bg-pink-600 cursor-pointer transition"
                        >
                            <i className={`fab fa-${icon}`}></i>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Image */}
            <div className="relative mb-12 md:mb-0">
                <div className="rounded-full border-4 border-pink-600 p-1 overflow-hidden">
                    <img
                        src={heroImg}
                        alt="Wilson Kinyua"
                        className="w-72 md:w-96 rounded-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
