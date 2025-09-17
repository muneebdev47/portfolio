import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4">
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
      <div className="mt-6 flex space-x-4">
        <a
          href="mailto:mmuneeb2807@gmail.com"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Contact Me
        </a>
        <a
          href="https://github.com/muneebdev47"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-400 text-white rounded-lg shadow hover:bg-gray-900"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
