import { Link } from 'react-router-dom';
import SBestRatedPlanets from './styled/SBestRatedPlanets';

export default function Footer() {
  return (
    <SBestRatedPlanets>
      <h1 className="top-rated-title"> Top Rated Planets</h1>
      <div className="top-rated-planets">
        <div className="planet-card">
          <img className="planet-img" src="/img/earth.png" alt="earth" />
          <article className="planet-name">Earth</article>
          <Link to="/planet/earth" className="discover">
            Discover
          </Link>
        </div>
        <div className="planet-card">
          <img className="planet-img" src="/img/uranus.jpg" alt="uranus" />
          <article className="planet-name">Uranus</article>
          <Link to="/planet/uranus" className="discover">
            Discover
          </Link>
        </div>
        <div className="planet-card">
          <img className="planet-img" src="/img/sun.jpg" alt="sun" />
          <article className="planet-name">The Sun</article>
          <Link to="/planet/sun" className="discover">
            Discover
          </Link>
        </div>
      </div>
    </SBestRatedPlanets>
  );
}
