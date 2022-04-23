import React from "react"
import styled from 'styled-components'
import media from '../../styles/media'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Collapse, { Panel } from 'rc-collapse'
import 'rc-collapse/assets/index.css'

import ValCirc from '../../images/valuecirc.svg'
import Mark from '../../images/redicon.svg'
import { Reveal, Tween } from "react-gsap";

const ValuesCon = styled.div`
  padding: 25px 5vw;
  background: var(--dark-red);
  position: relative;
  
  .headingTextL {
    font-size: 24px;
    line-height: 43px;
  }
  h2 {
    color: var(--light-red);
    font-size: 5vw;
    font-weight: normal;
  }

  .brandimg {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
  }

  .desktop {
    display: none;
  }

  .mob {
    display: block;

    .rc-collapse {
      background-color: transparent;
      border: none;
      border-bottom: none;
      border-radius: 0;
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;
      .rc-collapse-item {
        padding: 1em 0 1em;
        border-top: none;
        border-bottom: none;
        .rc-collapse-header {
          color: var(--light-red);
          padding: 0.5em 0;
          font-size: 28px;
          line-height: 34px;
          text-transform: uppercase;
          i {
            margin-right: 0px;
          }

          svg {
            right: 5vw !important;
            margin: 0 !important;
          }
        }
        .rc-collapse-header:focus {
          outline: none;
        }
        .rc-collapse-content {
          background-color: transparent;
          color: white;
          font-size: 20px;
          line-height: 24px;
          padding: 0;
        }
      }
      .rc-collapse-item-active {
        .rc-collapse-header {
          background-image: url(${ValCirc});
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
    }
  }

  ${media.laptop`
    padding: 0 0 0 8vw;
    height: 850px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url(${Mark});
    background-repeat: no-repeat;

    .headingTextL {
      font-size: 48px;
      line-height: 57px;
      margin: 0;
    }

    .mob {
      display: none;
    }

    .desktop {
      display: block;
    }

    .menu__link {
        display: inline-block;
        text-decoration: none;
        position: relative;
        padding: 0px 0;
        text-decoration: underline
      }

      .menu__link {

        overflow: visible;
        svg {
          fill: none;
          stroke: var(--light-red);
          stroke-width: 0.5;
          stroke-miterlimit: 10;
          stroke-dasharray: 338;
          stroke-dashoffset: 338;
          stroke-linecap: round;
          position: absolute;
          top: 50%;
          left: 50%;
          width: calc(100% + 60px);
          height: 200px;
          opacity: 0;
          transform: translate(-50%, -50%) rotate(8deg);
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

    .values {
      margin: 0px 0 50px;
    }

    .react-tabs {
      z-index: 6;
      display: grid;
      grid-template-columns: 1fr 1fr;
      color: white;
      font-size: 40px;
      line-height: 48px;
    }

    .react-tabs__tab-list {
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
      font-size: 62px;
      line-height: 74px;
      .menu__link {
        color: #f2f2f2;
        opacity: .5;
      }
    }

    .react-tabs__tab {
      height: 100px;
      list-style: none;
      padding: 12px 6px;
      cursor: pointer;
      /* color: #bbb; */

      &:focus-visible {
        outline: none;
      }
    }

    .react-tabs__tab--selected {
      background: transparent;
      border-color: transparent;
      border-left: none;
      .menu__link {
        color: white;
        opacity: 1;
        text-decoration: none;
      }

      .menu__link {
        overflow: visible;
        svg {
          fill: none;
          stroke: var(--light-red);
          stroke-width: 0.5;
          stroke-miterlimit: 10;
          stroke-dasharray: 338;
          stroke-dashoffset: 338;
          stroke-linecap: round;
          position: absolute;
          top: 50%;
          left: 50%;
          width: calc(100% + 60px);
          height: 200px;
          opacity: 0;
          transform: translate(-50%, -50%) rotate(8deg);
          transition: stroke-dashoffset 0s 0.2s, opacity 0.2s;
          z-index: 1;
          overflow: visible;
          stroke-dashoffset: 0;
          opacity: 1;
          transition: opacity 0s, stroke-dashoffset 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
      }
    }

    .react-tabs__tab-panel {
      display: none;
    }

    .react-tabs__tab-panel--selected {
      display: flex;
      /* align-items: center; */
      font-size: 2.25vw;
      padding: 40px 8vw 0 8vw;
      background: var(--light-red);
      position: absolute;
      width: 25vw;
      right: 0;
      bottom: -20px;
      height: 500px;
      font-size: 30px;
      line-height: 35px;
      text-decoration: none;


      span {
        font-size: 18px;
        line-height: 24px;
        color: var(--dark-red);
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: normal;
      }
    }
  `}
`

function expandIcon({ isActive }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="plus"
      width="20"
      height="20"
      viewBox="0 0 160 160"
      fill="currentColor"
      style={{
        margin: '0  0.5em',
        position: 'absolute',
        right: '2em',
        transition: 'transform .3s',
        transform: `rotate(${isActive ? 135 : 0}deg)`,
        transformOrigin: 'center',
      }}
    >
      <rect className="vertical-line" x="70" width="20" height="160" />
      <rect className="horizontal-line" y="70" width="160" height="20" />
    </svg>
  )
}

function Values() {
  return (
    <ValuesCon>
      <p className="smallHeadUpper white">Our Values</p>
      {/* <img src={Mark} className="mark" alt="mark" /> */}
      <Reveal><Tween from={{ opacity: '0' }} duration={.5}><h2 className="headingTextL">Who we are as Catalysts</h2></Tween></Reveal>
      <div className="values desktop">
      <Tabs>
        <TabList>
          <Tab>
            <p activeClassName="menu__link--active" className="menu__link">
            <Reveal><Tween from={{ opacity: '0' }} duration={.5}><span> We are creators</span></Tween></Reveal>
              <svg width="109" height="47" viewBox="0 0 109 47" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M108.5 23.5C108.5 26.5767 107.056 29.5488 104.36 32.2971C101.662 35.0477 97.7334 37.5476 92.8393 39.6579C83.053 43.8777 69.4983 46.5 54.5 46.5C39.5017 46.5 25.947 43.8777 16.1607 39.6579C11.2666 37.5476 7.33788 35.0477 4.63982 32.2971C1.94395 29.5488 0.5 26.5767 0.5 23.5C0.5 20.4233 1.94395 17.4512 4.63982 14.7029C7.33788 11.9523 11.2666 9.4524 16.1607 7.34213C25.947 3.12231 39.5017 0.5 54.5 0.5C69.4983 0.5 83.053 3.12231 92.8393 7.34213C97.7334 9.4524 101.662 11.9523 104.36 14.7029C107.056 17.4512 108.5 20.4233 108.5 23.5Z"/>
              </svg>
            </p>
          </Tab>
          <Tab>
            <p activeClassName="menu__link--active" className="menu__link">
            <Reveal><Tween from={{ opacity: '0' }} duration={.5}><span>Africa is home</span></Tween></Reveal>
              <svg width="109" height="47" viewBox="0 0 109 47" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M108.5 23.5C108.5 26.5767 107.056 29.5488 104.36 32.2971C101.662 35.0477 97.7334 37.5476 92.8393 39.6579C83.053 43.8777 69.4983 46.5 54.5 46.5C39.5017 46.5 25.947 43.8777 16.1607 39.6579C11.2666 37.5476 7.33788 35.0477 4.63982 32.2971C1.94395 29.5488 0.5 26.5767 0.5 23.5C0.5 20.4233 1.94395 17.4512 4.63982 14.7029C7.33788 11.9523 11.2666 9.4524 16.1607 7.34213C25.947 3.12231 39.5017 0.5 54.5 0.5C69.4983 0.5 83.053 3.12231 92.8393 7.34213C97.7334 9.4524 101.662 11.9523 104.36 14.7029C107.056 17.4512 108.5 20.4233 108.5 23.5Z"/>
              </svg>
            </p>
          </Tab>
          <Tab>
            <p activeClassName="menu__link--active" className="menu__link">
            <Reveal><Tween from={{ opacity: '0' }} duration={.5}><span>Above all, we care</span></Tween></Reveal>
              <svg width="109" height="47" viewBox="0 0 109 47" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M108.5 23.5C108.5 26.5767 107.056 29.5488 104.36 32.2971C101.662 35.0477 97.7334 37.5476 92.8393 39.6579C83.053 43.8777 69.4983 46.5 54.5 46.5C39.5017 46.5 25.947 43.8777 16.1607 39.6579C11.2666 37.5476 7.33788 35.0477 4.63982 32.2971C1.94395 29.5488 0.5 26.5767 0.5 23.5C0.5 20.4233 1.94395 17.4512 4.63982 14.7029C7.33788 11.9523 11.2666 9.4524 16.1607 7.34213C25.947 3.12231 39.5017 0.5 54.5 0.5C69.4983 0.5 83.053 3.12231 92.8393 7.34213C97.7334 9.4524 101.662 11.9523 104.36 14.7029C107.056 17.4512 108.5 20.4233 108.5 23.5Z"/>
              </svg>
            </p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
             <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
            <p>
              <span>We are creators</span><br/><br/>
              The catalysts of connections and the
              accelerators of growth. Our experience
              and curiosity make us think beyond the
              norm, finding ground-breaking solutions
              that focus on results.
            </p>
            </Tween></Reveal>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
             <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
            <p>
              <span>Africa is home</span><br/><br/>
              We understand the land, the people, the
              environment and the unique challenges
              that African businesses face.
            </p>
            </Tween></Reveal>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
             <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
            <p>
              <span>Above all, we care</span><br/><br/>
              We’re not just a marketing agency, but
              rather collaborators in your success.
              As your strategic partner, we share our
              knowledge and experience with passion
              and purpose. With us, it’s personal.
            </p>
            </Tween></Reveal>
          </div>
        </TabPanel>
      </Tabs>
      </div>
      <div className="values mob">
        <Collapse accordion={true} expandIcon={expandIcon}>
          <Panel
            header="We are creators"
            headerClass="my-header-class mouse-link"
          >
            The catalysts of connections and the
            accelerators of growth. Our experience
            and curiosity make us think beyond the
            norm, finding ground-breaking solutions
            that focus on results.
          </Panel>
          <Panel
            header="Africa is home"
            headerClass="my-header-class mouse-link"
          >
            We understand the land, the people, the
            environment and the unique challenges
            that African businesses face.
          </Panel>
          <Panel
            header="Above all, we care"
            headerClass="my-header-class mouse-link"
          >
            We’re not just a marketing agency, but
            rather collaborators in your success.
            As your strategic partner, we share our
            knowledge and experience with passion
            and purpose. With us, it’s personal.
          </Panel>
        </Collapse>
      </div>

      <img src={Mark} className="brandimg mob" alt="brandmark" />
    </ValuesCon>
  );
}
export default Values;