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
      .news-card {
        width: 450px;
        height: 300px;
        margin: 10px;
        .news-img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

export default SSpaceNews;
