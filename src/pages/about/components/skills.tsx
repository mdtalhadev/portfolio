import React from "react";
import SkillList from "./skilList";

// Define the type for each skill category
interface SkillCategory {
    title: string;
    skills: string[];
}

const Skills: React.FC = () => {
    // Array of skills data with proper typing
    const skillsData: SkillCategory[] = [
        { title: "Dart Programming", skills: ["Syntax", "OOP concepts", "Async programming", "wait / await"] },
        {
            title: "API Integration",
            skills: ["APIs integration", "Base API", "Token handling", "Dio / HTTP"],
        },

        {
            title: "Flutter Framework",
            skills: ["Architecture", "Widget Tree & Codebase", "State management (BloC / Cubit)", "Navigation (go_router)"],
        },
        { title: "Agile Methodology", skills: ["Jira", "Trello", "Click Up"] },
        {
            title: "Team Collaboration",
            skills: ["Slack", "Version Controlling", "GitHub / Bitbucket"],
        },
        {
            title: "Cross-Platform",
            skills: ["Android", "iOS", "Web app platforms"],
        },
        {
            title: "Deployment",
            skills: ["App Store", "Play Store", "Web Hosting"],
        },
        {
            title: "UI/UX Design",
            skills: ["User interfaces", "Responsive design", "Built-in widgets", "Custom UI components"],
        },
        {
            title: "Firebase",
            skills: ["Auth", "Firestore", "Storage", "Cloud Messaging"],
        },
        {
            title: "Payment Integration",
            skills: ["Google Pay", "Apple Pay", "Stripe"],
        },
        
        {
            title: "In App Purchases",
            skills: ["Managing products", "Playstore", "App Store", "Subscriptions"],
        },
        {
            title: "Project Management",
            skills: [ "Project Handling" ,"Task prioritization", "Time management",],
        },
    ];

    const [show, setShow] = React.useState(false);

    return (
        <section className="relative">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col">
                <div className="flex items-center md:items-end lg:items-end xl:items-end md:justify-between lg:justify-between xl:justify-between  justify-center relative z-10 mb-5 flex-col md:flex-row lg:flex-row xl:flex-row ">
                    <div className="pl-4 w-full flex justify-between flex-col bg-white p-2 rounded-md shadow-md ">


                        <div className="flex justify-between w-full"><h2 className="text-3xl font-bold mb-6">Skills</h2>
                            <span>
                                <button onClick={() => setShow(!show)} className="text-blue-500 border-none">
                                    <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!show ? "m19 9-7 7-7-7" : "m5 15 7-7 7 7"} />
                                    </svg>
                                    
                                

                                </button>

                            </span> </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8">
                            {skillsData.map((skillCategory, index, ) => (
                                <SkillList key={index} title={skillCategory.title} skills={show? skillCategory.skills : []} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
