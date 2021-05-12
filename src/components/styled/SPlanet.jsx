import styled from 'styled-components';

const SPlanet = styled.div`
  padding: 100px 5% 0 5%;

  .title-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;

    padding-top: 80px;

    .title {
      font-weight: 700;
      font-size: 70px;
    }

    .star-list {
      list-style-type: none;
      margin: 0 10px 0px 40px;

      .star-item {
        display: inline-block;
        width: 26px;
        height: 26px;

        .star-icon {
          width: 100%;
          height: 100%;
          fill: #ffd568;

          &.empty {
            fill: #d8d8d8;
          }
        }
      }
    }

    .comments-link {
      text-decoration: none;
      color: #000;
      font-weight: 500;
      font-size: 20px;

      &:hover {
        color: #153a8f;
      }
    }
  }

  .planet-images {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 20px 0;

    .image-official-container {
      width: 40%;

      .image-official {
        width: 500px;
        height: 500px;
        object-fit: cover;
        border-radius: 10px;
      }
    }

    .images-list {
      display: flex;
      width: 60%;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      list-style-type: none;

      .image-item {
        width: 278px;
        height: 278px;
        border-radius: 10px;
        margin: 10px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }
      }
    }
  }

  .comments {
    width: 100%;

    h1 {
      padding-left: 20px;
      margin-top: 40px;
      border-left: 2px solid #0d1e40;
      color: #0d1e40;
    }

    .comments-list {
      margin-top: 30px;
      list-style-type: none;
      width: 100%;
      display: flex;

      .comment-item {
        /* display: flex; */
        /* width: 800px; */

        .comment-avatar {
          width: 92px;
          height: 92px;
          object-fit: cover;
          border-radius: 50%;
        }
      }
    }
  }
`;

export default SPlanet;
