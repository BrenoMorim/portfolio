import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import Button from "./Button.js";

export default function ContactInfo() {

    const { state } = useContext(LanguageContext);

    return (
        <section className="contact">
            <h3 className="contact__title">{state.texts.contactInfo.title}</h3>
            <div className="contactInfo">
                <div className="contactInfo__div">
                    <p className="contactInfo__text">{state.texts.contactInfo.email}: brenomorim13@gmail.com</p>
                    <p className="contactInfo__text">{state.texts.contactInfo.phoneNumber}: +55 (11) 97240-3198</p>
                </div>
                <Button text="GitHub" link="https://github.com/BrenoMorim" icon="icons/github.png"/>
                <Button text="LinkedIn" link="https://www.linkedin.com/in/brenomorim/" icon="icons/linkedin.png"/>
                <Button text="Alura" link="https://cursos.alura.com.br/user/brenomorim13" icon="icons/alura.png"/>
            </div>
        </section>
    );
}