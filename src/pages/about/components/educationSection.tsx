import Image from 'next/image';
const EductionSec = () => {
    return (


        <section className="relative">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col ">
                <div className="flex items-center md:items-end lg:items-end xl:items-end md:justify-between lg:justify-between xl:justify-between  justify-center relative z-10 mb-5 flex-col md:flex-row lg:flex-row xl:flex-row ">
                    <div className="pl-4 w-full flex justify-between flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row bg-white p-2 rounded-md shadow-md ">
                        <div className="flex flex-col items-center sm:items-start md:items-start lg:items-start xl:items-start mr-2">
                            <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1 max-sm:text-center">Education</h3>
                            <div className="flex flex-col pr-1 text-gray-500">
                                <p className="text-justify">I'm an IT graduate from the Govt. Graduate College of Science, affiliated with the University of the Punjab, having completed my degree in 2023.  </p>
                                <p className="text-justify">As a BSIT student, I gained skills in Object-Oriented Programming (OOP), Data Structures and Algorithms (DSA), web development, and software engineering. I also learned about networking, database management, and cybersecurity, while exploring emerging technologies like AI and cloud computing. Through practical projects, I developed strong problem-solving abilities and a deep understanding of system management.   </p></div>
                        </div>
                        <Image src="/images/education.png" alt="education" width={300} height={300} />
                    </div>
                </div>
                
            </div>

        </section>

    );
}

export default EductionSec;