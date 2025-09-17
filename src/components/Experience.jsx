export default function Experience() {
    return (
        <section className="bg-gray-900 py-12">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl font-semibold mb-6">Experience</h2>
                <div className="space-y-6">

                    {/* Senior Software Engineer */}
                    <div>
                        <h3 className="font-bold">
                            Devsinc | Senior Software Engineer (Sep 2023 – Mar 2025)
                        </h3>
                        <p className="text-gray-50 leading-relaxed">
                            Spearheaded the design and development of scalable enterprise applications with a focus on
                            backend architecture. Optimized <strong>FastAPI</strong> microservices for high concurrency,
                            reducing latency by 40%. Modernized legacy <strong>.NET systems</strong> to .NET Core, improving
                            maintainability and performance. Acted as a mentor to junior engineers through code reviews,
                            technical sessions, and architectural guidance, helping elevate overall team productivity.
                            Collaborated closely with product owners and DevOps teams to ensure seamless CI/CD pipelines
                            and cloud deployments on <strong>AWS</strong> and <strong>Azure</strong>.
                        </p>
                    </div>

                    {/* Software Engineer */}
                    <div>
                        <h3 className="font-bold">
                            Devsinc | Software Engineer (Feb 2023 – Sep 2023)
                        </h3>
                        <p className="text-gray-50 leading-relaxed">
                            Contributed to multiple SaaS and enterprise-grade solutions, primarily focusing on backend API
                            development using <strong>FastAPI</strong>, <strong>Django</strong>, and <strong>.NET</strong>.
                            Implemented RESTful APIs, optimized database queries, and integrated third-party services to
                            enhance system functionality. Played an active role in migrating existing systems to cloud-native
                            architectures. Assisted in improving application security, implementing role-based access control,
                            and participating in agile sprints for timely feature delivery.
                        </p>
                    </div>

                    {/* Freelance Projects */}
                    <div>
                        <h3 className="font-bold">
                            Freelance Projects (2023 – 2025)
                        </h3>
                        <p className="text-gray-50 leading-relaxed">
                            Delivered end-to-end software solutions for US-based startups and businesses. Led development for
                            platforms such as <strong>VinSavvy</strong> (automotive analytics with real-time scraping),
                            <strong>Kudo.ai</strong> (AI-powered translation system), <strong>Chronos</strong> (enterprise
                            asset management modernization), <strong>CuraHealth</strong> (HIPAA-compliant appointment
                            system), and <strong>Deaglo</strong> (fintech analytics). Responsibilities included backend
                            development, cloud deployments, database optimization, and integrating AI/ML-driven features
                            where required. Demonstrated ability to work independently with clients, ensuring project
                            management, technical delivery, and business alignment.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
