'use client'
import { buildingProjects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import { FaMobileAlt } from 'react-icons/fa'

const BuildingProjects = () => {
  return (
    <div className='py-20'>
        <h1 className='heading'>
            What I&apos;m Currently {' '}
            <span className='text-purple'>Building</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center px-4 gap-x-40  gap-y-8 mt-20'>
            {buildingProjects.map(({id, title, img, tech, des, link, status}) => {
                const isMobileApp = status === 'comingsoon';
                
                return (
                <div key={id} className='mb-60 sm:mb-40 lg:min-h-[32.5rem] h-[15rem] items-center justify-center flex sm:w-[396px] w-[90vw] ' >
                    <PinContainer title={status === 'live' ? link : ''} href={status === 'live' ? link : undefined}>
                        {isMobileApp ? (
                        <div className='relative flex items-center justify-center sm:w-[350px] w-[60vw] overflow-hidden h-[50vh] lg:h-[70vh] mb-6 rounded-md aspect-[9/16]'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <img className='object-cover w-full h-full' src={img} alt={title} />
                                <div className='absolute top-3 right-3 bg-purple/90 px-3 py-1 rounded-full flex items-center gap-2'>
                                    <FaMobileAlt className='text-white text-sm' />
                                    <span className='text-white text-xs font-semibold'>Mobile App</span>
                                </div>
                            </div>
                        </div>
                        ) : (
                        <div className='relative flex items-center justify-center sm:w-[470px] w-[60vw] overflow-hidden h-[30vh] lg:h-[60vh] mb-6 rounded-md sm:h-[40vh]'>
                            <div className='relative w-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <img className='object-cover' src={img} alt={title} />
                            </div>
                        </div>
                        )}
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
                            <div className='flex items-center'>
                                {status === 'live' ? (
                                    <div className='flex justify-center items-center'>
                                        <p className='flex lg:text-md md:text-xs text-sm text-purple'>Visit Website</p>
                                        <FaLocationArrow className='ms-3' color='#CBACF9' />
                                    </div>
                                ) : (
                                    <div className='flex items-center justify-center bg-purple/20 px-3 py-1 rounded-full'>
                                        <span className='text-purple text-sm font-semibold'>Coming soon on Play Store</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </PinContainer>
                </div>
            )})}
        </div>
    </div>
  )
}

export default BuildingProjects