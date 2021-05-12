import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SHomePage from './styled/SHomePage';
import BestRatedPlanets from './BestRatedPlanets';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import SpaceNews from './SpaceNews';

export default function HomePage({ setHeaderWhite }) {
  const handleScroll = () => {
    const currScroll = window.pageYOffset;
    if (currScroll > 50) {
      setHeaderWhite(true);
    } else {
      setHeaderWhite(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setHeaderWhite(false);

    return () => {
      setHeaderWhite(true);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [location, setLocation] = useState('');
  const [departure, setDeparture] = useState('');
  const [returnal, setReturnal] = useState('');
  const [numberPass, setNumeberPass] = useState(0);

  const [infoTrip, setInfoTrip] = useState([]);
  useEffect(() => {
    if (location && departure && returnal) {
      setInfoTrip([location, departure, returnal, numberPass]);
    }
  }, [location, departure, returnal, numberPass]);

  return (
    <SHomePage>
      <ScrollToTopOnMount />
      <div className="homepage-header">
        <div className="options-container">
          <div className="location">
            <h2>Location</h2>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="setDate">
            <div className="date">
              <h2>From</h2>
              <input
                type="date"
                className="inputDate"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
              />
            </div>
            <div className="date">
              <h2>To</h2>
              <input
                type="date"
                className="inputDate"
                value={returnal}
                onChange={(e) => setReturnal(e.target.value)}
              />
            </div>
          </div>

          <div className="passenger">
            <h2>Passengers</h2>
            <div className="increment">
              {numberPass > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setNumeberPass(numberPass - 1);
                  }}
                >
                  -
                </button>
              )}
              {numberPass === 0 && <p>-</p>}
              <p className="incr">{numberPass}</p>
              <button
                type="button"
                onClick={() => {
                  setNumeberPass(numberPass + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
          {infoTrip.length === 4 && infoTrip[3] !== 0 && (
            <Link
              to={{
                pathname: `/planet/${infoTrip[0]}`,
                state: { infoTrip },
              }}
            >
              <svg
                width="38"
                height="36"
                viewBox="0 0 38 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="15.0441"
                  cy="15.0441"
                  r="11.5441"
                  stroke="black"
                  strokeWidth="7"
                />
                <line
                  x1="24.3131"
                  y1="22.2751"
                  x2="35.4749"
                  y2="33.4369"
                  stroke="black"
                  strokeWidth="7"
                />
              </svg>
            </Link>
          )}
          {infoTrip.length < 4 && (
            <svg
              width="38"
              height="36"
              viewBox="0 0 38 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="15.0441"
                cy="15.0441"
                r="11.5441"
                stroke="black"
                strokeWidth="7"
              />
              <line
                x1="24.3131"
                y1="22.2751"
                x2="35.4749"
                y2="33.4369"
                stroke="black"
                strokeWidth="7"
              />
            </svg>
          )}
        </div>
        <div className="description-container">
          <h1 className="title">
            Explore the space
            <br />
            beyond Mars
          </h1>
          <p className="descr">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <BestRatedPlanets />
      <SpaceNews />
    </SHomePage>
  );
}

HomePage.propTypes = {
  setHeaderWhite: PropTypes.func.isRequired,
};
