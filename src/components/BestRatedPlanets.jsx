import { Link } from 'react-router-dom';
import SBestRatedPlanets from './styled/SBestRatedPlanets';

export default function Footer() {
  return (
    <SBestRatedPlanets>
      <h1 className="top-rated-title"> Top Rated Planets</h1>
      <div className="top-rated-planets">
        <div className="planet-card">
          <Link to="/planet/earth" className="top-planets-link">
            <img className="planet-img" src="/img/earth.png" alt="earth" />
            <article className="planet-name">Earth</article>
          </Link>
        </div>
        <div className="planet-card">
          <Link to="/planet/uranus" className="top-planets-link">
            <img className="planet-img" src="/img/uranus.jpg" alt="uranus" />
            <article className="planet-name">Uranus</article>
          </Link>
        </div>
        <div className="planet-card">
          <Link to="/planet/sun" className="top-planets-link">
            <img className="planet-img" src="/img/sun.jpg" alt="sun" />
            <article className="planet-name">The Sun</article>
          </Link>
        </div>
      </div>
    </SBestRatedPlanets>
  );
}
