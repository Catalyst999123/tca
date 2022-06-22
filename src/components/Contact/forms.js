import React, { useState } from "react"
import styled from 'styled-components'
import media from '../../styles/media'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProjectForm from "./projectform";
import PressForm from "./pressform";
import JobForm from "./jobform";
import Select, { components } from 'react-select'


import 'rc-collapse/assets/index.css'

const DropdownIndicator = props => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.1328 2.38383L13.3653 0.616328L7.99906 5.98258L2.63281 0.616328L0.865312 2.38383L7.99906 9.51758L15.1328 2.38383Z" fill="#1A1A9E" />
        </svg>

      </components.DropdownIndicator>
    )
  );
};


const FormsCon = styled.div`
  padding: 50px 20px;
  padding-top: 0;
  position: relative;
  
  p {
  }
  h2 {
    color: var(--light-blue);
    font-size: 5vw;
    font-weight: normal;
  }

  .mob {
    display: none;

    .rc-collapse {
      background-color: transparent;
      border: none;
      border-bottom: 1px solid rgba(178, 178, 178, 0.5);
      border-radius: 0;
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;
      .rc-collapse-item {
        padding: 1em 0 1em;
        border-top: none;
        border-bottom: 1px solid rgba(178, 178, 178, 0.5);
        .rc-collapse-header {
          font-family: 'neue-haas-grotesk-display-bold';
          padding: 0.5em 0;
          font-size: 18px;
          line-height: 27px;
          color: var(--black);
          i {
            margin-right: 20px;
          }
        }
        .rc-collapse-header:focus {
          outline: none;
        }
        .rc-collapse-content {
          background-color: transparent;
          color: var(--black);
          padding: 0;
        }
      }
    }
  }

  .mob {
    display: block;
  }
  .desktop {
    display: none;
  }

  .textDesc {
    color: var(--dark-blue);
    text-decoration: none;
    font-size: 14px;
    line-height: 34px;
    margin: 30px 0;
    padding-top: 15px;
    width: fit-content;
    &.address {
      margin: 60px 0;
    }
    &.lined {
      border-bottom: 2px solid white;
    }
    &.mob {
      width: 100%;
      display: block;
      margin-bottom: 30px;
      max-width: 450px;
      font-size: 18px !important;
    }
    &.desk {
      width: 25vw;
      display: none;
    }
  }

  .formSelect {
    &:focus-visible {
      outline: none;
    }
    >div {
      border: none;
      background: transparent;
    &:focus-visible {
      outline: none;
    }
      /* >div {
        padding: 0;
      >div {
      font-size: 22px;
      line-height: 22px;
      color: var(--dark-blue);
      } */
      }
    }

  /*   .css-1okebmr-indicatorSeparator {
      display: none;
    }
  }
  
  #react-select-3-listbox {
    background: var(--dark-blue);
    margin: 0;
    border-radius: none;
    color: white !important;
    padding: 20px 0;
    >div {
    background: var(--dark-blue);
    color: white !important;
    }
  } */

  .intro {
    width: 100%;
  }

  ${media.laptop`
  padding: 0 16vw 100px;
  .intro {
    width: 500px;
  }


    .mob {
      display: none;
    }

    .desktop {
      display: block;
    }

    .Forms {

      margin: 100px 0 50px;
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
          stroke: var(--dark-blue);
          stroke-width: 0.5;
          stroke-miterlimit: 10;
          stroke-dasharray: 338;
          stroke-dashoffset: 338;
          stroke-linecap: round;
          position: absolute;
          top: 50%;
          left: 50%;
          width: 25vw;
          height: 170px;
          opacity: 0;
          transform: translate(-50%, -50%) rotate(-8deg);
          transition: stroke-dashoffset 0s 0.2s, opacity 0.2s;
          z-index: 1;
          overflow: visible;
        }

        &.project {
          svg {
          transform: translate(-45%, -50%) rotate(-8deg);
          }
        }

        &.press {
          svg {
          transform: translate(-20%, -50%) rotate(-8deg);
          }
        }
      }

      .menu__link:hover svg {
        stroke-dashoffset: 0;
        opacity: 1;
        transition: opacity 0s, stroke-dashoffset 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }

      .textDesc {
     font-size: 25px !important;
    
    }
    }

    .textDesc {
      margin: 0;
      font-size: 18px;
      line-height: 30px;
      text-decoration: none;
      margin-bottom: 20px;
      &.address {
        margin: 0px 0;
      }
    }

    .react-tabs {
      z-index: 6;
      display: grid;
      grid-template-columns: 1fr 1fr;
      color: var(--dark-blue);
    }

    .react-tabs__tab-list {
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
      font-size: 40px;
      line-height: 40px;
      color: var(--dark-blue);
    }

    .react-tabs__tab {
      height: 60px;
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
      width: 30vw;

      .menu__link {
        overflow: visible;
        svg {
          fill: none;
          stroke: var(--dark-blue);
          stroke-width: 0.5px;
          stroke-miterlimit: 10;
          stroke-dasharray: 338;
          stroke-dashoffset: 338;
          stroke-linecap: round;
          position: absolute;
          top: 50%;
          left: 50%;
          width: 25vw;
          height: 170px;
          opacity: 0;
          transform: translate(-50%, -50%) rotate(-8deg);
          transition: stroke-dashoffset 0s 0.2s, opacity 0.2s;
          z-index: 1;
          overflow: visible;
          stroke-dashoffset: 0;
          opacity: 1;
          transition: opacity 0s, stroke-dashoffset 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        &.project {
          svg {
          transform: translate(-45%, -50%) rotate(-8deg);
          }
        }

        &.press {
          svg {
          transform: translate(-20%, -50%) rotate(-8deg);
          }
        }
      }
    }

    .react-tabs__tab-panel {
      display: none;
    }

    .react-tabs__tab-panel--selected {
      display: flex;
      align-items: center;
      font-size: 2.25vw;
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

function Forms() {
  const [formType, setFormType] = useState('project')

  const options = [
    { value: 'project', label: 'Start a project' },
    { value: 'press', label: 'Press' },
    { value: 'job', label: 'Become a catalyst' }
  ]

  const styles = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: "#f2f2f2",
      fontSize: "18px",
      lineHeight: "18px",
      padding: "20px",
      marginTop: 0,
      background: "#1A1A9E",

    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 3,
      textAlign: "left",
    }),
    menuList: (provided) => ({
      ...provided,
      background: "#1A1A9E",
      paddingTop: 0,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: '#1A1A9E',
      fontSize: "22px",
      lineHeight: "22px",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: '#1A1A9E',
      fontSize: "22px",
      lineHeight: "22px",
    }),
    control: (provided, state) => ({
      ...provided,
      border: 0,
      boxShadow: 'none'
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      padding: "2px 0px"
    })
  };

  return (
    <FormsCon>
      {/* <img src={Mark} className="mark" alt="mark" /> */}
      <div className="intro">
        <p className="smallHeadUpper black">contact form</p>
        <p className="textDesc">We invite you find out more about our work and join the conversation. Write to us, write about us or become part of the team.</p>
      </div>
      <div className="Forms desktop">
        <Tabs>
          <TabList>
            <Tab>
              <p activeClassName="project menu__link--active" className="project menu__link">
                Start a project
                <svg width="109" height="47" viewBox="0 0 109 47" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M108.5 23.5C108.5 26.5767 107.056 29.5488 104.36 32.2971C101.662 35.0477 97.7334 37.5476 92.8393 39.6579C83.053 43.8777 69.4983 46.5 54.5 46.5C39.5017 46.5 25.947 43.8777 16.1607 39.6579C11.2666 37.5476 7.33788 35.0477 4.63982 32.2971C1.94395 29.5488 0.5 26.5767 0.5 23.5C0.5 20.4233 1.94395 17.4512 4.63982 14.7029C7.33788 11.9523 11.2666 9.4524 16.1607 7.34213C25.947 3.12231 39.5017 0.5 54.5 0.5C69.4983 0.5 83.053 3.12231 92.8393 7.34213C97.7334 9.4524 101.662 11.9523 104.36 14.7029C107.056 17.4512 108.5 20.4233 108.5 23.5Z" />
                </svg>
              </p>
            </Tab>
            <Tab>
              <p activeClassName="press menu__link--active" className="press menu__link">
                Press
                <svg width="109" height="47" viewBox="0 0 109 47" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M108.5 23.5C108.5 26.5767 107.056 29.5488 104.36 32.2971C101.662 35.0477 97.7334 37.5476 92.8393 39.6579C83.053 43.8777 69.4983 46.5 54.5 46.5C39.5017 46.5 25.947 43.8777 16.1607 39.6579C11.2666 37.5476 7.33788 35.0477 4.63982 32.2971C1.94395 29.5488 0.5 26.5767 0.5 23.5C0.5 20.4233 1.94395 17.4512 4.63982 14.7029C7.33788 11.9523 11.2666 9.4524 16.1607 7.34213C25.947 3.12231 39.5017 0.5 54.5 0.5C69.4983 0.5 83.053 3.12231 92.8393 7.34213C97.7334 9.4524 101.662 11.9523 104.36 14.7029C107.056 17.4512 108.5 20.4233 108.5 23.5Z" />
                </svg>
              </p>
            </Tab>
            <Tab>
              <p activeClassName="menu__link--active" className="menu__link">
                Become a catalyst
                <svg width="109" height="47" viewBox="0 0 109 47" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M108.5 23.5C108.5 26.5767 107.056 29.5488 104.36 32.2971C101.662 35.0477 97.7334 37.5476 92.8393 39.6579C83.053 43.8777 69.4983 46.5 54.5 46.5C39.5017 46.5 25.947 43.8777 16.1607 39.6579C11.2666 37.5476 7.33788 35.0477 4.63982 32.2971C1.94395 29.5488 0.5 26.5767 0.5 23.5C0.5 20.4233 1.94395 17.4512 4.63982 14.7029C7.33788 11.9523 11.2666 9.4524 16.1607 7.34213C25.947 3.12231 39.5017 0.5 54.5 0.5C69.4983 0.5 83.053 3.12231 92.8393 7.34213C97.7334 9.4524 101.662 11.9523 104.36 14.7029C107.056 17.4512 108.5 20.4233 108.5 23.5Z" />
                </svg>
              </p>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="panel-content">
              <ProjectForm />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
              <PressForm />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
              <JobForm />
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <div className="Forms mob">
        <Select
          className="formSelect"
          options={options}
          styles={styles}
          defaultValue={options[0]}
          onChange={x => setFormType(x.value)}
          components={{ DropdownIndicator, IndicatorSeparator: () => null }}
        />
        {formType === 'project' && (
          <ProjectForm />
        )}
        {formType === 'press' && (
          <PressForm />
        )}
        {formType === 'job' && (
          <JobForm />
        )}
      </div>
    </FormsCon>
  );
}
export default Forms;