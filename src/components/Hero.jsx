import { motion } from "framer-motion";
import profileImg from "../assets/profile.png"; // adjust filename if different

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-20 px-6 max-w-6xl mx-auto">
      {/* Profile Image - Big Square */}
      <motion.img
        src={profileImg}
        alt="Muhammad Muneeb Naeem"
        className="w-48 h-48 md:w-64 md:h-64 rounded-lg object-cover object-top shadow-lg md:mb-0 md:mr-10"
        style={{ transform: "scale(1.2)" }} // zoom image inside
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      />

      {/* Text Content */}
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Muhammad Muneeb Naeem
        </motion.h1>
        <p className="text-lg text-gray-50 max-w-2xl">
          Senior Software Engineer | Backend Specialist (Python, .NET, Django, FastAPI)
        </p>
        <div className="mt-6 flex space-x-4 justify-center md:justify-start">
          <a
            href="mailto:mmuneeb2807@gmail.com"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Mail Me
          </a>
          <a
            href="https://github.com/muneebdev47"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-400 text-white rounded-lg shadow hover:bg-gray-900"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-muneeb-naeem-109ab6231/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#0866C2] text-white rounded-lg shadow hover:bg-gray-900"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}