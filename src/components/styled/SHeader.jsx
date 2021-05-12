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
  transition: all 0.4s;

  &.white {
    background-color: #fff;
    color: #212121;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.26);
  }

  .link-logo {
    .logo {
      width: 183px;
      height: 65px;
      fill: #fff;
      transition: 0.4s;

      &:hover {
        fill: #b3b6d6;
      }

      &.black {
        fill: #000;
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

      &.border-black {
        border: 2px solid #000;
      }
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
      color: #fff;

      &.colorBlack {
        color: #000;
      }

      .nav-item {
        padding: 10px 0;

        &.experience {
          border-left: 1px solid;
          border-right: 1px solid;
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
              stroke: #fff;

              &.black {
                stroke: #000;
              }
            }
          }
        }

        .navlink {
          text-decoration: none;
          font-weight: 700;
          font-size: 20px;
          color: inherit;

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
