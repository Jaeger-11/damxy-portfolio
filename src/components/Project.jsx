
const Project = ({name, tools, description, link, year}) => {
  return (
    <article  className='bg-white p-2 rounded-md shadow-md'>
        <h2 className='font-bold text-2xl uppercase'>{name}</h2>
        <p>{description}</p>
        <div className='tools my-2'>
            {tools.map((item) => {return <span key={item}>{item}</span>})}
        </div>
        <div  className='flex justify-between mt-4'>
            <p className="font-semibold">{year}</p>
            <a href={link} className='w-max border flex gap-2 p-1 border-black text-sm font-semibold'>
                <p className='w-max text-black'>View Site</p>
                <svg viewBox="0 0 32 32" className='w-5 aspect-square' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow-right-square</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-466.000000, -985.000000)" fill="#000000"> <path d="M489.535,1001.879 L483.879,1007.54 C483.488,1007.93 482.855,1007.93 482.465,1007.54 C482.074,1007.14 482.074,1006.51 482.465,1006.12 L486.586,1002 L476,1002 C475.447,1002 475,1001.552 475,1001 C475,1000.447 475.447,1000 476,1000 L486.586,1000 L482.465,995.879 C482.074,995.488 482.074,994.854 482.465,994.465 C482.855,994.074 483.488,994.074 483.879,994.465 L489.535,1000.121 C489.775,1000.361 489.85,1000.689 489.795,1001 C489.85,1001.311 489.775,1001.639 489.535,1001.879 L489.535,1001.879 Z M494,985 L470,985 C467.791,985 466,986.791 466,989 L466,1013 C466,1015.21 467.791,1017 470,1017 L494,1017 C496.209,1017 498,1015.21 498,1013 L498,989 C498,986.791 496.209,985 494,985 L494,985 Z" id="arrow-right-square" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
            </a>
        </div>
    </article>
  )
}

export default Project