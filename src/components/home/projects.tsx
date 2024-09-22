import Image from "next/image";
import Link from "next/link";
interface ProjectCardProps {
    id: string,
    image: string,
    title: string;
    description: string;
    link: string;
}

const ProjectCard = (project: ProjectCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={project.image} alt="Project Image" className="w-full h-64 object-cover" width={150} height={10} />
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
                <Link href={project.link} className="block text-blue-600 hover:underline mt-4">Check it out! 🚀</Link>
            </div>
        </div>
    )
}


const ProjectsSection = () => {
    const projects: ProjectCardProps[] = [
        {
            id: new Date().getMilliseconds().toString(),
            image: "http://via.placeholder.com/1280x720",
            title: "Project Title",
            description: "This project is so cool, even my cat approves! 🐱",
            link: "#",
        },
        {
            id: new Date().getMilliseconds().toString(),
            image: "http://via.placeholder.com/1280x720",
            title: "Project Title",
            description: "This project is so cool, even my cat approves! 🐱",
            link: "#",
        },
        {
            id: new Date().getMilliseconds().toString(),
            image: "http://via.placeholder.com/1280x720",
            title: "Project Title",
            description: "This project is so cool, even my cat approves! 🐱",
            link: "#",
        },
    ];



    return (
        <section className="py-4">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl  lg:text-4xl mxl:text-4xl font-bold mb-8 text-center">🚀 Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        projects.map((project) => {
                            return <ProjectCard image={project.image} title={project.title} description={project.description} link={project.link} key={project.id} id={project.id} />
                        })
                    }

                </div>
                <div className="w-full text-end text-blue-800 mt-5 ">
                    <Link href="/projects">View all projects</Link>

                </div>
            </div>
        </section>
    );
};
export default ProjectsSection;