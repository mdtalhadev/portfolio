import ProjectDetailCard from './components/projectDetailCard';


const projects = [
    {
    
        title: 'Ryddel',
        description: 'Ryddel is the “IDK” Killer! No more difficult decisions! Let each person choose based on the strength of their preference to reach the ideal decision quickly and easily?',
        images:[ 'images/ryddel/1.jpg','images/ryddel/2.jpg'],
        colaboration: false,
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.ryddel.app',
        appStoreLink: 'https://apps.apple.com/pk/app/ryddel/id6476131835',
        technologies:['FLutter','Dart','Firebase', 'Bloc' ]
    },
    {
        
        title: 'Me3mari',
        description: 'Me3mari is the first App in the construction industry in Saudi Arabia that creates a central collaboration hub for homeowners, design offices, contractors, and material suppliers who all can now collaborate seamlessly for the success of the entire construction project lifecycle.',
        images: ["/images/me3mari/1.jpg","/images/me3mari/2.jpg","/images/me3mari/3.jpg"],
        colaboration: true,
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.fusion_wave.construction_app',
        appStoreLink: 'https://apps.apple.com/us/app/me3mari/id6474303131',
        technologies:['FLutter','Dart','Firebase', 'Notifier' ]
    },
    {
    
        title: 'Hoyzee',
        description: 'Introducing Hoyzee, the ultimate food lover\'s companion app that brings you closer to the vibrant world of food trucks and vendors in your area. Whether you\'re a foodie looking for exciting culinary experiences or a vendor seeking to expand your customer base, Hoyzee is here to connect you to the heart of the food truck community.',
        images: ["/images/hoyzee/1.jpg","/images/hoyzee/2.jpg","/images/hoyzee/3.jpg"],
        colaboration: true,
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.hozyee_app.hoyzee',
        appStoreLink: 'https://apps.apple.com/pk/app/ryddel/id6476131835',
        technologies:['FLutter','Dart','Firebase', 'Notifier' ]
    },
    {
    
        title: 'Planet maters',
        description: 'The app that makes environmental cleanup fun, rewarding, and impactful. Clean up nature, track your efforts, and earn exciting rewards from a variety of partner brands. Contribute to a cleaner planet while enjoying gift cards, and exclusive offers from our partners.',
        images: ["/images/planetMatters/1.jpg","/images/planetMatters/2.jpg","/images/planetMatters/3.jpg"],
        colaboration: true,
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.planet_matters.app',
        appStoreLink: 'https://apps.apple.com/at/app/planet-matters-clean-up-earn/id6633426831',
        technologies:['FLutter','Dart','Firebase', 'Bloc' , 'Notifier' ]
    },
    {
    
        title: 'myTerrace',
        description: 'Leading our flagship app, I oversee a platform facilitating transactions for a wide range of offerings, from freelance work and property rentals to event tickets and more. Integrated with OpenAI for user assistance.',
        images:[ 'images/my_terrace/1.jpg','images/my_terrace/2.jpg','images/my_terrace/3.jpg','images/my_terrace/4.jpg','images/my_terrace/5.jpg'],
        colaboration: true,
        // playStoreLink: 'https://play.google.com/store/apps/details?id=com.ryddel',
        // appStoreLink: 'https://apps.apple.com/us/app/ryddel/id1560242736',
        technologies:['FLutter','Dart','Firebase', 'APIs', 'Bloc', 'Cubit' ]
    },
    {
        title: 'Instructr',
        description: 'An application that facilitates communication between learners and driving instructors, including session booking, progress tracking, chat, and payment integration',
        images:[ 'images/instructor/1.jpg','images/instructor/2.jpg','images/instructor/3.jpg','images/instructor/4.jpg','images/instructor/5.jpg','images/instructor/6.jpg'],
        colaboration: false,
        // playStoreLink: 'https://play.google.com/store/apps/details?id=com.ryddel',
        // appStoreLink: 'https://apps.apple.com/us/app/ryddel/id1560242736',
        technologies:['FLutter','Dart','Firebase', 'Notifier' ]
    },

];
const Projects = ()=>{

    return (
        <>
        <div className="bg-gradient-to-b from-gray-800 to-gray-700 w-full h-60 text-center flex items-center  ">
                <div className="container mx-auto px-4">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">✨ My Deliverables ♨️</h1>
                    <p className="mt-2 text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg text-gray-200">🔥I learn, I think, I implement, and I build incredible things 🔥</p>
                </div>
            </div>
        <div>
            {projects.map((project, index) => (
                <ProjectDetailCard {...project} index={index}  key={index}   />
            ))}
        </div>
        </>
    );
};

export default Projects;