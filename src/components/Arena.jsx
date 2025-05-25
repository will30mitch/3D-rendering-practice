import 'boxicons/css/boxicons.min.css';

const Arena = () => {
  return (
    <div className='md:min-h-[90%] p-0 lg:p-8 md:mt-0 mt-60'>
      <div className='relative z-10 pt-6 text-center'>
        <h1 className='text-5xl font-bold tracking-widest mb-28' style={{textShadow: "0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(167,139,250, 0.5"}}>
            Arena
        </h1>
      </div>
      <div className='lg:max-w-[90%] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>
        {/*Left column*/}
        <div className='md:col-span-1 space-y-4 md:space-y-6'>
            {/*Card1*/}
            <div className=' relative overflow-hidden rounded-3xl border border-white aspect-[4.4/4] transform transition-transform duration-300 hover:scale-105'>
                <div className='absolute h-full w-full'>
                    <img src='/images/bento-card1.png' alt='bento-1' />
                    <button className='absolute bottom-0 h-16 w-full bg-black bg-opacity-70 text-2xl hover:text-yellow-400 transition-all duration-300 text-nowrap'>
                    <i class='bx bx-store' ></i>CHAMP STORE
                    </button>
                </div>
            </div>
            <div className=' relative overflow-hidden rounded-3xl border border-white aspect-[4.4/4] transform transition-transform duration-300 hover:scale-105'>
                <div className='absolute h-full w-full'>
                    <video src='/videos/bento-card2.mp4' className='w-full h-full object-cover' autoPlay muted loop playsInline/>
                    <button className='absolute bottom-0 h-16 w-full bg-opacity-70 text-2xl hover:text-yellow-400 transition-all duration-300 text-nowrap'>
                    </button>
                </div>
            </div>
        </div>

        {/*right column*/}
        <div className='md:col-span-2 space-y-4 md:space-y-6'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6'>
                <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105'>
                    <video src='/videos/bento-card3.mp4' className='w-full h-full object-cover' autoPlay muted loop playsInline/>
                </div>
                <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105'>
                    <video src='/videos/bento-card4.mp4' className='w-full h-full object-cover' autoPlay muted loop playsInline/>
                </div>
                <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105'>
                    <video src='/videos/bento-card5.mp4' className='w-full h-full object-cover' autoPlay muted loop playsInline/>
                </div>
            </div>
            <div className='relative overflow-hidden rounded-3xl border border-white aspect-[16/9] md:col-span-2 transform transition-transform duration-300 hover:scale-[1.02]'>
            <img src='/images/bento-card5.png' alt='bento-5'/>
                <button className='absolute bottom-0 h-16 w-full bg-black bg-opacity-70 text-2xl hover:text-yellow-400 transition-all duration-300 text-nowrap'>
                STATS
                </button>
            </div>
        </div>

        
      </div>
    </div>
  )
}

export default Arena
