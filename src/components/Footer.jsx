import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-14">
      <hr />
      <div className="flex justify-between items-center mx-20 mt-5 text-2xl text-white max-xl:text-xl max-xl:mx-5 max-lg:text-sm max-sm:w-full">
        <p>© 2024 Hudair Younis. All right reserved.</p>
        <div className="flex gap-10">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <div className="flex gap-3 text-4xl text-black items-center max-md:text-lg">
          <a href="" className="bg-[#98FAEC] p-2 rounded-full">
            <FaGithub />
          </a>
          <a href="" className="bg-[#98FAEC] p-2 rounded-full">
            <FaLinkedin />
          </a>
          <a href="" className="bg-[#98FAEC] p-2 rounded-full">
            <FaInstagram />
          </a>
        </div>
        <p>
          Designed By{" "}
          <span className="text-[#12f7d6] border-b-2 border-[#12f7d6]">
            Hudair Younis
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
