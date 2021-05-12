import styled from 'styled-components';

const SSpaceNews = styled.ul`
  .space-news-title {
    margin-left: 100px;
    padding-left: 20px;
    margin-top: 40px;
    border-left: 2px solid #0d1e40;
    color: #0d1e40;
  }
  .space-news {
    display: flex;
    flex-wrap: wrap;
    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 100px;
      list-style-type: none;
      .news-card {
        width: 550px;
        height: 300px;
        margin: 10px;
        border-radius: 15px;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.26);
        .news-link {
          text-decoration: none;
          .news-img {
            width: 100%;
            height: 80%;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          }
          .news-title {
            font-size: 20px;
            text-align: center;
            color: #0d1e40;
          }
          .news-date {
            font-size: 30px;
          }
        }
      }
    }
  }
`;

export default SSpaceNews;
