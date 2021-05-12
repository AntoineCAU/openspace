import styled from 'styled-components';

const SDestinations = styled.div`
  margin-top: 120px;

  .title {
    margin-left: 5%;
  }
  h1 {
    font-size: 3em;
  }
  h2 {
    font-size: 2em;
    border-left: 2px solid black;
    padding-left: 1%;
    font-weight : 400;
  }

  .planets {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 3% 0;
    
  }

  .planet {
    width: 500px;
    margin: 1%;
    position: relative;
    height: 600px;
    overflow: hidden;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.26);
    border-radius: 20px;

    img {
      border-radius: 20px;
      
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .text {
      color: #fff;
      position: absolute;
      transform: translateY(-6em) translateX(2em);
      transition : 0.5s ease-in-out;
      h3 {
        font-size: 5em;
      }
      .discover {
        font-size: 2em;
        text-decoration: none;
        color: #fff;
      }
      .discover:hover {
        color: #c9c9c9;
      }
    }
  }
  .planet:hover {
      .text {
        transform: translateY(-10em) translateX(2em);
      }
  
`;

export default SDestinations;
