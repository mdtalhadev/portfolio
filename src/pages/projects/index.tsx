import ProjectDetailCard from './components/projectDetailCard';


const Projects = ()=>{
    const projects = [
        {
            
            title: 'Me3mari',
            description: 'Me3mari is the first App in the construction industry in Saudi Arabia that creates a central collaboration hub for homeowners, design offices, contractors, and material suppliers who all can now collaborate seamlessly for the success of the entire construction project lifecycle.',
            images: ["/images/me3mari/1.jpg","/images/me3mari/2.jpg","/images/me3mari/3.jpg"],            colaboration: true,
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.fusion_wave.construction_app',
            appStoreLink: 'https://apps.apple.com/us/app/me3mari/id6474303131',
            technologies:['FLutter','Dart','Firebase', 'Bloc' ]
        },
        {
        
            title: 'Hoyzee',
            description: 'At Fusionwave, I developed the Ryddel mobile app for Android and iOS, enabling collaborative decision-making with social logins and custom questions.',
            images: ["/images/hoyzee/1.jpg","/images/hoyzee/2.jpg","/images/hoyzee/3.jpg"],
            colaboration: false,
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.ryddel.app',
            appStoreLink: 'https://apps.apple.com/pk/app/ryddel/id6476131835',
            technologies:['FLutter','Dart','Firebase', 'Bloc' ]
        },
        {
        
            title: 'Ryddel',
            description: 'At Fusionwave, I developed the Ryddel mobile app for Android and iOS, enabling collaborative decision-making with social logins and custom questions.',
            images:[ 'images/ryddel/1.jpg','images/ryddel/2.jpg'],
            colaboration: false,
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.ryddel.app',
            appStoreLink: 'https://apps.apple.com/pk/app/ryddel/id6476131835',
            technologies:['FLutter','Dart','Firebase', 'Bloc' ]
        },
        {
        
            title: 'Planet maters',
            description: 'An application that deals with cleaning and collecting garbage to claim rewards and share achievements with friends on social media.',
            images: ["/images/planetMatters/1.jpg","/images/planetMatters/2.jpg","/images/planetMatters/3.jpg"],
            colaboration: true,
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.planet_matters.app',
            appStoreLink: 'https://apps.apple.com/at/app/planet-matters-clean-up-earn/id6633426831',
            technologies:['FLutter','Dart','Firebase', 'Bloc' ]
        },
        {
        
            title: 'myTerrace',
            description: 'Leading our flagship app, I oversee a platform facilitating transactions for a wide range of offerings, from freelance work and property rentals to event tickets and more. Integrated with OpenAI for user assistance.',
            images:[ 'images/ryddel/1.jpg','images/ryddel/2.jpg'],
            colaboration: true,
            // playStoreLink: 'https://play.google.com/store/apps/details?id=com.ryddel',
            // appStoreLink: 'https://apps.apple.com/us/app/ryddel/id1560242736',
            technologies:['FLutter','Dart','Firebase', 'APIs', 'Bloc' ]
        },
        {
            title: 'Instructr',
            description: 'An application that facilitates communication between learners and driving instructors, including session booking, progress tracking, chat, and payment integration',
            images:[ 'images/ryddel/1.jpg','images/ryddel/2.jpg'],
            colaboration: false,
            // playStoreLink: 'https://play.google.com/store/apps/details?id=com.ryddel',
            // appStoreLink: 'https://apps.apple.com/us/app/ryddel/id1560242736',
            technologies:['FLutter','Dart','Firebase', 'Bloc' ]
        },

    ];

    return (
        <div>
            {projects.map((project, index) => (
                <ProjectDetailCard {...project} index={index}  key={index}   />
            ))}
        </div>
    );
};

export default Projects;