import { motion } from "framer-motion"
const Project = ({name, tools, description, link, year, livecode}) => {
  return (
    <motion.article  
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0, transition:{duration:0.25, ease: 'easeIn'}}}
    viewport={{once:true}}
    className='bg-white p-2 rounded-md project flex flex-col justify-between transition-all'>
        <div>
          <h2 className='font-bold text-2xl uppercase'>{name}</h2>
          <p>{description}</p>
          <div className='tools my-2'>
              {tools.map((item) => {return <span key={item}>{item}</span>})}
          </div>
        </div>
        <div  className='flex justify-between items-center mt-4'>
            <p className="font-semibold">{year}</p>
            <div className="flex items-center gap-4">
              {/* <a href={livecode}>
              <svg viewBox="0 0 20 20" className="w-5 link-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
              </a> */}
              <a href={link} className='w-max border flex link-svg gap-2 p-1 border-black hover:border-red-500 transition-all text-sm font-semibold'>
                <p className='w-max text-black hover:text-red-500'>View Site</p>
                <svg viewBox="0 0 32 32" className='w-5 aspect-square' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow-right-square</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-466.000000, -985.000000)" fill="#000000"> <path d="M489.535,1001.879 L483.879,1007.54 C483.488,1007.93 482.855,1007.93 482.465,1007.54 C482.074,1007.14 482.074,1006.51 482.465,1006.12 L486.586,1002 L476,1002 C475.447,1002 475,1001.552 475,1001 C475,1000.447 475.447,1000 476,1000 L486.586,1000 L482.465,995.879 C482.074,995.488 482.074,994.854 482.465,994.465 C482.855,994.074 483.488,994.074 483.879,994.465 L489.535,1000.121 C489.775,1000.361 489.85,1000.689 489.795,1001 C489.85,1001.311 489.775,1001.639 489.535,1001.879 L489.535,1001.879 Z M494,985 L470,985 C467.791,985 466,986.791 466,989 L466,1013 C466,1015.21 467.791,1017 470,1017 L494,1017 C496.209,1017 498,1015.21 498,1013 L498,989 C498,986.791 496.209,985 494,985 L494,985 Z" id="arrow-right-square" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
              </a>
            </div>
        </div>
    </motion.article>
  )
}

export default Project