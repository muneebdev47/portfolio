import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            title: "VinSavvy",
            link: "https://vinsavvy.ai/",
            description:
                "Automotive analytics platform leveraging web scraping, Django backend, and React frontend. Provides regional vehicle insights and profitability analysis.",
        },
        {
            title: "Kudo.ai",
            link: "https://kudo.ai/solutions/kudo-ai-speech-translator/",
            description:
                "Enhanced AI-powered speech translation system. Implemented async ORM and multithreading to improve performance by 75%.",
        },
        {
            title: "CuraHealth",
            link: "https://curahealth.com/",
            description:
            "Built HIPAA-compliant appointment management system with secure multi-tenancy, logging, and custom access control.",
        },
        {
            title: "Deaglo",
            link: "https://www.deaglo.com/",
            description:
            "Led a fintech platform team to build investment analytics features with Python, .NET, and AWS cloud services.",
        },
        {
            title: "Chronos",
            description:
                "Migrated Microsoft’s in-house asset management from .NET 4 to FastAPI with CI/CD pipelines and improved scalability.",
        },
    ];

    return (
        <section className="max-w-5xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-semibold mb-6">Highlighted Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((proj, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        className="p-6 bg-gray-600 rounded-2xl shadow hover:shadow-lg"
                    >
                        <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                        <p className="text-gray-50 mb-3">{proj.description}</p>
                        {proj.link && (
                            <a
                                href={proj.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline"
                            >
                                View Project
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
