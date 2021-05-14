import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import SPlanet from './styled/SPlanet';
import planets from '../planets.json';

const Planet = () => {
  const location = useLocation();
  const { name } = useParams();
  const [infos, setInfos] = useState(undefined);

  useEffect(() => {
    setInfos(planets[name]);
  }, [name]);

  const [departure, setDeparture] = useState('');
  const [returnal, setReturnal] = useState('');
  const [numberPass, setNumberPass] = useState(0);

  useEffect(() => {
    if (location.state) {
      setDeparture(location.state.infoTrip[1]);
      setReturnal(location.state.infoTrip[2]);
      setNumberPass(location.state.infoTrip[3]);
    }
  }, []);

  return (
    <SPlanet>
      {infos ? (
        <>
          <div className="imgPlanet">
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
                href="#scroll-comments"
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
          </div>

          <div className="plan-about-container">
            <div className="plan-trip">
              <h1>Plan your trip</h1>
              <div className="options-container">
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
                          setNumberPass(numberPass - 1);
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
                        setNumberPass(numberPass + 1);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button type="button" className="send-button">
                Send
              </button>
            </div>
            <div className="about">
              <h1>About</h1>
              <ul>
                <li>{`Distance: ${infos.about.distance}`}</li>
                <li>{`Weather: ${infos.about.weather}`}</li>
                <li>{`Gravity: ${infos.about.gravity}`}</li>
                <li>{`Diamètre: ${infos.about.diametre}`}</li>
              </ul>
            </div>
          </div>
          <div className="comments" id="scroll-comments">
            <h1>Comments</h1>
            <ul className="comments-list">
              {infos.comments.map((comment) => {
                return (
                  <li key={comment.name} className="comment-item">
                    <img
                      className="comment-avatar"
                      src={comment.avatar}
                      alt="avatar"
                    />
                    <div>
                      <p className="comment-name">{comment.name}</p>
                      <p className="comment-content">{comment.comment}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        <h1 className="not-valid">{`${name} is not a valid planet !`}!</h1>
      )}
    </SPlanet>
  );
};

export default Planet;
