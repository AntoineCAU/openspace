import styled from 'styled-components';

const SPlanet = styled.div`
  padding: 100px 5% 0 5%;
  min-height: calc(100vh - 120px);

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
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.26);
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
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.26);

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }
      }
    }
  }

  .plan-about-container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 60px;

    .plan-trip {
      width: 510px;
      height: 310px;
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
      border-radius: 20px;

      h1 {
        padding: 20px 30px;
        color: #0d1e40;
      }
    }

    .about {
      margin: 20px 50px;

      h1 {
        padding-left: 20px;
        border-left: 2px solid #0d1e40;
        color: #0d1e40;
      }

      ul {
        list-style-type: none;
        margin: 20px;

        li {
          margin: 20px 0;
        }
      }
    }
  }

  .comments {
    width: 100%;
    margin-top: 60px;

    h1 {
      padding-left: 20px;
      margin-top: 40px;
      border-left: 2px solid #0d1e40;
      color: #0d1e40;
    }

    .comments-list {
      margin-top: 30px;
      padding: 0 10%;
      list-style-type: none;
      width: 100%;
      flex-wrap: wrap;
      display: flex;
      justify-content: center;

      .comment-item {
        margin: 10px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 40%;

        .comment-avatar {
          width: 92px;
          height: 92px;
          object-fit: cover;
          border-radius: 50%;
        }

        div {
          margin: 0 10px;

          .comment-name {
            font-size: 20px;
            margin-bottom: 10px;
            font-weight: 500;
          }

          .comment-content {
            font-size: 18px;
          }
        }
      }
    }
  }

  .not-valid {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default SPlanet;
