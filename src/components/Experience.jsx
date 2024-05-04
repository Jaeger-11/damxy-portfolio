import React from 'react'

const Experience = () => {
  return (
    <div className='p-4'>
        <article className='md:w-4/5 mx-auto'>
            <div className='flex justify-center'>
                <h3 className="p-3 my-4 sh font-bold rotate-0 text-white bg-darkBlue w-max"> My Experience</h3>
            </div>
            <ul className='p-4 flex flex-col gap-3 text-lg md:text-center md:list-none'>
                <li >
                    <h3 className='font-semibold'> Gathpay (January 2023 - April 2023)</h3>
                    <p className='font-medium'>Frontend Intern</p>
                </li>
                <li>
                    <h3 className='font-semibold'>Freelance (April 2023 - January 2024)</h3>
                    <p className='font-medium'>UI Developer</p>
                </li>
                <li>
                    <h3 className='font-semibold'>Aggregate Business Solutions Ltd (January 2024 - Present)</h3>
                    <p className='font-medium'>Frontend Developer (NYSC) </p>
                </li>
            </ul>
        </article>
    </div>
  )
}

export default Experience;