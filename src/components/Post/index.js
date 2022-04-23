import React, { useEffect, useState } from "react"
import styled from 'styled-components'
import media from "../../styles/media";
import TemplateHero from "./templateHero";
import { useLocation } from 'react-router-dom'
import { prismicClient } from '../client';
import * as Prismic from '@prismicio/client'
import BlogCarousel from "./carousle";
import { Tween } from "react-gsap";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton
} from 'react-share'

import Facebook from '../../images/social/fb.svg'
import Linkedin from '../../images/social/li.svg'
import Twitter from '../../images/social/twitter.svg'
import FacebookHov from '../../images/social/hoverfb.svg'
import LinkedinHov from '../../images/social/hoverli.svg'
import TwitterHov from '../../images/social/hovertwitter.svg'

const BodyCon = styled.div`
.progress, .share {
  display: none;
}
  ${media.laptop`
    margin: 0 0 150px 0;

    display: grid;
    grid-template-columns: 1fr 7fr 1fr;
    

    .progress {
      width: 16vw;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      
      .outer {
        width: 5vw;
        background: var(--light-blue);
        height: 4px;
        border-radius: 4px;
        position: sticky;
        left: 0;
        top: 85vh;
        /* margin-top: 150px; */

        #scroll-progress {
          width: var(--scrolled);
          height: 4px;
          border-radius: 4px;
          background: var(--dark-blue);
        }
      }
    }

    .share {
      width: 16vw;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;

      p {
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.05px;
        color: var(--dark-blue);
        text-transform: uppercase;
      }


      .img {
        width: 30px;
        height: 30px;
        background-position: center;
        background-size: contain;
        margin-right: 5px;

        &.fb {
          transition: all .3s linear;
          background-image: url(${Facebook});
          &:hover {
            background-image: url(${FacebookHov});
          }
        }
        &.li {
          transition: all .3s linear;
          background-image: url(${Linkedin});
          &:hover {
            background-image: url(${LinkedinHov});
          }
        }
        &.tw {
          transition: all .3s linear;
          background-image: url(${Twitter});
          &:hover {
            background-image: url(${TwitterHov});
          }
        }
      }

      .move {
        position: sticky;
        height: fit-content;
        left: 0;
        top: 75vh;
        /* margin-top: 150px; */
      }
    }
  `}
`

const PostCon = styled.div`
  margin: 150px 20px 150px;
  h2 {
    margin: 50px 0 30px;
  }
  span {
    color: var(--light-red);
    font-weight: bold;
  }

  .heading2 {
    font-size: 30px;
    line-height: 36px;
    color: var(--dark-blue);
  }

  .paragraph {
    font-size: 18px;
    line-height: 22px;
    color: black;
  }

  .heading6 {
    color: var(--dark-blue);
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
  }

  ${media.laptop`
    margin: 100px 0 200px;

    .heading2 {
      font-size: 30px;
      line-height: 30px;
      color: var(--dark-blue);
    }

    .paragraph {
      font-size: 20px;
      line-height: 28px;
    }

    .heading6 {
      color: var(--dark-blue);
      font-size: 30px;
      line-height: 36px;
    }

  `}
`

const LoadCon = styled.div`
  background: var(--dark-blue);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  transition: all .5s linear;

  &.hide {
    left: -100%;
  }
`

function Post() {
  const [pageLoad, setPageLoad] = useState(true)
  const [pageUrl, setPageUrl] = useState('')

  let location = useLocation()

  if (typeof window !== 'undefined') {
    if (pageUrl === '') {
      setPageUrl(window.location)
    }
  }

  const [doc, setDocData] = useState(null)
  const [currentBlog, setCurrentBlog] = useState(null)

  useEffect(() => {
    // if (!location.state) {
    const fetchData = async () => {
      const response = await prismicClient.query(
        Prismic.Predicates.at('document.type', 'blogpost')
      )
      if (response) {
        setDocData(response.results)
      }
    }
    fetchData()
    // }
  }, [])

  var slug = location.pathname.replace("/blog/", "")

  if (doc) {
    var newArray = doc.filter(function (el) {
      return el.data.slug === slug
    });
  }

  useEffect(() => {
    if (location.state) {
      setCurrentBlog(location.state)
    } else if (doc) {
      setCurrentBlog(newArray[0])
    }
  }, [doc])

  useEffect(() => {
    // return function cleanup() {
    //   ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    // };

    setPageLoad(false)

    setTimeout(() => {
      setPageLoad(true)
    }, 2000);
  }, [])

  const height =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;

  window.addEventListener('scroll', () => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    document.documentElement.style.setProperty('--scrolled', `${(scrollTop / height) * 100}%`);
  });

  return (
    <>
      <LoadCon className={pageLoad ? 'hide' : 'show'}></LoadCon>

      {currentBlog && (
        <TemplateHero info={currentBlog} />
      )}
      <BodyCon>
        <div className="share">
          <div className="move">
            <p>Share</p>
            <FacebookShareButton
              url={pageUrl}
            >
              <div className="img fb" />
            </FacebookShareButton>
            <LinkedinShareButton
              url={pageUrl}
            >
              <div className="img li" />
            </LinkedinShareButton>
            <TwitterShareButton
              url={pageUrl}
            // quote={pageContext.title}
            >
              <div className="img tw" />
            </TwitterShareButton>
          </div>
        </div>
        <Tween from={{ opacity: '0' }} duration={1}>
          <div>
            {currentBlog && (
              <>
                <PostCon>

                  {currentBlog.data.introduction.map((item, index) => { return (<p key={index} className={item.type}>{item.text}</p>) })}

                  <br /><br />

                  {currentBlog && currentBlog.data && (
                    <BlogCarousel info={currentBlog} />
                  )}

                  {currentBlog.data.blogcontent.map((item, index) => { return (<p key={index} className={item.type}>{item.text}</p>) })}

                </PostCon>
              </>
            )}
          </div>
        </Tween>

        <div className="progress">
          <div className="outer">
            <div id="scroll-progress"></div>
          </div>
        </div>
      </BodyCon>
    </>
  );
}
export default Post;