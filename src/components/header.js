import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import styled from 'styled-components'
import media from '../styles/media'
import { useLocation } from 'react-router-dom'

import Logo from '../images/logosvg.svg'
import FooterLogo from '../images/footerLogo.svg'

import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";

const HeadNav = styled.nav`
  padding:var(--gutter-head);
  width: 84vw;
  z-index: 998;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  border: none;
  position: absolute;

  button {
    position: fixed;
    right: 8vw;
    top: 20px;
  }

  a {
    color: white;
    text-decoration: none;
  }

  .items {
    display: none;
  }

  .line,
  .box {
    transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .menuLogo {
    opacity: 1;
    z-index: 7;
    transition: all .25s linear;
    transition-delay: 1.5s;

    &.open {
      transition-delay: 0s;
      opacity: 0;
    }
  }

  .menuIcon {
    border: none;
    background-color: var(--color);
    padding: 5px 10px;
    transition: all .3s linear;
    &:active {
      outline: none;
    }

    &.open {
      background-color: var(--light-blue);
    }
  }

  .line {
    height: 2px;
    width: 11px;
    background: #fff;
    margin: 4px auto 0 0;
  }

  .menu__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
  .menu__wrapper > div {
    width: 20px;
    height: 24px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .menu__wrapper > div:hover, .menu__wrapper > div:focus {
    outline: none;
  }
  .menu__wrapper > span {
    display: inline-block;
    text-align: center;
    line-height: 1.2;
    padding: 20px;
    margin-top: auto;
  }

  .menu__item--doner {
    flex-direction: column;

    .line {
      position: absolute;
      width: 20px;
      &:nth-child(1) {
        top: 10px;
      }
      &:nth-child(2) {
        top: 16px;
      }
      &:nth-child(3) {
        top: 22px;
      }
    }
  }
  
  /* .menu__item--doner .line:nth-child(2) {
    width: 25px;
  }
  .menu__item--doner .line:nth-child(3) {
    width: 19px;
  } */

  .menuIcon  {
    width: 20px;
    height: 20px;
    padding: 20px 20px 17px;
    
    &.open {
      .menu__item--doner .line {
        position: absolute;
        &:nth-child(1) {
          top: 16px;
        }
        &:nth-child(2) {
          top: 16px;
        }
        &:nth-child(3) {
          top: 16px;
        }
      }
    }
  }

  img {
    height: 60px;
  }

  .mob {
    display: block;
  }
  .desk {
    display: none;
  }

  ${media.laptop`
    padding:var(--gutter-head);
    width: 84vw;

    button {
      position: fixed;
      right: 8vw;
      top: 40px;
    }

    .items {
      display: flex;
      justify-content: space-between;
      align-self: center;
      a {
        font-size: 18px;
        margin-left: var(--gutter-head);
        background-image: linear-gradient(white, white), linear-gradient(transparent, transparent);
        background-size: 0 2px, auto;
        background-repeat: no-repeat;
        background-position: left bottom;
        transition: all .3s ease-out;
        &:hover {
          color: white;
          text-decoration: none;
          /* background-size: 100% 2px, auto; */
        }
      }
    }

    .menuIcon {
      width: 40px;
      height: 40px;
      padding: 0;
      margin-top: -5px;
      /* display: none; */
    }

    img {
      height: 40px;
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
        stroke: var(--color);
        stroke-width: 2;
        stroke-miterlimit: 10;
        stroke-dasharray: 338;
        stroke-dashoffset: 338;
        stroke-linecap: round;
        position: absolute;
        top: 50%;
        left: 50%;
        width: calc(100% + 60px);
        opacity: 0;
        transform: translate(-50%, -50%);
        transition: stroke-dashoffset 0s 0.2s, opacity 0.2s;
        z-index: -1;
        overflow: visible;
      }
    }

    .menu__link:hover svg {
      stroke-dashoffset: 0;
      opacity: 1;
      transition: opacity 0s, stroke-dashoffset 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .mob {
      display: none;
    }
    .desk {
      display: block;
    }
  `}
`

const MenuCon = styled.div`
  position: fixed;
  width: 84vw;
  height: calc(var(--vh, 1vh) * 100);
  background: var(--dark-blue);
  color: white;
  top: -100vh;
  transition: all 0.5s linear;
  z-index: 997;
  padding: 0 8vw;
  display: flex;
  align-items: center;

  .items {
    display: block;

    .pages {
      display: flex;
      flex-direction: column;

      a {
        font-size: 54px;
        color: var(--light-blue);
        text-decoration: none;

        sup {
          color: white;
          font-size: 12px;
        }
      }
    }

    .contacts {
      margin-top: 25%;
      p, a {
        color: white;
        font-size: 18px;
        line-height: 22px;
        text-decoration: none;
      }

      .social {
        a {
          margin-right: 20px;
        }

        img {
          width: 30px;
        }
      }
    }
  }

  &.open {
    top: 0;
    transition-delay: 0;
  }

  &.closed {
    top: -100%;
    transition-delay: .5 s;
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

  ${media.laptop`
    padding:0 8vw;
    .items {
      width: 100%;
      display: grid;
      grid-template-columns:1.5fr 1fr;

      .line-wrap {
        overflow: hidden;
        height: 97px;
      }
      .line-wrap-small {
        overflow: hidden;
        height: 30px;

        a {
          text-decoration: none;
        }
      }
      .line-wrap-social {
        overflow: hidden;
        height: 40px;
        margin-top: -40px;
        margin-left: -40px;
        padding: 40px;
      }

      /* .line {
        margin-top: 0;
      } */

      .pages {
        display: flex;
        flex-direction: column;
        justify-content: center;

        a {
          font-size: 95px;
          line-height: 80px;
          color: var(--light-blue);
          text-decoration: none;
          transition: all .3s linear;
          margin-bottom: 2.5vh;

          sup {
            color: white;
            font-size: 24px;
          }

          &:hover {
            color: white;
          }
        }
      }

      .contacts {
        margin-top: 25%;
        p, a {
          color: white;
          font-size: 20px;
          line-height: 28px;
          transition: all .3s linear;
          /* max-width: 300px; */

          &:hover {
            opacity: .6;
          }
        }

        .social {
          a {
            margin-right: 20px;
          }

          img {
            width: 40px;
            transition: all .3s linear;

            &:hover {
              opacity: .6;
            }
          }
        }
      }
    }

    &.closed {
      top: -100%;
      transition-delay: 2s;

      .line-wrap {
        .line {
          transition: all .2s linear;
          transition-delay: .2s;
          margin-top: 95px;
          &:hover {
            transform: rotate(1.5deg);
          }

          &.second {
            transition-delay: .4s;
          &:hover {
            transform: rotate(-1.25deg);
          }
          }
          &.third {
            transition-delay: .6s;
          &:hover {
            transform: rotate(1.25deg);
          }
          }
          &.fourth {
            transition-delay: .8s;
          &:hover {
            transform: rotate(-1.3deg);
          }
          }
          &.fifth {
            transition-delay: 1s;
          &:hover {
            transform: rotate(1.2deg);
          }
          }
        }
      }
      .line-wrap-small {
        .line {
          transition: all .2s linear;
          transition-delay: 1s;
          margin-top: 30px;

          &.second {
            transition-delay: 1.2;
          }
          &.third {
            transition-delay: 1.4;
          }
        }
      }
      .line-wrap-social {
        .line {
          transition: all .2s linear;
          transition-delay: 1.6s;
          margin-top: 40px;
        }
      }
    }

    &.open {
      .line-wrap {
        .line {
          transition: all .3s linear;
          transition-delay: .5s;
          margin-top: 0px;

          &.second {
            transition-delay: .7s;
          }
          &.third {
            transition-delay: .9s;
          }
          &.fourth {
            transition-delay: 1.1s;
          }
          &.fifth {
            transition-delay: 1.3s;
          }
        }
      }
      .line-wrap-small {
        .line {
          transition: all .3s linear;
          transition-delay: 1.75s;
          margin-top: 0px;

          &.second {
            transition-delay: 2;
          }
          &.third {
            transition-delay: 2.25;
          }
        }
      }
      .line-wrap-social {
        .line {
          transition: all .3s linear;
          transition-delay: 2.25s;
          margin-top: 0px;
        }
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
      padding: 40px;
      font-size: 40px;
      margin-left: -40px;
      color: var(--light-green);
    }
  `}
`

const Header = () => {
  const [ open, setOpen ] = useState(false)
  const location = useLocation();

  const [caseNo, setCaseNo] = useState(0)
  const [blogNo, setBlogNo] = useState(0)

  // useInViewEffect(() => {
    if(caseNo !== localStorage.getItem('casestudyNo')) {
    setCaseNo(localStorage.getItem('casestudyNo'))
    }
    if(blogNo !== localStorage.getItem('blogNo')) {
    setBlogNo(localStorage.getItem('blogNo'))
    }
  // }, [])

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  if (location.pathname.replace("/","") === '')  {
    document.documentElement.style.setProperty('--color', `var(--light-green)`);
  } else if (location.pathname.replace("/","") === 'about')  {
    document.documentElement.style.setProperty('--color', `var(--light-red)`);
  } else if (location.pathname.replace("/","") === 'services') {
    document.documentElement.style.setProperty('--color', `var(--dark-green)`);
  } else if (location.pathname.includes('blog') && location.pathname.length < 6) {
    document.documentElement.style.setProperty('--color', `var(--dark-blue)`);
  } else if (location.pathname.includes('blog') && location.pathname.length > 6) {
    document.documentElement.style.setProperty('--color', `var(--dark-blue)`);
  } else if (location.pathname.includes('work') && location.pathname.length < 6) {
    document.documentElement.style.setProperty('--color', `var(--dark-yellow)`);
  } else if (location.pathname.includes('work') && location.pathname.length > 6) {
    document.documentElement.style.setProperty('--color', `var(--dark-blue)`)
  } else if (location.pathname.includes('privacy') && location.pathname.length > 6) {
    document.documentElement.style.setProperty('--color', `var(--dark-blue)`)
  } else if (location.pathname.replace("/","") === 'contact') {
    document.documentElement.style.setProperty('--color', `var(--light-blue)`);
  } else {
    document.documentElement.style.setProperty('--color', `var(--light-blue)`);
  }

  return (
    <>
    <HeadNav>
      <NavLink exact activeClassName="menu__link--active" to="/" className="menu__link">
        <img className={open ? 'menuLogo desk open' : 'menuLogo desk'} src={Logo} alt="logo"  />
        <img className={open ? 'menuLogo mob open' : 'menuLogo mob'} src={FooterLogo} alt="logo"  />
      </NavLink>
      <button className={open ? 'menuIcon open' : 'menuIcon'} onClick={() => setOpen(!open)}>
        <div className="menu__wrapper">
          <div className="menu__item--doner" tabIndex="2">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </button>
    </HeadNav>

    <MenuCon className={open ? 'open' : 'closed'}>
      {/* <Reveal repeat> */}
        {/* <Tween from={{opacity: 0}} duration={.2}> */}
          <div className="items">
            <div className="pages">
              <MouseParallaxContainer>
                <MouseParallaxChild factorX={-0.002} factorY={0.002}>
                <div className='line-wrap'>
                  {/* <Tween from={{ marginTop: '95px' }} duration={.5}> */}
                  <div className='line'>
                    <NavLink exact activeClassName="menu__link--active" to="/" onClick={() => setOpen(!open)}>
                      Home
                    </NavLink>
                  </div>
                  {/* </Tween> */}
                </div>
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.001} factorY={-0.003}>
                <div className='line-wrap'>
                {/* <Tween from={{ marginTop: '95px' }} duration={.5} delay={.25}> */}
                  <div className='line second'>
                    <NavLink exact activeClassName="menu__link--active" to="/about" onClick={() => setOpen(!open)}>
                      Agency
                    </NavLink>
                  </div>
                {/* </Tween> */}
                </div>
                </MouseParallaxChild>
                <MouseParallaxChild factorX={-0.003} factorY={0.003}>
                <div className='line-wrap'>
                  {/* <Tween from={{ marginTop: '95px' }} duration={.5} delay={.5}> */}
                  <div className='line third'>
                    <NavLink exact activeClassName="menu__link--active" to="/work" onClick={() => setOpen(!open)}>
                      Work<sup>{caseNo}</sup>
                    </NavLink>
                  </div>
                {/* </Tween> */}
                </div>
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.003} factorY={-0.002}>
                <div className='line-wrap'>
                  {/* <Tween from={{ marginTop: '95px' }} duration={.5} delay={.75}> */}
                  <div className='line fourth'>
                    <NavLink exact activeClassName="menu__link--active" to="/blog" onClick={() => setOpen(!open)}>
                      Blog<sup>{blogNo}</sup>
                    </NavLink>
                  </div>
                {/* </Tween> */}
                </div>
                </MouseParallaxChild>
                <MouseParallaxChild factorX={-0.002} factorY={0.004}>
                <div className='line-wrap'>
                {/* <Tween from={{ marginTop: '95px' }} duration={.5} delay={1}> */}
                  <div className='line fifth'>
                    <NavLink exact activeClassName="menu__link--active" to="/contact" onClick={() => setOpen(!open)}>
                      Contact
                    </NavLink>
                  </div>
                {/* </Tween> */}
                </div>
                </MouseParallaxChild>
              </MouseParallaxContainer>
            </div>

            <div className="contacts"></div>
          </div>
         {/* </Tween>  */}
      {/* </Reveal> */}
    </MenuCon>
    </>
  );
}
export default Header;