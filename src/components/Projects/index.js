import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import projects from "../../data/projects";

export default function Projects() {
    const { state } = useContext(LanguageContext);

    return (
        <section className="projects">
            <h3 className="projects__title">{state.texts.myProjects}</h3>
            <div className="projects__list">
                {
                    projects.map(project => (
                        <article key={project.title["en-us"]} className="project">
                            <h4 className="project__title">{project.title[state.languageSelected]}</h4>
                            <div className="project__image"
                                style={{backgroundImage: `url(${project.imgUrl})`}}
                            >

                            </div>
                            <p className="project__desc">{project.desc[state.languageSelected]}</p>
                            <div className="project__div">
                                <a href={project.url} className="project__link">{state.texts.projectLink}</a>
                                <p className={`project__area project__area--${project.area.toLowerCase().replace(" ", "")}`}>
                                    {project.area}
                                </p>
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
    );
}