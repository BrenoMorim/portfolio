import LanguageContext from "../../context/LanguageContext";
import { useContext } from "react";

export default function Footer() {
    
    const { state } = useContext(LanguageContext);

    return (
        <footer className="footer">
            <p className="footer__text">{state.texts.footerText} =)</p>
        </footer>
    );
}