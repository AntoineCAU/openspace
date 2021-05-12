import { Link } from 'react-router-dom';
import SDestinations from './styled/SDestinationsPage';
import Header from './Header';

export default function DestinationsPage() {
  return (
    <>
      <Header />
      <SDestinations>
        <div className="title">
          <h1>Destinations</h1>
          <h2>
            Check out all the destinations we can provide and find the one that
            suits you the most
          </h2>
        </div>

        <section className="planets">
          <div className="sun planet">
            <img src="/img/sun.jpg" alt="" />
            <div className="text">
              <h3>The Sun</h3>
              <Link to="/planet/sun" className="discover">
                Discover
              </Link>
            </div>
          </div>
          <div className="mercury planet">
            <img src="/img/mercury.jpg" alt="" />
            <div className="text">
              <h3>Mercury</h3>
              <Link to="/planet/mercury" className="discover">
                Discover
              </Link>
            </div>
          </div>
          <div className="venus planet">
            <img src="/img/venus.jpg" alt="" />
            <div className="text">
              <h3>Venus</h3>
              <Link to="/planet/venus" className="discover">
                Discover
              </Link>
            </div>
          </div>
          <div className="earth planet">
            <img src="/img/earth.png" alt="" />
            <div className="text">
              <h3>Earth</h3>
              <Link to="/planet/venus" className="discover">
                Discover
              </Link>
            </div>
          </div>
          <div className="mars planet">
            <img src="/img/mars.jpg" alt="" />
            <div className="text">
              <h3>Mars</h3>
              <Link to="/planet/mars" className="discover">
                Discover
              </Link>
            </div>
          </div>
          <div className="jupiter planet">
            <img src="/img/jupiter.jpg" alt="" />
            <div className="text">
              <h3>Jupiter</h3>
              <Link to="/planet/jupiter" className="discover">
                Discover
              </Link>
            </div>
          </div>
          <div className="saturn planet">
            <img src="/img/saturn.jpg" alt="" className="saturnImg" />
            <div className="text">
              <h3>Saturn</h3>
              <Link to="/planet/saturn" className="discover">
                Discover
              </Link>
            </div>
          </div>
          <div className="uranus planet">
            <img src="/img/uranus.jpg" alt="" />
            <div className="text">
              <h3>Uranus</h3>
              <Link to="/planet/uranus" className="discover">
                Discover
              </Link>
            </div>
          </div>
          <div className="neptune planet">
            <img src="/img/neptune.jpg" alt="" />
            <div className="text">
              <h3>Neptune</h3>
              <Link to="/planet/neptune" className="discover">
                Discover
              </Link>
            </div>
          </div>
        </section>
      </SDestinations>
    </>
  );
}
