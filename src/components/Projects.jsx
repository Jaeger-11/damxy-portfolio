import {projectsData} from '../data';
import Project from './Project';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section className='p-4 bg-[#bafca2]' id='projects'>
        <motion.article 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0, transition:{duration:0.5, ease: 'easeIn'}}}
        className='md:w-4/5 mx-auto xl:w-[66%]'>
            <div className='flex justify-end'>
                <h3 className="p-3 my-4 sh font-bold -rotate-3 text-white bg-[#9723c9] w-max"> My Projects</h3>
            </div>
            <motion.section 
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0, transition:{duration:0.5, ease: 'easeIn'}}}
            className='flex flex-col gap-4 md:grid md:grid-cols-2'>
                {projectsData.map((project) => {
                    return <Project {...project} key={project.name}/>
                })}
            </motion.section>
            <p className='my-4'>Other personal projects and frontend challenges can be found on my <a href='https://github.com/Jaeger-11' className='underline font-bold'>Github</a></p>
        </motion.article>
    </section>
  )
}

export default Projects