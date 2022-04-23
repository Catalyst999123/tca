import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { prismicClient } from '../client'
import * as Prismic from '@prismicio/client'

import Footer from '../footer'
import media from "../../styles/media"

const CampaignsCon = styled.div`
  max-width: 100vw;
  margin-bottom: 150px;
  padding: 0 10px;
  a {
    text-decoration: none;
  }
  .case {
    height: auto;
    .top {
      height: 250px;
      padding: 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .bottom {
      height: fit-content;
      padding: 0 10px;
      margin-bottom: 50px;
      h2 {
        color: var(--dark-blue);
        font-size: 22px;
        line-height: 26px;
        font-weight: normal;
      }
      p {
        color: #909090;
        font-size: 18px;
        line-height: 22px;
      }
    }
  }
  
  ${media.laptop`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 5vw;
    min-height: 75vh;
    padding:var(--gutter);
    .case {
      .top {
        padding: 0px;
        overflow: hidden;
        img {
          transition: all .75s linear;
        }
      }
      .bottom {
        height: 150px;
        margin-bottom: 0;
        padding: 0px;
        h2 {
          color: var(--dark-blue);
          font-size: 18px;
          line-height: 24px;
          font-weight: normal;
          margin-bottom: 0;
        }
        p {
          font-size: 16px;
          margin-top: 5px;
        }
      }

      &:hover {
        .top {
          img {
            transform: scale(1.125);
          }
        }
      }
    }
  `}
`

const Campaigns = () => {
  const [doc, setDocData] = useState(null)

  // localStorage.setItem(key, JSON.stringify(state));

  useEffect(() => {
    const fetchData = async () => {
      const response = await prismicClient.query(
        Prismic.Predicates.at('document.type', 'casestudy')
      )
      if (response) {
        setDocData(response.results)
      }
    }
    fetchData()
  }, [])

  const renderWorks = () => {
    return doc.sort((a, b) => b.data.importance - a.data.importance).map((work) => {
      return (
        <div className="case" key={work.id}>
          <Link
            to={{
              pathname: `/work/${work.slugs[0]}`,
              state: work
            }}
            onClick={() => localStorage.setItem('casestudy', JSON.stringify(work))}
            onContextMenu={() => localStorage.setItem('casestudy', JSON.stringify(work))}
          >
            <div className="top">
              <img src={work.data.thumbnail.url} alt="case-study" />
            </div>
            <div className="bottom">
              <h2>{work.data.title[0].text}</h2>
              <p>{work.data.description[0].text}</p>
            </div>
          </Link>
        </div>
      )
    })
  }

  return (
    <>
      <CampaignsCon>
        {doc && (
          renderWorks()
        )}
      </CampaignsCon>
    </>
  );
}
export default Campaigns;