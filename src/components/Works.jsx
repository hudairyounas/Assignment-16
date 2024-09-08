import { PiCursorLight } from "react-icons/pi";

const Works = () => {
  return (
    <div className="flex flex-col items-center gap-20 mt-10 max-sm:gap-10">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-6xl font-semibold text-[#12f7d6]">Works</h1>
        <hr className="w-44 border-2 border-[#12f7d6]" />
        <p className="text-2xl text-white max-md:text-center">
          I am striving to never stop learning and improving
        </p>
      </div>
      <div className="flex gap-10 justify-center">
        <img src="Dual-screen1.png" alt="Dual-screen1" />
        <div className="flex flex-col justify-end gap-5">
          <a
            href="#"
            className="text-5xl text-[#12f7d6] flex items-center max-sm:text-3xl"
          >
            Visit Website <PiCursorLight className="ml-16 text-2xl" />
          </a>
          <hr className="w-full border-2 border-[#12f7d6]" />
          <img
            src="Dual-screen2.png"
            alt="Dual-screen2"
            className="h-[300px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
