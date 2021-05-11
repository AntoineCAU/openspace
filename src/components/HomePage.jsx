import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SHomePage from './styled/SHomePage';

export default function HomePage({ setHeaderWhite }) {
  const [prevScroll, setPrevScroll] = useState(window.pageYOffset);

  const handleScroll = () => {
    const currScroll = window.pageYOffset;
    console.log('prevScroll', prevScroll);
    console.log('currScroll', currScroll);
    setHeaderWhite(prevScroll > currScroll);
    setPrevScroll(currScroll);
  };

  useEffect(() => {
    setHeaderWhite(false);
    window.addEventListener('scroll', handleScroll);

    return () => {
      setHeaderWhite(true);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <SHomePage>
      <div className="homepage-header">
        <div className="options-container" />
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
    </SHomePage>
  );
}

HomePage.propTypes = {
  setHeaderWhite: PropTypes.func.isRequired,
};
