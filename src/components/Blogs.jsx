import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Blogs = () => {
  return (
    <div className="flex flex-col items-center gap-5 mt-10 mb-20 max-sm:gap-10">
      <h1 className="text-5xl font-semibold text-[#12f7d6]">Blogs</h1>
      <hr className="w-28 border-2 border-[#12f7d6] mt-2" />
      <p className="text-2xl text-white max-sm:text-center max-md:text-center">
        My thoughts on technology and business, welcome to subscribe
      </p>
      <hr className=" w-[1330px] border-white max-lg:w-[975px] max-md:w-[710px] max-sm:w-[650px]" />
      <div className="flex space-x-10 items-center">
        <img
          className="max-md:w-[200px] max-sm:hidden"
          src="laptop.png"
          alt="laptop"
        />
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl font-semibold text-[#12f7d6] max-md:text-3xl">
            What does it take to become a web developer?
          </h1>
          <p className="text-white text-wrap w-3/4 max-md:w-5/6">
            Web development, also known as website development, encompasses a
            variety of tasks and processes involved in creating websites for the
            internet…
          </p>
          <div>
            <a
              href="#"
              className="text-3xl text-[#12f7d6] flex items-center gap-2"
            >
              Read More <MdKeyboardDoubleArrowRight />
            </a>
            <hr className="w-36 border-white" />
          </div>
          <div className="flex flex-wrap gap-5 text-2xl text-white items-center max-sm:text-lg">
            <span className="bg-[#43454D] p-2 rounded-full">Web Developer</span>
            <span>
              <span className="font-semibold">Text</span> Hudair
            </span>
            <span>
              <span className="font-semibold">Date</span> Sept 6, 2024
            </span>
            <span>
              <span className="font-semibold">Read</span> 1 Min
            </span>
          </div>
        </div>
      </div>
      <hr className="w-[1330px] border-white max-lg:max-w-screen-lg max-lg:w-[975px] max-md:w-[710px] max-sm:w-[650px]" />
      <div className="space-x-14 mt-10">
        <button className="bg-[#12f7d6] px-8 py-4 rounded-full text-2xl font-semibold">
          View More
        </button>
        <button className="border-2 border-[#12f7d6] text-white px-8 py-4 rounded-full text-2xl font-semibold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Blogs;
