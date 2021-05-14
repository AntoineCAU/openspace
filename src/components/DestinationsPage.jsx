import { Link } from 'react-router-dom';
import SDestinations from './styled/SDestinationsPage';
import Header from './Header';
import ScrollToTopOnMount from './ScrollToTopOnMount';

export default function DestinationsPage() {
  return (
    <>
      <Header />
      <SDestinations>
        <ScrollToTopOnMount />
        <div className="title">
          <h1>Destinations</h1>
          <h2>
            Check out all the destinations we can provide and find the one that
            suits you the most
          </h2>
        </div>

        <section className="planets">
          <div className="sun planet">
            <Link to="/planet/sun" className="discover">
              <img src="/img/sun.jpg" alt="" />
              <div className="text">
                <h3>The Sun</h3>
                <p className="title-discover">Discover</p>
              </div>
            </Link>
          </div>
          <div className="mercury planet">
            <Link to="/planet/mercury" className="discover">
              <img src="/img/mercury.jpg" alt="" />
              <div className="text">
                <h3>Mercury</h3>
                <p className="title-discover">Discover</p>
              </div>
            </Link>
          </div>
          <div className="venus planet">
            <Link to="/planet/venus" className="discover">
              <img src="/img/venus.jpg" alt="" />
              <div className="text">
                <h3>Venus</h3>
                <p className="title-discover">Discover</p>
              </div>
            </Link>
          </div>
          <div className="earth planet">
            <Link to="/planet/earth" className="discover">
              <img src="/img/earth.png" alt="" />
              <div className="text">
                <h3>Earth</h3>
                <p className="title-discover">Discover</p>
              </div>
            </Link>
          </div>
          <div className="mars planet">
            <Link to="/planet/mars" className="discover">
              <img src="/img/mars.jpg" alt="" />
              <div className="text">
                <h3>Mars</h3>
                <p className="title-discover">Discover</p>
              </div>
            </Link>
          </div>
          <div className="jupiter planet">
            <Link to="/planet/jupiter" className="discover">
              <img src="/img/jupiter.jpg" alt="" />
              <div className="text">
                <h3>Jupiter</h3>
                <p className="title-discover">Discover</p>
              </div>
            </Link>
          </div>
          <div className="saturn planet">
            <Link to="/planet/saturn" className="discover">
              <img src="/img/saturn.jpg" alt="" className="saturnImg" />
              <div className="text">
                <h3>Saturn</h3>
                <p className="title-discover">Discover</p>
              </div>
            </Link>
          </div>
          <div className="uranus planet">
            <Link to="/planet/uranus" className="discover">
              <img src="/img/uranus.jpg" alt="" />
              <div className="text">
                <h3>Uranus</h3>
                <p className="title-discover">Discover</p>
              </div>
            </Link>
          </div>
          <div className="neptune planet">
            <Link to="/planet/neptune" className="discover">
              <img src="/img/neptune.jpg" alt="" />
              <div className="text">
                <h3>Neptune</h3>
                <p className="title-discover">Discover</p>
              </div>
            </Link>
          </div>
        </section>
      </SDestinations>
    </>
  );
}
