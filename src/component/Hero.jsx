function Hero(){
    return(
        <div className=" max-w-6xl mx-auto px-30 py-10 m-10">
            <h1 className=" py-3 text-2xl sm:text-3xl md:text-4xl font-bold border-b border-gray-200">Frontend Developer <span className="text-blue-500">
                ( React & Tailwind )</span></h1>
            <p className="py-4 text-gray-600 text-xl">I bulid responsive and user-friendly web application using React.js, 
            JavaScript $ Tailwind CSS.
            </p>
            <div className="flex items-center gap-4">
            <button className="px-5 py-2 border-4 border-blue-500
             bg-blue-500 text-white font-bold rounded cursor-pointer">View Projects</button>
            <button className="px-6 py-2 mx-4 border border-black
              text-black font-bold rounded cursor-pointer flex items-center gap-2">
                <img className="h-7" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
              <span>Github</span></button>
        </div>
        </div>
    )
    
}
export default Hero