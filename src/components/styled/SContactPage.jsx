import styled from 'styled-components';

const SContactPage = styled.div`
  margin-top: 10%;
  margin-bottom: 10%;
  .contact-form {
    margin: 3rem auto 0;
    width: 40vw;
    height: 30vw;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border: 10px solid #080808;
    background-image: url('/img/univers.png');
    padding: 0 30px 10px;
    box-shadow: 0px 4px 10px rgba(8, 8, 8, 0.637);
  }
  .form-content {
    display: grid;
    grid-template-rows: repeat(4, 1fr) 250px;
  }
  input,
  textarea {
    background: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.1rem;

    color: #f7f5f5;
    input::placeholder,
    textarea::placeholder {
      color: rgb(190, 188, 188);
    }
    input,
    .email-content,
    textarea {
      width: 100%;
      margin: 0 auto;
    }
    input {
      padding: 24px 0 12px;
    }
    .email-content {
      position: relative;
    }
    .email-content input {
      width: 100%;
    }
    #not-mail {
      display: none;
      position: absolute;
      top: 4px;
      color: #ff4d4d;
      right: 0;
      transform-origin: 50% 50%;
    }
    @keyframes dongle {
      0% {
        transform: translate(0px, 0px);
      }
      10% {
        transform: translate(-10px, 0px);
      }
      20% {
        transform: translate(10px, 0px);
      }
      30% {
        transform: translate(-10px, 0px);
      }
      40% {
        transform: translate(10px, 0px);
      }
      50% {
        transform: translate(-10px, 0px);
      }
      60% {
        transform: translate(10px, 0px);
      }
      70% {
        transform: translate(-10px, 0px);
      }
      80% {
        transform: translate(10px, 0px);
      }
      90% {
        transform: translate(-10px, 0px);
      }
      100% {
        transform: translate(0px, 0px);
      }
    }
    textarea {
      resize: none;
      padding: 24px 0;
    }
    .button {
      font-size: 1.3rem;
      margin-top: 15px;
      color: #474242;
      border: none;
      cursor: pointer;
      transition: 0.2s;
      width: 100%;
    }
    .button:hover {
      letter-spacing: 2px;
    }
    .error::placeholder {
      color: #ff4d4d;
    }
    .form-message {
      margin-top: 10px;
      padding: 12px;
      opacity: 0;
      transition: 0.2s ease;
      color: black;
      border-radius: 4px;
      box-shadow: 0 0 2px rgba(51, 51, 51, 0.3);
    }
  }
`;

export default SContactPage;
