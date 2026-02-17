import About from "./component/About"
import Hero from "./component/Hero"
import Link from "./component/Link"
import Navbar from "./component/Navbar"
import Project from "./component/Project"
import ProjectCard from "./component/ProjectCard"
import Skills from "./component/Skills"

const App=()=>{



  return(
    <div className="bg-gray-50">
      <Navbar />
      <Hero />
      <Skills />
     <ProjectCard />
      <About />
      <Link />
    </div>
  )
}
export default App