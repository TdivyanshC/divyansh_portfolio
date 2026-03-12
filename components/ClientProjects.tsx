'use client'
import { clientProjects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const ClientProjects = () => {
  return (
    <div className='py-20'>
        <h1 className='heading'>
            Real Work Delivered to {' '}
            <span className='text-purple'>Clients</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center px-4 gap-x-40  gap-y-8 mt-20'>
            {clientProjects.map(({id, title, img, tech, des, link}) => (
                <div key={id} className='mb-60 sm:mb-40 lg:min-h-[32.5rem] h-[15rem] items-center justify-center flex sm:w-[396px] w-[90vw] ' >
                    <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center sm:w-[470px] w-[60vw] overflow-hidden h-[30vh] lg:h-[60vh] mb-6 rounded-md sm:h-[40vh]'>
                            <div className='relative w-full  overflow-hidden lg:rounded-3xl bg-[#13162d]'>
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
  )
}

export default ClientProjects