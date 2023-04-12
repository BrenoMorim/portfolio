import { useContext } from "react";
import techStack from "../../data/techStack";
import LanguageContext from "../../context/LanguageContext";

export default function TechStack() {

    const { state } = useContext(LanguageContext);

    return (
        <section className="techstack">
            <h3 className="techstack__title">{state.texts.techStack}</h3>
            <div className="techstack__areas">
                {techStack.map(stack => {
                    return (
                        <div key={stack.title} className="techstack__area">
                            <p className="techstack__caption">{stack.title}</p>
                            <ul className="techstack__list">
                                {stack.tags.map(tag => (
                                    <li key={tag}>
                                        <img src={tag}/>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}