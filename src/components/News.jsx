import PropTypes from 'prop-types';

function News({ title, imageUrl, publishedAt }) {
  return (
    <li className="news-card">
      <img src={imageUrl} alt="" />
      <h2>{title}</h2>
      <p>Published at :{publishedAt} </p>
    </li>
  );
}
export default News;

News.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
};
