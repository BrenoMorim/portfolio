import React, { useContext } from "react";
import LanguageContext from "../src/context/LanguageContext";
import courses from "../src/data/courses";

export default function HomePage() {

    const { state, selectLanguage } = useContext(LanguageContext);

    return (
        <div className="container">
            <header className="heading">
                <h1 className="heading__title">Breno Morim</h1>
                <h2 className="heading__caption">{state.texts.jobTitle}</h2>
                <div className="heading__div">
                    <h3 className="heading__text">{state.texts.selectLanguage}:</h3>
                        <button 
                            className="heading__button" 
                            onClick={() => selectLanguage("en-us")}
                            disabled={state.languageSelected === "en-us"}
                        >
                            English
                        </button>
                        <button
                            className="heading__button"
                            onClick={() => selectLanguage("pt-br")}
                            disabled={state.languageSelected === "pt-br"}
                        >
                            Português
                        </button>
                </div>  
            </header>
            <main>
                <section className="aboutMe">
                    <h3 className="aboutMe__title">{state.texts.aboutMe.title}</h3>
                    <p className="aboutMe__summary">{state.texts.aboutMe.summary}</p>
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
                <section>
                    <h3>{state.texts.techStack}</h3>
                    <ul>
                        <li>React</li>
                        <li>Next</li>
                    </ul>
                </section>
                <section>
                    {state.texts.myProjects}:
                </section>
                <ul>
                    <li>Projeto1</li>
                    <li>Projeto2</li>
                </ul>
            </main>
            <footer>
                <p>{state.texts.footerText}</p>
            </footer>
        </div>
    );
}