import { Link, NavLink } from 'react-router-dom';
import SHeader from './styled/SHeader';

export default function Header() {
  return (
    <SHeader>
      <Link to="/">
        <img src="/img/logo.svg" alt="openspace logo" />
      </Link>
      <nav>
        <ul className="nav-list">
          <li className="nav-item destinations">
            <NavLink
              to="/destinations"
              className="navlink destinations"
              activeClassName="selected"
            >
              Destinations
            </NavLink>
          </li>
          <li className="nav-item experience">
            <NavLink
              to="/experience"
              className="navlink experience"
              activeClassName="selected"
            >
              Experience
            </NavLink>
          </li>
          <li className="nav-item contact">
            <NavLink
              to="/contact-us"
              className="navlink contact"
              activeClassName="selected"
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item search">
            <svg
              className="icon-search"
              width="28"
              height="28"
              viewBox="0 0 37 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="15.0441"
                cy="15.0441"
                r="12.5441"
                stroke="white"
                strokeWidth="5"
              />
              <line
                x1="23.606"
                y1="22.9822"
                x2="34.7678"
                y2="34.144"
                stroke="white"
                strokeWidth="5"
              />
            </svg>
          </li>
        </ul>
      </nav>
    </SHeader>
  );
}
