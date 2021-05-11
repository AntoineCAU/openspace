import styled from 'styled-components';

const SFooter = styled.footer`
  nav {
    background-color: #061028;
    height: 120px;
    .foot-copyright {
      display: flex;
      justify-content: center;
      color: #fff;
      font-size: 15px;
      padding-top: 15px;
    }
    .foot-list {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style-type: none;
      .foot-item {
        padding: 10px 0;
        margin: 15px;
        &.ressources {
          border-left: 1px solid #fff;
          border-right: 1px solid #fff;
          padding: 10px 15px;
          margin: 0 15px;
        }
        .footlink {
          text-decoration: none;
          font-weight: 700;
          font-size: 20px;
          color: #fff;
        }
      }
    }
  }
`;

export default SFooter;
