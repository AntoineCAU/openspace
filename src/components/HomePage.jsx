import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SHomePage from './styled/SHomePage';
import BestRatedPlanets from './BestRatedPlanets';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import SpaceNews from './SpaceNews';

export default function HomePage({ setHeaderWhite }) {
  const [numberPass, setNumeberPass] = useState(0);

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

  return (
    <SHomePage>
      <ScrollToTopOnMount />
      <div className="homepage-header">
        <div className="options-container">
          <div className="location">
            <h2>location</h2>
            <input />
          </div>
          <div className="setDate">
            <div className="date">
              <h2>From</h2>
              <input type="date" className="inputDate" />
            </div>
            <div className="date">
              <h2>To</h2>
              <input type="date" className="inputDate" />
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
