import {projectsData} from '../data';
import Project from './Project';

const Projects = () => {
  return (
    <section className='p-4 bg-[#bafca2]'>
        <article className='md:w-4/5 mx-auto xl:w-[66%]'>
            <div className='flex justify-end'>
                <h3 className="p-3 my-4 sh font-bold -rotate-3 text-white bg-[#9723c9] w-max"> My Projects</h3>
            </div>
            <section className='flex flex-col gap-4 md:grid md:grid-cols-2'>
                {projectsData.map((project) => {
                    return <Project {...project} key={project.name}/>
                })}
            </section>
            <p className='my-4'>Other personal projects and frontend challenges can be found on my <a href='https://github.com/Jaeger-11' className='underline font-bold'>Github</a></p>
        </article>
    </section>
  )
}

export default Projects