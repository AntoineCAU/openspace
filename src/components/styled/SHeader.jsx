import styled from 'styled-components';

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  padding: 0 20px;

  nav {
    .nav-list {
      display: flex;
      align-items: center;
      list-style-type: none;

      .nav-item {
        padding: 10px 0;

        &.experience {
          border-left: 1px solid #fff;
          border-right: 1px solid #fff;
          padding: 10px 15px;
          margin: 0 15px;
        }

        &.search {
          margin: 0 20px 0 40px;
        }

        .navlink {
          text-decoration: none;
          font-weight: 700;
          font-size: 20px;
          color: #fff;

          &:hover {
            color: #b3b6d6;
          }

          &.selected {
            border-bottom: 3px solid #fff;
          }
        }
      }
    }
  }
`;

export default SHeader;
