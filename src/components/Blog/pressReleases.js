import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { prismicClient } from '../client';
import * as Prismic from '@prismicio/client'
// import { Date, Link, RichText } from 'prismic-reactjs'

import media from "../../styles/media"

const PressReleasesCon = styled.div`
  width: 90vw;
  padding: 50px 5vw 100px;
  margin-bottom: 150px;

  a {
    font-size: 18px;
    line-height: 22px;
    text-decoration: none;
    color: #B08712;
    background: transparent;
    outline: none;
    border: none;
    width: fit-content;
  }

  .press {
    align-content: center;
    background-color: #f4f4f4;
    padding: 0px;
    margin: 20px 0;
    width: calc(100vw - 40px);
    height: auto;
    display: block;
    align-content: center;
    background-color: #f4f4f4;
    margin: 20px 0;
    width: 90vw;
    height: 366px;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    grid-column-gap: 50px;
    padding-right: 20px;
    margin: 20px 0;
    .press-image {
      height: 366px;
      width: 100%;
      object-fit: cover;
    }
      
    .text {
      display: grid;
      padding: 20px;
    }
    .top {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-top: 0;
      h1 {
        font-size: 24px;
        line-height: 36px;
        font-weight: normal;
        color: #000000;
        margin: 0 0 20px;
      }
    }
    p {
      margin-bottom: 20px;
      color: #909090;
    }
  }

  ${media.laptop`
    margin-bottom: 100px;
    a {
      font-size: 18px;
      line-height: 22px;
      color: #B08712;
      background: transparent;
      outline: none;
      border: none;
      width: fit-content;
      text-decoration: none;
      display: flex;
      align-items: center;
      .more {
        span {
          margin-top: 4px;
          margin-left: 4px;
          transition: all .3s linear;
        }
      }
      &:hover {
        .more {
          span {
            margin-left: 6px;
          }
        }
      }
    }
    .press {
      align-content: center;
      background-color: #f4f4f4;
      margin: 20px 0;
      width: 90vw;
      height: 366px;
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      grid-column-gap: 50px;
      padding-right: 20px;
      margin: 20px 0;
      .press-image {
        height: 366px;
        width: 100%;
        object-fit: cover;
      }
      .text {
        display: grid;
        padding: 20px 10px 20px 0;
      }
      .top {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-top: 0;
        h1 {
          font-size: 30px;
          line-height: 36px;
          font-weight: normal;
          color: #000000;
          margin: 0 0 20px;
        }
      }
      p {
        margin-bottom: 20px;
        color: #909090;
      }
    }
  `}
`

const PressReleases = () => {
  const [doc, setDocData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await prismicClient.query(
        Prismic.Predicates.at('document.type', 'blogpost')
      )
      if (response) {
        setDocData(response.results.reverse())
      }
    }
    fetchData()
  }, [])

  const renderPosts = () => {
    return doc.map((post) => {
      return (
        <Link
          to={{
            pathname: `/blog/${post.data.slug}`,
            state: post
          }}
        >
          <div className="press" key={post.id}>
            <img className="press-image" src={post.data.thumbnail.url} alt="press" />
            <div className="text">
              <div className="top">
                <h1>
                  {post.data.title[0].text}
                </h1>
              </div>
              <p className="bodyText">
                {post.data.description[0].text}
              </p>
              <div className="more">
                Read More <span>&rarr;</span>
              </div>
            </div>
          </div>
        </Link>
      )
    })
  }

  return (
    <PressReleasesCon>
      {doc && (
        renderPosts()
      )}
    </PressReleasesCon>
  );
}
export default PressReleases;