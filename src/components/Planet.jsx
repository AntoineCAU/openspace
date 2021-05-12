import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SPlanet from './styled/SPlanet';
import planets from '../planets.json';

const Planet = () => {
  const { name } = useParams();
  const [infos, setInfos] = useState(undefined);

  useEffect(() => {
    setInfos(planets[name]);
  }, [name]);

  return (
    <SPlanet>
      {infos ? (
        <>
          <div className="title-container">
            <h1 className="title">{`Explore ${infos.name}`}</h1>
            <ul className="star-list">
              <li className="star-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 29 27"
                  className={`star-icon ${infos.rating >= 1 ? '' : 'empty'}`}
                >
                  <path d="M14.5 0L17.7555 10.0193L28.2903 10.0193L19.7674 16.2115L23.0229 26.2307L14.5 20.0385L5.97711 26.2307L9.23257 16.2115L0.709681 10.0193L11.2445 10.0193L14.5 0Z" />
                </svg>
              </li>
              <li className="star-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 29 27"
                  className={`star-icon ${infos.rating >= 2 ? '' : 'empty'}`}
                >
                  <path d="M14.5 0L17.7555 10.0193L28.2903 10.0193L19.7674 16.2115L23.0229 26.2307L14.5 20.0385L5.97711 26.2307L9.23257 16.2115L0.709681 10.0193L11.2445 10.0193L14.5 0Z" />
                </svg>
              </li>
              <li className="star-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 29 27"
                  className={`star-icon ${infos.rating >= 3 ? '' : 'empty'}`}
                >
                  <path d="M14.5 0L17.7555 10.0193L28.2903 10.0193L19.7674 16.2115L23.0229 26.2307L14.5 20.0385L5.97711 26.2307L9.23257 16.2115L0.709681 10.0193L11.2445 10.0193L14.5 0Z" />
                </svg>
              </li>
              <li className="star-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 29 27"
                  className={`star-icon ${infos.rating >= 4 ? '' : 'empty'}`}
                >
                  <path d="M14.5 0L17.7555 10.0193L28.2903 10.0193L19.7674 16.2115L23.0229 26.2307L14.5 20.0385L5.97711 26.2307L9.23257 16.2115L0.709681 10.0193L11.2445 10.0193L14.5 0Z" />
                </svg>
              </li>
              <li className="star-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 29 27"
                  className={`star-icon ${infos.rating >= 5 ? '' : 'empty'}`}
                >
                  <path d="M14.5 0L17.7555 10.0193L28.2903 10.0193L19.7674 16.2115L23.0229 26.2307L14.5 20.0385L5.97711 26.2307L9.23257 16.2115L0.709681 10.0193L11.2445 10.0193L14.5 0Z" />
                </svg>
              </li>
            </ul>
            <a
              href="www.google.com"
              className="comments-link"
            >{`${infos.comments.length} Comments - See details`}</a>
          </div>
          <div className="planet-images">
            <div className="image-official-container">
              <img
                className="image-official"
                src={infos.official_artwork}
                alt={infos.name}
              />
            </div>
            <ul className="images-list">
              {infos.images_url.map((img, index) => {
                return (
                  <li key={img} className="image-item">
                    <img src={img} alt={`${infos.name}-${index}`} />
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        <p>Planet not found</p>
      )}
    </SPlanet>
  );
};

export default Planet;
