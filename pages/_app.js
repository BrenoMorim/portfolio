import { useState } from "react";
import LanguageContext from "../src/context/LanguageContext.js";
import languagesTexts from "../src/data/languagesTexts.js";
import "the-new-css-reset/css/reset.css";
import "animate.css";
import "../styles/globalStyle.css";
import Head from "next/head.js";

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
            <Head>
                <title>{languagesTexts[languageSelected].pageTitle}</title>
                <meta name="description" content={languagesTexts[languageSelected].pageDesc}/>
            </Head>
            <Component {...pageProps} />
        </LanguageContext.Provider>
    );
}