import "../header/header.scss"
import { useState, useEffect, useRef } from 'react';
function Header() {

    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            if (prevScrollpos < currentScrollPos && currentScrollPos > 100) {
                headerRef.current.style.top = "-80px";
            } else {
                headerRef.current.style.top = "0px";
            }
            console.log(currentScrollPos, currentScrollPos + 50)

            setPrevScrollpos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollpos]);


    return (
        <header ref={headerRef}>
            <div className="logo">2B WEB</div>
            <nav>
                <a href="#introduction">Accueil</a >
                <a href="#services">Services</a>
                <a href="#projets">Projets</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}
export default Header