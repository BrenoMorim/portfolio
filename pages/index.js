import { useContext } from "react";
import LanguageContext from "../src/context/LanguageContext";

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
                <section>
                    <h3>{state.texts.aboutMe}</h3>
                    <p></p>
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