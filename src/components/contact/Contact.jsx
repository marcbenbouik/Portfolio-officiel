import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "../contact/contact.scss"
import ContactButton from "./contactButton/ContactButton"
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
import Form from "./form/Form"

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contactDiv">
                <p className="contactText"><span className="s36">Travaillons ensembles !</span><br />Demandez un devis gratuitement <br /> Nous etudierons ca ensemble</p>
                <div className="contactDivButton">
                    <ContactButton type={"link"} texte={"Linkdin"} icone={faLinkedin} lien={"https://www.linkedin.com/in/marc-benbouik-97a5652a1"} />
                    <ContactButton type={"link"} texte={"Malt"} lien={"https://www.malt.fr/profile/marcbenbouik"} />
                    <ContactButton type={"number"} texte={"0677197495"} icone={faPhoneVolume} />
                    <ContactButton type={"mail"} texte={"2bweb.dev@gmail.com"} icone={faEnvelope} />
                </div>
            </div>
            <Form />
        </section>
    )
}
export default Contact