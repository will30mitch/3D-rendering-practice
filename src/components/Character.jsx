import { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';
const Character = () => {
    //Tracking Avatar Selected
    const [selectedAvatar, setAvatar] = useState ("VIKI");

    //Simplefied Avatar data
    const Avatar= {
        VIKI:{
            name:"VIKI",
            power: 75,
            health: 95,  
            magix: 30, 
            reaction: 80,
            difficulty: 3,
        },
        EVA:{
            name:"EVA",
            power: 90,
            health: 80,  
            magix: 70, 
            reaction: 60,
            difficulty: 4,
        },
    }

    //Current Avatar
    const currentAvatar= Avatar[selectedAvatar];

  return (
    <div className='relative w-full h-screen overflow-hidden mb-[10%]'>
      {/*Title Section*/}
      <div className='relative z-10 pt-6 text-center'>
        <h1 className='text-5xl font-bold tracking-widest md:-mb-14 mb-8' style={{textShadow: "0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(167,139,250, 0.5"}}>FIGHTERS</h1>
      </div>
      {/*Main Content*/}
      <div className='relative z-10 flex md:flex-row flex-col items-center w-full h-full p-4'>
        {/*Left Side */}
        <div className='w-full md:w-2/4 flex flex-col md:m1-10'>
            {/*Info Card*/}
            <div className='bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-gray-800 shadow-[0_0_15px_rbga(167, 139 250, 0.2)]'>
                <h1 className='text-2xl font-semibold mb-2'>{currentAvatar.name}</h1>
                {/*Stats*/}
                <div className='space-y-3 mb-16'>
                    {/*Power*/}
                    <div className='flex items-center'>
                        <span className='w-24 text-gray-400'> Power</span>
                        <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden relative'>
                            <div className='absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-white' style={{width: `${currentAvatar.power}%`}}></div>
                        </div>
                        <span className='ml-4'>{currentAvatar.power}</span>
                    </div>
                    {/*Health*/}
                    <div className='flex items-center'>
                        <span className='w-24 text-gray-400'> Health</span>
                        <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden relative'>
                            <div className='absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-white' style={{width: `${currentAvatar.health}%`}}></div>
                        </div>
                        <span className='ml-4'>{currentAvatar.health}</span>
                    </div>
                    {/*Magix*/}
                    <div className='flex items-center'>
                        <span className='w-24 text-gray-400'> Magix</span>
                        <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden relative'>
                            <div className='absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-white' style={{width: `${currentAvatar.magix}%`}}></div>
                        </div>
                        <span className='ml-4'>{currentAvatar.magix}</span>
                    </div>
                    {/*Reaction*/}
                    <div className='flex items-center'>
                        <span className='w-24 text-gray-400'> Reaction</span>
                        <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden relative'>
                            <div className='absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-white' style={{width: `${currentAvatar.reaction}%`}}></div>
                        </div>
                        <span className='ml-4'>{currentAvatar.reaction}</span>
                    </div>
                </div>

                {/*Action Buttons*/}
                <div className='flex gap-3'>
                    <buton className='px-4 py-1 bg bg-purple-500 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300'>
                        Proficient
                    </buton>

                    <buton className='px-4 py-1 bg bg-purple-500 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300'>
                        Redemption
                    </buton>
                </div>
            </div>
            {/*Avatar Selection Cards*/}
            <div className='grid grid-cols-2 gap-4'>
                    <div className='relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300' onClick={() => setAvatar("VIKI")}>
                        <div className='text-lg mb-2'>
                            VIKI
                        </div>
                        {/*Avatar Visual*/}
                        <div className='w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2 '>
                            <img src="/images/VIKI.png" alt='VIKI-img'/>
                        </div>
                        {/*Difficulty Icons*/}
                        <div className='flex'>
                            {[...Array(3)].map((_,i) =>(<Star key={i}  className='w-4 fill-purple-300 text-purple-400'/>))}
                        </div>

                        {/*Highlight for selected Avatar */}
                        {selectedAvatar === "VIKI" && (<div className='absolute inset-0 border-2 rounded-lg pointer-events-none'></div>)}
                    </div>

                    <div className='relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300' onClick={() => setAvatar("EVA")}>
                        <div className='text-lg mb-2'>
                            EVA
                        </div>
                        {/*Avatar Visual*/}
                        <div className='w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2 '>
                            <img src="/images/EVA.png" alt='EVA-img'/>
                        </div>
                        {/*Difficulty Icons*/}
                        <div className='flex'>
                            {[...Array(4)].map((_,i) =>(<Star key={i}  className='w-4 fill-purple-300 text-purple-400'/>))}
                        </div>

                        {/*Highlight for selected Avatar */}
                        {selectedAvatar === "EVA" && (<div className='absolute inset-0 border-2 rounded-lg pointer-events-none'></div>)}
                    </div>
            </div>
        </div>
        {/*Right side*/}
        <div className='relative md:w-2/4 w-full md:h-full h-80 flex items-center justify-center overflow-hidden'>
                <AnimatePresence mode='wait'>
                    {selectedAvatar === "VIKI" ? (
                        <motion.div
                            key="VIKI"
                            className='absolute inset-0'
                            initial={{ x:"100%" }}
                            animate={{ x:0 }}
                            exit={{ x:"-100%" }}
                            transition={{ duration: 0.5 }}>
                            <img src='/images/VIKI.png' alt='VIKI-img'/>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="EVA"
                            className='absolute inset-0'
                            initial={{ x:"100%" }}
                            animate={{ x:0 }}
                            exit={{ x:"-100%" }}
                            transition={{ duration: 0.5 }}>
                            <Spline scene="https://prod.spline.design/T7AhCMAGojaqt23E/scene.splinecode" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
      </div>
    </div>
  )
}

export default Character
