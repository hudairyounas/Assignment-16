const AboutMe = () => {
  return (
    <div className="flex justify-evenly text-white max-lg:flex-col max-lg:items-center max-lg:space-y-10">
      {/* LEFT */}
      <div className="flex flex-col items-start justify-center max-lg:items-center">
        <div className="border-4 border-teal-500 rounded-tl-[50px] rounded-br-[50px] px-10 py-5 bg-[#1a1e23]">
          <h1 className="text-5xl font-semibold">About Me</h1>
        </div>
        <div className="bg-[#1a1e23] flex flex-col mt-10 p-7 rounded-[50px] w-[80%]">
          <p className="text-[#12f7d6] mb-3 text-3xl">&lt;p&gt;</p>
          <h1 className="text-3xl font-semibold text-[#12f7d6]">Hello!</h1>
          <p>
            My name is Sinan and I specialize in web developement that utilizes
            <span className="text-[#12f7d6]"> HTML</span>,{" "}
            <span className="text-[#12f7d6]">CSS</span>,{" "}
            <span className="text-[#12f7d6]">JS</span>, and{" "}
            <span className="text-[#12f7d6]">REACT</span> etc. <br />I am a
            highly motivated individual and eternal optimist dedicated to
            writing clear, concise, robust code that works. Striving to never
            stop learning and improving. <br />
            When I'm not coding, I am{" "}
            <span className="text-[#12f7d6]">writing blogs</span>, reading, or
            picking up some new hands-on art project like{" "}
            <span className="text-[#12f7d6]">photography</span>. <br />I like to
            have my perspective and belief systems challenged so that I see the
            world through new eyes.
          </p>
          <p className="text-[#12f7d6] mt-3">&lt;/p&gt;</p>
        </div>
      </div>
      {/* RIGHT */}
      <img className="w-1/3" src="./about.png" alt="About-Image" />
    </div>
  );
};

export default AboutMe;
