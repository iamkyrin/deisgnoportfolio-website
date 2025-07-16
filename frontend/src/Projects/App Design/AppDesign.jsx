import { Link } from "react-router-dom";
import airfilImg from "/public/assets/app-design/desktop/image-airfilter.jpg";
import eyecamImg from "/public/assets/app-design/desktop/image-eyecam.jpg";
import faceitImg from "/public/assets/app-design/desktop/image-faceit.jpg";
import toDoImg from "/public/assets/app-design/desktop/image-todo.jpg";
import loopStuImg from "/public/assets/app-design/desktop/image-loopstudios.jpg";

import webDesignImg from "/public/assets/home/desktop/image-web-design-small.jpg";
import graphicDesignImg from "/public/assets/home/desktop/image-graphic-design.jpg";
function AppDesign() {
  return (
    <>
      <div className="flex justify-center items-center mt-10 flex-col">
        <div
          id="important"
          className="flex flex-col gap-5 justify-center items-center orange text-white 2xl:rounded-[20px] 2xl:w-[80rem] 2xl:h-[20rem] w-full h-[15rem] lg:h-[20rem] md:h-[20rem]"
        >
          <h1 className="2xl:text-5xl lg:text-5xl md:text-5xl text-3xl">
            App Design
          </h1>
          <p className="2xl:text-lg md:text-lg lg:text-lg text-sm 2xl:w-[25rem] w-full text-center">
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
          </p>
        </div>
        <div className="grid 2xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 mt-30 2xl:w-[80rem] lg:w-[80rem] max-w-full">
          <div className="grayishhover 2xl:rounded-[20px] lg:rounded-[20px] md:rounded-[20px] flex flex-col justify-center items-center">
            <img
              className="h-[25rem] w-full 2xl:rounded-t-[20px] lg:rounded-t-[20px] md:rounded-t-[20px]"
              src={airfilImg}
              alt="Airfilter website"
            ></img>
            <h1 className="orangetext text-2xl py-5 jost500 uppercase mt-5">
              A I R F I L T E R
            </h1>
            <p className="text-[20px] py-5 text-center">
              Solving the problem of poor indoor air quality by filtering the
              air
            </p>
          </div>
          <div className="grayishhover 2xl:rounded-[20px] lg:rounded-[20px] md:rounded-[20px] flex flex-col justify-center items-center">
            <img
              className="h-[25rem] w-full 2xl:rounded-t-[20px] lg:rounded-t-[20px] md:rounded-t-[20px]"
              src={eyecamImg}
              alt="Eye Cam website"
            ></img>
            <h1 className="orangetext text-2xl py-5 jost500 uppercase mt-5">
              e y e <span className="ml-2">c a m</span>
            </h1>
            <p className="text-[20px] py-5 text-center">
              Product that lets you edit your favorite photos and videos at any
              time
            </p>
          </div>
          <div className="grayishhover 2xl:rounded-[20px] lg:rounded-[20px] md:rounded-[20px] flex flex-col justify-center items-center">
            <img
              className="h-[25rem] w-full 2xl:rounded-t-[20px] lg:rounded-t-[20px] md:rounded-t-[20px]"
              src={faceitImg}
              alt="FaceIT website"
            ></img>
            <h1 className="orangetext text-2xl py-5 jost500 uppercase mt-5">
              F A C E <span className="ml-2">I T</span>
            </h1>
            <p className="text-[20px] py-5 text-center">
              Get to meet your favorite internet superstar with the faceit app
            </p>
          </div>
          <div className="grayishhover 2xl:rounded-[20px] lg:rounded-[20px] md:rounded-[20px] flex flex-col justify-center items-center">
            <img
              className="h-[25rem] w-full 2xl:rounded-t-[20px] lg:rounded-t-[20px] md:rounded-t-[20px]"
              src={toDoImg}
              alt="Todo website"
            ></img>
            <h1 className="orangetext text-2xl py-5 jost500 uppercase mt-5">
              T O D O
            </h1>
            <p className="text-[20px] py-5 text-center">
              A todo app that features cloud sync with light and dark mode
            </p>
          </div>
          <div className="grayishhover 2xl:rounded-[20px] lg:rounded-[20px] md:rounded-[20px] flex flex-col justify-center items-center">
            <img
              className="h-[25rem] w-full 2xl:rounded-t-[20px] lg:rounded-t-[20px] md:rounded-t-[20px] object-cover"
              src={loopStuImg}
              alt="Todo website"
            ></img>
            <h1 className="orangetext text-2xl py-5 jost500 uppercase mt-5">
              l o o p <span className="ml-2">s t u d i o s</span>
            </h1>
            <p className="text-[20px] py-5 text-center">
              A VR experience app that features cloud sync and is made with
              LoopStudios
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-50">
        <div className="">
          <div
            className="grid sm:grid-cols-2 grid-cols-1 max-w-full 2xl:gap-10 lg:gap-10 md:gap-10 gap-5 2xl:w-[80rem]
        
        lg:w-[80rem] md:w-[40rem] w-[22rem]"
          >
            <div className="relative">
              <img
                src={webDesignImg}
                alt="App Design"
                className="w-full rounded-[15px]"
              />
              <Link to={"/projects/web-design#important"}>
                <div className="hover:bg-orange-400/20 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black/80 rounded-lg">
                  <h2 className="2xl:text-5xl lg:text-5xl md:text-4xl text-2xl font-bold jost500">
                    WEB DESIGN
                  </h2>
                  <button className="2xl:text-xl lg:text-xl md:text-lg text-sm py-5 jost400">
                    VIEW PROJECTS <span className="orangetext">&gt;</span>
                  </button>
                </div>
              </Link>
            </div>
            <div className="relative">
              <img
                src={graphicDesignImg}
                alt="Graphic design"
                className="w-full rounded-[15px]"
              />

              <Link to={"/projects/graphic-design#important"}>
                <div className="hover:bg-orange-400/20 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black/80 rounded-lg">
                  <h2 className="2xl:text-5xl lg:text-5xl md:text-3xl text-xl font-bold jost500">
                    GRAPHIC DESIGN
                  </h2>
                  <button className="2xl:text-xl lg:text-xl md:text-lg text-sm py-5 jost400">
                    VIEW PROJECTS <span className="orangetext">&gt;</span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppDesign;
