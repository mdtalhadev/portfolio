import Image from 'next/image';
const keyPoints = [
    "Object-Oriented Programming (OOP)",
    "Data Structures and Algorithms (DSA)",
    "Web Development",
    "Software Engineering",
    "Database Management",
];

const EductionSec = () => {
    return (


        <section className="relative">
            <div className="flex items-center md:items-end lg:items-end xl:items-end md:justify-between lg:justify-between xl:justify-between  justify-center relative z-10 mb-5 flex-col md:flex-row lg:flex-row xl:flex-row ">
                <div className="pl-4 w-full flex items-center justify-between flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row bg-white p-2 rounded-md shadow-md ">
                                    <Image src="/images/educationImg.png" alt="education" width={400} height={400} />
                    <div className=" px-8 flex flex-col items-center sm:items-start md:items-start lg:items-start xl:items-start mr-2">
                        <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1 max-sm:text-center">Education</h3>
                        <div className="flex flex-col pr-1 text-gray-500">
                            <p className="text-justify">I'm an IT graduate from the Govt. Graduate College of Science, affiliated with the University of the Punjab, having completed my degree in 2023.  </p>
                            <h3 className="font-manrope font-bold text-xl py-2 text-gray-900 mb-1 text-center sm:text-left">
                                Key Subjects
                                </h3>
                                <ul >
                                    {keyPoints.map((keyPoint, index) => (
                                        <div key={index} className="text-justify flex gap-2"> <span><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path className="stroke-gray-400 stroke-2 " stroke-linecap="round" strokeLinejoin="round" strokeWidth="1" d="m7 16 4-4-4-4m6 8 4-4-4-4"/>
                                      </svg>
                                      </span> {keyPoint}</div>
                                    ))}
                                </ul>

                            {/* <p className="text-justify">As a BSIT student, I gained skills in Object-Oriented Programming (OOP), Data Structures and Algorithms (DSA), web development, and software engineering. I also learned about networking, database management, and cybersecurity, while exploring emerging technologies like AI and cloud computing. Through practical projects, I developed strong problem-solving abilities and a deep understanding of system management.   </p> */}
                        </div>
                    </div>
                </div>
            </div>



        </section>

    );
}

export default EductionSec;