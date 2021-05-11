import styled from 'styled-components';

const SDestinations = styled.div`
  .planets {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .planet {
    width: 500px;
    margin: 1%;
    position: relative;
    height: 600px;

    img {
      border-radius: 20px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .text {
      color: #fff;
      position: absolute;
      transform: translateY(-10em) translateX(2em);
      h2 {
        font-size: 5em;
      }
      p {
        font-size: 3em;
      }
    }
  }
`;

export default SDestinations;
