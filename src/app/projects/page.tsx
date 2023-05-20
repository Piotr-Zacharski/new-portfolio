import ProjectItem from "@/components/ProjectsItem";
import {projects} from '@/config/projects'


export default function Projects() {
    return (
        <div className="p-4 text-center">
            <h3 className="p-4 text-3xl phone:text-lg text-stone-800 font-bold">During my internship at <span className="text-pink-700">TH-EY S&D LTD</span>, I helped on developing: </h3>
        <div className="flex md:flex-row phone:flex-col p-4 justify-center w-full align-items-center">
        {projects.map((project) => (
            <>
                <ProjectItem key={project.title} title={project.title} description={project.description} stack={project.stack}/>
            </>
                ))}

        </div>
        </div>
    )
}