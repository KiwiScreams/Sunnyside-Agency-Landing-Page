import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { useState, useEffect } from "react";
const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className={isScrolling ? "scrolling" : ""}>
        <Link>
          <img src={logo} alt="logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link data-text="ABOUT">About</Link>
            </li>
            <li>
              <Link data-text="SERVICES">Services</Link>
            </li>
            <li>
              <Link data-text="PROJECTS">Projects</Link>
            </li>
            <li>
              <Link data-text="CONTACT">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
