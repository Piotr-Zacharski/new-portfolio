import ProjectItem from "@/components/ProjectsItem";
import {projects} from '@/config/projects'


export default function Projects() {
    return (
        <div className="p-4 text-center my-10">
            <h3 className="p-4 text-3xl text-slate-900 font-bold mb-4">During my internship at <span className="text-pink-700">TH-EY S&D LTD</span>, I helped on developing: </h3>
            <div className="flex flex-row items-center justify-center">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {projects.map(project => (
                        <ProjectItem
                            key={project.title}
                            src={project.image}
                            title={project.title}
                            stack={project.stack}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}