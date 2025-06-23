function LocationPage(){
return(
    <>

            {/* CANADA */}
        <div id = 'Canada' className="2xl:flex 2xl:justify-center 2xl:items-center lg:flex lg:justify-center lg:items-center md:flex md:justify-center md:items-center mt-20 gap-10">
            <div className="2xl:block lg:block md:block flex flex-col justify-center items-center grayish 2xl:w-[50rem] lg:w-[70rem] md:w-[25rem] 2xl:h-[20rem] lg:h-[18rem] md:h-[25rem] rounded-[20px] 2xl:py-10 2xl:px-40 lg:py-10 lg:px-40 md:py-0 md:px-5 py-0 px-0 w-full">
                <div className="flex justify-center items-center">
                    <img src = "src/assets/locations/desktop/image-map-canada.png" className="w-full sm:block md:hidden lg:hidden 2xl:hidden h-[20rem] object-cover rounded-[20px]" alt = 'hero section'></img>
                </div>
                 
                <h1 className="orangetext text-6xl mt-10 mb-10 jost500">Canada</h1>
                <div className="flex 2xl:flex-row 2xl:gap-20 lg:flex-row lg:gap-20 flex-col gap-20">
                    
                    <div>
                        <h2 className="text-xl jost500">Designo Central Office</h2>
                        <p>3886 Wellignton Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                    </div>
                    <div>
                        <h2 className="text-xl jost500">Contact</h2>
                        <p>P: +1 253-863-8967</p>
                        <p className="mb-5">M: contact@designo.co</p>
                    </div>

            
                </div>
                
            </div>
            <div className="">
                <img src = 'src/assets/locations/desktop/image-map-canada.png' className="2xl:block lg:block md:block hidden rounded-[20px] object-cover w-full 2xl:h-full lg:h-full md:h-[25rem]"></img>
            </div>
        </div>




        {/* AUSTRALIA */}

                <div id = 'Australia' className="2xl:flex 2xl:justify-center 2xl:items-center lg:flex lg:justify-center lg:items-center md:flex md:justify-center md:items-center mt-20 gap-10">
            <div className="2xl:block lg:block md:block flex flex-col justify-center items-center grayish 2xl:w-[50rem] lg:w-[70rem] md:w-[25rem] 2xl:h-[20rem] lg:h-[18rem] md:h-[25rem] rounded-[20px] 2xl:py-10 2xl:px-40 lg:py-10 lg:px-40 md:py-0 md:px-5 py-0 px-0 w-full">
                <div className="flex justify-center items-center">
                    <img src = "src/assets/locations/desktop/image-map-canada.png" className="w-full sm:block md:hidden lg:hidden 2xl:hidden h-[20rem] object-cover rounded-[20px]" alt = 'hero section'></img>
                </div>
                 
                <h1 className="orangetext text-6xl mt-10 mb-10 jost500">Australia</h1>
                <div className="flex 2xl:flex-row 2xl:gap-20 lg:flex-row lg:gap-20 flex-col gap-20">
                    
                    <div>
                        <h2 className="text-xl jost500">Designo AU Office</h2>
                        <p>19 Balonne Street New South</p>
                        <p>Wales 2443</p>
                    </div>
                    <div>
                        <h2 className="text-xl jost500">Contact</h2>
                        <p>P: (02) 6720 9092</p>
                        <p className="mb-5">M: contact@designo.au</p>
                    </div>

            
                </div>
                
            </div>
            <div className="">
                <img src = 'src/assets/locations/desktop/image-map-AUSTRALIA.png' className="2xl:block lg:block md:block hidden rounded-[20px] object-cover w-full 2xl:h-full lg:h-full md:h-[25rem]"></img>
            </div>
        </div>  



        {/* UNITED KINGDOM */}

                <div id = 'United-Kingdom' className="2xl:flex 2xl:justify-center 2xl:items-center lg:flex lg:justify-center lg:items-center md:flex md:justify-center md:items-center mt-20 gap-10">
            <div className="2xl:block lg:block md:block flex flex-col justify-center items-center grayish 2xl:w-[50rem] lg:w-[70rem] md:w-[25rem] 2xl:h-[20rem] lg:h-[18rem] md:h-[28rem] rounded-[20px] 2xl:py-10 2xl:px-40 lg:py-10 lg:px-40 md:py-0 md:px-5 py-0 px-0 w-full">
                <div className="flex justify-center items-center">
                    <img src = "src/assets/locations/desktop/image-map-united-kingdom.png" className="w-full sm:block md:hidden lg:hidden 2xl:hidden h-[20rem] object-cover rounded-[20px]" alt = 'hero section'></img>
                </div>
                 
                <h1 className="orangetext text-6xl mt-10 mb-10 jost500 text-center">United Kingdom</h1>
                <div className="flex 2xl:flex-row 2xl:gap-20 lg:flex-row lg:gap-20 flex-col gap-20">
                    
                    <div>
                        <h2 className="text-xl jost500">Designo UK Office</h2>
                        <p>13 Colorado Way Rhyd-y-fro</p>
                        <p>SA8 9GA</p>
                    </div>
                    <div>
                        <h2 className="text-xl jost500">Contact</h2>
                        <p>P: 078 3115 1400</p>
                        <p className="mb-5">M: contact@designo.au</p>
                    </div>

            
                </div>
                
            </div>
            <div className="">
                <img src = 'src/assets/locations/desktop/image-map-united-kingdom.png' className="2xl:block lg:block md:block hidden rounded-[20px] object-cover w-full 2xl:h-full lg:h-full md:h-[25rem]"></img>
            </div>
        </div>
    </>
)
}

export default LocationPage