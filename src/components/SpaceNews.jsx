import { useEffect, useState } from 'react';
import axios from 'axios';
import News from './News';
import SSpaceNews from './styled/SSpaceNews';

export default function SpaceNews() {
  const [news, setNews] = useState([]);
  const id = [
    '609b075ac2ea06001d94fa56',
    '609af244c2ea06001d94fa54',
    '609ae6a4c2ea06001d94fa53',
    '609ac5bbc2ea06001d94fa52',
  ];

  useEffect(() => {
    const articles = [];
    for (let i = 0; i < id.length; i += 1) {
      axios
        .get(`https://www.spaceflightnewsapi.net/api/v2/articles/${id[i]}`)
        .then(({ data }) => {
          articles.push(data);
        });
      setTimeout(() => {
        setNews(articles);
      }, 1000);
    }
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
