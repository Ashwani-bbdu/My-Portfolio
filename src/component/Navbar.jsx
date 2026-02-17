function Navbar(){
    return(
        <div>
        <nav className="px-8 py-2 flex items-center justify-between border-b border-gray-200 ">
          <h1 className="text-3xl font-bold text-blue-950">Ashwani Yadav</h1>
          <ul className="flex justify-evenly gap-20 px-4 py-6 text-xl">
          <li className="cursor-pointer hover:text-blue-700 hover:underline "><a href="#">Home</a></li>
         <li className="cursor-pointer hover:text-blue-700 hover:underline "><a href="#">Projects</a></li>
        <li className="cursor-pointer hover:text-blue-700 hover:underline "><a href="#">About</a></li>
         <li className="cursor-pointer hover:text-blue-700 hover:underline "><a href="#">Contact</a></li>
          </ul>
          </nav>
        </div>
    )
}

export default Navbar