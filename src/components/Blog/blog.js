import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { prismicClient } from '../client'
import * as Prismic from '@prismicio/client'

import Footer from '../footer'
import media from "../../styles/media"
import { Reveal, Tween } from "react-gsap"

const BlogsCon = styled.div`
  .worksDiv {
    max-width: 100vw;
    padding: 0 10px;
  }
  a {
    text-decoration: none;
  }
  .filter {
    background: var(--light-blue);
    width: auto;
    display: flex;
    flex-direction: column;
    padding: 0 10vw 100px;
    margin-bottom: 100px;
    margin-top: -250px;
    align-items: flex-start;

    button {
      background: transparent;
      border: none;
      color: var(--dark-blue);
      font-size: 28px;
      line-height: 30px;
      margin-right: 0px;
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

    .menu__link.active  {
      text-decoration: underline;
    }
  }
  .case {
    background: white;
    padding: 15px;
    height: auto;
    margin: 0 0 50px;
    .top {
      padding: 0px;
      overflow: hidden;
      position: relative;
      img {
        width: 100%;
        height: 300px;
        transition: all .75s linear;
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
    .bottom {
      height: fit-content;
      margin-bottom: 0;
      padding: 0px;
      h2 {
        color: var(--dark-blue);
        font-size: 16px;
        line-height: 19px;
        font-weight: normal;
        margin-bottom: 0;
      }
      p {
        color: black;
        font-size: 12px;
        line-height: 18px;
        margin: 10px 0;
      }
    }
  }
  
  ${media.laptop`
    .worksDiv {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 4vw;
      padding: 100px 16vw 150px;
    }

    .filter {
      background: var(--light-blue);
      width: 100%;
      height: fit-content;
      padding: 0 16vw 50px;
      margin-bottom: 0px;
      margin-top: 0px;
      flex-direction: row;

      button {
        background: transparent;
        border: none;
        color: var(--dark-blue);
        font-size: 40px;
        line-height: 50px;
        margin-right: 35px;
        width: 155px;
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
          stroke-width: 1;
          stroke-miterlimit: 10;
          stroke-dasharray: 338;
          stroke-dashoffset: 338;
          stroke-linecap: round;
          position: absolute;
          top: 50%;
          left: 50%;
          width: calc(100% + 35px);
          height: fit-content;
          opacity: 0;
          transform: translate(-50%, -50%);
          transition: stroke-dashoffset 0s 0.2s, opacity 0.2s;
          z-index: 1;
          overflow: visible;
        }
      }

      .menu__link.active {
        text-decoration: none;
      }

      .menu__link:hover svg, .menu__link.active svg {
        stroke-dashoffset: 0;
        opacity: 1;
        transition: opacity 0s, stroke-dashoffset 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
    .case {
      .top {
        padding: 0px;
        overflow: hidden;
        img {
          width: 100%;
          height: 300px;
          transition: all .75s linear;
        }
      }
      .topInfo {
        p {
        font-size: 18px;
        line-height:24px;
        }
      }
      .bottom {
        height: auto;
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
          font-size: 16px;
          line-height: 19px;
          color: black;
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
  const [type, setType] = useState('All')
  const [posts, setAllPosts] = useState([]);
  const [filter, setFilter] = useState('all')

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const getPostData = (data) => {
    return data.map((work) => {
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
                <p>{work.data.type[0].text}</p>
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
                <p>{work.data.description[0].text.substring(0, 100)}...</p>
              </Tween></Reveal>
            </div>
          </Link>
        </div>
      )
    })
  }

  const getAllPosts = async () => {
    const response = await prismicClient.query(
      Prismic.Predicates.at('document.type', 'blogpost')
    )
    if (response) {

      localStorage.setItem('blogNo', response.results.length)
      setDocData(response.results)

      // const res = await axios.get(`https://vast-taiga-04969.herokuapp.com/http://sam-rockey.squarespace.com/all-content/?format=json`)
      const data = response.results

      console.log(data);
      var posts = []


      if (filter === 'all') {
        for (const post of data) {
          posts.push(post)
        }
      } else {
        for (const post of data) {
          if (post.data.type[0].text.includes(filter)) {
            posts.push(post)
          }
        }
      }

      // For displaying Data
      const postData = getPostData(posts)

      // Using Hooks to set value
      setAllPosts(postData)
    }
  }


  // localStorage.setItem(key, JSON.stringify(state));

  useEffect(() => {
    const fetchData = async () => {
      const response = await prismicClient.query(
        Prismic.Predicates.at('document.type', 'blogpost')
      )
      if (response) {

        localStorage.setItem('blogNo', response.results.length)
        setDocData(response.results)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    getAllPosts()
  }, [filter])

  return (
    <>
      <BlogsCon>
        <div className="filter">
          <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
            <button onClick={() => setFilter('all')} className={filter === 'all' ? "active menu__link" : "menu__link"}>
              All
              <svg width="109" height="47" viewBox="0 0 109 47" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M108.5 23.5C108.5 26.5767 107.056 29.5488 104.36 32.2971C101.662 35.0477 97.7334 37.5476 92.8393 39.6579C83.053 43.8777 69.4983 46.5 54.5 46.5C39.5017 46.5 25.947 43.8777 16.1607 39.6579C11.2666 37.5476 7.33788 35.0477 4.63982 32.2971C1.94395 29.5488 0.5 26.5767 0.5 23.5C0.5 20.4233 1.94395 17.4512 4.63982 14.7029C7.33788 11.9523 11.2666 9.4524 16.1607 7.34213C25.947 3.12231 39.5017 0.5 54.5 0.5C69.4983 0.5 83.053 3.12231 92.8393 7.34213C97.7334 9.4524 101.662 11.9523 104.36 14.7029C107.056 17.4512 108.5 20.4233 108.5 23.5Z" />
              </svg>
            </button>
          </Tween></Reveal>
          <Reveal><Tween from={{ opacity: '0' }} duration={.5} delay={.5}>
            <button onClick={() => setFilter('Article')} className={filter === 'Article' ? "active menu__link" : "menu__link"}>
              Articles
              <svg width="109" height="47" viewBox="0 0 109 47" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M108.5 23.5C108.5 26.5767 107.056 29.5488 104.36 32.2971C101.662 35.0477 97.7334 37.5476 92.8393 39.6579C83.053 43.8777 69.4983 46.5 54.5 46.5C39.5017 46.5 25.947 43.8777 16.1607 39.6579C11.2666 37.5476 7.33788 35.0477 4.63982 32.2971C1.94395 29.5488 0.5 26.5767 0.5 23.5C0.5 20.4233 1.94395 17.4512 4.63982 14.7029C7.33788 11.9523 11.2666 9.4524 16.1607 7.34213C25.947 3.12231 39.5017 0.5 54.5 0.5C69.4983 0.5 83.053 3.12231 92.8393 7.34213C97.7334 9.4524 101.662 11.9523 104.36 14.7029C107.056 17.4512 108.5 20.4233 108.5 23.5Z" />
              </svg>
            </button>
          </Tween></Reveal>
          <Reveal><Tween from={{ opacity: '0' }} duration={.5} delay={1}>
            <button onClick={() => setFilter('Press')} className={filter === 'Press' ? "active menu__link" : "menu__link"}>
              Press
              <svg width="109" height="47" viewBox="0 0 109 47" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M108.5 23.5C108.5 26.5767 107.056 29.5488 104.36 32.2971C101.662 35.0477 97.7334 37.5476 92.8393 39.6579C83.053 43.8777 69.4983 46.5 54.5 46.5C39.5017 46.5 25.947 43.8777 16.1607 39.6579C11.2666 37.5476 7.33788 35.0477 4.63982 32.2971C1.94395 29.5488 0.5 26.5767 0.5 23.5C0.5 20.4233 1.94395 17.4512 4.63982 14.7029C7.33788 11.9523 11.2666 9.4524 16.1607 7.34213C25.947 3.12231 39.5017 0.5 54.5 0.5C69.4983 0.5 83.053 3.12231 92.8393 7.34213C97.7334 9.4524 101.662 11.9523 104.36 14.7029C107.056 17.4512 108.5 20.4233 108.5 23.5Z" />
              </svg>
            </button>
          </Tween></Reveal>
        </div>
        <br />
        <div className="worksDiv">
          {/* {doc && (
          renderWorks()
        )} */}
          {posts}
        </div>
      </BlogsCon>
    </>
  );
}
export default Blogs;