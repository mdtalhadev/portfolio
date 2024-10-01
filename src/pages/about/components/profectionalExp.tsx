import Image from "next/image";


const keyPoints = [
    "Leading the development of mobile applications for Android and iOS.",
    "Deliver High-quality apps that meet industry standards.",
    "Collaborate with cross-functional teams to define, design, and ship new features.",
    "Work on bug fixing and improving application performance.",
    "Work on maintaining code quality and organization.",
    "Work on improving application performance.",
    "Deploy applications to the Google Play Store and Apple App Store.",
];

const ProfectionalExpSec = () => {
    return (
        <section className="relative">
            <div className="w-full max-w-7xl mx-auto flex flex-col">
                <div className="flex items-center md:items-end justify-center md:justify-between relative z-10 mb-5 flex-col md:flex-row">
                    <div className="pl-4 w-full flex items-center justify-between flex-col sm:flex-row bg-white p-2 rounded-md shadow-md">
                        <Image
                            src="/images/workExp.png"
                            alt="Professional Experience"
                            width={400}
                            height={400}
                            className="flex-shrink-0"
                        />
                        <div className="flex flex-col items-center sm:items-start px-8">
                            <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1 text-center sm:text-left pb-2">
                                Professional Experience
                            </h3>
                            <div className="flex flex-col pr-1 text-gray-500">
                                <p className="text-justify">
                                    As a Flutter Developer at FusionWave, I create top-notch mobile apps for Android, iOS, and web platforms, ensuring high-quality solutions and exceptional user experiences with core expertise.
                                </p>
                                <h3 className="font-manrope font-bold text-xl py-2 text-gray-900 mb-1 text-center sm:text-left">
                                    Key Responsibility
                                </h3>
                                <ul >
                                    {keyPoints.map((keyPoint, index) => (
                                        <div key={index} className="text-justify flex gap-2"> <span><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path className="stroke-gray-400 stroke-2 " stroke-linecap="round" strokeLinejoin="round" strokeWidth="1" d="m7 16 4-4-4-4m6 8 4-4-4-4"/>
                                      </svg>
                                      </span> {keyPoint}</div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default ProfectionalExpSec;