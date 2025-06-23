import { Link } from "react-router-dom"


function GraphicDesign(){
    return(
        <>
            <div className="flex justify-center items-center mt-10 flex-col">
                <div className="flex flex-col gap-5 justify-center items-center orange text-white 2xl:rounded-[20px] 2xl:w-[80rem] 2xl:h-[20rem] w-full h-[15rem] lg:h-[20rem] md:h-[20rem]">
                    <h1 className="2xl:text-5xl lg:text-5xl md:text-5xl text-3xl">Graphic Design</h1>
                    <p className="2xl:text-lg md:text-lg lg:text-lg text-sm 2xl:w-[25rem] w-full text-center">We deliver eye-catching branding materials that are tailored to meet
                        your business objectives
                    </p>
                </div>
                <div className="grid 2xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 mt-30 2xl:w-[80rem] lg:w-[80rem] max-w-full">
                    <div className="grayishhover 2xl:rounded-[20px] lg:rounded-[20px] md:rounded-[20px] flex flex-col justify-center items-center">
                        <img className = 'h-[25rem] w-full 2xl:rounded-t-[20px] lg:rounded-t-[20px] md:rounded-t-[20px]' src = '/src/assets/graphic-design/desktop/image-change.jpg' alt = 'Tim Brown website'></img>
                        <h1 className="orangetext text-2xl py-5 jost500 uppercase mt-5">T I M <span className="ml-2"> B R O W N</span></h1>
                        <p className="text-[20px] py-5 text-center">A book cover designed for Tim Brown’s new release, ‘Change’</p>
                    </div>
                    <div className="grayishhover 2xl:rounded-[20px] lg:rounded-[20px] md:rounded-[20px] flex flex-col justify-center items-center">
                        <img className = 'h-[25rem] w-full 2xl:rounded-t-[20px] lg:rounded-t-[20px] md:rounded-t-[20px]' src = '/src/assets/graphic-design/desktop/image-boxed-water.jpg' alt = 'Boxed Water website'></img>
                        <h1 className="orangetext text-2xl py-5 jost500 uppercase mt-5">b o x e d    <span className="ml-2"> w a t e r</span></h1>
                        <p className="text-[20px] py-5 text-center">A simple packaging concept made for Boxed Water</p>
                    </div>
                    <div className="grayishhover 2xl:rounded-[20px] lg:rounded-[20px] md:rounded-[20px] flex flex-col justify-center items-center">
                        <img className = 'h-[25rem] w-full 2xl:rounded-t-[20px] lg:rounded-t-[20px] md:rounded-t-[20px]' src = '/src/assets/graphic-design/desktop/image-science.jpg' alt = 'Science website'></img>
                        <h1 className="orangetext text-2xl py-5 jost500 uppercase mt-5">S c i e n c e!</h1>
                        <p className="text-[20px] py-5 text-center">A poster made in collaboration with the Federal Art Project</p>
                    </div>
                </div>
            </div>


<div className="flex justify-center items-center py-50">
        <div className="">
          
       
        <div className="grid sm:grid-cols-2 grid-cols-1 max-w-full 2xl:gap-10 lg:gap-10 md:gap-10 gap-5 2xl:w-[80rem]
        
        lg:w-[80rem] md:w-[40rem] w-[22rem]">
            <div className="relative">
                <img src="/src/assets/home/desktop/image-web-design-small.jpg" alt="App Design" className="w-full rounded-[15px]" />
                <Link to = {'/projects/web-design'}>
            <div className="hover:bg-orange-400/20 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black/80 rounded-lg">
            <h2 className="2xl:text-5xl lg:text-5xl md:text-4xl text-2xl font-bold jost500">WEB DESIGN</h2>
            <button className="2xl:text-xl lg:text-xl md:text-lg text-sm py-5 jost400">
              VIEW PROJECTS <span className="orangetext">&gt;</span>
            </button>
          </div>
          </Link>
            </div>
            <div className="relative">
                <img src="/src/assets/home/desktop/image-app-design.jpg" alt="Graphic design" className="w-full rounded-[15px]" />



            <Link to = {'/projects/app-design'}>
             <div className="hover:bg-orange-400/20 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black/80 rounded-lg">
            <h2 className="2xl:text-5xl lg:text-5xl md:text-3xl text-xl font-bold jost500">APP DESIGN</h2>
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
    )
}

export default GraphicDesign