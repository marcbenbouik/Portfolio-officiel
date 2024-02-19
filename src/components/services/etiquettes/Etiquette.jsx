import "../etiquettes/etiquette.scss"
function Etiquette({ service }) {
    const getFirstWord = (text) => {
        const words = text.split(" ");
        return words.length > 0 ? words[0] : "";
    };

    const firstWord = getFirstWord(service.title);

    return (
        <div className="etiquette">
            <h3 className="serviceTitle"><span className="purple">{firstWord}</span>{service.title.slice(firstWord.length)}</h3>
            <p className="serviceShortDescritpion">{service.shortDescription}</p>
        </div>
    )
}
export default Etiquette