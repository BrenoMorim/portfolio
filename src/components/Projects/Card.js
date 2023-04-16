import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";

export default function Card({ project }) {

    const { state } = useContext(LanguageContext);

    return (
        <article className="project reveal fade-right">
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
    );
}