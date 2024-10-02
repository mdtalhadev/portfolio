import Image from "next/image";
const AboutHeroSec = () => {
  return (
    <section className="relative my-10">
      <div className="px-2 w-full items-center sm:items-center md:items-start  flex justify-between flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row bg-white py-2 rounded-md shadow-md ">
        <div className="flex flex-col items-center sm:items-start md:items-start lg:items-start xl:items-start  md:pr-8 lg:pr-8 xl:pr-8 flex-2 ">
          <h3 className="font-manrope font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-gray-900 mb-1 text-center sm:text-left pb-2">
            About
          </h3>
          <div className="flex flex-col pr-1 text-gray-500">
            <p className="text-justify py-2">
              I'm a skilled Flutter developer with a deep understanding of
              mobile application development. My expertise in Dart language,
              combined with a strong grasp of component-based programming and
              state management, enables me to create highly efficient and
              scalable mobile solutions. While I also have experience with React
              and Vue, my primary focus is on leveraging Flutter's framework to
              build cross-platform applications that deliver outstanding user
              experiences.
            </p>
            <p className="text-justify py-2 ">
              I am dedicated to writing clean, elegant code and continuously
              staying updated with the latest advancements in the Flutter
              ecosystem. My attention to detail and creative problem-solving
              skills ensure that the solutions I develop consistently surpass
              client expectations. Whether it's optimizing performance, refining
              UI/UX, or implementing complex features, I aim to deliver
              exceptional results in every project I undertake.
            </p>
          </div>
        </div>
        <Image
          src="/images/aboutMe.png"
          alt="About"
          width={400}
          height={400}
          className="order-first sm:order-first md:order-last lg:order-last xl:order-last max-h-80"
        
        />
      </div>
    </section>
  );
};

export default AboutHeroSec;

