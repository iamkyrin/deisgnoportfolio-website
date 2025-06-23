import { Link } from "react-router-dom"


function WebDesign(){
    return(
        <>
            <div className="flex justify-center items-center mt-10 flex-col">
                <div className="flex flex-col gap-5 justify-center items-center orange text-white 2xl:rounded-[20px] 2xl:w-[80rem] 2xl:h-[20rem] w-full h-[15rem] lg:h-[20rem] md:h-[20rem]">
                    <h1 className="2xl:text-5xl lg:text-5xl md:text-5xl text-3xl">Web Design</h1>
                    <p className="2xl:text-lg md:text-lg lg:text-lg text-sm 2xl:w-[25rem] w-full text-center">We build websites that serve as powerful marketing tools
                        and bring memorable brand experience
                    </p>
                </div>
                <div className="grid 2xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 mt-30 2xl:w-[80rem] lg:w-[80rem] max-w-full">
                    <div className="grayishhover 2xl:rounded-[20px] lg:rounded-[20px] md:rounded-[20px] flex flex-col justify-center items-center">
                        <img className = 'h-[25rem] w-full 2xl:rounded-t-[20px] lg:rounded-t-[20px] md:rounded-t-[20px]' src = '/src/assets/web-design/desktop/image-express.jpg' alt = 'express website'></img>
                        <h1 className="orangetext text-2xl py-5 jost500 uppercase mt-5">E x p r e s s</h1>
                        <p className="text-[20px] py-5 text-center">A multi-carrier shipping website for ecommerce businesses</p>
                    </div>
                    <div className="grayishhover 2xl:rounded-[20px] lg:rounded-[20px] md:rounded-[20px] flex flex-col justify-center items-center">
                        <img className = 'h-[25rem] w-full 2xl:rounded-t-[20px] lg:rounded-t-[20px] md:rounded-t-[20px]' src = '/src/assets/web-design/desktop/image-transfer.jpg' alt = 'Transfer website'></img>
                        <h1 className="orangetext text-2xl py-5 jost500 uppercase mt-5">T r a n s f e r</h1>
                        <p className="text-[20px] py-5 text-center">Site for low-cost money transfers and sending money within seconds</p>
                    </div>
                    <div className="grayishhover 2xl:rounded-[20px] lg:rounded-[20px] md:rounded-[20px] flex flex-col justify-center items-center">
                        <img className = 'h-[25rem] w-full 2xl:rounded-t-[20px] lg:rounded-t-[20px] md:rounded-t-[20px]' src = '/src/assets/web-design/desktop/image-photon.jpg' alt = 'Photon website'></img>
                        <h1 className="orangetext text-2xl py-5 jost500 uppercase mt-5">P h o t o n</h1>
                        <p className="text-[20px] py-5 text-center">A state-of-the-art music player with high-resolution audio and DSP effects</p>
                    </div>
                    <div className="grayishhover 2xl:rounded-[20px] lg:rounded-[20px] md:rounded-[20px] flex flex-col justify-center items-center">
                        <img className = 'h-[25rem] w-full 2xl:rounded-t-[20px] lg:rounded-t-[20px] md:rounded-t-[20px]' src = '/src/assets/web-design/desktop/image-builder.jpg' alt = 'Builder website'></img>
                        <h1 className="orangetext text-2xl py-5 jost500 uppercase mt-5">B u i l d e r</h1>
                        <p className="text-[20px] py-5 text-center">Connects users with local contractors based on their location</p>
                    </div>
                    <div className="grayishhover 2xl:rounded-[20px] lg:rounded-[20px] md:rounded-[20px] flex flex-col justify-center items-center">
                        <img className = 'h-[25rem] w-full 2xl:rounded-t-[20px] lg:rounded-t-[20px] md:rounded-t-[20px]' src = '/src/assets/web-design/desktop/image-blogr.jpg' alt = 'Blogr website'></img>
                        <h1 className="orangetext text-2xl py-5 jost500 uppercase mt-5">B l o g r</h1>
                        <p className="text-[20px] py-5 text-center">Blogr is a platform for creating an online blog or publication</p>
                    </div>
                    <div className="grayishhover 2xl:rounded-[20px] lg:rounded-[20px] md:rounded-[20px] flex flex-col justify-center items-center">
                        <img className = 'h-[25rem] w-full 2xl:rounded-t-[20px] lg:rounded-t-[20px] md:rounded-t-[20px]' src = '/src/assets/web-design/desktop/image-camp.jpg' alt = 'Camp website'></img>
                        <h1 className="orangetext text-2xl py-5 jost500 uppercase mt-5 hover:text-white">C a m p</h1>
                        <p className="text-[20px] py-5 text-center">Get expert training in coding, data, design, and digital marketing</p>
                    </div>
                    
                </div>
            </div>


<div className="flex justify-center items-center py-50">
        <div className="">
          
       
        <div className="grid sm:grid-cols-2 grid-cols-1 max-w-full 2xl:gap-10 lg:gap-10 md:gap-10 gap-5 2xl:w-[80rem]
        
        lg:w-[80rem] md:w-[40rem] w-[22rem]">
            <div className="relative">
                <img src="/src/assets/home/desktop/image-app-design.jpg" alt="App Design" className="w-full rounded-[15px]" />
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
                <img src="/src/assets/home/desktop/image-graphic-design.jpg" alt="Graphic design" className="w-full rounded-[15px]" />



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
        </>
    )
}

export default WebDesign