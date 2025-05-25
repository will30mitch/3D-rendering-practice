const Hero = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden flex justify-center mb-[10%]">
        <video src="/videos/hero.mp4" autoPlay loop muted playsInline className="w-full h-[95%] object-cover absolute top-0 first-letter:left-0 -z-10">
            
        </video>
        
        <div className="absolute bottom-[15%] flex flex-col items-center gap-5">
            <img src="/images/illu-text.png" alt="Illu-text" className="md:w-[30rem] w-[20rem]"></img>

            <h1 className="md:2xl text-1xl font-bold">Explore, Capture, Conquer</h1>

            <div className='md:w-[65%] w-[60%] h-[0.1px] bg-[#baba]'></div>
                <button className='h-8 px-6 bg-gradient-to-r from bg-purple-500 to-indigo-600 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300'>
               PLAY NOW
                </button>
                <div className="flex items-center gap-5 text-3xl font-extrabold text-gray-200">
                    <img className="md:h-16 h-12"src="/images/illu-logo.png" alt="Illu-logo" />
                    Zero
                </div>   

                    <p className="max-w-[80%] text-center text-[#babaff]">
                        Notice: This game is still under construction and development but its still Politimap in 5
                    </p>
                
            </div>

            <div className="absolute bottom-40 lg:right-30 right-10 mt-24 animate-bounce sm:inline-block hidden">
                <div className="flex flex-col items-center">
                    <div className="w-8 h-12 border-2 border-[#babaff] rounded-full flex justify-center pt-1">
                        <div className="w-1 h-3 bg-[#babaff] rounded full animate-pulse"></div>
                    </div>

                    <p className="text-[#babaff] mt-2">Scroll Down</p>
                </div>
            </div>
    </main>
  )
}

export default Hero
