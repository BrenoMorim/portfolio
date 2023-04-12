import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import courses from "../../data/courses";

export default function AboutMe() {

    const { state } = useContext(LanguageContext);

    return (
        <section className="aboutMe">
            <div className="summary">
                <h3 className="aboutMe__title">{state.texts.aboutMe.title}</h3>
                <p className="aboutMe__summary">{state.texts.aboutMe.summary}</p>
            </div>
            <div className="aboutMe__div">
                <div className="languages">
                    <p className="languages__title">{state.texts.aboutMe.languages}</p>
                    <ul className="languages__list">
                        <li className="languages__item">English: {state.texts.aboutMe.english}</li>
                        <li className="languages__item">Português: {state.texts.aboutMe.portuguese}</li>
                        <li className="languages__item">Español: {state.texts.aboutMe.spanish}</li>
                    </ul>
                </div>
                <div className="courses">
                    <p className="courses__title">{state.texts.aboutMe.courses}</p>
                    <ul className="courses__list">
                        {
                            courses && courses.map(course => (
                                <li key={course.title} className="courses__item">
                                    <b>{course.title}: </b>{course.description[state.languageSelected]}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
}