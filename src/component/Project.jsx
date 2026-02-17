const ProjectDet=({name, intro, skill,image})=>{
    return(

        <div className="  border-b border-gray-200  px-20 py-10 ">
        <div className="h-90 w-70 ml-20 mt-6 border-2 border-gray-300
         rounded shadow-2xl bg-white">
            <img className="px-3 py-1  h-auto w-75 rounded-xl" 
            src={image} alt="E-cmmerce" />
            <h1 className="text-2xl font-bold px-3">{name}</h1>
            <h3 className=" text-sm px-3.5 py-2 font-medium text-gray-500">
                {intro}</h3>
            <hr className="w-65 mx-3 text-gray-300 font-bold" />
            <h1 className="text-xl p-3 font-medium text-gray-600">{skill}</h1>
            <div className="flex px-6 py-4 gap-5">
                <button className="bg-blue-700 px-4 py-2 cursor-pointer rounded mb-7 text-white font-bold">Live Demo</button>
                <button className=" px-5 py-2 rounded mb-7 cursor-pointer  text-black font-bold border-2 border-gray-400"> Code</button>
            </div>
        </div>
        </div>
    )
}
export default ProjectDet