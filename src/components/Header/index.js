import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext.js";

export default function Header() {

    const { state, selectLanguage } = useContext(LanguageContext);

    return (
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
    );
}