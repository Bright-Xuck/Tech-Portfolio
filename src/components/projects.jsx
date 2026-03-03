import projectData from "../data/projectdata.json";
import ProjectBoxes from "./Projectboxes";

export default function Projects(){
    return(
        <section className="w-full px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 bg-linear-to-b from-black/60 to-gray-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        A collection of my recent projects showcasing my skills in web development, full-stack engineering, and creative problem-solving.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {projectData.map((project) => (
                        <ProjectBoxes
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            description={project.description}
                            image={project.image}
                            tech={project.tech}
                            liveLink={project.liveLink}
                            githubLink={project.githubLink}
                            features={project.features}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}