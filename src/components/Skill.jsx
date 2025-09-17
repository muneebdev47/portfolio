import { FaPython, FaReact, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";
// import {
//     SiDjango,
//     SiFastapi,
//     SiDotnet,
//     SiCsharp,
//     SiJavascript,
//     SiPostgresql,
//     SiMysql,
//     SiMicrosoftsqlserver,
//     SiAzuredevops,
//     SiDigitalocean,
// } from "react-icons/si";

// export default function Skill() {
//     const skills = [
//         { name: "Python", icon: <FaPython className="text-yellow-400 text-3xl" /> },
//         { name: "Django", icon: <SiDjango className="text-green-500 text-3xl" /> },
//         { name: "FastAPI", icon: <SiFastapi className="text-teal-400 text-3xl" /> },
//         { name: ".NET Core", icon: <SiDotnet className="text-purple-500 text-3xl" /> },
//         { name: "C#", icon: <SiCsharp className="text-blue-500 text-3xl" /> },
//         { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
//         { name: "React", icon: <FaReact className="text-sky-400 text-3xl" /> },
//         { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600 text-3xl" /> },
//         { name: "MySQL", icon: <SiMysql className="text-orange-500 text-3xl" /> },
//         { name: "SQL Server", icon: <SiMicrosoftsqlserver className="text-red-600 text-3xl" /> },
//         { name: "AWS", icon: <FaAws className="text-orange-400 text-3xl" /> },
//         { name: "Azure", icon: <SiAzuredevops className="text-blue-600 text-3xl" /> },
//         { name: "DigitalOcean", icon: <SiDigitalocean className="text-blue-500 text-3xl" /> },
//         { name: "Docker", icon: <FaDocker className="text-blue-400 text-3xl" /> },
//         { name: "Git", icon: <FaGitAlt className="text-red-500 text-3xl" /> },
//         { name: "CI/CD", icon: <FaGitAlt className="text-green-500 text-3xl" /> }, // fallback
//     ];

//     return (
//         <section className="bg-gray-900 py-10">
//             <div className="max-w-5xl mx-auto px-6">
//                 <h2 className="text-3xl font-bold text-white mb-10 text-center">Skills</h2>
//                 <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-gray-50">
//                     {skills.map((skill, idx) => (
//                         <li
//                             key={idx}
//                             className="flex flex-col items-center bg-gray-800 rounded-xl p-4 shadow hover:shadow-lg transition"
//                         >
//                             {skill.icon}
//                             <span className="mt-2 text-sm">{skill.name}</span>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </section>
//     );
// }

export default function Skill() {
    const skills = [
        // Backend
        "Django", "FastAPI", "Restful API", "C#", "ASP.NET", "DotNet", "SQL/MySql",
        // Databases
        "PostgreSQL", "Firebase", "MongoDB",
        // Testing
        "Xunit", "Nunit", "Pytest",
        // Tools & SCM
        "GitHub", "BitBucket", "Jira", "Watchdogs",
        // Cloud & DevOps
        "AWS", "Azure", "Docker", "Selenium",
        // Scraping / Data
        "BeautifulSoup", "Scrapy"
    ];

    return (
        <section className="bg-gray-900 py-10">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-10 text-center">Skills</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, idx) => (
                        <span
                            key={idx}
                            className="px-4 py-2 border border-gray-300 text-gray-100 rounded-lg shadow hover:bg-gray-800 transition"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

