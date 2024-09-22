import Image from "next/image";
import iContactIcons from "@/types/contactIcon";

const HeroSec = () => {
    const skills = ["Flutter", "dart", "Git", "Agile", "OOP", "DSA",];
    const contactIcons: iContactIcons[] = [
        {
            icon: (<svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
            </svg>
            ), link: ''
        },
        {
            icon: (<svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
            </svg>
            ), link: ''
        },
        {
            icon: (<svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
            </svg>
            ), link: ''
        },
    ]

    return (


        <section className="relative pt-52  sm:pt-40 md:pt-40 lg:pt-40 xl:pt-40 pb-4">
            <div className="bg-gradient-to-b from-gray-800 to-gray-700 w-full absolute top-0 left-0 z-0 h-60 text-center flex items-center ">
                <div className="container mx-auto px-4">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">👋 Hey there! Welcome to My Crazy Portfolio! 🎉</h1>
                    <p className="mt-2 text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg text-gray-200">I code, I design, I drink coffee (a lot), and sometimes, I even sleep! 🛌</p>
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col ">
                <div className="flex items-center md:items-end lg:items-end xl:items-end md:justify-between lg:justify-between xl:justify-between  justify-center relative z-10 mb-5 flex-col md:flex-row lg:flex-row xl:flex-row ">
                    <Image width={200} height={200} src="/images/profile.jpg" alt="user-avatar-image" className="border-4 border-solid border-white rounded-full object-cover w-24 sm:w-28 md:w-52 lg:w-52 xl:w-56" />
                    <div className="pl-4 w-full flex justify-between flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row">
                        <div className="flex flex-col items-center sm:items-start md:items-start lg:items-start xl:items-start">
                            <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1 max-sm:text-center">Muhammad Talha</h3>
                            <div className="flex justify-end p-0 text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-1">
                                <path className="stroke-gray-700 transition-all duration-500 group-hover:stroke-indigo-600"
                                    d="M14.1667 11.6666V13.3333C14.1667 14.9046 14.1667 15.6903 13.6785 16.1785C13.1904 16.6666 12.4047 16.6666 10.8333 16.6666H7.50001C5.92866 16.6666 5.14299 16.6666 4.65483 16.1785C4.16668 15.6903 4.16668 14.9047 4.16668 13.3333V11.6666M16.6667 9.16663V13.3333M11.0157 10.434L12.5064 9.44014C14.388 8.18578 15.3287 7.55861 15.3287 6.66663C15.3287 5.77466 14.388 5.14749 12.5064 3.89313L11.0157 2.8993C10.1194 2.3018 9.67131 2.00305 9.16668 2.00305C8.66205 2.00305 8.21393 2.3018 7.31768 2.8993L5.82693 3.89313C3.9454 5.14749 3.00464 5.77466 3.00464 6.66663C3.00464 7.55861 3.9454 8.18578 5.82693 9.44014L7.31768 10.434C8.21393 11.0315 8.66205 11.3302 9.16668 11.3302C9.67131 11.3302 10.1194 11.0315 11.0157 10.434Z"
                                    stroke="#374151" strokeWidth="1.6" strokeLinecap="round" />
                            </svg> IT Graduate</div>
                        </div>
                        <div className="flex flex-col items-center sm:items-end md:items-end lg:items-end xl:items-end">
                            <p className="font-normal text-base leading-7 text-gray-500  max-sm:text-center text-end">
                                Software Engineer at FusuionWave <sub>pvt.ltd</sub> <br className="hidden sm:block" />
                            </p>
                            <div className="flex justify-end p-0 text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" height={25} fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 6.827 6.827" id="location">
                                <path fill="#a0aec0" fillRule="nonzero" d="M3.413 1.722c.239 0 .455.094.611.245a.821.821 0 0 1 0 1.184.875.875 0 0 1-.61.245.875.875 0 0 1-.611-.245.821.821 0 0 1 0-1.184.875.875 0 0 1 .61-.245zm.46.392a.659.659 0 0 0-.46-.185c-.18 0-.342.07-.46.185a.618.618 0 0 0 0 .89c.118.115.28.185.46.185s.343-.07.46-.184a.618.618 0 0 0 0-.891z"></path>
                                <path fill="#a0aec0" fillRule="nonzero" d="M3.319 5.838c-.138-.252-.305-.538-.48-.836-.367-.63-.767-1.312-.985-1.842a1.577 1.577 0 0 1-.119-.6c0-.45.188-.856.492-1.15A1.7 1.7 0 0 1 3.413.933 1.7 1.7 0 0 1 4.6 1.41a1.596 1.596 0 0 1 .37 1.755c-.22.53-.615 1.208-.982 1.834-.174.298-.342.585-.48.84a.108.108 0 0 1-.189-.001zM3.025 4.9c.138.235.271.463.388.671.118-.21.252-.439.39-.675.363-.62.755-1.29.97-1.809a1.374 1.374 0 0 0 .105-.529c0-.392-.164-.747-.429-1.003a1.484 1.484 0 0 0-1.036-.416c-.404 0-.77.159-1.035.416a1.393 1.393 0 0 0-.327 1.528c.212.515.609 1.192.974 1.817z"></path>
                                <path fill="none" d="M0 0h6.827v6.827H0z"></path>
                            </svg>Lahore, Pakistan</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center sm:items-end md:items-end lg:items-end xl:items-end justify-between ">
                    <div className="flex items-center sm:items-start flex-col ">
                        {/* <div className="w-full flex mb-3">
                            <div className="w-1/3 bg-transparent" > 
                            </div>
                            {contactIcons.map((icon, index) => (
                                <button key={index}
                                    onClick={(e) => window.open(icon.link, '_blank')} className="text-blue-400 hover:underline mx-2">
                                    {icon.icon}
                                </button>))}
                        </div> */}
                        <ul className="flex items-center max-sm:justify-center max-sm:flex-wrap gap-2.5 flex-wrap">
                            {skills.map((skill, index) => (
                                <li key={index}
                                    className="rounded-full py-3 px-4 bg-stone-100 text-gray-700 font-semibold text-sm leading-6 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900">{skill}</li>
                            ))}


                        </ul>
                    </div>
                    <div className="flex gap-4">

                        <div className="border border-gray-200 px-4 py-1 rounded-lg bg-gradient-to-tr from-indigo-100 to-slate-100 ">

                            <h2 className="text-lg text-indigo-600 font-bold title-font mb-2">5 </h2>
                            <p className="leading-relaxed text-base">Completed Projectes</p>
                        </div>
                        <div className="border border-gray-200 px-4 py-1 rounded-lg bg-gradient-to-tr from-indigo-100 to-slate-100 ">

                            <h2 className="text-lg text-indigo-600 font-bold title-font mb-2">2+ </h2>
                            <p className="leading-relaxed text-base">Years Experience</p>
                        </div>
                    </div>

                </div>
            </div>

        </section>

    );
                // <div className="flex flex-col lg:flex-row max-lg:gap-5 items-center justify-between py-0.5">

                //     <div className="flex flex-col md:flex-row items-center gap-6 ">
                //         <p className="flex items-center gap-2 font-medium text-lg leading-8 text-gray-400 ">Skills
                //             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                //                 <path
                //                     d="M8.78135 5.55191C9.4453 3.5173 9.77728 2.5 10.3928 2.5C11.0083 2.5 11.3403 3.5173 12.0043 5.55191L12.2949 6.44244C12.4784 7.00479 12.5701 7.28596 12.7928 7.44706C13.0155 7.60816 13.3125 7.60816 13.9063 7.60816H14.8683C17.0355 7.60816 18.119 7.60816 18.3081 8.19335C18.4972 8.77854 17.6169 9.40763 15.8563 10.6658L15.0921 11.2118C14.6069 11.5586 14.3643 11.732 14.278 11.9937C14.1918 12.2554 14.2841 12.5382 14.4687 13.1038L14.7569 13.9872C15.4209 16.0218 15.7529 17.0391 15.2549 17.3993C14.7569 17.7595 13.8878 17.1308 12.1496 15.8733L11.3887 15.323C10.9083 14.9754 10.6681 14.8016 10.3928 14.8016C10.1175 14.8016 9.87731 14.9754 9.39687 15.323L8.63605 15.8733C6.89779 17.1308 6.02866 17.7595 5.5307 17.3993C5.03273 17.0391 5.36471 16.0218 6.02866 13.9872L6.31927 13.0966C6.50278 12.5343 6.59454 12.2531 6.50948 11.9924C6.42441 11.7318 6.18419 11.558 5.70375 11.2104L4.94293 10.6601C3.20467 9.40261 2.33555 8.77389 2.52575 8.19102C2.71596 7.60816 3.79026 7.60816 5.93886 7.60816H6.87929C7.47315 7.60816 7.77008 7.60816 7.99277 7.44706C8.21547 7.28596 8.30723 7.00479 8.49074 6.44244L8.78135 5.55191Z"
                //                     stroke="#9CA3AF" strokeWidth="1.6" />
                //             </svg>
                //         </p>
                //         <ul className="flex items-center max-sm:justify-center max-sm:flex-wrap gap-2.5">
                //             {skills.map((skill, index) => (
                //                 <li key={index}
                //                     className="rounded-full py-3 px-6 bg-stone-100 text-gray-700 font-semibold text-sm leading-6 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900">{skill}</li>
                //             ))}


                //         </ul>
                //     </div>
                // </div>
}

export default HeroSec;