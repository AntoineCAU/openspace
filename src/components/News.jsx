import PropTypes from 'prop-types';

function News({ title, imageUrl }) {
  return (
    <li className="news-card">
      <img className="news-img" src={imageUrl} alt="" />
      <h2 className="news-title">{title}.</h2>
    </li>
  );
}
export default News;

News.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
