import { Link } from "react-router-dom";
import aboutHero from "/public/assets/about/mobile/image-about-hero.jpg";
import aboutHeroDesk from "/public/assets/about/desktop/image-about-hero.jpg";
import worldClass from "/public/assets/about/desktop/image-world-class-talent.jpg";
import worldClassMobile from "/public/assets/about/mobile/image-world-class-talent.jpg";
import icon1 from "/public/assets/locationicons/1.svg";
import icon2 from "/public/assets/locationicons/2.svg";
import icon3 from "/public/assets/locationicons/3.svg";
import realDealImg from "/public/assets/about/mobile/image-real-deal.jpg";
import realDealImgDesk from "/public/assets/about/desktop/image-real-deal.jpg";
function AboutPage() {
  return (
    <>
      <div className="flex justify-center items-center 2xl:flex-row">
        <div className="flex justify-center items-center orange overflow-hidden lg:rounded-[20px] md:rounded-[20px] max-w-full 2xl:mt-20 md:mt-20 mt-15 2xl:w-[80rem] lg:w-[80rem] md:w-[45rem] w-full 2xl:h-[35rem] md:h-[20rem] lg:h-[35rem] max-h-screen">
          <div className="2xl:ml-10 md:ml-10 lg:ml-20 flex flex-col 2xl:gap-10 lg:gap-10 md:gap-5 gap-10 2xl:mt-20 md:mt-5 lg:mt-20 mt-0 2xl:mr-20 lg:mr-20 md:mr-20">
            <img
              src={aboutHero}
              className="max-w-full w-full sm:block md:hidden lg:hidden 2xl:hidden h-full"
              alt="hero section"
            ></img>
            <h1 className="text-white 2xl:text-5xl lg:text-4xl md:text-lg text-2xl 2xl:text-left text-center lg:text-left md:text-left jost500 2xl:mt-0 lg:mt-0 md:mt-0 mt-0">
              About Us
            </h1>
            <p className="text-white 2xl:text-xl lg:text-xl md:text-sm text-lg 2xl:text-left lg:text-left md:text-left text-center 2xl:mb-20 lg:mb-20 md:mb-0 mb-15">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            </p>
          </div>
          <div className="2xl:flex 2xl:justify-end md:flex md:justify-end lg:flex lg:justify-end">
            <img
              src={aboutHeroDesk}
              className="2xl:w-[200rem] md:w-[200rem] lg:w-[200rem] max-w-full hidden md:block lg:block 2xl:block"
            ></img>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center 2xl:flex-row">
        <div className="flex justify-center items-center grayish overflow-hidden lg:rounded-[20px] md:rounded-[20px] max-w-full 2xl:mt-20 md:mt-20 mt-15 2xl:w-[80rem] lg:w-[80rem] md:w-[45rem] w-full 2xl:h-[35rem] md:h-[20rem] lg:h-[35rem] max-h-screen">
          <div className="2xl:flex 2xl:justify-end md:flex md:justify-end lg:flex lg:justify-end">
            <img
              src={worldClass}
              className="2xl:w-[100rem] md:w-[80rem] lg:w-[100rem] max-w-full hidden md:block lg:block 2xl:block object-cover"
            ></img>
          </div>
          <div className="2xl:ml-10 md:ml-10 lg:ml-20 flex flex-col 2xl:gap-10 lg:gap-10 md:gap-5 gap-10 2xl:mt-20 md:mt-5 lg:mt-20 mt-0 2xl:mr-20 lg:mr-20 md:mr-0">
            <img
              src={worldClassMobile}
              className="max-w-full w-full sm:block md:hidden lg:hidden 2xl:hidden h-full object-cover"
              alt="hero section"
            ></img>
            <h1 className="2xl:text-5xl lg:text-4xl md:text-lg text-2xl 2xl:text-left text-center lg:text-left md:text-left jost500 2xl:mt-0 lg:mt-0 md:mt-0 mt-0 orangetext">
              World-class talent
            </h1>
            <p className="text-black 2xl:text-xl lg:text-xl md:text-sm text-lg 2xl:text-left lg:text-left md:text-left text-center 2xl:mb-20 lg:mb-20 md:mb-0 mb-15">
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
            </p>
            <p className="text-black 2xl:text-xl lg:text-xl md:text-sm text-lg 2xl:text-left lg:text-left md:text-left text-center 2xl:mb-20 lg:mb-20 md:mb-0 mb-30">
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-20 mb-20">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-20">
          <div className="flex flex-col justify-center items-center gap-10">
            <img src={icon1}></img>
            <h1 className="text-4xl md:text-2xl">CANADA</h1>
            <button className="py-4 px-8 orangeHover rounded-[10px] text-white text-xl cursor-pointer transition-colors duration-300">
              <Link to={"/locations"}>See Location</Link>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-10">
            <img src={icon2}></img>
            <h1 className="text-4xl md:text-2xl">AUSTRALIA</h1>
            <button className="py-4 px-8 orangeHover rounded-[10px] text-white text-xl cursor-pointer transition-colors duration-300">
              <Link to={"/locations"}>See Location</Link>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-10">
            <img src={icon3}></img>
            <h1 className="text-4xl md:text-2xl">UNITED KINGDOM</h1>
            <button className="py-4 px-8 orangeHover rounded-[10px] text-white text-xl cursor-pointer transition-colors duration-300">
              <Link to={"/locations"}>See Location</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center 2xl:flex-row">
        <div className="flex justify-center items-center grayish overflow-hidden lg:rounded-[20px] md:rounded-[20px] max-w-full 2xl:mt-20 md:mt-20 mt-15 2xl:w-[80rem] lg:w-[80rem] md:w-[45rem] w-full 2xl:h-[35rem] md:h-[20rem] lg:h-[35rem] max-h-screen">
          <div className="2xl:ml-10 md:ml-10 lg:ml-20 flex flex-col 2xl:gap-10 lg:gap-10 md:gap-5 gap-10 2xl:mt-20 md:mt-5 lg:mt-20 mt-0 2xl:mr-20 lg:mr-20 md:mr-10">
            <img
              src={realDealImg}
              className="max-w-full w-full sm:block md:hidden lg:hidden 2xl:hidden h-full object-cover"
              alt="hero section"
            ></img>
            <h1 className="2xl:text-5xl lg:text-4xl md:text-lg text-2xl 2xl:text-left text-center lg:text-left md:text-left jost500 2xl:mt-0 lg:mt-0 md:mt-0 mt-0 orangetext">
              The real deal
            </h1>
            <p className="text-black 2xl:text-xl lg:text-xl md:text-sm text-lg 2xl:text-left lg:text-left md:text-left text-center 2xl:mb-20 lg:mb-20 md:mb-0 mb-15">
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success.
            </p>
            <p className="text-black 2xl:text-xl lg:text-xl md:text-sm text-lg 2xl:text-left lg:text-left md:text-left text-center 2xl:mb-20 lg:mb-20 md:mb-0 mb-30">
              We are visual storytellers in appealing and captivating ways. By
              combining business and marketing strategies, we inspire audiences
              to take action and drive real results.
            </p>
          </div>
          <div className="2xl:flex 2xl:justify-end md:flex md:justify-end lg:flex lg:justify-end">
            <img
              src={realDealImgDesk}
              className="2xl:w-[100rem] md:w-[80rem] lg:w-[100rem] max-w-full hidden md:block lg:block 2xl:block object-cover"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
