import FrontPage2 from "./FrontPage2";
import FrontPage3 from "./FrontPage3";
import bgpattern from "/public/assets/home/desktop/bg-pattern-hero-home.svg";
import heroPhone from "/public/assets/home/desktop/image-hero-phone.png";

function FrontPage() {
  return (
    <div>
      <div className="flex justify-center items-center 2xl:flex-row">
        <div className="flex justify-center items-center orange overflow-hidden lg:rounded-[20px] md:rounded-[20px] max-w-full 2xl:mt-20 md:mt-20 mt-10 2xl:w-[80rem] lg:w-[70rem] md:w-[45rem] w-full 2xl:h-[45rem] md:h-[30rem] lg:h-[35rem] h-screen">
          <div className="2xl:ml-20 md:ml-20 lg:ml-20 flex flex-col gap-10 2xl:mt-20 md:mt-20 lg:mt-20 mt-0">
            <h1 className="text-white 2xl:text-5xl lg:text-4xl md:text-2xl text-2xl 2xl:text-left text-center lg:text-left md:text-left jost700 2xl:mt-0 lg:mt-0 md:mt-0 mt-50">
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className="text-white 2xl:text-2xl lg:text-2xl md:text-lg text-lg 2xl:text-left lg:text-left md:text-left text-center">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <button className="bg-white w-[10rem] rounded-[5px] text-center px-2 py-5 text-2xl 2xl:ml-0 lg:ml-0 md:ml-0 ml-29">
              Learn More
            </button>
            <img
              src={heroPhone}
              className="max-w-full w-full sm:block md:hidden lg:hidden 2xl:hidden"
              alt="hero section"
            ></img>
          </div>

          <div className="2xl:flex 2xl:justify-end md:flex md:justify-end lg:flex lg:justify-end">
            <div>
              <img
                src={bgpattern}
                alt="pattern"
                className="hidden lg:block 2xl:block md:block"
              ></img>
            </div>
            <img
              src={heroPhone}
              className="2xl:w-[100rem] md:w-[50rem] lg:w-[100rem] max-w-full w-[200rem] 2xl:mt-60 md:mt-65 hidden md:block lg:block 2xl:block"
              alt="hero section"
            ></img>
          </div>
        </div>
      </div>
      <FrontPage2></FrontPage2>
      <FrontPage3></FrontPage3>
    </div>
  );
}

export default FrontPage;
