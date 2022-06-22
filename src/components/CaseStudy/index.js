import React, { useEffect, useState } from "react"
import styled from 'styled-components'
import media from "../../styles/media";
import { useLocation, useHistory } from 'react-router-dom'
import TemplateHero from "./templateHero";
import TemplateThumbnail from "./templateThumbnail";
import WorkCarousel from "./carousle";
import { prismicClient } from '../client'
import * as Prismic from '@prismicio/client'
import { Link } from 'react-router-dom'

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
import { Tween } from "react-gsap";

const BodyCon = styled.div`
  margin: 0px 20px 100px; 
  
  h2 {
    margin: 20px 0 30px;
  }

  .results {
    text-align: center;

    .heading3 {
      margin: 50px auto 0;
    }
    .paragraph {
      margin: 0 auto 50px;
    }
  }
  
  ul {
    margin: 0 0 0 -15px;
    li {
      color: var(--dark-blue);
      span {
        color: var(--dark-blue);
      }
    }
  }

  .watch {
    color: var(--light-blue);
    text-transform: uppercase;
    text-decoration: none;
  }

  iframe {
    width: 100%;
    height: 250px;
  }

  .blurbText {
    font-weight: normal;
  }

  .heading3 {
    color: var(--dark-blue);
      font-weight: normal;
  }

  .bodyText, .paragraph {
    font-size: 18px;
    line-height: 22px;
    color: black;

    &.intro {
      /* margin: 0px 0 100px; */
    }
  }

  .blurbText {
    font-size: 25px;
    line-height: 34px;
    text-transform: uppercase;
    color: var(--dark-blue);
  }

  .intro {

    a {
      color: var(--dark-blue);
      background: transparent;
      transition: all .3s linear;
      font-size: 20px;
      line-height: 24px;
      border: 1px solid var(--dark-blue);
      height: fit-content;
      padding: 15px 20px;
      border-radius: 30px;
      text-decoration: none;

      &:hover {
        color: white;
        background: var(--dark-blue);
      }
    }
  }

  .share{
    display: none;
  }

  ${media.laptop`
    margin: 0 0 150px 0;

    display: grid;
    grid-template-columns: 1fr 7fr 1fr;

 
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
        /* margin-top: 100px; */
      }
    }

    .bodyText, .paragraph {
      font-size: 20px;
      line-height: 28px;
      color: black;

      &.intro {
        margin: 0;
        display: block;
      }
    }

    .results {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 0.2fr;

      .heading3 {
        margin: 10px 0 0;
        &:nth-child(1) {
          grid-row: 1;
          grid-column: 1;
        }
        &:nth-child(3) {
          grid-row: 1;
          grid-column: 2;
        }
        &:nth-child(5) {
          grid-row: 1;
          grid-column: 3;
        }
        &:nth-child(7) {
          grid-row: 3;
          grid-column: 1;
        }
        &:nth-child(9) {
          grid-row: 3;
          grid-column: 2;
        }
        &:nth-child(11) {
          grid-row: 3;
          grid-column: 3;
        }
        &:nth-child(13) {
          grid-row: 5;
          grid-column: 1;
        }
      }
      .paragraph {
        text-align: center;
        margin: 0 0 20px;
        &:nth-child(2) {
          grid-row: 2;
          grid-column: 1;
        }
        &:nth-child(4) {
          grid-row: 2;
          grid-column: 2;
        }
        &:nth-child(6) {
          grid-row: 2;
          grid-column: 3;
        }
        &:nth-child(8) {
          grid-row:4;
          grid-column: 1;
        }
        &:nth-child(10) {
          grid-row: 4;
          grid-column: 2;
        }
        &:nth-child(12) {
          grid-row: 4;
          grid-column: 3;
        }
        &:nth-child(14) {
          grid-row: 6;
          grid-column: 3;
        }
      }
    }

    iframe {
      height: 600px;
    }

    .blurbText {
      font-size: 30px;
      line-height: 30px;
      color: var(--dark-blue);
      font-weight: normal;
    }

    .intro {
      display: flex;
      justify-content: space-between;
      margin: 100px 0 100px;

      &.small {
        max-width: 50%;
      }

      /* .intro {
        max-width: 50%;
      } */

      a {
        color: var(--dark-blue);
        font-size: 20px;
        line-height: 24px;
      }
    }

    .bodyCopy {
      width: 68vw;
    }
  `}
`

