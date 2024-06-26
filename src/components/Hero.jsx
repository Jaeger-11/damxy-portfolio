import bitmoji from '../assets/bitmoji.webp';
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <main className="p-4 my-4 md:w-4/5 mx-auto flex flex-col gap-12 md:grid md:grid-cols-2 md:my-8 lg:my-14 xl:my-16 justify-between">
        <motion.article
         initial={{opacity:0, y:-50}}
         whileInView={{opacity:1, y:0, transition:{duration:1}}}
        >
            <div className="flex gap-1">
                <p>Welcome </p>
                <div className="w-5">
                <svg className="w-full" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet" fill="#000000" transform="rotate(-45)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M34 42.3l7.8 1.5l6.4-32.9c.4-2.2-1-4.4-3.1-4.8c-2.2-.4-4.3 1.1-4.7 3.3L34 42.3" fill="#d6a57c"> </path> <path d="M45.2 6.1c-.3-.1-.5-.1-.8-.1c1.8.7 2.8 2.6 2.4 4.6l-6.4 32.9l1.4.3l6.4-32.9c.5-2.3-.9-4.4-3-4.8" fill="#b58360"> </path> <path d="M26 43.3h9.4V7c0-2.7-2.1-5-4.7-5C28.2 2 26 4.2 26 7v36.3" fill="#d6a57c"> </path> <path d="M30.8 2c-.2 0-.5 0-.7.1c2.3.4 4 2.4 4 4.9v36.4h1.4V7c0-2.8-2.1-5-4.7-5" fill="#b58360"> </path> <path d="M21 43.2l8-2.1L20.3 8c-.6-2.3-2.9-3.7-5.1-3.2c-2.2.6-3.5 2.9-2.9 5.2L21 43.2" fill="#d6a57c"> </path> <path d="M15.2 4.8l-.6.3c2-.1 3.8 1.2 4.4 3.3l8.7 33.1l1.4-.4L20.3 8c-.6-2.3-2.9-3.7-5.1-3.2" fill="#b58360"> </path> <path d="M4 13.4c-1.9.9-2.5 3.3-1.5 5.3L15.7 45l6.7-3.4L9.2 15.3c-1-2-3.3-2.8-5.2-1.9" fill="#d6a57c"> </path> <path d="M4 13.4c-.2.1-.4.2-.6.4c1.7-.5 3.6.4 4.5 2.2l13.2 26.3l1.3-.6L9.2 15.3c-1-2-3.3-2.8-5.2-1.9" fill="#b58360"> </path> <path d="M61.7 29.3c-1.6-3.1-6.6-2.9-11.7 2.7c-3.6 3.9-4.3 5.2-7.9 5.1V33s-7.7-5.7-23-3.1c0 0-8.7 1.2-8.7 5.8c0 0-1.5 11.1 1.6 18.1c4.6 10.4 28.2 13.1 35.6-4.6c1.5-3.5 4.5-6.1 7.2-9.4c3.1-4 8.6-7.2 6.9-10.5" fill="#d6a57c"> </path> <g fill="#b58360"> <path d="M61.7 29.3c-.3-.6-.7-1-1.2-1.4c.1.1.2.2.2.4c1.7 3.4-3.8 6.5-7.1 10.5c-2.7 3.3-5.7 5.9-7.2 9.4c-6.4 15.3-25 15.3-32.8 8.3c7.1 8 27.1 8.8 33.8-7.3c1.5-3.5 4.5-6.1 7.2-9.4c3.3-4 8.8-7.2 7.1-10.5"> </path> <path d="M43.1 37.1c-6.5-2.4-18.1 2-16.5 13.7c0-10.9 9.9-13.6 15.3-13.6c.8-.1 1.2-.1 1.2-.1"> </path> </g> </g></svg>
                </div>
            </div>
            <p>My name is <span className="font-semibold underline">Falodun Oluwadamilola Paul</span></p>
            <h3 className="p-3 my-4 sh font-bold rotate-3 text-white bg-[#ff0000] w-max"> A Front-end Developer</h3>
            <p className="underline font-bold">and</p>
            <h3 className="p-3 my-4 sh font-bold -rotate-3 text-black bg-[#00C3F8] w-max">An Aspiring Fullstack Developer</h3>

            <p className='mt-8'>
                {/* A detail-oriented Frontend Developer with a passion for bringing ideas to life on the web, ensuring every project is both visually stunning and functionally smooth. */}
                🌟 Hi, I'm a Frontend Developer who's all about the details! I love turning ideas into beautiful websites that work like a charm. Let's create something special together! 💫
            </p>
        </motion.article>
        <motion.section 
         initial={{opacity:0, y:50}}
         whileInView={{opacity:1, y:0, transition:{duration:1}}}
        className='flex justify-center items-center'>
            <img src={bitmoji} alt="hero" />
        </motion.section>
    </main>
  )
}

export default Hero