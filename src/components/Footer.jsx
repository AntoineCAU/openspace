import { NavLink } from 'react-router-dom';
import SFooter from './styled/SFooter';

export default function Footer() {
  return (
    <SFooter>
      <nav>
        <ul className="foot-list">
          <li className="foot-item about">
            <NavLink
              to="/about-us"
              className="footlink about"
              activeClassName="selected"
            >
              About Us
            </NavLink>
          </li>
          <li className="foot-item contact">
            <NavLink
              to="/contact-us"
              className="footlink contact"
              activeClassName="selected"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="foot-copyright">
          Hackathon 2021 - Wild Code School Lille - Open Space
        </div>
      </nav>
    </SFooter>
  );
}
