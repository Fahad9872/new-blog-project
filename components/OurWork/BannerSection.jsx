import Image from "next/image";
import Carousel from "react-elastic-carousel";

export default function BannerSection() {
    const caseStudies = [
        {
            id: 1,
            title: "ERP System Reengineering & MES Implementation",
            description:
                "A digital transformation success story for the US apparel manufacturing industry",
            stats: [
                {
                    value: "7-day",
                    label: "Turnaround for production planning",
                },
                {
                    value: "98%",
                    label: "Data accuracy enhancing reliability",
                },
            ],
            buttonText: "View Case Study",
            image:
                "https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80", // Replace with real Google/hosted image
        },
        {
            id: 2,
            title: "CRM Automation & Analytics Dashboard",
            description:
                "Helping a global retail chain streamline customer relationship management",
            stats: [
                {
                    value: "45%",
                    label: "Increase in customer retention",
                },
                {
                    value: "60%",
                    label: "Faster sales reporting",
                },
            ],
            buttonText: "View Case Study",
            image:
                "https://i.pinimg.com/736x/2d/95/e5/2d95e5886fc4c65a6778b5fee94a7d59.jpg", // Replace with another mockup
        },
        {
            id: 3,
            title: "Cloud Migration & AI Integration",
            description:
                "Boosting scalability and AI adoption for a Fortune 500 enterprise",
            stats: [
                {
                    value: "80%",
                    label: "Cost savings on infrastructure",
                },
                {
                    value: "95%",
                    label: "AI accuracy in predictive analytics",
                },
            ],
            buttonText: "View Case Study",
            image:
                "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D", // Replace with another mockup
        },
    ];
    return (
        <div className="md:max-w-[1400px] px-3 md:mx-auto">
            <Carousel
                pagination={true}
                showArrows={false}
                renderPagination={({ pages, activePage, onClick }) => {
                    return (
                        <div className="flex justify-center mt-8 space-x-2">
                            {pages.map((page) => {
                                const isActive = activePage === page;
                                return (
                                    <button
                                        key={page}
                                        onClick={() => onClick(page)}
                                        className={`h-3 transition-all duration-300 ${isActive
                                            ? "w-8 bg-purple-600 h-[5px] rounded-full"
                                            : "w-3 bg-light-gray h-[5px] rounded-full"
                                            }`}
                                    />
                                );
                            })}
                        </div>
                    );
                }}
            >
                {/* Slide 1 → first set of testimonials */}
                {caseStudies.map((study, index) => (
                    <div
                        key={study.id}
                        className={`w-full bg-gradient-to-b from-black to-blue-600 rounded-2xl text-white p-10 flex flex-col md:flex-row items-center justify-between gap-10 `}
                    >
                        {/* Left Content */}
                        <div className="max-w-xl">
                            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                                {study.title}
                            </h2>
                            <p className="mt-4 text-lg text-gray-200">{study.description}</p>

                            {/* Stats */}
                            <div className="flex items-center gap-10 mt-8">
                                {/* Stats */}
                                <div className="flex items-center gap-10 mt-8">
                                    {study.stats.map((stat, idx) => (
                                        <div key={idx} className="flex items-center gap-10">
                                            {/* Stat Item */}
                                            <div>
                                                <h3 className="text-2xl font-bold">{stat.value}</h3>
                                                <p className="text-gray-300 text-sm">{stat.label}</p>
                                            </div>

                                            {/* Divider (only between items, not at the end) */}
                                            {idx < study.stats.length - 1 && (
                                                <div className="w-px h-[50px] bg-gray" />
                                            )}
                                        </div>
                                    ))}
                                </div>

                            </div>


                            {/* Button */}
                            <button className="mt-8 px-6 py-3 rounded-md font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90">
                                {study.buttonText}
                            </button>
                        </div>

                        {/* Right Content (Tablet Image) */}
                        <div className="w-full md:w-[500px] flex justify-center">
                            <img
                                src={study.image}
                                alt={study.title}

                                className="rounded-xl shadow-lg w-[600px] h-[390px]"
                            />
                        </div>
                    </div>
                ))}
            </Carousel>

        </div>
    );
}
