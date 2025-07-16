import logoLight from "/public/assets/logo/logo-light.png";

function Footer() {
  return (
    <>
      <div className="flex justify-center items-center h-20 mt-40 relative">
        <div className="flex flex-col orange max-w-full w-[80rem] 2xl:rounded-[15px] lg:rounded-[15px] md:rounded-[15px] rounded-[0px]">
          <div className="flex flex-col gap-5 2xl:ml-10 lg:ml-10 md:ml-10 ml-2 max-w-full 2xl:w-[40rem] lg:w-[40rem] mt-15">
            <h1 className="text-white 2xl:text-5xl lg:text-5xl md:text-3xl md: jost700">
              Let's talk about your project
            </h1>
            <p className="text-white 2xl:text-xl lg:text-xl md:text-lg text-sm">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <div className="flex flex-row justify-end px-20">
            <button className="bg-white max-w-full w-50 rounded-[5px] text-center px-2 py-3 2xl:text-xl lg:text-xl md:text-xl text-lg mb-10 2xl:mt-0 lg:mt-0 md:mt-0 mt-5">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>

      <section className="flex justify-center max-w-full items-center mt-10 bg-black py-15 text-white">
        <div className="flex justify-between 2xl:px-85 lg:px-85 md:px-15 px-10 w-full max-w-full mt-20 text-white 2xl:flex-row lg:flex-row md:flex-row flex-col gap-5">
          <div className="">
            <img src={logoLight} alt="Business Logo" className="w-[15rem]" />
          </div>
          <nav className="jost400">
            <ul className="flex 2xl:flex-row lg:flex-row md:flex-row flex-col gap-10">
              <li>
                <a className="cursor-pointer">OUR COMPANY</a>
              </li>
              <li>
                <a className="cursor-pointer">LOCATIONS</a>
              </li>
              <li>
                <a className="cursor-pointer">CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <footer className="flex 2xl:flex-row lg:flex-row md:flex-row flex-col 2xl:gap-75 lg:gap-75 md:gap-10 gap-0 2xl:justify-center 2lg:items-center lg:justify-center md:items-center md:justify-center justify-left 2xl:px-0 lg:px-0 md:px-0 px-10 2xl:items-center bg-black text-white">
        <div className="flex flex-col gap-2">
          <h1 className="text-white/50 font-bold">Designo Central Office</h1>
          <p className="text-white/50">3886 Wellington Street</p>
          <p className="text-white/50">Toronto, Ontario M9C 3J5</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-white/50 font-bold">Contact Us Central Office</h1>
          <p className="text-white/50">P : +1 253-863-8967</p>
          <p className="text-white/50">M : contact@designo.co</p>
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <img></img>
            <img></img>
            <img></img>
            <img></img>
            <img></img>
          </div>

          <p>© Easybank Template 2023. All Rights</p>
          <p>
            Reserved Developed by{" "}
            <a
              target="_blank"
              href="https://github.com/iamkyrin"
              className="transition text-red-500 hover:text-red-300 cursor-pointer"
            >
              Joshua Walters
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
