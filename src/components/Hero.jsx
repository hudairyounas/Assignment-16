import { FaReact, FaHtml5, FaJs, FaCss3 } from "react-icons/fa";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoIosLink, IoIosCode } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { IoGridOutline } from "react-icons/io5";
import { CgScreen } from "react-icons/cg";
import { FaMessage } from "react-icons/fa6";
import { GrBriefcase } from "react-icons/gr";

const Hero = () => {
  return (
    <section className="w-full bg-gray-900 text-[#98FAEC] px-10 md:px-20 flex flex-col items-end mb-10">
      {/* LEFT MENU BAR */}
      <div className="hidden md:flex flex-col items-center space-y-6 text-5xl rounded-full border-2 border-white absolute top-28 left-20 max-2xl:left-0">
        <a
          href="#aboutMe"
          className="p-2 hover:rounded-full hover:bg-white hover:text-black"
        >
          <IoGridOutline />
        </a>
        <a
          href="#aboutMe"
          className="p-2 hover:rounded-full hover:bg-white hover:text-black"
        >
          <FiUser />
        </a>
        <a
          href="#skills"
          className="p-2 hover:rounded-full hover:bg-white hover:text-black"
        >
          <IoIosCode />
        </a>
        <a
          href="#works"
          className="p-2 hover:rounded-full hover:bg-white hover:text-black"
        >
          <CgScreen />
        </a>
        <a
          href="#contact"
          className="p-2 hover:rounded-full hover:bg-white hover:text-black"
        >
          <FaMessage />
        </a>
      </div>
      {/* MAIN CONTENT */}
      <div className="w-full max-w-screen-2xl mt-10 flex flex-col items-end">
        {/* TOP HEADING */}
        <div className="w-full text-2xl h-10 md:h-32 flex flex-row justify-center items-center">
          <h1 className="md:text-8xl text-center">Developer</h1>
        </div>
        <div className="w-full flex-col md:flex-row text-2xl flex justify-center items-center xl:text-3xl">
          {/* MAIN LEFT */}
          <div className="w-full md:w-1/3 flex justify-center items-center">
            <div className="w-full text-2xl md:text-3xl border-4 border-teal-600 rounded-tl-[150px] border-b-transparent border-r-transparent">
              <div className="border-4 border-white rounded-tl-[146px] rounded-br-[140px] flex flex-col justify-center items-start p-10">
                <div className="w-full flex flex-col justify-center items-center mb-10">
                  <img
                    className="rounded-full border-4 border-teal-500"
                    src="./Profile-photo.png"
                    alt="Profile-photo"
                  />
                  <h1 className="text-white text-4xl">Hudair</h1>
                  <h3 className="text-2xl text-white">Full-stack developer</h3>
                </div>
                {/* CONTACT INFO */}
                <div className="flex flex-col items-start">
                <h3 className="flex space-x-2 justify-center items-center max-xl:text-xl font-semibold">
                  <CiMail />
                  <span className="text-white">hudairyounas@gmail.com</span>
                </h3>
                <h3 className="flex space-x-2 justify-center items-center max-xl:text-xl font-semibold">
                  <CiLocationOn />
                  <span className="text-white">Pakistan</span>
                </h3>
                <h3 className="flex space-x-2 justify-center items-center max-xl:text-xl font-semibold">
                  <GrBriefcase />
                  <span className="text-white">Full-time</span>
                </h3>
                <h3 className="flex space-x-2 justify-center items-center max-xl:text-xl font-semibold">
                  <IoIosLink />
                  <span className="text-white">www.hudairyounas.com</span>
                </h3>
                </div>
                {/* SKILL BAR */}
                <div className="flex space-x-8 mt-10 text-[20px] md:w-full md:grid md:grid-cols-2 max-sm:text-sm max-sm:flex-wrap space-y-2 max-xl:text-lg font-bold">
                  <p className="flex justify-center items-center space-x-2 bg-[#12f7d6] text-black rounded-full px-[2px]">
                    <FaHtml5 />
                    <span>HTML</span>
                  </p>
                  <p className="flex justify-center items-center space-x-2 bg-[#12f7d6] text-black rounded-full px-[3px]">
                    <FaCss3 />
                    <span>CSS</span>
                  </p>
                  <p className="flex justify-center items-center space-x-2 bg-[#12f7d6] text-black rounded-full px-[3px]">
                    <FaJs />
                    <span>JS</span>
                  </p>
                  <p className="flex justify-center items-center space-x-2 bg-[#12f7d6] text-black rounded-full px-[3px]">
                    <FaReact />
                    <span>REACT</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* MAIN CENTER */}
          <div className="w-full md:w-1/3 flex justify-center flex-col max-md:my-10">
            <p className="text-[#12f7d6] max-md:text-center">&lt;h1&gt;</p>
            <h1 className="text-6xl text-white max-xl:text-5xl max-md:text-center">
              Hey <br /> I'm <span className="text-[#12f7d6]">Hudair</span>,{" "}
              <br /> Full-Stack Developer{" "}
              <span className="text-[#12f7d6]">&lt;/h1&gt;</span>
            </h1>
            <p className="pt-10">&lt;p&gt;</p>
            <p className="text-white ml-10 max-xl:text-xl max-md:text-center">
              I help businesses grow by crafting amazing web experiences. If
              you’re looking for a developer that likes to get stuff done, look
              no further.
            </p>
            <p className="text-[#12f7d6]">&lt;/p&gt;</p>
            <h1 className="flex items-center space-x-5 max-md:justify-center">
              <button className="tracking-[0.5rem] text-[#12f7d6]">
                Let's Talk
              </button>
              <CiMail className="bg-[#43454D] rounded-full px-1 py-1 text-4xl" />
            </h1>
          </div>

          {/* MAIN RIGHT */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="bg-[#1a1e23] px-6 py-20 rounded-[130px]">
              <h1 className="flex items-center text-8xl text-[#12f7d6]">
                4{" "}
                <span className="text-white text-2xl pl-3">
                  Programming Languages
                </span>
              </h1>
              <h1 className="flex items-center text-8xl text-[#12f7d6] pt-10">
                4{" "}
                <span className="text-white text-2xl pl-3">
                  Development Tools
                </span>
              </h1>
              <h1 className="flex items-center text-8xl text-[#12f7d6] pt-10">
                1{" "}
                <span className="text-white text-2xl pl-3">
                  Year of Experience
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
