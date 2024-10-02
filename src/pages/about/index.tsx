import EductionSec from "./components/educationSection";
import AboutHeroSec from "./components/heroSection";
import ProfectionalExpSec from "./components/profectionalExp";
import Skills from "./components/skills";

const About = () => {
    return (
        <>
        <div className="bg-gradient-to-b from-gray-800 to-gray-700 w-full h-60 text-center flex items-center  ">
                <div className="container mx-auto px-4">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">✨ Let's get a deep dive ♨️</h1>
                    <p className="mt-2 text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg text-gray-200">🔥I focus, I struggle, I succeed, and sometimes, I get tire! 🥱</p>
                </div>
            </div>
        <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-20 xl:mx-20">
        <AboutHeroSec />
        <ProfectionalExpSec />
        <Skills />
        <EductionSec />
        </div>
        </>
    );
}
export default About;