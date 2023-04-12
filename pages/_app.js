import { useState } from "react";
import LanguageContext from "../src/context/LanguageContext.js";
import languagesTexts from "../src/data/languagesTexts.js";
import "the-new-css-reset/css/reset.css";
import "animate.css";
import "../styles/globalStyle.css";

export default function App({ Component, pageProps }) {
    
    const [languageSelected, selectLanguage] = useState("en-us");
    const languageTexts = languagesTexts[languageSelected];

    return (
        <LanguageContext.Provider
            value={{
                state: {
                    texts: languageTexts,
                    languageSelected
                },
                selectLanguage: selectLanguage
            }}
        >
            <Component {...pageProps} />
        </LanguageContext.Provider>
    );
}