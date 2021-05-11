import styled from 'styled-components';

const SBestRatedPlanets = styled.div`
  .top-rated-title {
    width: 975px;
    margin: auto;
    padding-left: 20px;
    margin-top: 40px;
    border-left: 2px solid #0d1e40;
    color: #0d1e40;
  }

  .top-rated-planets {
    display: flex;
    justify-content: center;
    margin: 10px 200px;
    flex-wrap: wrap;

    .planet-card {
      width: 300px;
      height: 400px;
      margin: 20px;
      border-radius: 15px;
      position: relative;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.26);

      .planet-img {
        width: 100%;
        height: 100%;
        border-radius: 12px;
        object-fit: cover;
      }

      .planet-name {
        position: absolute;
        left: 0;
        bottom: 0;
        color: #ffff;
        font-size: 70px;
        padding-left: 10px;
        padding-bottom: 50px;
      }

      .discover {
        position: absolute;
        bottom: 5px;
        left: 50%;
        transform: translateX(-50%);
        color: #ffff;
      }
    }
  }
`;

export default SBestRatedPlanets;
