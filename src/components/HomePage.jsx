import { useEffect } from 'react';
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

  return (
    <SHomePage>
      <ScrollToTopOnMount />
      <div className="homepage-header">
        <div className="options-container">
          <h2>location</h2>
          <input />
        </div>
        <div className="description-container">
          <h1 className="title">Explore the space beyond Mars</h1>
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
