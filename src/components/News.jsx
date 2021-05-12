import PropTypes from 'prop-types';

function News({ title, imageUrl, url }) {
  return (
    <li className="news-card">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="news-link"
      >
        <img className="news-img" src={imageUrl} alt="" />
        <h2 className="news-title">{title}.</h2>
      </a>
    </li>
  );
}
export default News;

News.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
