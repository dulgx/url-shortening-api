import Image from "next/image";
import WorkingSVG from "../../assets/images/illustration-working.svg";

const HeroComponent = () => {
  return (
    <div className="flex  items-center m-5">
      <div className=" px-24">
        <span className="text-6xl font-extrabold">
          More than just shorter links
        </span>
        <p className="pt-5 w-3/4">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="bg-teal-500 my-10 py-2 px-6 rounded-3xl text-white font-bold text-sm">
          Get Started
        </button>
      </div>
      <Image src={WorkingSVG} alt="working" className="w-1/2 m-5" />
    </div>
  );
};
export default HeroComponent;
