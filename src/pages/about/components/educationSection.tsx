import Image from "next/image";
const keyPoints = [
  "Object-Oriented Programming (OOP)",
  "Data Structures and Algorithms (DSA)",
  "Web Development",
  "Software Engineering",
  "Database Management",
];

const EductionSec = () => {
  return (
    <section className="relative mb-10">
      <div className="px-2 w-full items-center sm:items-center md:items-start flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row bg-white py-2 rounded-md shadow-md ">
        <Image
          src="/images/educationImg.png"
          alt="education"
          width={400}
          height={400}
          className="max-h-80"
        
        />
        <div className="flex flex-col items-center sm:items-start md:items-start lg:items-start xl:items-start  md:pr-8 lg:pr-8 xl:pr-8 ">
          <h3 className="font-manrope font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-gray-900 mb-1 text-center sm:text-left pb-2">
            Education
          </h3>
          <div className="flex flex-col pr-1 text-gray-500">
            <p className="text-justify">
              I'm an IT graduate from the Govt. Graduate College of Science,
              affiliated with the University of the Punjab, having completed my
              degree in 2023.{" "}
            </p>
            <h3 className="font-manrope font-bold text-xl py-2 text-gray-900 mb-1 text-left">
              Key Subjects
            </h3>
            <ul>
              {keyPoints.map((keyPoint, index) => (
                <div
                  key={index}
                  className="text-justify flex gap-2 py-1 sm-p-0 md:p-0 lg:p-0 xlp-0"
                >
                  {" "}
                  <span>
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="stroke-gray-400 stroke-2 "
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="m7 16 4-4-4-4m6 8 4-4-4-4"
                      />
                    </svg>
                  </span>{" "}
                  {keyPoint}
                </div>
              ))}
            </ul>

            {/* <p className="text-justify">As a BSIT student, I gained skills in Object-Oriented Programming (OOP), Data Structures and Algorithms (DSA), web development, and software engineering. I also learned about networking, database management, and cybersecurity, while exploring emerging technologies like AI and cloud computing. Through practical projects, I developed strong problem-solving abilities and a deep understanding of system management.   </p> */}
          </div>
        </div>
        {/* <Image src="/images/educationImg.png" alt="education" width={400} height={400} className='hidden sm:block md:block lg:block xl:block'/> */}
      </div>
    </section>
  );
};

export default EductionSec;
