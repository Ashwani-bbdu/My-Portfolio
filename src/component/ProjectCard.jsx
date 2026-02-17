import Project from "./Project"

const ProjectCard=()=>{
const Card=[
  {
    image:'/shop.png',
    name:'Shopping Web',
    intro:'Shop buy web create with JS.',
    skill:'JS, HTML, CSS'
    
 }
  ,
  {
    image:'/food.png',
    name:'Food Website App',
    intro:'Food cart order web create with JS.',
    skill:'JS, HTML, CSS'
  }
  ,
  {
    image:'/music.png',
    name:'Music player',
    intro:'Music Player listing build with JS.',
    skill:'JS, HTML, CSS'
  }
]


    return(
<div>
      <h1 className="text-4xl px-20 py-10 font-bold  border-b border-gray-200"
            >Projects</h1>
        <div className="flex">
         {Card.map((item,idx)=>{
            return(
            
        <Project key={idx} name={item.name} intro={item.intro}
         skill={item.skill} image={item.image} />
            );
         })}
    </div>
        </div>
    )
}
export default ProjectCard