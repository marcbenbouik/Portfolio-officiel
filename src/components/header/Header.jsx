import "../header/header.scss"
import { useState, useEffect, useRef } from 'react';
function Header() {

    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        headerRef.current.style.top = "0";
      } else {
        headerRef.current.style.top = "-80px";
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
                <ul>
                    <li>Accueil</li>
                    <li>Services</li>
                    <li>Projets</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header