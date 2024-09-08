const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-semibold text-[#12f7d6] mb-5">Contact</h1>
      <hr className="w-44 border-[#12f7d6]" />
      <p className="text-2xl text-white max-md:text-center">
        I’m currently available for freelance work
      </p>
      {/* FORM */}
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-5xl font-semibold text-[#12f7d6] border-2 p-4 border-[#12f7d6] rounded-tl-[50px] rounded-br-[50px]">
          Send Me A Message
        </h1>
        <div className="flex flex-col items-center">
          <form className="flex flex-col items-center text-[#12f7d6] mt-20">
            <div className="flex justify-between gap-96 w-full max-lg:gap-10 max-sm:gap-5">
              <div className="flex flex-col gap-5">
                <label htmlFor="" className="font-semibold text-2xl">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  class="outline-none bg-transparent border-b-2 border-b-[#12f7d6] py-2 w-[300px] placeholder-white"
                />
              </div>
              <div className="flex flex-col gap-5">
                <label htmlFor="" className="font-semibold text-2xl">
                  Your Email *
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  class="outline-none bg-transparent border-b-2 border-b-[#12f7d6] py-2 w-[300px] placeholder-white"
                />
              </div>
            </div>
            <div className="flex flex-col mt-10 w-full">
              <label htmlFor="" className="font-semibold text-2xl">
                Your Message *
              </label>
              <textarea
                cols="80"
                rows="1"
                placeholder="Enter your message"
                className="outline-none bg-transparent border-b-2 border-b-[#12f7d6] placeholder-white resize-none pt-5 pb-2"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
