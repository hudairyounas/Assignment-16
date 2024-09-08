import { SlScreenDesktop } from "react-icons/sl";
import { CiMobile2 } from "react-icons/ci";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandReact } from "react-icons/tb";

const Skills = () => {
  return (
    <div className="flex flex-col items-center space-y-10">
      <h1 className="text-9xl font-semibold text-[#12f7d6]">&lt;/&gt;</h1>
      <h1 className="text-5xl text-[#12f7d6]">Skills</h1>
      <hr className="w-28 border-2 border-[#12f7d6]" />
      <p className="text-2xl text-white max-md:text-center">
        I am striving to never stop learning and improving
      </p>

      <div className="flex space-x-40 max-md:space-x-20 max-sm:space-x-0 max-sm:flex-col max-sm:gap-10">
        <div className="py-2 px-4 flex flex-col items-center space-y-2 bg-[#98FAEC] border-l-8 border-l-[#0C73B8] rounded-md">
          <SlScreenDesktop className="text-2xl" />
          <p className="text-2xl">Web Development</p>
          <p>HTML - CSS - JS REACT</p>
        </div>

        <div className="py-2 px-4 flex flex-col items-center space-y-2 bg-[#98FAEC] border-l-8 border-l-[#0C73B8] rounded-md">
          <CiMobile2 className="text-2xl" />
          <p className="text-2xl">App Development</p>
          <p>Android - IOS</p>
        </div>
      </div>

      <div className="flex justify-center gap-36 max-md:grid max-md:grid-cols-2 max-md:gap-20">
        {/* ICONS */}
        <div className="flex flex-col items-center">
          <div className="bg-[#E54F26] p-10 rounded-full">
            <FaHtml5 className="text-5xl text-white" />
          </div>
          <h1 className="text-2xl text-[#E54F26]">HTML</h1>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-[#0C73B8] p-10 rounded-full">
            <FaCss3Alt className="text-5xl text-white" />
          </div>
          <h1 className="text-2xl text-[#0C73B8]">CSS</h1>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-[#E7A020] p-10 rounded-full">
            <TbBrandJavascript className="text-5xl text-white" />
          </div>
          <h1 className="text-2xl text-[#E7A020]">JS</h1>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-[#28A9E0] p-10 rounded-full">
            <TbBrandReact className="text-5xl text-white" />
          </div>
          <h1 className="text-2xl text-[#28A9E0]">REACT</h1>
        </div>

      </div>
    </div>
  );
};

export default Skills;
