import Image from "next/image";
import WorkingSVG from "../../assets/images/illustration-working.svg";

const HeroComponent = () => {
  return (
    <div>
      <div className="flex items-center p-5 relative lg:flex-col overflow-hidden">
        <div className=" px-24 my-10 min-w-2xl 2xl:pr-10">
          <span className="font-bold text-8xl 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl ">
            More than just shorter links
          </span>
          <p className="pt-5 w-full text-xl text-gray-500 xl:text-2xl ">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="bg-teal-500 my-10 py-2 px-6 rounded-3xl text-white font-bold text-sm hover:bg-teal-300">
            Get Started
          </button>
        </div>

        <Image
          src={WorkingSVG}
          alt="working"
          className="w-1/2 left-32 relative"
        />
      </div>
    </div>
  );
};
export default HeroComponent;
