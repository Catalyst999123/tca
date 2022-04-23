import React, { useState, useEffect } from "react"
import * as Prismic from '@prismicio/client'
import { prismicClient } from "../client"

import styled from 'styled-components'
import Collapse, { Panel } from 'rc-collapse'
import 'rc-collapse/assets/index.css'
import media from "../../styles/media"

const ServiceListCon = styled.div`
  padding: 25px 20px;
  h2, p {
    margin: 0;
  }
  p {
    text-transform: uppercase;
    color: var(--dark-green);
    font-weight: bold;
  }
  h2 {
    font-weight: normal; 
    color: var(--dark-green);;
    width: 430px;
    font-size: 42px;
  }

  .list {
    margin: 50px 0;
    .rc-collapse {
      background: transparent;
      border: none;
      height: fit-content;
      border-bottom: 1px solid var(--dark-green);
      border-radius: 0;

      &.second {
        margin-top: -1px;
      }
      .rc-collapse-item {
        border: none;
        .rc-collapse-header {
          border-top: none;
          border-top: 1px solid var(--dark-green);
          border-radius: 0;
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
          height: 70px;
          color: var(--dark-green);;
          font-size: 18px;
          line-height: 22px;
          &:focus {
            outline: none;
          }
          svg {
            background-color: var(--dark-green);
            padding: 10px;
            border-radius: 50%;
            width: 12px !important;
            height: 12px;
          }
        }
        .rc-collapse-content {
          background-color: transparent;
          border: none;
          color: #909090;
          font-size: 18px;
          line-height: 28px;
          border-top: none;
          margin-right: 60px;
          margin-bottom: 20px;
        }
      }
    }
  }

  ${media.laptop`
    padding: 50px 80px 100px;
    .list {
      margin: 50px 0 100px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 50px;
      .rc-collapse {

        &.second {
          margin-top: 0px;
        }
        .rc-collapse-item {
          .rc-collapse-header {
            font-size: 30px;
            line-height: 36px;
            height: 90px;
            svg {
              width: 20px !important;
              height: 20px;
            }
          }
          .rc-collapse-content {
          font-size: 20px;
          line-height: 28px;
          }
        }
      }
    }
  `}
`

function ServiceList() {
  const [doc, setDocData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await prismicClient.query(
        Prismic.Predicates.at('document.type', 'services')
      )
      if (response) {
        setDocData(response.results)
      }
    }
    fetchData()
  }, [])

  const renderServicesLeft = () => {
    if (doc) {
      return doc.filter((item) => item.data.column === 'left').map((service) => {
        return (
          <Panel header={service.data.servicename} headerClass="my-header-class mouse-link">
            {service.data.description}
          </Panel>
        )
      })
    }
  }
  const renderServicesRight = () => {
    if (doc) {
      return doc.filter((item) => item.data.column === 'right').map((service) => {
        return (
          <Panel header={service.data.servicename} headerClass="my-header-class mouse-link">
            {service.data.description}
          </Panel>
        )
      })
    }
  }

  function expandIcon({ isActive }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="plus"
        width="20"
        height="20"
        viewBox="0 0 160 160"
        fill="white"
        style={{
          margin: '0  0.5em',
          transition: 'transform .3s',
          transform: `rotate(${isActive ? 45 : 0}deg)`,
          transformOrigin: 'center'
        }}
      >
        <rect
          className="vertical-line"
          x="70"
          width="20"
          height="160"
          style={{
          }}
        />
        <rect className="horizontal-line" y="70" width="160" height="20" />
      </svg>
    );
  }

  return (
    <ServiceListCon>
      <p className="subHeading">Our Services </p>
      <div className="list">
        <Collapse accordion={true} expandIcon={expandIcon}>
          {renderServicesLeft()}
        </Collapse>
        <Collapse accordion={true} expandIcon={expandIcon} className="second">
          {renderServicesRight()}
        </Collapse>
      </div>
    </ServiceListCon>
  );
}
export default ServiceList;