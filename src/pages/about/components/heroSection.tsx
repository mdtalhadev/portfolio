const AboutHeroSec = () => {
    return (


        <section className="relative pt-52  sm:pt-50 md:pt-56 lg:pt-56 xl:pt-56 pb-4">
            <div className="bg-gradient-to-b from-gray-800 to-gray-700 w-full absolute top-0 left-0 z-0 h-60 text-center flex items-center ">
                <div className="container mx-auto px-4">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">✨ Let's get a deep dive ♨️</h1>
                    <p className="mt-2 text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg text-gray-200">🔥I focus, I struggle, I succeed, and sometimes, I even tire! 🥱</p>
                </div>
            </div>
            <div className="w-full mt-10 max-w-7xl mx-auto px-6 md:px-8 flex flex-col ">
                <div className="flex items-center md:items-end lg:items-end xl:items-end md:justify-between lg:justify-between xl:justify-between  justify-center relative z-10 mb-5 flex-col md:flex-row lg:flex-row xl:flex-row ">
                    <div className="pl-4 w-full flex justify-between flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row bg-white p-2 rounded-md shadow-md ">
                        <div className="flex flex-col items-center sm:items-start md:items-start lg:items-start xl:items-start">
                            <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1 max-sm:text-center">About</h3>
                            <div className="flex flex-col pr-1 text-gray-500">
                                <p className="text-justify">I'm a skilled Flutter developer with a deep understanding of mobile application development. My expertise in Dart language, combined with a strong grasp of component-based programming and state management, enables me to create highly efficient and scalable mobile solutions. While I also have experience with React and Vue, my primary focus is on leveraging Flutter's framework to build cross-platform applications that deliver outstanding user experiences.</p>
                                <p className="text-justify">I am dedicated to writing clean, elegant code and continuously staying updated with the latest advancements in the Flutter ecosystem. My attention to detail and creative problem-solving skills ensure that the solutions I develop consistently surpass client expectations. Whether it's optimizing performance, refining UI/UX, or implementing complex features, I aim to deliver exceptional results in every project I undertake.</p></div>
                        </div>
                    </div>
                </div>
                
            </div>

        </section>

    );
}

export default AboutHeroSec;