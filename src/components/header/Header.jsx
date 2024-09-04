import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
const Header = () => {
  return (
    <>
      <header>
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
