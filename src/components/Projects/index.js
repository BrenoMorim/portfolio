import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import projects from "../../data/projects";
import Card from "./Card";

export default function Projects() {
    const { state } = useContext(LanguageContext);

    return (
        <section className="projects">
            <h3 className="projects__title reveal fade-left">{state.texts.myProjects}</h3>
            <div className="projects__list">
                {
                    projects.map(project => (
                        <Card key={project.title["en-us"]} project={project}/>
                    ))
                }
            </div>
        </section>
    );
}