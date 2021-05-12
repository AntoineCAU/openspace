import styled from 'styled-components';

const SHomePage = styled.div`
  .homepage-header {
    background-image: url('/img/univers.png');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 700px;
    padding-top: 100px;
    height: 100vh;

    .options-container {
      width: 60vw;
      height: 90px;
      background-color: #fff;
      border-radius: 30px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 5%;
      margin-left: auto;
      margin-right: auto;

      .location {
        display: flex;
        flex-direction: column;
        input {
          border: none;
          border-bottom: 1px solid #000;
        }
      }
      .setDate {
        border-left: 2px solid black;
        border-right: 2px solid black;
        padding: 0 4%;
        display: flex;

        .date {
          margin: 1%;

          .inputDate {
            border: none;
            border-bottom: 1px solid #000;
          }
        }
      }
      .increment {
        display: flex;
        text-align: center;
        .incr {
          margin: 0 30%;
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

    .description-container {
      width: 60vw;
      margin: 10% 0%;
      margin-left: auto;
      margin-right: auto;
      color: #fff;

      .title {
        font-weight: 700;
        font-size: 4em;
      }

      .descr {
        font-weight: 400;
        font-size: 20px;
        border-left: 2px solid #fff;
        padding-left: 20px;
      }
    }
  }
`;

export default SHomePage;
