import { Link } from "react-router-dom"
import "../contactButton/contactButton.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ContactButton({ type, texte, icone, lien }) {
    const getLink = () => {
        if (type === "link") {
            return lien;
        } else if (type === "number") {
            return `tel:${texte}`;
        } else if (type === "mail") {
            return `mailto:${texte}`;
        }
    }
    return (
        <a href={getLink()} className="contactButton">
            <div className="buttonDiv">
                <FontAwesomeIcon icon={icone} />
                <p>{texte}</p>
            </div>
        </a>
    )
}

export default ContactButton