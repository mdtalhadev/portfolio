import Image from "next/image";


const skills = [
  "Flutter Framework (Dart Programming)",
  "Agile Methodology (Jira, Trello, Click Up)",
  "Team Collaboration (Slack, GitHub / Bitbucket)",
  "Cross-Platform (Android, iOS, Web app platforms)",
  "Deployment (App Store, Play Store, Web Hosting)",
  "Project Management (Project Handling, Task prioritization, Time management)",
];

const Skills: React.FC = () => {
  return (
    <section className="relative mb-10">
      <div className="px-2 w-full items-center sm:items-center md:items-start  flex justify-between flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row bg-white py-2 rounded-md shadow-md ">
        <div className="flex flex-col items-center sm:items-start md:items-start lg:items-start xl:items-start  md:pr-8 lg:pr-8 xl:pr-8 ">
          <h3 className="font-manrope font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-gray-900 mb-1 text-center sm:text-left pb-2">
            Skills
          </h3>
          <div className="flex flex-col pr-1 text-gray-500">
            <p className="text-justify">
              As a Flutter Developer I have to diliver top-notch mobile apps for
              Android, iOS, and web platforms, ensuring high-quality solutions
              and exceptional user experiences with core expertise.
            </p>
            <h3 className="font-manrope font-bold text-xl py-2 text-gray-900 mb-1 text-left">
              Major Skills
            </h3>
            <ul>
              {skills.map((keyPoint, index) => (
                <div
                  key={index}
                  className="text-justify flex gap-2 py-1 sm-p-0 md:p-0 lg:p-0 xlp-0 "
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

          </div>
        </div>
        <Image
          src="/images/skillsImage.png"
          alt="skills"
          width={400}
          height={400}
          className="order-first sm:order-first md:order-last lg:order-last xl:order-last max-h-80"
        />
      </div>
    </section>
  );
};

export default Skills;
