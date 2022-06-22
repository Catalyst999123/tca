import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { prismicClient } from '../client'
import * as Prismic from '@prismicio/client'

import Footer from '../footer'
import media from "../../styles/media"
import { Reveal, Tween } from "react-gsap"

const BlogsCon = styled.div`
  max-width: 100vw;
  margin-top: 0px;
  padding: 0 5vw 50px;
  a {
    text-decoration: none;
  }
  .case {
    background: white;
    padding: 15px;
    height: auto;
    border-top: 2px solid var(--dark-blue);
    padding-top: 30px;
    &:first-of-type {
      border-top: none;
      padding-top: 0;
    }
    .topInfo {
      display: flex;
      justify-content: space-between;
      p {
        font-size: 12px;
        line-height: 18px;
        color: black;
        margin: 0;
      }
    }
    .top {
      height: 250px;
      padding: 0;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .readtime {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 46px;
        height: 46px;
        border-radius: 50%;
        background: var(--dark-blue);
        color: #f2f2f2;
        font-size: 12px;
        line-height: 14px;
        font-weight: bold;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .bottom {
      height: fit-content;
      padding: 0 0px;
      margin-bottom: 30px;
      h2 {
        color: var(--dark-blue);
        font-size: 20px;
        line-height: 24px;
        font-weight: normal;
      }
      p {
        color: black;
        font-size: 14px;
        line-height: 18px;
        margin: 5px 0;
      }
    }
  }
  
  ${media.laptop`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 8vw;
    /* padding: 50px 6vw 150px; */
    padding: var(--gutter-bloghome);
    .case {
      border-top: none;
      padding-top: 0px;
      &:first-of-type {
        border-top: none;
        padding-top: 0;
      }
      .topInfo {
        display: flex;
        justify-content: space-between;
        p {
          font-size: 18px;
          line-height: 28px;
          color: black;
          margin: 0;
        }
      }
      .top {
        padding: 0px;
        overflow: hidden;
        img {
          transition: all .75s linear;
        }
      }
      .bottom {
        height: fit-content;
        margin-bottom: 0;
        padding: 0px;
        h2 {
          color: var(--dark-blue);
          font-size: 25px;
          line-height: 30px;
          font-weight: normal;
          margin-bottom: 0;
        }
        p {
          color: black;
          font-size: 18px;
          line-height: 24px;
          margin: 10px 0;
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

const Blogs = () => {
  const [doc, setDocData] = useState(null)

  useEffect(() => {
    console.log('ran');
    if (doc === null || doc !== null && doc.length < 1) {
      setDocData(JSON.parse(localStorage.getItem('blogs')))
    }
  }, [doc])

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const renderWorks = () => {
    return doc.sort((a, b) => b.data.importance - a.data.importance).map((work) => {

      const day = work.data.date[0].text.substring(0, 2)
      var longMonth = months[parseInt(work.data.date[0].text.substring(3, 5))]
      const year = work.data.date[0].text.substring(6, 10)

      return (
        <div className="case" key={work.id}>
          <Link
            to={{
              pathname: `/blog/${work.slugs[0]}`,
              state: work
            }}
            onClick={() => localStorage.setItem('casestudy', JSON.stringify(work))}
            onContextMenu={() => localStorage.setItem('casestudy', JSON.stringify(work))}
          >
            <div className="topInfo">
              <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                <p>Article</p>
              </Tween></Reveal>
              <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                <p>{day} {longMonth} {year}</p>
              </Tween></Reveal>
            </div>
            <div className="top">
              <img src={work.data.thumbnail.url} alt="case-study" />
              <div className="readtime">{work.data.read_time[0].text}</div>
            </div>
            <div className="bottom">
              <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                <h2>{work.data.title[0].text}</h2>
              </Tween></Reveal>
              <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                <p>{work.data.description[0].text.substring(0, 100)}...</p>
              </Tween></Reveal>
            </div>
          </Link>
        </div>
      )
    })
  }

  return (
    <>
      <BlogsCon>
        {doc !== null && doc.length > 0 && (
          renderWorks()
        )}
      </BlogsCon>
    </>
  );
}
export default Blogs;