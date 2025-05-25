import 'boxicons/css/boxicons.min.css';

const Header = () => {

  //simple funtion to toggle the moble menu
    const toggleMobleMenu=() => {
      const mobileMenu = document.getElementById("mobileMenu");
      if(mobileMenu.classList.contains('hidden')){
        mobileMenu.classList.remove('hidden')
      }else {
        mobileMenu.classList.add('hidden')
      }
    }
  return (
    <header className='py-1 px-7 flex justify-between items-center sticky top-0 z-50 w-full border-b-[0.3px] border-[#babaff] bg-black'>
      {/*Left Section*/}
        <div className='flex lg:gap-14 gap-4 items-center'>
          <img className='md:w-16 w-12' src="/images/logo.png" alt="logo-img" />
      
            <div className='hidden md:flex gap-5 items-center'>
              <button className='h-8 px-6 bg-gradient-to-r from bg-purple-500 to-indigo-600 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300'>
               PLAY NOW
              </button>

              <button className='h-8 px-6 bg-gradient-to-r from bg-gray-500 to-gray-600 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300'>
                PLAY NOW
              </button>
            </div>
        </div>

        {/*Right Section*/}
        <nav className='hidden md:flex lg:gap-8 gap-4 px-5'>
          <a href='#' className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap">
          <i class='bx bx-user' ></i>  Avatar
          </a>

          <a href='#' className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap">
          <i class='bx bx-crown'></i>  Arena
          </a>

          <a href='#' className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap">
          <i class='bx bx-store' ></i>  Shop
          </a>
        </nav>

        {/*Mobile menu*/}
        <button onClick={toggleMobleMenu} className='text-3x1 p-2 md:hidden'>
          <i class='bx bx-menu' ></i>
        </button>

        <div id="mobileMenu" className='fixed top-14 right-0 left-0 bg-black p-5 md:hidden'>
          <nav className='hidden md:flex lg:gap-8 gap-4 px-5'>
            <a href='#' className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap">
              <i class='bx bx-user' ></i>  Avatar
            </a>

            <a href='#' className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap">
              <i class='bx bx-crown'></i>  Arena
            </a>

            <a href='#' className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap">
              <i class='bx bx-store' ></i>  Shop
            </a>
          </nav>

          <div>
            <button className=''>
              PLAY NOW
            </button>

            <button className=''>
              STORE
            </button>
          </div>

        </div>
    </header>
  )
}

export default Header
