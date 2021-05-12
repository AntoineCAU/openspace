import { useEffect, useState } from 'react';
import axios from 'axios';
import News from './News';
import SSpaceNews from './styled/SSpaceNews';

export default function SpaceNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.spaceflightnewsapi.net/api/v2/articles`)
      .then(({ data }) => {
        console.log(data);
        setNews(data);
      });
  }, []);

  return (
    <SSpaceNews>
      <h1 className="space-news-title">Space News From Earth</h1>
      <div className="space-news">
        <ul>
          {news.map((newnew) => {
            return <News {...newnew} />;
          })}
        </ul>
      </div>
    </SSpaceNews>
  );
}
