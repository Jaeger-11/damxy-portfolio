import { useState, useEffect } from "react"
const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false);
    const randomBg = ['#2fff2f', '#00C3F8', '#FF392B', '#9723c9', '#ff0000', '#e3a018']
    const [col, setCol] = useState(randomBg[1])
    console.log(col)
    useEffect(() => {
        setInterval(() => {
            let i = randomBg[Math.round(Math.random() * 5)]
            setCol(i)
        }, 3000);
    }, [col])

    return (
        <nav className='p-4 bg-grayBg sticky top-0 z-50 shadow-sm border border-black'>
            <div className=' lg:w-4/5 mx-auto justify-between flex flex-row-reverse items-center lg:flex-row'>
                <a href="/" style={{color: col}} className={`font-semibold transition-all`}>DAM.<span className={`text-black`}>XY</span></a>
                <div className="md:hidden" onClick={() => setIsMenu(true)}>
                    <svg viewBox="0 -0.5 25 25" className="w-8 aspect-square" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                    <path d="M5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM19.5 13.25C19.9142 13.25 20.25 12.9142 20.25 12.5C20.25 12.0858 19.9142 11.75 19.5 11.75V13.25ZM5.5 7.75C5.08579 7.75 4.75 8.08579 4.75 8.5C4.75 8.91421 5.08579 9.25 5.5 9.25V7.75ZM14.833 9.25C15.2472 9.25 15.583 8.91421 15.583 8.5C15.583 8.08579 15.2472 7.75 14.833 7.75V9.25ZM5.5 15.75C5.08579 15.75 4.75 16.0858 4.75 16.5C4.75 16.9142 5.08579 17.25 5.5 17.25V15.75ZM14.833 17.25C15.2472 17.25 15.583 16.9142 15.583 16.5C15.583 16.0858 15.2472 15.75 14.833 15.75V17.25ZM5.5 13.25H19.5V11.75H5.5V13.25ZM5.5 9.25H14.833V7.75H5.5V9.25ZM5.5 17.25H14.833V15.75H5.5V17.25Z" fill="#000000"></path> </g>
                    </svg>
                </div>
                <ul className="hidden md:flex gap-4 lg:gap-8 list-none items-center">
                    <li><a href="#about" className="text-black hover:text-[#2fff2f] transition-all">About Me</a></li>
                    <li><a href="#projects" className="text-black hover:text-[#2fff2f] transition-all">Projects</a></li>
                    <li><a href="#contact" className="text-black hover:text-[#2fff2f] transition-all">Contact</a></li>
                    <li>
                        <a href="/Falodun-2024-Resume.pdf" download="Falodun's CV">
                            <button className="transition-all hover:scale-95 hover:text-[#2fff2f] border-none p-1 px-2 text-white text-sm rounded-sm">Download CV</button>
                        </a>
                    </li>
                </ul>
            </div>

            <div className={`absolute ${isMenu ? 'top-0 left-0' : '-left-[100vw]'}  w-full h-[100vh] z-5 md:hidden transition-all`}>
                <div onClick={()=>setIsMenu(false)} className="absolute top-0 left-0 w-full h-[100vh] z-10 bg-white bg-opacity-50 md:hidden transition-all"></div>
                <aside className="absolute top-0 left-0 w-3/5 h-[100vh] z-20 bg-white bg-opacity-100">
                    <svg viewBox="0 0 24 24" onClick={() => setIsMenu(false)} className={`${isMenu ? 'opacity-100' : 'opacity-0'} w-8 m-4`} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#000000"></path></g></svg>

                    <ul className="flex flex-col mt-16 gap-4 list-none text-lg p-4">
                        <li><a href="#about" className="text-black hover:text-[#2fff2f] transition-all" onClick={()=>setIsMenu(false)}>About Me</a></li>
                        <li><a href="#projects" className="text-black hover:text-[#2fff2f] transition-all" onClick={()=>setIsMenu(false)}>Projects</a></li>
                        <li><a href="#contact" className="text-black hover:text-[#2fff2f] transition-all" onClick={()=>setIsMenu(false)}>Contact</a></li>
                        <li>
                            <a href="/Falodun-2024-Resume.pdf" download="Falodun's CV">
                                <button className="transition-all hover:scale-95 hover:text-[#2fff2f] border-none p-2 text-white rounded-sm">Download CV</button>
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
        </nav>
    )
}

export default Navbar;