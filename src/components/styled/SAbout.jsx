import styled from 'styled-components';

const SAbout = styled.div`
  padding-top: 100px;
  min-height: calc(100vh - 120px);

  .Team {
    text-align: center;
    margin: 60px 0;
    color: #0d1e40;
  }

  .team-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding: 0 10%;
    list-style-type: none;

    .team-item {
      margin: 20px 30px;
      text-align: center;

      img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 50%;
      }

      h1 {
        font-weight: 400;
        font-size: 26px;
        margin: 10px 0;
      }

      a {
        img {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
`;

export default SAbout;
