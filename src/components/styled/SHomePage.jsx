import styled from 'styled-components';

const SHomePage = styled.div`
  .homepage-header {
    background-image: url('/img/univers.png');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 700px;
    padding-top: 100px;

    .description-container {
      width: 80%;
      margin: 0 10%;
      color: #fff;

      .title {
        font-weight: 700;
        font-size: 70px;
      }

      .descr {
        font-weight: 400;
        font-size: 20px;
      }
    }
  }
`;

export default SHomePage;
