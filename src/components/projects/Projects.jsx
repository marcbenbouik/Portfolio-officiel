import "../projects/project.scss"
import { projects } from "../../data/projects"
import OnePRoject from "./oneProject/OneProject"
import Title from "../title/Title"

function Project(){
    return(
        <section className="project" id="projets">
            {projects.map((project) => (
                <OnePRoject project={project} />
            ))}
            <Title title={"Contactez-moi !"} id={"contactTitle"}/>
        </section>
    )
}

export default Project