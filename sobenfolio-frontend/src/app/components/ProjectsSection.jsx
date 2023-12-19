"use client";
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title: "Bandwith Battlegrounds",
        description: "A 2D Platformer game created with Unity",
        image: "/images/projects/1.png",
        tag: ["All", "Game"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "CAN Data Visualizer",
        description: "A Data Visualizer created with Python",
        image: "/images/projects/2.png",
        tag: ["All"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Ekreb",
        description: "A Word-guessing game made with React and Vite.",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },

] 
const ProjectsSection = () => {
    const[tag, setTag] = useState("All");
    
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4'>
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag 
                    onClick ={handleTagChange} 
                    name="All" 
                    isSelected={tag === "All"}
                />
                <ProjectTag 
                    onClick ={handleTagChange} 
                    name="Web" 
                    isSelected={tag === "Web"}
                />
                <ProjectTag 
                    onClick ={handleTagChange} 
                    name="Game" 
                    isSelected={tag === "Game"}
                />
            </div>
            <div className="grid md:grid-cols-3 gap8 md:gap-12">
                {filteredProjects.map((project) => (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description}
                        imgUrl={project.image}
                        tags={project} 
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </>
  )
}

export default ProjectsSection