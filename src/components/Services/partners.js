import React, { useState, useEffect } from "react"
import * as Prismic from '@prismicio/client'
import { prismicClient } from "../client"

import styled from 'styled-components'
import media from "../../styles/media"

const PartnersCon = styled.div`
  background-color: var(--light-green);
  padding: 25px 20px 50px;
  h2, p {
    margin: 0;
  }
  p {
    text-transform: uppercase;
    color: var(--dark-green);
    margin-bottom: 40px;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
  }
  margin-top: -2px;
  .partners {
    display: grid;
    align-items: center;
    img {
      width: auto;
      height: 40px;
      margin-right: 70px;
      margin-bottom: 50px;
      object-fit: cover;
      &.square {
        height: 60px;
      }
    }
  }

  ${media.laptop`
    padding: 10vh 80px 25vh;
    p {
      font-size: 18px;
      line-height: 22px;
    }

    .partners {
      display: flex;
      align-items: center;
      img {
        width: auto;
        height: 70px;
        margin-right: 70px;
        margin-bottom: 0;
        &.square {
          height: 80px;
        }
      }
    }
  `}
`

function Partners() {
  const [doc, setDocData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await prismicClient.query(
        Prismic.Predicates.at('document.type', 'partnerlogo')
      )
      if (response) {
        setDocData(response.results)
      }
    }
    fetchData()
  }, [])

  const renderPartners = () => {
    if (doc) {
      return doc.sort((a, b) => b.data.order - a.data.order).map((partner) => {
        return (
          <a href={partner.data.link.url} target="_blank" rel="noreferrer" key={partner.id}>
            <img src={partner.data.logo.url} className={partner.data.size} alt={partner.data.name} />
          </a>
        )
      })
    }
  }

  return (
    <>
      <PartnersCon>
        <p>Our Partners </p>
        <div className="partners">
          {renderPartners()}
        </div>
      </PartnersCon>
    </>
  );
}
export default Partners;