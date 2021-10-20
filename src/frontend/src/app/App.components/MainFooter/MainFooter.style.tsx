import styled from "styled-components/macro";
import { near3, textColor } from "styles";

export const Footer = styled.footer`
  background-color: #0A172F;;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 32px;

  .footer-wrapper{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 1200px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .left-box {
    font-size: 16px;
    color: ${textColor};
    a {
      color: ${near3};
    }
  }

  .logo-box {
    display: flex;
    align-items: center;

    .poweredBy {
      margin-right: 20px;
    }

    .logo {
      background-image: url('/images/main_footer/near_logo.png');
      background-repeat: no-repeat;
      background-position: center center;
      width: 94px;
      height: 25px;
    }
  }

  ul li {
    list-style: none;
  }

  .nav-items, .social-items {
    display: flex;
    align-items: center;
    ul {
      display: flex;

      li + li {
        margin-left: 10px;
      }

      a {
        color: ${near3};
      }
    }
  }

  @media (max-width: 1200px) {

    .left-box {
      margin-bottom: 30px;
    }

    .logo-box {
      margin-bottom: 30px;
    }

    .nav-items {
      order: -1;
      margin: 18px auto 30px;
      font-size: 16px;
    }
  }
`
