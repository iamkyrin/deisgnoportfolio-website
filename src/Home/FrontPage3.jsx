function FrontPage3(){
    return(
        <div>
            <div className="flex justify-center items-center">
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-20 max-w-full 2xl:w-[80rem] lg:w-[80rem]
                md:w-[40rem]">
                    <div className="flex justify-center items-center flex-col">
                        <img src = 'src/assets/home/desktop/illustration-passionate.svg'></img>
                        <div className="flex justify-center items-center flex-col">
                            <h1 className="jost400 mt-10">P A S S I O N A T E</h1>
                            <p className="jost text-gray-700 text-center mt-10">Each Project starts with an in-depth
                                brand research to ensure we only create
                                products that serve a purpose. We merge art, design, and
                                technology into exciting new solutions.
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex justify-center items-center flex-col">
                        <img src = 'src/assets/home/desktop/illustration-resourceful.svg'></img>
                        <div className="flex justify-center items-center flex-col">
                            <h1 className="jost400 mt-10">R E S O U R C E F U L</h1>
                            <p className="jost text-gray-700 text-center mt-10">Everything that we do has a strategic purpose.
                                We use an agile approach in all of our projects and value
                                customer collaboration. It guarantees superior results that fulfil our 
                                client's needs.
                            </p>
                        </div>
                    </div>
                    

                    <div className="flex justify-center items-center flex-col">
                        <img src = 'src/assets/home/desktop/illustration-friendly.svg'></img>
                        <div className="flex justify-center items-center flex-col">
                            <h1 className="jost400 mt-10">F R I E N D L Y</h1>
                            <p className="jost text-gray-700 text-center mt-10">We are a group of enthusiastic folks who know how to 
                                put people first. Our success depends on our customers,
                                and we strive to give them the best experience a company
                                can provide.
                            </p>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default FrontPage3