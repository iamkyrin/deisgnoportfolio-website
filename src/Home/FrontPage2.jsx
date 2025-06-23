import { Link } from "react-router-dom"


function FrontPage2(){
return(
     <div className="flex justify-center items-center py-50">
        <div className="grid sm:grid-cols-2 grid-cols-1 max-w-full 2xl:gap-10 lg:gap-10 md:gap-10 gap-5 2xl:w-[80rem]
        
        lg:w-[80rem] md:w-[40rem] w-[22rem]">
          
            <div className="relative">
          <img
            src="src/assets/home/desktop/image-web-design-small.jpg"
            alt="Web design"
            className="w-full h-full object-cover rounded-lg"
          />
          <Link to = {'/projects/web-design'}>
          <div className="hover:bg-orange-400/20 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black/80 rounded-lg">
            <h2 className="2xl:text-5xl lg:text-5xl md:text-4xl text-2xl font-bold jost500">WEB DESIGN</h2>
            <button className="2xl:text-xl lg:text-xl md:text-lg text-sm py-5 jost400 cursor-pointer">
              VIEW PROJECTS <span className="orangetext">&gt;</span>
            </button>
          </div>
           </Link>
        </div>
       
        <div className="flex flex-col 2xl:gap-10 lg:gap-10 md:gap-10 gap-5">
            <div className="relative">
                <img src="src/assets/home/desktop/image-app-design.jpg" alt="App Design" className="w-full rounded-[15px]" />
                <Link to = {'/projects/app-design'}>
            <div className="hover:bg-orange-400/20 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black/80 rounded-lg">
            <h2 className="2xl:text-5xl lg:text-5xl md:text-4xl text-2xl font-bold jost500">APP DESIGN</h2>
            <button className="2xl:text-xl lg:text-xl md:text-lg text-sm py-5 jost400">
              VIEW PROJECTS <span className="orangetext">&gt;</span>
            </button>
          </div>
          </Link>
            </div>
            <div className="relative">
                <img src="src/assets/home/desktop/image-graphic-design.jpg" alt="Graphic design" className="w-full rounded-[15px]" />



            <Link to = {'/projects/graphic-design'}>
             <div className="hover:bg-orange-400/20 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black/80 rounded-lg">
            <h2 className="2xl:text-5xl lg:text-5xl md:text-3xl text-xl font-bold jost500">GRAPHIC DESIGN</h2>
            <button className="2xl:text-xl lg:text-xl md:text-lg text-sm py-5 jost400">
              VIEW PROJECTS <span className="orangetext">&gt;</span>
            </button>
          </div>
          </Link>
            </div>
            
        </div>
            

        </div>       
    </div>
)
}

export default FrontPage2