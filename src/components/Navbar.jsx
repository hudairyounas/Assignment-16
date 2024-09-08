import { FaDiscord, FaGithub, FaInstagram, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="w-full bg-gray-900 text-white lg:px-16 sm:p-2 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-teal-500 text-xl font-bold">
            &lt;/C&gt; Hudair Younis
          </span>
        </div>
        <div className="flex items-center sm:space-x-6">
          <a
            href="/"
            className="hover:text-[#12F7D6] active:[#12F7D6] pr-6 sm:p-0"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-[#12F7D6] active:[#12F7D6] pr-6 sm:p-0"
          >
            About
          </a>
          <div className="relative p-2">
            <FaSearch className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white md:text-black" />
            <input
              type="text"
              className="pl-8 p-1 rounded-md bg-white text-black outline-none hidden md:block"
            />
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#12F7D6]"
          >
            <div className="flex items-center">
              <FaInstagram className="hidden sm:block" />
              <span className="pl-2 hidden lg:hidden xl:block">Instagram</span>
            </div>
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#12F7D6]"
          >
            <div className="flex items-center">
              <FaDiscord className="hidden sm:block" />
              <span className="pl-2 hidden lg:hidden xl:block">Discord</span>
            </div>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#12F7D6]"
          >
            <div className="flex items-center">
              <FaGithub className="hidden sm:block" />
              <span className="pl-2 hidden lg:hidden xl:block">GitHub</span>
            </div>
          </a>
        </div>
      </nav>
      <hr className="border-[#12F7D6] border-2 lg:mx-16" />
    </>
  );
};

export default Navbar;
