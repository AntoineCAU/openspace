import styled from 'styled-components';

const SPlanet = styled.div`
  padding: 100px 5% 0 5%;
  min-height: calc(100vh - 120px);

  .imgPlanet {
    width: 60vw;
    margin-left: auto;
    margin-right: auto;
  }

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
    width: 60vw;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;

    .image-official-container {
      .image-official {
        border-radius: 20px;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.26);
        width: 400px;
        height: 400px;
      }
    }
    .images-list {
      display: flex;
      flex-wrap: wrap;
      .image-item {
        list-style-type: none;
        padding-left: 2%;

        img {
          width: 200px;
          height: 200px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.26);
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
      position: relative;
      width: 510px;
      height: 310px;
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      margin-top: 3%;

      .send-button {
        position: absolute;
        width: 152px;
        height: 47px;
        right: 30px;
        bottom: 30px;
        background: #245ca6;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        color: #fff;
        font-weight: 500;
        font-size: 20px;
        cursor: pointer;

        &:hover {
          transform: translate(1px, 1px);
        }
      }
      h1 {
        padding: 20px 30px;
        color: #0d1e40;
      }
      .passenger {
        margin-top: 3%;
        margin-left: 4%;
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

  .options-container {
    .setDate {
      padding: 0 4%;
      display: flex;

      .date {
        margin: 1%;

        .inputDate {
          border: none;
          border-bottom: 1px solid #000;

          &:focus {
            outline: none;
          }
        }
      }
    }
    .increment {
      display: flex;
      text-align: center;
      margin-top: 5%;
      .incr {
        margin: 0 10%;
      }
      button {
        border: none;
        background-color: #fff;
        font-size: 1.5em;
      }
      p {
        font-size: 1.5em;
      }
    }
  }
`;

export default SPlanet;