const NextLink = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 0 0px;
  display: flex;
  justify-content: center;
  a {
    color: var(--dark-blue);
    font-size: 40px;
    line-height: 50px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;;
    position: relative;
    width: fit-content;

    &:after {    
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 3px;
      left: 0%;
      position: absolute;
      background: var(--dark-blue);
      transition: width 0.3s ease 0s;
      width: 0;
    }

    svg {
      transition: all .3s linear 0.3s;

      path {
        fill: var(--dark-blue);
        transform: translateX(0px);
        transition: all .3s linear 0.3s;
      }
    }

    &:hover:after { 
      width: 80%; 
      left: 0; 
    }

    &:hover {
      svg {
        background: var(--dark-blue);

        path {
          fill: white;
          transform: translateX(10px);
        }
      }
    }
  }

  svg {
    border: 2px solid var(--dark-blue);
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  ${media.laptop`
  width: 68vw;
  text-align: center;
  margin: 0 0 100px;
  display: flex;
  justify-content: center;
  a {
    color: var(--dark-blue);
    font-size: 100px;
    line-height: 100px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;;
    position: relative;
    width: fit-content;

    &:after {    
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 3px;
      left: 0%;
      position: absolute;
      background: var(--dark-blue);
      transition: width 0.3s ease 0s;
      width: 0;
    }

    svg {
      transition: all .3s linear 0.3s;

      path {
        fill: var(--dark-blue);
        transform: translateX(0px);
        transition: all .3s linear 0.3s;
      }
    }

    &:hover:after { 
      width: 80%; 
      left: 0; 
    }

    &:hover {
      svg {
        background: var(--dark-blue);

        path {
          fill: white;
          transform: translateX(10px);
        }
      }
    }
  }

  svg {
    border: 2px solid var(--dark-blue);
    border-radius: 50%;
    width: 100px;
    height: 100px;
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

function CaseStudy() {
  const [pageLoad, setPageLoad] = useState(true)
  const location = useLocation();
  const history = useHistory();

  var query = location.pathname.split('/')[2]
  var [caseStudy, setCaseStudy] = useState({})
  var [nextcaseStudy, setnextCaseStudy] = useState({})
  const [pageUrl, setPageUrl] = useState('')

  if (typeof window !== 'undefined') {
    if (pageUrl === '') {
      setPageUrl(window.location)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await prismicClient.query(
        Prismic.Predicates.at('document.type', 'casestudy')
      )
      if (response) {
        response.results.forEach(function callback(res, index) {
          if (res.slugs[0] === query) {
            setCaseStudy(res)
            if (index + 1 !== response.results.length) {
              setnextCaseStudy(response.results[index + 1])
            } else {
              setnextCaseStudy(response.results[0])
            }
          }
        });
      }
    }
    fetchData()
  }, [])

  const changeNext = () => {
    history.push(`/work/${nextcaseStudy.slugs[0]}`)
    history.go(0)
  }

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

      {caseStudy && caseStudy.data && (
        <TemplateHero info={caseStudy} />
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
            {caseStudy && caseStudy.data && (
              <TemplateThumbnail info={caseStudy} />
            )}
            <div className="bodyCopy">
              <div className="intro">
                <p className={caseStudy && caseStudy.data && caseStudy.data.websitelink.url ? "bodyText intro small" : "bodyText intro"}>
                  {caseStudy && caseStudy.data && caseStudy.data.introduction[0].text}
                </p>

                {caseStudy && caseStudy.data && caseStudy.data.websitelink.url && (
                  <a href={caseStudy && caseStudy.data && caseStudy.data.websitelink.url} target="_blank" rel="noreferrer" className="link subHeading">Visit website</a>
                )}
              </div>

              <br /><br />

              {caseStudy && caseStudy.data && caseStudy.data.videolink.url && (
                <>
                  {/* <a className="watch bodyText" href={caseStudy && caseStudy.data && caseStudy.data.videolink.url} target="_blank" rel="noreferrer">Watch the video here</a> */}
                  <iframe
                    src={caseStudy.data.videolink.url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                  <br /><br /><br />
                  <br /><br /><br />
                </>
              )}

              <h2 className="blurbText">The Result</h2>
              {caseStudy && caseStudy.data && caseStudy.data.result[0].type === 'heading3' && (
                <div className="results">
                  {caseStudy.data.result.map((item, index) => { return (<p key={index} className={item.type}>{item.text}</p>) })}
                </div>
              )}
              {caseStudy && caseStudy.data && caseStudy.data.result[0].type !== "heading3" && (
                <ul>
                  {caseStudy.data.result.map((item, index) => { return (<li key={index} className={item.type}><span>{item.text}</span></li>) })}
                </ul>
              )}

              <br /><br />

              <h2 className="blurbText">The Insight</h2>
              {caseStudy && caseStudy.data && caseStudy.data.insight.map((item, index) => { return (<p key={index} className={item.type}>{item.text}</p>) })}

              <br /><br />

              <h2 className="blurbText">The Strategy</h2>
              {caseStudy && caseStudy.data && caseStudy.data.strategy.map((item, index) => { return (<p key={index} className={item.type}>{item.text}</p>) })}

              <br /><br />

            </div>

            {caseStudy && caseStudy.data && (
              <WorkCarousel info={caseStudy} />
            )}

            {nextcaseStudy && nextcaseStudy.slugs && (
              <NextLink>
                <Link onClick={() => changeNext()}>
                  Next Project &nbsp;
                  {/* <span> */}
                  <svg width="80" height="83" viewBox="0 0 80 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44.7744 15.4219L41.2672 19.046L60.1217 38.5547H9.95086V43.6953H60.1217L41.2672 63.204L44.7744 66.8281L69.6484 41.125L44.7744 15.4219Z" fill="#1A1A9E" />
                  </svg>
                  {/* </span> */}
                </Link>
              </NextLink>
            )}
          </div>
        </Tween>


      </BodyCon>
    </>
  );
}
export default CaseStudy;