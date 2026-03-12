'use client'
import { buildingProjects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import { FaMobileAlt } from 'react-icons/fa'

const BuildingProjects = () => {
  const mobileApps = buildingProjects.filter(p => p.status === 'comingsoon')
  const webProjects = buildingProjects.filter(p => p.status === 'live')

  return (
    <div className='py-20'>
        <h1 className='heading'>
            What I'm Currently {' '}
            <span className='text-purple'>Building</span>
        </h1>
        
        {/* Mobile Applications Section */}
        <div className='mt-32'>
            <h2 className='text-2xl md:text-3xl font-bold text-center text-purple mb-16'>
                Mobile Applications — Coming Soon on Play Store
            </h2>
            <div className='flex flex-wrap items-center justify-center px-4 gap-x-32 gap-y-24'>
                {mobileApps.map(({id, title, img, tech, des, status}) => (
                    <div key={id} className='mb-40 sm:mb-40 lg:min-h-[40rem] h-[20rem] items-center justify-center flex sm:w-[320px] w-[90vw]' >
                        <PinContainer title='' href={undefined}>
                            <div className='relative flex items-center justify-center sm:w-[300px] w-[65vw] overflow-hidden rounded-[2.5rem] border-4 border-[#1a1a2e] bg-[#0d0d1a]'>
                                <div className='absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-[#0d0d1a] rounded-b-2xl z-10'></div>
                                <div className='relative w-full h-[550px] overflow-hidden rounded-[2rem]'>
                                    <img className='object-cover w-full h-full' src={img} alt={title} />
                                    <div className='absolute bottom-6 left-1/2 -translate-x-1/2 bg-purple/90 px-5 py-2.5 rounded-full flex items-center gap-2'>
                                        <FaMobileAlt className='text-white text-base' />
                                        <span className='text-white text-sm font-semibold'>Mobile App</span>
                                    </div>
                                </div>
                            </div>
                            <h1 className='font-bold mb-2 lg:text-xl md:text-md text-base line-clamp-1 mt-8'>
                                {title}
                            </h1>
                            <p className='lg:text-sm md:text-xs text-xs text-purple mb-2 font-semibold'>
                                {tech}
                            </p>
                            <p className='lg:text-md lg:font-normal font-light text-sm line-clamp-2'>
                                {des}
                            </p>
                            <div className='flex items-center justify-between mt-7 mb-3'>
                                <div className='flex items-center justify-center bg-purple/20 px-4 py-2 rounded-full'>
                                    <span className='text-purple text-sm font-semibold'>Coming soon on Play Store</span>
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>

        {/* Web Projects Section */}
        <div className='mt-40'>
            <h2 className='text-2xl md:text-3xl font-bold text-center text-white mb-16'>
                Setting Dreams Into Action
            </h2>
            <div className='flex flex-wrap items-center justify-center px-4 gap-x-40 gap-y-16'>
                {webProjects.map(({id, title, img, tech, des, link, status}) => (
                    <div key={id} className='mb-40 sm:mb-40 lg:min-h-[32.5rem] h-[15rem] items-center justify-center flex sm:w-[450px] w-[90vw]' >
                        <PinContainer title={link} href={link}>
                            <div className='relative flex items-center justify-center sm:w-[500px] w-[65vw] overflow-hidden h-[35vh] lg:h-[65vh] mb-8 rounded-md sm:h-[45vh]'>
                                <div className='relative w-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    <img className='object-cover' src={img} alt={title} />
                                </div>
                            </div>
                            <h1 className='font-bold mb-2 lg:text-xl md:text-md text-base line-clamp-1'>
                                {title}
                            </h1>
                            <p className='lg:text-sm md:text-xs text-xs text-purple mb-2 font-semibold'>
                                {tech}
                            </p>
                            <p className='lg:text-md lg:font-normal font-light text-sm line-clamp-2'>
                                {des}
                            </p>
                            <div className='flex items-center justify-between mt-7 mb-3'>
                                <div className='flex justify-center items-center'>
                                    <p className='flex lg:text-md md:text-xs text-sm text-purple'>Visit Website</p>
                                    <FaLocationArrow className='ms-3' color='#CBACF9' />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default BuildingProjects
