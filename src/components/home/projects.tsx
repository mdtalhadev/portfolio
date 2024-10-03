import Slider, { Settings } from 'react-slick';
import Image from "next/image";
import Link from "next/link";
interface ProjectCardProps {
    id: string,
    images: string[],
    title: string;
    description: string;
    link: string;
}

const ProjectCard = (project: ProjectCardProps) => {
    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        fade: true,
        autoplay: true,
        dotsClass: "bg-transparent flex gap-2",
        appendDots: (dots) => (<></>)
    
      };


    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Slider {...settings} >
              {project.images.map((image, index) => (
                <div key={index}>
                  <Image src={image} alt="Project Image" className="w-full h-64 object-cover" width={400} height={200} />
                </div>
              ))}
            </Slider>
            
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
                <Link href={project.link} className="block text-blue-600 hover:underline mt-4">Check it out! 🚀</Link>
            </div>
        </div>
    )
}


const projects: ProjectCardProps[] = [
    {
        id: new Date().getMilliseconds().toString(),
        images: ["/images/me3mari/1.jpg","/images/me3mari/2.jpg","/images/me3mari/3.jpg"],
        title: "me3Mari",
        description: "A simple and easy to use platform for cunstruction and builders to manage their projects and clients.",
        link: "https://play.google.com/store/apps/details?id=com.fusion_wave.construction_app",
    },
    {
        id: new Date().getMilliseconds().toString(),
        images: ["/images/hoyzee/1.jpg","/images/hoyzee/2.jpg","/images/hoyzee/3.jpg"],
        title: "Hoyzee",
        description: "An online platform for Hotels and Restaurants to manage their bookings and customers.",
        link: "",
    },
    {
        id: new Date().getMilliseconds().toString(),
        images: ["/images/planetMatters/1.jpg","/images/planetMatters/2.jpg","/images/planetMatters/3.jpg"],
        title: "Planet Matters",
        description: "An application that deals with cleaning and collecting garbage to claim rewards and share achievements with friends on social media.",
        link: "https://play.google.com/store/apps/details?id=com.planet_matters.app",
    },
];
const ProjectsSection = () => {



    return (
        <section className="py-4">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl  lg:text-4xl mxl:text-4xl font-bold mb-8 text-center">🚀 Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        projects.map((project, index) => {
                            return <ProjectCard images={project.images} title={project.title} description={project.description} link={project.link} key={(new Date().getMilliseconds() + index)} id={project.id} />
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