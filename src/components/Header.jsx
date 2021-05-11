import { NavLink } from 'react-router-dom';
import SHeader from './styled/SHeader';

export default function Header() {
  return (
    <SHeader>
      <img src="" alt="openspace logo" />
      <nav>
        <ul>
          <li>
            <NavLink to="/destinations" activeClassName="selected">
              Destinations
            </NavLink>
            <NavLink to="/contact-us" activeClassName="selected">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </SHeader>
  );
}
