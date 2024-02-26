// import "../etiquettes/etiquette.scss"
// function Etiquette({ service }) {
//     const getFirstWord = (text) => {
//         const words = text.split(" ");
//         return words.length > 0 ? words[0] : "";
//     };

//     const firstWord = getFirstWord(service.title);

//     return (
//         <div className="etiquette">
//             <h3 className="serviceTitle"><span className="purple">{firstWord}</span>{service.title.slice(firstWord.length)}</h3>
//             <p className="serviceShortDescritpion">{service.shortDescription}</p>
//         </div>
//     )
// }
// export default Etiquette

import "../etiquettes/etiquette.scss";
import { useEffect, useRef } from 'react';

function Etiquette({ service }) {
    const getFirstWord = (text) => {
        const words = text.split(" ");
        return words.length > 0 ? words[0] : "";
    };

    const firstWord = getFirstWord(service.title);

    const cardRef = useRef(null);

    useEffect(() => {
        const $card = cardRef.current;
        let bounds;

        const rotateToMouse = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const leftX = mouseX - bounds.x;
            const topY = mouseY - bounds.y;
            const center = {
                x: leftX - bounds.width / 2,
                y: topY - bounds.height / 2
            }
            const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

            $card.style.transform = `
                scale3d(1.07, 1.07, 1.07)
                rotate3d(
                    ${center.y / 100},
                    ${-center.x / 100},
                    0,
                    ${Math.log(distance) * 2}deg
                )
            `;

            $card.querySelector('.glow').style.backgroundImage = `
                radial-gradient(
                    circle at
                    ${center.x * 2 + bounds.width / 2}px
                    ${center.y * 2 + bounds.height / 2}px,
                    #ffffff55,
                    #0000000f
                )
            `;
        }

        const handleMouseEnter = () => {
            bounds = $card.getBoundingClientRect();
            document.addEventListener('mousemove', rotateToMouse);
        };

        const handleMouseLeave = () => {
            document.removeEventListener('mousemove', rotateToMouse);
            $card.style.transform = '';
            $card.style.background = '';
        };

        $card.addEventListener('mouseenter', handleMouseEnter);
        $card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            $card.removeEventListener('mouseenter', handleMouseEnter);
            $card.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mousemove', rotateToMouse);
        };
    }, []);

    return (
        <div ref={cardRef} className="etiquette card">
            <h3 className="serviceTitle"><span className="purple">{firstWord}</span>{service.title.slice(firstWord.length)}</h3>
            <p className="serviceShortDescritpion">{service.shortDescription}</p>
            <div className="glow" />
        </div>
    )
}

export default Etiquette;
