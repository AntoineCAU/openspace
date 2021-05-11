import styled from 'styled-components';

const SBestRatedPlanets = styled.div`
  .top-rated-planets {
    display: flex;
    justify-content: center;
    margin: 30px 200px;
    .planet-card {
      width: 300px;
      height: 400px;
      margin: 20px;
      border: black solid 2px;
      border-radius: 15px;
      .planet-img {
        width: 100%;
        border-radius: 12px 12px 0 0;
      }
      .planet-name {
      }
    }
  }
`;

export default SBestRatedPlanets;
