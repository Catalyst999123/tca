import React, { useRef } from "react";
import styled from 'styled-components'
import media from "../styles/media";
import { NavLink } from 'react-router-dom'
import { gsap } from "gsap"

import FooterIcon from '../images/footericon.png'
import FooterLogo from '../images/footerLogo.svg'
import Logo from '../images/logosvg.svg'
import Fb from '../images/social/whitefb.svg'
import Li from '../images/social/whiteli.svg'

const FooterCon = styled.div`
  /* display: flex;
  justify-content: space-between; */
  position: relative;
  padding: 50px 5vw;
  background-color: var(--dark-blue);
  background-image: url(${FooterIcon});
  background-repeat: no-repeat;
  background-size: 350px;

  .footerTop {
    /* display: flex; */
    align-items: center;
    padding: 80px 0 50px;

    .largeText {
      font-size: 30px;
      line-height: 30px;
      letter-spacing: -0.04em;
      color: #FFFFFF;
    }

    .linkFoot {
      width: 50vw;
      display: flex;
      justify-content: center;
    }

    a {
      height: fit-content;
      font-size: 26px;
      line-height: 30px;
      color: #2E5CFF;
      text-align: center;
    }

    .menu__link {
      display: inline-block;
      text-decoration: none;
      position: relative;
      padding: 14px 0;
    }

    .menu__link {

      overflow: visible;
      svg {
        fill: none;
        stroke: var(--light-blue);
        stroke-width: 1;
        stroke-miterlimit: 10;
        stroke-dasharray: 338;
        stroke-dashoffset: 338;
        stroke-linecap: round;
        position: absolute;
        top: 50%;
        left: 50%;
        width: calc(100% + 60px);
        height: fit-content;
        opacity: 0;
        transform: translate(-50%, -50%);
        transition: stroke-dashoffset 0s 0.2s, opacity 0.2s;
        z-index: 1;
        overflow: visible;
      }
    }

    .menu__link:hover svg {
      stroke-dashoffset: 0;
      opacity: 1;
      transition: opacity 0s, stroke-dashoffset 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }

  .footerBottom {
    /* display: flex;
    justify-content: space-between; */
    padding-bottom: 50px;

    .footerLogo {
      display: none;
    }

    .footText {
      /* max-width: 35vw; */
      margin: 0 0 20px;
      font-size: 18px;
      line-height: 22px;
      color: var(--light-blue);

      a {
        margin: 0 0 20px;
      }
    }

    .social {

      img {
        width: 40px;
        margin-right: 20px !important;
      }
    }
  }

  .desk {
    display: none !important;
  }
  .mob {
    display: block;
  }

  .middle {
      max-width: 70%;
    }

    .footerLogo {
      width: 180px;
    }

    .footText {
      margin: 10px 0 30px;
      font-size: 20px;
      line-height: 28px;
      color: var(--light-blue);
      a {
        color: var(--light-blue);
        text-decoration: none;
        transition: all .3s linear;

        &:hover {
          opacity: 0.5;
        }
      }
    }

    .last {

      p {
        text-align: center;
      }

      a {
        height: fit-content;
        font-size: 30px;
        line-height: 30px;
        color: #2E5CFF;
        text-align: center;
        margin-bottom: 50px;
        margin-top: 20px;
        transition: all .3s linear;

        &:hover {
          opacity: .5;
        }
      }

      .linkFoot {
        display: flex;
        justify-content: center;
      }
    }

    .menu__link {
      display: inline-block;
      text-decoration: none;
      position: relative;
      padding: 14px 0;

      a {
        color: var(--light-blue);
        text-decoration: none;
        transition: all .3s linear;

        &:hover {
          opacity: 0.5;
        }
      }
    }

    .menu__link {

      overflow: visible;
      svg {
        fill: none;
        stroke: var(--light-blue);
        stroke-width: 1;
        stroke-miterlimit: 10;
        stroke-dasharray: 338;
        stroke-dashoffset: 338;
        stroke-linecap: round;
        position: absolute;
        top: 50%;
        left: 50%;
        width: calc(100% + 60px);
        height: fit-content;
        opacity: 0;
        transform: translate(-50%, -50%);
        transition: stroke-dashoffset 0s 0.2s, opacity 0.2s;
        z-index: 1;
        overflow: visible;  
        stroke-dashoffset: 0;
        opacity: 1;
        transition: opacity 0s, stroke-dashoffset 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }

    .social {
      display: flex;

      img {
        margin-right: 20px;
        margin-bottom: 40px;
        width: 40px;
      }
    }

    .copyText {
      position: absolute; 
      bottom: 0px;
      font-size: 12px;
      line-height: 22px;
      color: var(--light-blue);
      letter-spacing: normal;

      a {
        color: var(--light-blue);
      letter-spacing: normal;
      }
    }

    .magnetic-button {
      border: none;
      padding: 0;
      background: transparent;
      cursor: pointer;
      position: relative;
      z-index: 1;
      touch-action: none;
      
      span {
        display: inline-block;
      }
      
      &--hover {
        content: "";
        position: absolute;
        z-index: -1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }

    .button-1 {
      padding: 20px;
      font-size: 40px;
      margin-left: -20px;
      color: var(--light-green);
    }

    .contact.mob {
      margin: 20px 0;
      font-size: 26px;
      line-height: 30px;

      a {
        color: var(--light-blue);
        margin: 20px 30px;
      }
    }


   // breakpoint 
  ${media.laptop`
    padding: 80px 8vw;
    position: relative;
    height: fit-content;
    min-height: 300px;
    display: grid;
    grid-template-columns: 1fr 1.5fr 1fr;
    background-size: contain;

    .middle {
      max-width: 70%;

      .socialimg {
        width: 40px;
        height: 40px;
        margin-right: 20px;
        border-radius: 50%;
        background: transparent;
        transition: all .3s linear;

        &:hover {
          background: var(--light-blue);
        }
      }
    }

    .footerLogo {
      width: 130px;
    }

    .footText {
      margin: 10px 0 30px;
      font-size: 20px;
      line-height: 28px;
      color: var(--light-blue);
      a {
        color: var(--light-blue);
        text-decoration: none;
        transition: all .3s linear;

        &:hover {
          opacity: 0.5;
        }
      }
    }

    .last {


    display: flex;
    flex-direction: column;
    align-items: center;


      a {
        height: fit-content;
        font-size: 30px;
        line-height: 30px;
        color: #2E5CFF;
        text-align: center;
        margin-bottom: 50px;
        margin-top: 20px;
        transition: all .3s linear;

        &:hover {
          opacity: .5;
        }
      }
    }

    .menu__link {
      display: inline-block;
      text-decoration: none;
      position: relative;
      padding: 14px 0;

      a {
        color: var(--light-blue);
        text-decoration: none;
        transition: all .3s linear;

        &:hover {
          opacity: 0.5;
        }
      }
    }

    .menu__link {

      overflow: visible;
      svg {
        fill: none;
        stroke: var(--light-blue);
        stroke-width: 1;
        stroke-miterlimit: 10;
        stroke-dasharray: 338;
        stroke-dashoffset: 338;
        stroke-linecap: round;
        position: absolute;
        top: 50%;
        left: 50%;
        width: calc(100% + 60px);
        height: fit-content;
        opacity: 0;
        transform: translate(-50%, -50%);
        transition: stroke-dashoffset 0s 0.2s, opacity 0.2s;
        z-index: 1;
        overflow: visible;  
        stroke-dashoffset: 0;
        opacity: 1;
        transition: opacity 0s, stroke-dashoffset 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }

    .social {
      display: flex;

      img {
        margin-right: 20px;
        width: 40px;
      }
    }

    .copyText {
      position: absolute;
      right: 8vw;
      bottom: 20px;
      font-size: 18px;
      line-height: 22px;
      color: var(--light-blue);
    }

    .magnetic-button {
      border: none;
      padding: 0;
      background: transparent;
      cursor: pointer;
      position: relative;
      z-index: 1;
      touch-action: none;
      
      span {
        display: inline-block;
      }
      
      &--hover {
        content: "";
        position: absolute;
        z-index: -1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }

    .button-1 {
      padding: 40px;
      font-size: 40px;
      margin-left: -40px;
      color: var(--light-green);
    }

    .desk {
      display: block !important;
    }
    .mob {
      display: none;
    }
  `}
`

function Footer({ color }) {

  return (
    <FooterCon>
      <img src={FooterLogo} className="desk footerLogo" alt="logo" />
      <img src={Logo} className="mob footerLogo" alt="logo" />
      <div className="contact mob">
        <p className="smallHeadUpper white">Let's find a way to work together</p>
        <div className="linkFoot">
          <NavLink activeClassName="menu__link--active" to="/contact" className="menu__link">
            Contact Us
            <svg width="109" height="47" viewBox="0 0 109 47" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M108.5 23.5C108.5 26.5767 107.056 29.5488 104.36 32.2971C101.662 35.0477 97.7334 37.5476 92.8393 39.6579C83.053 43.8777 69.4983 46.5 54.5 46.5C39.5017 46.5 25.947 43.8777 16.1607 39.6579C11.2666 37.5476 7.33788 35.0477 4.63982 32.2971C1.94395 29.5488 0.5 26.5767 0.5 23.5C0.5 20.4233 1.94395 17.4512 4.63982 14.7029C7.33788 11.9523 11.2666 9.4524 16.1607 7.34213C25.947 3.12231 39.5017 0.5 54.5 0.5C69.4983 0.5 83.053 3.12231 92.8393 7.34213C97.7334 9.4524 101.662 11.9523 104.36 14.7029C107.056 17.4512 108.5 20.4233 108.5 23.5Z" />
            </svg>
          </NavLink>
        </div>
      </div>
      <div className="middle">
        <div>
          <p className="smallHeadUpper white">Address</p>
          <p className="footText">
            <a href="" target="_blank" rel="noreferrer">A fully remote agency </a>
          </p>
        </div>
        <div>
          <p className="smallHeadUpper white">Email</p>
          <p className="footText">
            <a href='mailto:hello@thecatalyst.africa'>hello@thecatalyst.africa </a>
          </p>
        </div>
        <div>
          <p className="smallHeadUpper white spaceBottom">Follow us</p>
          <div className="social">
            <a className="socialimg" href="https://www.facebook.com/TheCatalystAfrica/" target="_blank" rel="noreferrer"><img src={Fb} alt="fb" /></a>
            <a className="socialimg" href="https://www.linkedin.com/company/catalyst-africa/" target="_blank" rel="noreferrer"><img src={Li} alt="li" /></a>
          </div>
        </div>
        {/* <div>
          <p className="smallHeadUpper white">Phone</p>
          <p className="footText">
            <a href='tel:+27110650500'>+27 (0) 11 065 0500 </a>
          </p>
        </div> */}
      </div>
      <div className="last">
        <p className="smallHeadUpper white desk">Let's find a way to work together</p>
        <div className="linkFoot desk">
          <NavLink activeClassName="menu__link--active" to="/contact" className="menu__link">
            Contact Us
            <svg width="109" height="47" viewBox="0 0 109 47" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M108.5 23.5C108.5 26.5767 107.056 29.5488 104.36 32.2971C101.662 35.0477 97.7334 37.5476 92.8393 39.6579C83.053 43.8777 69.4983 46.5 54.5 46.5C39.5017 46.5 25.947 43.8777 16.1607 39.6579C11.2666 37.5476 7.33788 35.0477 4.63982 32.2971C1.94395 29.5488 0.5 26.5767 0.5 23.5C0.5 20.4233 1.94395 17.4512 4.63982 14.7029C7.33788 11.9523 11.2666 9.4524 16.1607 7.34213C25.947 3.12231 39.5017 0.5 54.5 0.5C69.4983 0.5 83.053 3.12231 92.8393 7.34213C97.7334 9.4524 101.662 11.9523 104.36 14.7029C107.056 17.4512 108.5 20.4233 108.5 23.5Z" />
            </svg>
          </NavLink>
        </div>
      </div>
      <p className="copyText"><NavLink to="/privacy">POPIA</NavLink> / <NavLink to="/privacy">Privacy Policy</NavLink> / © 2022 The Catalyst Africa. All Rights Reserved</p>
    </FooterCon>
  );
}

export default Footer;