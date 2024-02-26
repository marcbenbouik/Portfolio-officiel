import { services } from "../../data/services";
import "../services/services.scss"
import Title from "../title/Title";
import Etiquette from "./etiquettes/Etiquette";

function Services() {
    return (
        <section className="services" id="services">
            {services.map((service) => (
                <Etiquette service={service} />
            ))}
            <Title title={"Quelques Projets"} id={"projetsTitle"}/>
        </section>
    )
}
export default Services