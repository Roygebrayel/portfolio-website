import React from 'react'
import ProjectItem from '../components/ProjectItem'
import "../style/Project.css"
import Proj3 from "../assets/proj3.webp"
import { projectList } from '../helpers/ProjectLIst';
const Project = () => {
  return (
    <div className='projects'>
      <h1> My Personal projects</h1>
      <div className="projectList">
        
        {/*  not the best method */}  
        <ProjectItem name="Social media Website" image={Proj3}/> 
      {
        projectList.map((project,idx) => {
          return <ProjectItem id={idx} name={project.name} image={project.image}/>
        })
      
      }
        

      </div>
    </div>
  )
}

export default Project