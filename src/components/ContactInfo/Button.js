export default function Button({ text, link, icon }) {
    return (
        <a href={link} className="contactInfo__button">
            <img className="contactInfo__icon" src={icon}/> 
            <span>{text}</span>
        </a>
    );
}