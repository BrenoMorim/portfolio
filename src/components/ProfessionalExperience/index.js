import { useContext } from 'react'
import LanguageContext from '../../context/LanguageContext'
import professionalExperiences from '../../data/professionalExperiences';

export default function ProfessionalExperience() {

    const { state } = useContext(LanguageContext);

    return (
        <section className="professionalExperiences animate__animated animate__slideInLeft">
            <h3 className="professionalExperiences__title">{ state.texts.aboutMe.experience }</h3>
            <div className="professionalExperiences__list">
                {professionalExperiences && professionalExperiences.map(experience => (
                    <article className="experience" key={experience.jobTitle["en-us"]}>
                        <h4 className="experience__title">{experience.jobTitle[state.languageSelected]}</h4>
                        <p className="experience__period">{experience.period[state.languageSelected]}</p>
                        <ul className="experience__descriptions">
                            {experience.description.map((description, index) => (
                                <li 
                                    className="experience__description" 
                                    key={index}
                                >
                                    {description[state.languageSelected]}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    )
}
