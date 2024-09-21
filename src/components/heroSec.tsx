import Image from "next/image";
import React, { useState } from "react";
const HeroSec = () => {
    const skills = ["Flutter", "dart", "Git", "Agile", "OOP", "DSA"];

    return (


        <section className="relative pt-40 pb-24">
            <div className="bg-gradient-to-b from-gray-800 to-gray-700 w-full absolute top-0 left-0 z-0 h-60 text-center flex items-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold text-white mb-4">👋 Hey there! Welcome to My Crazy Portfolio! 🎉</h1>
                    <p className="mt-2 text-lg text-gray-200">I code, I design, I drink coffee (a lot), and sometimes, I even sleep! 🛌</p>
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex items-end justify-between sm:justify-between relative z-10 mb-5 ">
                    <Image width={200} height={200} src="/images/profile.jpg" alt="user-avatar-image" className="border-4 border-solid border-white rounded-full object-cover" />

                    <button
                        className="py-3.5 px-5 flex rounded-full bg-indigo-600 items-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.3011 8.69881L8.17808 11.8219M8.62402 12.5906L8.79264 12.8819C10.3882 15.6378 11.1859 17.0157 12.2575 16.9066C13.3291 16.7974 13.8326 15.2869 14.8397 12.2658L16.2842 7.93214C17.2041 5.17249 17.6641 3.79266 16.9357 3.0643C16.2073 2.33594 14.8275 2.79588 12.0679 3.71577L7.73416 5.16033C4.71311 6.16735 3.20259 6.67086 3.09342 7.74246C2.98425 8.81406 4.36221 9.61183 7.11813 11.2074L7.40938 11.376C7.79182 11.5974 7.98303 11.7081 8.13747 11.8625C8.29191 12.017 8.40261 12.2082 8.62402 12.5906Z"
                                stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                        <span className="px-2 font-semibold text-base leading-7 text-white">Send Message</span>
                    </button>

                </div>
                <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
                    <div className="flex items-center justify-center flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5">
                        <div className="block">
                            <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1 max-sm:text-center">Muhammad Talha</h3>
                            <p className="font-normal text-base leading-7 text-gray-500  max-sm:text-center">
                                Software Engineer at FusuionWave <sub>pvt.lmtd</sub> <br className="hidden sm:block" />
                            </p>
                            <div className="flex p-0 text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" height="25" fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 6.827 6.827" id="location">
                                <path fill="#a0aec0" fillRule="nonzero" d="M3.413 1.722c.239 0 .455.094.611.245a.821.821 0 0 1 0 1.184.875.875 0 0 1-.61.245.875.875 0 0 1-.611-.245.821.821 0 0 1 0-1.184.875.875 0 0 1 .61-.245zm.46.392a.659.659 0 0 0-.46-.185c-.18 0-.342.07-.46.185a.618.618 0 0 0 0 .89c.118.115.28.185.46.185s.343-.07.46-.184a.618.618 0 0 0 0-.891z"></path>
                                <path fill="#a0aec0" fillRule="nonzero" d="M3.319 5.838c-.138-.252-.305-.538-.48-.836-.367-.63-.767-1.312-.985-1.842a1.577 1.577 0 0 1-.119-.6c0-.45.188-.856.492-1.15A1.7 1.7 0 0 1 3.413.933 1.7 1.7 0 0 1 4.6 1.41a1.596 1.596 0 0 1 .37 1.755c-.22.53-.615 1.208-.982 1.834-.174.298-.342.585-.48.84a.108.108 0 0 1-.189-.001zM3.025 4.9c.138.235.271.463.388.671.118-.21.252-.439.39-.675.363-.62.755-1.29.97-1.809a1.374 1.374 0 0 0 .105-.529c0-.392-.164-.747-.429-1.003a1.484 1.484 0 0 0-1.036-.416c-.404 0-.77.159-1.035.416a1.393 1.393 0 0 0-.327 1.528c.212.515.609 1.192.974 1.817z"></path>
                                <path fill="none" d="M0 0h6.827v6.827H0z"></path>
                            </svg>Lahore, Pakistan</div>
                        </div>
                    </div>
                    <div className="border border-gray-200 px-4 py-1 rounded-lg bg-gradient-to-tr from-indigo-100 to-slate-100 ">

                        <h2 className="text-lg text-indigo-600 font-bold title-font mb-2">2+ </h2>
                        <p className="leading-relaxed text-base">Years Experience</p>
                    </div>

                    {/* <div
                        className="py-3.5 px-5 flex rounded-full items-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 group">
                        <svg xmlns="http://www.w3.org/2000/svg" height={25} enableBackground="new 0 0 512 512" viewBox="0 0 512 512" id="whats-app" className="transition-transform duration-500 transform group-hover:-translate-x-2">
                            <path fill="none" d="M345.7,292.3c-1-0.2-2.1-0.4-3.1-0.5c-7.4-0.9-12.2-1.3-16.7,0.6c-4.7,2-10.5,7.1-14.9,12.9c-2.7,3.7-7.6,5-11.8,3.2c-14.3-6-26.9-12.7-37.2-20.1c-10.3-7.3-18.7-15.4-24.9-23.9c-14.2-15.8-24.3-39.4-30.1-70.3c-0.8-4.5,1.5-9,5.6-10.9c6.7-3.1,12.8-7.7,15.8-11.9c2.8-4,3.4-8.8,4.1-16.2c0.1-1,0.1-2.1,0.1-3.1c0-10.2-3.3-24.4-12.5-30.9c-4.9-3.4-13.8-3.5-21.1-3.5c-0.1,0-0.2,0-0.3,0h-0.4c-5,0-9.9,1.1-14.4,3.2c-5.5,2.5-10.2,6.5-13.7,11.4c-3.5,4.9-5.6,10.7-6.1,16.7c-1.8,19.9,0.4,39.4,6.7,57.9c7,20.8,18.9,51.5,40.8,77.3c0.1,0.1,0.2,0.3,0.3,0.4c16,20.8,38,39.3,67.4,56.8c16.8,10,35.4,16.3,55.2,18.6c6,0.7,12.1-0.1,17.6-2.5c5.5-2.4,10.4-6.2,14-11c3-4,5.1-8.6,6.1-13.4c0,0,0,0,0,0l0.1-0.3c1.5-7.2,3.5-16.2,1.1-21.7C368.8,300.6,355.6,294.4,345.7,292.3z"></path>
                            <path fill="none" d="M262.6,26C144.7,26,48.9,121.9,48.9,239.7c0,46.1,14.5,90.1,41.9,127c2.2,2.9,2.6,6.8,1,10.1l-45.6,98.6l105-48.5c2.9-1.3,6.2-1.2,9,0.3c31.1,17.1,66.5,26.1,102.3,26.1c117.8,0,213.7-95.9,213.7-213.7S380.4,26,262.6,26z M391.7,337l-0.1,0.3c-1.6,7.7-5,15-9.7,21.3c-5.7,7.6-13.4,13.6-22.1,17.4c-6.8,2.9-14,4.4-21.3,4.4c-2.2,0-4.4-0.1-6.6-0.4c-22.6-2.7-43.8-9.9-63-21.3c-31.5-18.7-55.3-38.9-72.9-61.6c-24.1-28.4-36.9-61.4-44.4-83.7c-7.1-21.2-9.7-43.5-7.6-66.1c0.9-9.5,4.2-18.6,9.7-26.4c5.5-7.8,13-14,21.6-18c7.2-3.3,14.9-5,22.8-5h0.3c9.6,0,22.9,0,33,7.1c13.2,9.3,21,26.9,21,47.2c0,1.6-0.1,3.3-0.2,4.9c-0.8,8.2-1.6,17.4-7.6,26c-3.7,5.3-9.7,10.5-16.6,14.7c5.2,23.9,13.3,41.9,24.2,53.8c0.3,0.3,0.5,0.6,0.7,0.9c5,6.9,11.9,13.6,20.6,19.7c7.5,5.3,16.5,10.4,26.6,15c5.6-5.9,11.9-10.6,17.9-13.2c9.6-4.1,18.8-3,27-2.1c1.7,0.2,3.4,0.5,4.9,0.8c19.8,4.2,35.4,15.6,41.7,30.4C396.5,314.6,393.7,327.5,391.7,337z"></path>
                            <path fill="#231f20" d="M427.8,74.4C383.7,30.3,325,6,262.6,6C200.2,6,141.5,30.3,97.3,74.4c-44.1,44.1-68.4,102.8-68.4,165.2c0,48.5,14.6,94.7,42.3,134.1l-54.5,118c-1.8,3.8-1,8.3,2,11.3c1.9,1.9,4.5,2.9,7.1,2.9c1.4,0,2.8-0.3,4.2-0.9l125.2-57.8c33,17.1,70,26.1,107.5,26.1c62.4,0,121.1-24.3,165.2-68.4c44.1-44.1,68.4-102.8,68.4-165.2C496.3,177.3,472,118.6,427.8,74.4zM262.6,453.4c-35.8,0-71.2-9-102.3-26.1c-2.8-1.5-6.1-1.6-9-0.3l-105,48.5l45.6-98.6c1.5-3.3,1.1-7.2-1-10.1c-27.4-37-41.9-80.9-41.9-127C48.9,121.9,144.7,26,262.6,26c117.8,0,213.7,95.9,213.7,213.7S380.4,453.4,262.6,453.4z"></path>
                            <path fill="#231f20" d="M349.9,272.8c-1.6-0.3-3.2-0.6-4.9-0.8c-8.1-1-17.3-2.1-27,2.1c-5.9,2.5-12.3,7.3-17.9,13.2c-10.2-4.6-19.1-9.7-26.6-15c-8.7-6.2-15.6-12.8-20.6-19.7c-0.2-0.3-0.5-0.6-0.7-0.9c-10.8-11.8-18.9-29.9-24.2-53.8c6.9-4.2,12.9-9.4,16.6-14.7c6-8.6,6.9-17.8,7.6-26c0.1-1.6,0.2-3.3,0.2-4.9c0-20.3-7.9-38-21-47.2c-10.1-7.1-23.4-7.1-33-7.1h-0.3c-7.9,0-15.6,1.7-22.8,5c-8.7,4-16.2,10.2-21.6,18c-5.5,7.8-8.9,16.9-9.7,26.4c-2.1,22.7,0.5,44.9,7.6,66.1c7.5,22.3,20.3,55.3,44.4,83.7c17.5,22.7,41.4,42.9,72.9,61.6c19.3,11.4,40.5,18.6,63,21.3c2.2,0.3,4.4,0.4,6.6,0.4c7.3,0,14.6-1.5,21.3-4.4c8.8-3.7,16.4-9.8,22.1-17.4c4.7-6.2,8.1-13.6,9.7-21.3l0.1-0.3c2-9.4,4.8-22.4-0.1-33.8C385.3,288.4,369.7,277,349.9,272.8z M372.1,332.8l-0.1,0.3c0,0,0,0,0,0c-1,4.8-3.1,9.5-6.1,13.4c-3.6,4.8-8.5,8.6-14,11c-5.5,2.4-11.6,3.2-17.6,2.5c-19.8-2.4-38.4-8.7-55.2-18.6c-29.4-17.4-51.4-36-67.4-56.8c-0.1-0.1-0.2-0.3-0.3-0.4c-22-25.8-33.8-56.5-40.8-77.3c-6.3-18.6-8.5-38-6.7-57.9c0.5-6,2.7-11.8,6.1-16.7c3.5-4.9,8.2-8.8,13.7-11.4c4.6-2.1,9.4-3.2,14.4-3.2h0.4c0.1,0,0.2,0,0.3,0c7.3,0,16.3,0.1,21.1,3.5c9.3,6.5,12.5,20.7,12.5,30.9c0,1,0,2.1-0.1,3.1c-0.7,7.5-1.2,12.2-4.1,16.2c-2.9,4.1-9.1,8.8-15.8,11.9c-4.2,1.9-6.5,6.4-5.6,10.9c5.8,30.9,15.9,54.5,30.1,70.3c6.2,8.6,14.6,16.6,24.9,23.9c10.3,7.3,22.8,14.1,37.2,20.1c4.2,1.8,9.1,0.4,11.8-3.2c4.4-5.9,10.2-10.9,14.9-12.9c4.5-1.9,9.3-1.5,16.7-0.6c1.1,0.1,2.1,0.3,3.1,0.5c9.9,2.1,23.1,8.3,27.6,18.7C375.6,316.6,373.7,325.6,372.1,332.8z"></path>
                        <span className="px-2 font-semibold text-base leading-7 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">+92302 146 6065</span>
                        </svg>
                    </div> */}
                </div>
                <div className="flex flex-col lg:flex-row max-lg:gap-5 items-center justify-between py-0.5">

                    <div className="flex flex-col md:flex-row items-center gap-6 ">
                        <p className="flex items-center gap-2 font-medium text-lg leading-8 text-gray-400 ">Skills
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.78135 5.55191C9.4453 3.5173 9.77728 2.5 10.3928 2.5C11.0083 2.5 11.3403 3.5173 12.0043 5.55191L12.2949 6.44244C12.4784 7.00479 12.5701 7.28596 12.7928 7.44706C13.0155 7.60816 13.3125 7.60816 13.9063 7.60816H14.8683C17.0355 7.60816 18.119 7.60816 18.3081 8.19335C18.4972 8.77854 17.6169 9.40763 15.8563 10.6658L15.0921 11.2118C14.6069 11.5586 14.3643 11.732 14.278 11.9937C14.1918 12.2554 14.2841 12.5382 14.4687 13.1038L14.7569 13.9872C15.4209 16.0218 15.7529 17.0391 15.2549 17.3993C14.7569 17.7595 13.8878 17.1308 12.1496 15.8733L11.3887 15.323C10.9083 14.9754 10.6681 14.8016 10.3928 14.8016C10.1175 14.8016 9.87731 14.9754 9.39687 15.323L8.63605 15.8733C6.89779 17.1308 6.02866 17.7595 5.5307 17.3993C5.03273 17.0391 5.36471 16.0218 6.02866 13.9872L6.31927 13.0966C6.50278 12.5343 6.59454 12.2531 6.50948 11.9924C6.42441 11.7318 6.18419 11.558 5.70375 11.2104L4.94293 10.6601C3.20467 9.40261 2.33555 8.77389 2.52575 8.19102C2.71596 7.60816 3.79026 7.60816 5.93886 7.60816H6.87929C7.47315 7.60816 7.77008 7.60816 7.99277 7.44706C8.21547 7.28596 8.30723 7.00479 8.49074 6.44244L8.78135 5.55191Z"
                                    stroke="#9CA3AF" strokeWidth="1.6" />
                            </svg>
                        </p>
                        <ul className="flex items-center max-sm:justify-center max-sm:flex-wrap gap-2.5">
                            {skills.map((skill, index) => (
                                <li key={index}
                                    className="rounded-full py-3 px-6 bg-stone-100 text-gray-700 font-semibold text-sm leading-6 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900">{skill}</li>
                            ))}


                        </ul>
                    </div>
                </div>
            </div>

        </section>

    );
}

export default HeroSec;