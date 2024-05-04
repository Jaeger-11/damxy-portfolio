import React from 'react'

const Experience = () => {
  return (
    <div className='p-4'>
        <article className='md:w-4/5 mx-auto'>
            <div className='flex justify-center'>
                <h3 className="p-3 my-4 sh font-bold rotate-0 text-white bg-darkBlue w-max"> My Experience</h3>
            </div>
            <ul className='p-4 flex flex-col gap-3'>
                <li >
                    <h3 className='font-semibold text-lg'>Gathpay (January 2023 - April 2023)</h3>
                    <p className='font-medium italic text-lg'>Frontend Intern</p>
                    {/* <div>
                        <p>
                        <svg viewBox="0 0 15 15" className='w' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.2071 7.49995L6 3.29285V11.7071L10.2071 7.49995Z" fill="#000000"></path> </g></svg>
                        </p>
                    </div> */}
                </li>
                <li>
                    <h3 className='font-semibold text-lg'>Freelance (April 2023 - January 2024)</h3>
                    <p className='font-medium italic text-lg'>UI Developer</p>
                </li>
                <li>
                    <h3 className='font-semibold text-lg'>Aggregate Business Solutions Ltd (January 2024 - Present)</h3>
                    <p className='font-medium italic text-lg'>Frontend Developer (NYSC) </p>
                </li>
            </ul>
        </article>
    </div>
  )
}

export default Experience;