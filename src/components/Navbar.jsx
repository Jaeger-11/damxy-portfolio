
const Navbar = () => {
    const randomBg = ['#2fff2f', '#00C3F8', '#FF392B']
    let col = randomBg[Math.round(Math.random() * 2)]
    console.log(col)

    return (
        <nav className='p-4 bg-grayBg sticky top-0 z-50 shadow-sm border border-black'>
            <div className=' lg:w-4/5 mx-auto justify-between flex flex-row-reverse items-center lg:flex-row'>
                <h3 className="font-semibold">DAM.<span className={`text-[#2fff2f]`}>XY</span></h3>
                <div>
                    <svg viewBox="0 -0.5 25 25" className="w-8 aspect-square" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                    <path d="M5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM19.5 13.25C19.9142 13.25 20.25 12.9142 20.25 12.5C20.25 12.0858 19.9142 11.75 19.5 11.75V13.25ZM5.5 7.75C5.08579 7.75 4.75 8.08579 4.75 8.5C4.75 8.91421 5.08579 9.25 5.5 9.25V7.75ZM14.833 9.25C15.2472 9.25 15.583 8.91421 15.583 8.5C15.583 8.08579 15.2472 7.75 14.833 7.75V9.25ZM5.5 15.75C5.08579 15.75 4.75 16.0858 4.75 16.5C4.75 16.9142 5.08579 17.25 5.5 17.25V15.75ZM14.833 17.25C15.2472 17.25 15.583 16.9142 15.583 16.5C15.583 16.0858 15.2472 15.75 14.833 15.75V17.25ZM5.5 13.25H19.5V11.75H5.5V13.25ZM5.5 9.25H14.833V7.75H5.5V9.25ZM5.5 17.25H14.833V15.75H5.5V17.25Z" fill="#000000"></path> </g>
                    </svg>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;