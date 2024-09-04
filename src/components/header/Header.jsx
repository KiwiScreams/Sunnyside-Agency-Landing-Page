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
              <Link>About</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link>Projects</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
