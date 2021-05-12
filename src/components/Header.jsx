import { useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import SHeader from './styled/SHeader';

export default function Header({ headerWhite }) {
  const history = useHistory();
  const [searchActive, setSearchActive] = useState(false);

  return (
    <SHeader className={headerWhite ? 'white' : 'transparent'}>
      <Link to="/" className="link-logo">
        <svg
          className={`logo ${headerWhite ? 'black' : ''}`}
          viewBox="0 0 183 65"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 40.07C0 34.8598 4.2373 30.7242 9.52808 30.7242C14.8189 30.7242 19.0562 34.8364 19.0562 40.07C19.0562 45.2102 14.8189 49.4392 9.52808 49.4392C4.2373 49.4392 0 45.2102 0 40.07ZM14.7954 40.07C14.7954 37.2663 12.4076 34.8598 9.52808 34.8598C6.64859 34.8598 4.26071 37.2663 4.26071 40.07C4.26071 42.8738 6.64859 45.2803 9.52808 45.2803C12.431 45.2803 14.7954 42.8738 14.7954 40.07Z" />
          <path d="M20.8588 30.9112H25.3068V32.3598C26.8753 31.2616 28.7247 30.7242 30.5741 30.7242C35.8883 30.7242 40.1022 34.8364 40.1022 40.07C40.1022 45.2102 35.8649 49.4392 30.5741 49.4392C28.7481 49.4392 26.7582 48.8317 25.3068 47.8504V55.2102H20.8588V30.9112V30.9112ZM35.8415 40.07C35.8415 37.2663 33.4536 34.8598 30.5741 34.8598C27.6946 34.8598 25.3068 37.2663 25.3068 40.07C25.3068 42.8738 27.6946 45.2803 30.5741 45.2803C33.4536 45.2803 35.8415 42.8738 35.8415 40.07Z" />
          <path d="M87.2744 43.2242H92.0033C92.1438 44.6027 93.1036 45.9345 95.632 45.9345C97.5282 45.9345 98.5817 45.0467 98.5817 44.042C98.5817 42.6635 96.6854 42.4065 94.9062 42.1962C92.7056 41.9392 87.6724 41.3784 87.6724 36.6121C87.6724 33.1308 90.388 30.7242 95.1872 30.7242C99.8224 30.7242 102.632 33.0373 102.913 36.6588H98.3476C98.2305 35.5841 97.8794 34.2523 95.2808 34.2523C93.5718 34.2523 92.495 34.8831 92.495 35.8177C92.495 37.2663 94.9062 37.4766 96.7557 37.8037C100.431 38.4112 103.592 39.3925 103.592 43.4579C103.592 47.6168 100.15 49.4626 95.5149 49.4626C90.3646 49.4392 87.4383 47.1027 87.2744 43.2242Z" />
          <path d="M163.92 40.07C163.92 34.8598 168.158 30.7242 173.448 30.7242C179.207 30.7242 182.977 35.1635 182.977 40.3504C182.977 40.7476 182.93 41.1682 182.906 41.5654H168.462C169.211 43.9018 171.061 45.3037 173.8 45.3037C176.07 45.3037 177.428 44.6027 178.599 42.9906L182.344 45.0467C180.448 47.8971 177.709 49.4626 173.8 49.4626C168.087 49.4392 163.92 45.4439 163.92 40.07ZM178.271 38.0373C177.381 35.9345 175.813 34.8364 173.472 34.8364C171.295 34.8364 169.422 36.1915 168.603 38.0373H178.271Z" />
          <path d="M49.1387 29.93C47.3595 30.1403 45.7441 30.7945 44.3629 31.7758C32.0256 23.6683 20.4842 19.2525 9.52808 27.2665C16.1064 14.7431 36.9184 20.0468 49.1387 29.93Z" />
          <path d="M49.9112 35.5841C52.2522 35.5841 52.3225 35.6308 54.2187 37.3131H52.3225C51.5031 36.729 50.7071 36.1449 49.9112 35.5841Z" />
          <path d="M58.9243 42.3599H61.3121V44.1122C60.5162 43.5281 59.7202 42.944 58.9243 42.3599Z" />
          <path d="M148.446 47.5468C137.115 58.4113 121.758 66.6823 99.799 64.6963C87.7894 63.6215 77.7697 55.5608 67.0945 48.1075L67.1414 41.0047C69.2015 42.3365 71.2148 43.6215 73.1813 44.8832L73.1579 49.8365L79.5723 49.8599L79.5958 48.3412C84.5588 51.4019 88.0235 53.8785 91.5117 55.2103C107.642 61.3552 121.805 57.4533 133.089 50.3972C133.417 50.4206 133.768 50.444 134.119 50.444C136.039 50.444 138.028 49.9767 139.574 48.9253L139.644 49.8131H145.145L145.075 40.958C145.122 40.9113 145.192 40.8412 145.239 40.7944C145.403 43.4113 146.62 45.8178 148.446 47.5468Z" />
          <path d="M155.586 35.5374C156.64 35.5374 157.553 35.8645 158.302 36.4719C156.429 38.8785 154.486 41.1916 152.496 43.3878C151.583 42.5467 150.998 41.3551 150.998 40.0701C150.998 37.6402 153.081 35.5374 155.586 35.5374Z" />
          <path d="M163.78 28.9019C162.867 30.257 163.71 29.229 161.977 31.6122C160.268 30.3972 158.185 29.743 155.774 29.743C155.539 29.743 155.305 29.743 155.071 29.7664C156.874 27.4299 157.881 26.0047 158.442 25.1636C158.887 24.5094 159.777 24.3458 160.409 24.8131L163.452 27.0327C164.038 27.4533 164.178 28.2944 163.78 28.9019Z" />
          <path d="M125.176 40.07C125.176 34.8598 129.413 30.7242 134.704 30.7242C136.554 30.7242 138.403 31.2616 139.971 32.3598V30.9112H144.419V49.0654H139.971V47.8504C138.52 48.8551 136.53 49.4392 134.704 49.4392C129.413 49.4392 125.176 45.2102 125.176 40.07ZM139.971 40.07C139.971 37.2663 137.584 34.8598 134.704 34.8598C131.825 34.8598 129.437 37.2663 129.437 40.07C129.437 42.8738 131.825 45.2803 134.704 45.2803C137.584 45.2803 139.971 42.8738 139.971 40.07Z" />
          <path d="M146.128 40.07C146.128 34.8598 150.366 30.7242 155.657 30.7242C159.215 30.7242 161.954 32.2429 163.78 35.0934L160.011 37.1962C158.981 35.7476 157.529 34.8598 155.68 34.8598C152.8 34.8598 150.413 37.2663 150.413 40.07C150.413 42.8738 152.8 45.2803 155.68 45.2803C157.529 45.2803 158.981 44.4626 160.011 42.9672L163.757 45.0233C161.931 47.8738 159.238 49.4392 155.68 49.4392C150.366 49.4392 146.128 45.2102 146.128 40.07Z" />
          <path d="M40.9684 40.07C40.9684 34.8598 45.2057 30.7242 50.4965 30.7242C56.2554 30.7242 60.0245 35.1635 60.0245 40.3504C60.0245 40.7476 59.9777 41.1682 59.9543 41.5654H45.51C46.2592 43.9018 48.1086 45.3037 50.8476 45.3037C53.1184 45.3037 54.4762 44.6027 55.6468 42.9906L59.3925 45.0467C57.4962 47.8971 54.7572 49.4626 50.8476 49.4626C45.1355 49.4392 40.9684 45.4439 40.9684 40.07ZM55.2956 38.0373C54.406 35.9345 52.8375 34.8364 50.4965 34.8364C48.3193 34.8364 46.4464 36.1915 45.6271 38.0373H55.2956Z" />
          <path d="M105.137 30.9112H109.585V32.3598C111.153 31.2616 113.003 30.7242 114.852 30.7242C120.166 30.7242 124.38 34.8364 124.38 40.07C124.38 45.2102 120.143 49.4392 114.852 49.4392C113.026 49.4392 111.036 48.8317 109.585 47.8504V55.2102H105.137V30.9112V30.9112ZM120.119 40.07C120.119 37.2663 117.731 34.8598 114.852 34.8598C111.972 34.8598 109.585 37.2663 109.585 40.07C109.585 42.8738 111.972 45.2803 114.852 45.2803C117.731 45.2803 120.119 42.8738 120.119 40.07Z" />
          <path d="M61.8271 30.9112H66.2751V32.3598C67.4925 31.3317 69.2015 30.7242 71.1914 30.7242C76.646 30.7242 78.6593 34.1588 78.6593 39.5327V49.0654H74.2113V40.6775C74.2113 36.8457 73.6495 34.8598 70.2549 34.8598C67.7734 34.8598 66.2751 36.4252 66.2751 39.0186V49.0654H61.8271V30.9112Z" />
          <path d="M181.759 1.1916C181.736 0.210296 181.314 -0.1869 180.472 0.0934737C178.482 0.771044 176.445 1.40188 174.549 2.3131C170.827 4.13553 168.181 7.21964 165.934 10.6075C165.114 11.8692 164.342 13.0374 163.007 12.8271C162.633 12.7804 162.258 12.7804 161.884 12.8505C160.339 13.1075 159.262 13.715 158.442 14.8832C156.85 17.1963 156.242 19.8832 155.703 22.5701C155.493 23.5981 155.984 23.9252 156.967 23.5047C158.021 23.0608 159.028 22.4299 160.081 21.986C160.409 21.8458 160.947 21.8692 161.228 22.0561C162.703 23.0374 164.155 24.1122 165.583 25.1636C166.191 25.6075 166.449 26.1682 166.215 26.9626C165.957 27.8505 165.77 28.7617 165.629 29.6729C165.583 30.0234 165.653 30.5608 165.887 30.7243C166.121 30.8879 166.683 30.8178 166.964 30.6542C168.837 29.4626 170.756 28.3645 172.489 26.986C174.549 25.3505 175.204 23.1542 174.244 20.6075C173.94 19.7664 174.081 19.0888 174.713 18.3645C176.141 16.6823 177.522 14.9299 178.716 13.0841C181.057 9.486 181.9 5.44394 181.759 1.1916ZM175.813 10.6075C175.157 11.7524 173.683 12.1495 172.535 11.4953C171.388 10.8411 170.99 9.36918 171.646 8.22432C172.301 7.07946 173.776 6.68226 174.923 7.33646C176.07 7.99067 176.468 9.46263 175.813 10.6075Z" />
        </svg>
      </Link>
      <nav className="navBar">
        <input
          type="text"
          className={`searchbar ${searchActive ? '' : 'hide'} ${
            headerWhite ? 'border-black' : ''
          }`}
          placeholder="search your planet here"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              history.push(`/planet/${e.target.value.toLowerCase()}`);
              setSearchActive(false);
              e.target.value = '';
            }
          }}
        />
        <ul className={`nav-list ${headerWhite ? 'colorBlack' : ''}`}>
          <li className="nav-item destinations">
            <NavLink
              to="/destinations"
              className="navlink destinations"
              activeClassName="selected"
            >
              Destinations
            </NavLink>
          </li>
          <li className="nav-item experience">
            <NavLink
              to="/experience"
              className="navlink experience"
              activeClassName="selected"
            >
              Experience
            </NavLink>
          </li>
          <li className="nav-item contact">
            <NavLink
              to="/contact-us"
              className="navlink contact"
              activeClassName="selected"
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item search">
            <button
              type="button"
              className="button-search"
              onClick={() => {
                setSearchActive(!searchActive);
              }}
            >
              <svg
                className={`icon-search ${searchActive && 'black'} ${
                  headerWhite && 'black'
                }`}
                viewBox="0 0 37 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="15.0441" cy="15.0441" r="12.5441" strokeWidth="5" />
                <line
                  x1="23.606"
                  y1="22.9822"
                  x2="34.7678"
                  y2="34.144"
                  strokeWidth="5"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </SHeader>
  );
}

Header.propTypes = {
  headerWhite: PropTypes.bool.isRequired,
};
