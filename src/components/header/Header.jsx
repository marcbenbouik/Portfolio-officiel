import "../header/header.scss"
import { useState, useEffect, useRef } from 'react';
function Header() {

    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    const [activeSection, setActiveSection] = useState('introduction');
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            const sections = ['introduction', 'services', 'projets', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        setActiveSection(section);
                        break;
                    }
                }
            }

            if (prevScrollpos < currentScrollPos && currentScrollPos > 100) {
                headerRef.current.style.top = "-80px";
            } else {
                headerRef.current.style.top = "0px";
            }

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
                <a href="#introduction" className={activeSection === 'introduction' ? 'active' : ''}>Accueil</a >
                <a href="#servicesTitle" className={activeSection === 'services' ? 'active' : ''}>Services</a>
                <a href="#projetsTitle" className={activeSection === 'projets' ? 'active' : ''}>Projets</a>
                <a href="#contactTitle" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
            </nav>
        </header>
    )
}
export default Header