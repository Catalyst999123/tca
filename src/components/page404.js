import React from "react";
import styled from 'styled-components'
import media from "../styles/media";
import { Link } from 'react-router-dom'

import Logo from '../images/blue-logo.png'

const Page404Con = styled.div`
  max-width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  min-height: 95vh;
  background: var(--dark-blue);
  font-size: 40px;
  line-height: 48px;
  padding: 0 20px;
  color: white;
  display: inline-block;
  display: grid;
  grid-template-rows: 0.75fr 1fr;

  .fourhead {
    color: var(--light-blue);
    z-index: 2;
    align-self: end;
    margin: 0;
  }
  .back {
    z-index: 2;
    display: flex;
    flex-direction: column;
    p {
      margin: 0;
      color: #f2f2f2;
      font-size: 25px;
      line-height: 35px;
    }
    a {
      color: #f2f2f2;
      border-radius: 40px;
      font-size: 25px;
      line-height: 1;
      text-decoration: none;
      width: fit-content;
      height: fit-content;
      padding: 10px 20px;
      border: 2px solid var(--light-blue);
      margin: 30px 0;
    }
  }

  .logo {
    position: absolute;
    right: 0;
    bottom: calc(var(--vh, 1vh) * 10);
    width: 50vw;
    z-index: 1;;
  }

  ${media.laptop`
    font-size: 95px;
    line-height: 95px;
    padding: 0 8vw;
    grid-template-rows: 1fr 1fr;

    .logo {
      bottom: auto;
      top: calc(var(--vh, 1vh) * 10);
      width: auto;
      height: 80vh;
    }
    .back {
      margin-top: 20px;
      p {
        font-size: 40px;
      }

      a {
        transition: all .3s linear;

        &:hover {
          background: var(--light-blue);
        }
      }
    }
  `}
`

function Page404() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
    <Page404Con>
      <p className="fourhead">Page Not Found</p>
      <div className="back">
        <p className="backtext">The page you are looking for could not be found.</p>
        <Link to="/"> Back To Home </Link>
      </div>

      <img className="logo" src={Logo} alt="pattern"/>
    </Page404Con>
  );
}

export default Page404;
