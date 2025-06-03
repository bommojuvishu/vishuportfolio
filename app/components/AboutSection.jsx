import React from "react";

const AboutSection = () => {
    return (
        <div className="bg-gray-50">
            <div className="container mx-auto py-8 ">
                <div className=" min-h-screen py-12 ">
                    {/* Container */}
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Column */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Get to know me!</h2>
                            <p className="mb-4">
                                I’m Vishwanath, a full-stack engineer with 10 years of experience
                                building scalable web applications. I enjoy working with modern
                                technologies like React, Flask, and AWS.
                            </p>

                            <p className="mb-4">
                                I'm open to <span className="font-bold">Job</span> opportunities where I can contribute,
                                learn, and grow. If you have a good opportunity that matches my skills and experience
                                then don't hesitate to <span className="font-bold">contact</span> me.

                            </p>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded shadow mt-4">
                                CONTACT
                            </button>
                        </div>

                        {/* Right Column (Skills) */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">My Skills</h2>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    "HTML",
                                    "CSS",
                                    "JavaScript",
                                    "React",
                                    "Next.js",
                                    "Flask",
                                    "Python",
                                    "PostgreSQL",
                                    "GIT",
                                    "Github",
                                    "Responsive Design",
                                    "REST APIs",
                                    "AWS",
                                    "Docker",
                                    "Agile Methodologies",
                                    "Kubernetes",
                                    "CI/CD",
                                    "GraphQL",
                                    "Tailwind CSS",
                                    "Material UI",
                                    "Redux",
                                    "TypeScript",
                                    "Node.js",
                                    "Express.js",
                                ].map((skill) => (
                                    <span key={skill} className="bg-gray-200 px-4 py-2 rounded shadow">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
