import { Link } from 'react-router-dom';
import SDestinations from './styled/SDestinationsPage';
import Header from './Header';

export default function DestinationsPage() {
  return (
    <>
      <Header />
      <SDestinations>
        <h1>Destinations</h1>
        <h2>
          Check out all the destinations we can provide and find the one that
          suits you the most
        </h2>
        <section className="planets">
          <div className="sun planet">
            <img src="/img/sun.jpg" alt="" />
            <div className="text">
              <h2>The Sun</h2>
              <Link to="/planets">Discover</Link>
            </div>
          </div>
          <div className="mercury planet">
            <img src="/img/mercury.jpg" alt="" />
            <div className="text">
              <h2>Mercury</h2>
              <p>Discover</p>
            </div>
          </div>
          <div className="venus planet">
            <img src="/img/venus.jpg" alt="" />
            <div className="text">
              <h2>Venus</h2>
              <p>Discover</p>
            </div>
          </div>
          <div className="earth planet">
            <img src="/img/earth.png" alt="" />
            <div className="text">
              <h2>Earth</h2>
              <p>Discover</p>
            </div>
          </div>
          <div className="mars planet">
            <img src="/img/mars.jpg" alt="" />
            <div className="text">
              <h2>Mars</h2>
              <p>Discover</p>
            </div>
          </div>
          <div className="jupiter planet">
            <img src="/img/jupiter.jpg" alt="" />
            <div className="text">
              <h2>Jupiter</h2>
              <p>Discover</p>
            </div>
          </div>
          <div className="saturn planet">
            <img src="/img/saturn.jpg" alt="" className="saturnImg" />
            <div className="text">
              <h2>Saturn</h2>
              <p>Discover</p>
            </div>
          </div>
          <div className="uranus planet">
            <img src="/img/uranus.jpg" alt="" />
            <div className="text">
              <h2>Uranus</h2>
              <p>Discover</p>
            </div>
          </div>
          <div className="neptune planet">
            <img src="/img/neptune.jpg" alt="" />
            <div className="text">
              <h2>Neptune</h2>
              <p>Discover</p>
            </div>
          </div>
        </section>
      </SDestinations>
    </>
  );
}
