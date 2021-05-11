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

  &.white {
    background-color: #fff;
  }

  .link-logo {
    .logo {
      width: 183px;
      height: 65px;
      fill: #fff;

      &:hover {
        fill: #b3b6d6;
      }
    }
  }

  .navBar {
    position: relative;

    .searchbar {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 16px;
      border: none;
      padding: 0 20px;
      font-size: 18px;
      font-weight: 400;

      &.hide {
        display: none;
      }

      &:focus {
        outline: none;
      }
    }

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
          position: relative;
          top: 3px;
          margin: 0 20px 0 40px;
          z-index: 1;

          .button-search {
            background-color: transparent;
            border: none;
            cursor: pointer;

            &:hover .icon-search {
              stroke: #b3b6d6;
            }

            .icon-search {
              width: 26px;
              height: 26px;
            }
          }
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
