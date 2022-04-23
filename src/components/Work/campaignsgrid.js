import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { prismicClient } from '../client'
import * as Prismic from '@prismicio/client'

import media from "../../styles/media"


import { Reveal, Tween } from "react-gsap"

const CampaignsGridCon = styled.div`
  max-width: 100vw;
  padding: 0 5vw;
  margin-top: 50px;
        margin-bottom: 100px;
  a {
    text-decoration: none;
    color: black;
  }

  .caserow {
    display: block;
  }

  img {
    height: inherit;
    width: -webkit-fill-available;
    object-fit: cover;

    &.rect {
      height: 250px;
      width: 100%;
    }

    &.circ {
      height: 80vw;
      width: 80vw;
      margin: 0 5vw;
      border-radius: 50%;
    }

    &.long {
      height: 250px;
      width: 100%;
      margin-top: 100px;
    }

    &.square {
      height: 250px;
      width: 100%;
    }

    &.smallrect {
      height: 250px;
      width: 100%;
      margin-top: 0px;
    }

    &.smallsquare {
      height: 250px;
      width: 100%;
      margin-top: 0px;
    }

    &.largesquare {
      height: 250px;
      width: 100%;
      margin-top: 100px;
    }
  }

  .bottom {
    height: 75px;
    margin-bottom: 0;
    padding: 0px;
    h2 {
      color: var(--dark-yellow);
      font-size: 18px;
      line-height: 22px;
      font-weight: normal;
      margin-bottom: 0;
      margin: 0;
    }
    p {
      font-size: 14px;
      line-height: 17px;
      margin: 0;
    }
  }

  .reviewcon {
    position: relative;
    cursor: pointer;

    .outer {
      position: absolute;
      overflow: hidden;
      background: var(--dark-blue);

      &.closed {
        right: 45px;
        top: -45px;
        width: 60px;
        height: 60px;
        border-radius: 50%;

        .topLine, .reviewText {
          opacity: 0;
        }
      }
      &.open {
        right: 0;
        top: -75px;
        width: calc(90vw - 40px);
        height: 105px;
        border-radius: 25px 25px 25px 0px;
        padding: 20px 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        .topLine, .reviewText {
          transition: all .2s linear;
          transition-delay: .2s;
          opacity: 1;
        }
      }

      .topLine {
        display: flex;
        justify-content: space-between;

        .reviewer {
          display: flex;
          align-items: center;
        }

        .circle {
          width: 30px;
          height: 30px;
          background: var(--light-red);
          border-radius: 50%;
          margin-right: 5px;
        }

        .reviewerName {
          font-size: 14px;
          line-height: 14px;
          color: var(--light-blue);
          margin: 0;
        }

        .company {
          color: var(--light-blue);
          font-size: 10px;
          line-height: 10px;
        }
      }

      .reviewText {
        font-size: 12px;
        line-height: 14px;
        color: #F2F2F2;
      }
    }
  }
  
  .shortDesk {
    width: 100%;
  }

  ${media.laptop`
    padding: 150px 8vw;
    margin-top: 0;

    .caserow {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .rectcirc {
      margin-bottom: 50px;
    }

    .longsquare {
      align-items: flex-start;
    }

    img {
      height: inherit;
      width: -webkit-fill-available;
      object-fit: cover;

      &.rect {
        height: 450px;
        width: 55vw;
      }

      &.circ {
        height: 300px;
        width: 300px;
        border-radius: 50%;
      }

      &.long {
        height: 600px;
        width: 40vw;
        margin-top: 0px;
        margin-top: 50px;
      }

      &.square {
        height: 30vw;
        width: 30vw;
        margin-top: 50px;
      }

      &.smallrect {
        height: 350px;
        width: 45vw;
        margin-top: -50px;
      }

      &.smallsquare {
        height: 25vw;
        width: 35vw;
        margin-top: 250px;
      }

      &.largesquare {
        width: 40vw;
        height: 40vw;
        margin-top: 50px;
        margin-bottom: 0px;
      }
    }

    .bottom {
      height: 75px;
      margin-bottom: 0;
      padding: 0px;
      h2 {
        color: var(--dark-yellow);
        font-size: 25px;
        line-height: 30px;
        font-weight: normal;
        margin-bottom: 0;
        margin: 0;
      }
      p {
        font-size: 16px;
        line-height: 19px;
        margin: 0;
      }
    }

    .reviewcon {
      position: relative;
      cursor: pointer;

      .outer {
        position: absolute;
        overflow: hidden;
        background: var(--dark-blue);

        &.closed {
          right: 95px;
          top: -45px;
          width: 60px;
          height: 60px;
          border-radius: 50%;

          .topLine, .reviewText {
            opacity: 0;
          }
        }
        &.open {
          right: -45px;
          top: -45px;
          width: 22vw;
          height: 165px;
          border-radius: 25px 25px 25px 0px;
          padding: 20px 50px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

          .topLine, .reviewText {
            transition: all .2s linear;
            transition-delay: .2s;
            opacity: 1;
          }
        }

        .topLine {
          display: flex;
          justify-content: space-between;

          .reviewer {
            display: flex;
            align-items: center;
          }

          .circle {
            width: 30px;
            height: 30px;
            background: var(--light-red);
            border-radius: 50%;
            margin-right: 5px;
          }

          .reviewerName {
            font-size: 18px;
            line-height: 24px;
            color: var(--light-blue);
            margin: 0;
          }

          .company {
            color: var(--light-blue);
            font-size: 12px;
            line-height: 14px;
          }
        }

        .reviewText {
          font-size: 16px;
          line-height: 19px;
          color: #F2F2F2;
        }
      }
    }
  
  .shortDesc{
    width: 30vw;
  }
  `}
`




const CampaignsGrid = () => {
  const [doc, setDocData] = useState(null)


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

  return (
    <>
      <CampaignsGridCon>

        {/* Row 1 */}
        <div className="caserow rectcirc">
          <div className="caseStudy">
            {doc && doc[0] && (
              <Link
                to={{
                  pathname: `/work/${doc[0].slugs[0]}`,
                  state: doc[0]
                }}
                onClick={() => localStorage.setItem('casestudy', JSON.stringify(doc[0]))}
                onContextMenu={() => localStorage.setItem('casestudy', JSON.stringify(doc[0]))}
              >


                <img src={doc[0].data.thumbnail.url} className="rect" />

                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                  <div className="bottom">
                    <h2>{doc[0].data.title[0].text}</h2>
                    <p>{doc[0].data.services[0].text}</p>
                  </div>
                </Tween></Reveal>
              </Link>
            )}
          </div>
          <div className="caseStudy">
            <div className="review">
              {/* <img src={Divider} className="circ" />
              <div className="reviewcon" onClick={() => setReview1Open(!review1Open)}>
                <div className={review1Open ? "outer open" : "outer closed"}>
                  <div className="topLine">
                    <div className="reviewer">
                      <div className="circle" />
                      <p className="reviewerName">Name</p>
                    </div>
                    <p className="company">Company</p>
                  </div>
                  <p className="reviewText">Review text</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="caserow longsquare">
          <div className="caseStudy">
            {doc && doc[1] && (
              <Link
                to={{
                  pathname: `/work/${doc[1].slugs[0]}`,
                  state: doc[1]
                }}
                onClick={() => localStorage.setItem('casestudy', JSON.stringify(doc[1]))}
                onContextMenu={() => localStorage.setItem('casestudy', JSON.stringify(doc[1]))}
              >
                <img src={doc[1].data.thumbnail.url} className="long" />
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                  <div className="bottom">
                    <h2>{doc[1].data.title[0].text}</h2>
                    <p>{doc[1].data.services[0].text}</p>
                  </div>
                </Tween></Reveal>
              </Link>
            )}
          </div>
          <div className="caseStudy">
            {doc && doc[2] && (
              <Link
                to={{
                  pathname: `/work/${doc[2].slugs[0]}`,
                  state: doc[2]
                }}
                onClick={() => localStorage.setItem('casestudy', JSON.stringify(doc[2]))}
                onContextMenu={() => localStorage.setItem('casestudy', JSON.stringify(doc[2]))}
              >
                <img src={doc[2].data.thumbnail.url} className="square" />
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                  <div className="bottom">
                    <h2 className="shortDesc">{doc[2].data.title[0].text}</h2>
                    <p>{doc[2].data.services[0].text}</p>
                  </div>
                </Tween></Reveal>
              </Link>
            )}
          </div>
        </div>

        {/* Row 3 */}
        <div className="caserow squarerect">
          <div className="caseStudy">
            {doc && doc[3] && (
              <Link
                to={{
                  pathname: `/work/${doc[3].slugs[0]}`,
                  state: doc[3]
                }}
                onClick={() => localStorage.setItem('casestudy', JSON.stringify(doc[3]))}
                onContextMenu={() => localStorage.setItem('casestudy', JSON.stringify(doc[3]))}
              >
                <img src={doc[3].data.thumbnail.url} className="smallsquare" />
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                  <div className="bottom">
                    <h2>{doc[3].data.title[0].text}</h2>
                    <p>{doc[3].data.services[0].text}</p>
                  </div>
                </Tween></Reveal>
              </Link>
            )}
          </div>
          <div className="caseStudy">
            {doc && doc[4] && (
              <Link
                to={{
                  pathname: `/work/${doc[4].slugs[0]}`,
                  state: doc[4]
                }}
                onClick={() => localStorage.setItem('casestudy', JSON.stringify(doc[4]))}
                onContextMenu={() => localStorage.setItem('casestudy', JSON.stringify(doc[4]))}
              >
                <img src={doc[4].data.thumbnail.url} className="smallrect" />
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                  <div className="bottom">
                    <h2>{doc[4].data.title[0].text}</h2>
                    <p>{doc[4].data.services[0].text}</p>
                  </div>
                </Tween></Reveal>
              </Link>
            )}
          </div>
        </div>

        {/* Row 4 */}
        <div className="caserow squarerect">
          <div className="caseStudy">
            {doc && doc[5] && (
              <Link
                to={{
                  pathname: `/work/${doc[5].slugs[0]}`,
                  state: doc[5]
                }}
                onClick={() => localStorage.setItem('casestudy', JSON.stringify(doc[5]))}
                onContextMenu={() => localStorage.setItem('casestudy', JSON.stringify(doc[5]))}
              >
                <img src={doc[5].data.thumbnail.url} className="smallsquare" />
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                  <div className="bottom">
                    <h2>{doc[5].data.title[0].text}</h2>
                    <p>{doc[5].data.services[0].text}</p>
                  </div>
                </Tween></Reveal>
              </Link>
            )}
          </div>
          <div className="caseStudy">
            {doc && doc[6] && (
              <Link
                to={{
                  pathname: `/work/${doc[6].slugs[0]}`,
                  state: doc[6]
                }}
                onClick={() => localStorage.setItem('casestudy', JSON.stringify(doc[6]))}
                onContextMenu={() => localStorage.setItem('casestudy', JSON.stringify(doc[6]))}
              >
                <img src={doc[6].data.thumbnail.url} className="smallrect" />
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                  <div className="bottom">
                    <h2>{doc[6].data.title[0].text}</h2>
                    <p>{doc[6].data.services[0].text}</p>
                  </div>
                </Tween></Reveal>
              </Link>
            )}
          </div>
        </div>

        {/* Row 5 */}
        <div className="caserow circsquare">
          <div className="review">
            {/* <img src={Divider} className="circ" />
            <div className="reviewcon" onClick={() => setReview2Open(!review2Open)}>
              <div className={review2Open ? "outer open" : "outer closed"}>
                <div className="topLine">
                  <div className="reviewer">
                    <div className="circle" />
                    <p className="reviewerName">Name</p>
                  </div>
                  <p className="company">Company</p>
                </div>
                <p className="reviewText">Review text</p>
              </div>
            </div> */}
          </div>
          <div className="caseStudy">
            {doc && doc[0] && (
              <Link
                to={{
                  pathname: `/work/${doc[0].slugs[0]}`,
                  state: doc[0]
                }}
                onClick={() => localStorage.setItem('casestudy', JSON.stringify(doc[0]))}
                onContextMenu={() => localStorage.setItem('casestudy', JSON.stringify(doc[0]))}
              >
                <img src={doc[0].data.thumbnail.url} className="largesquare" />
                <Reveal><Tween from={{ opacity: '0' }} duration={.5}>
                  <div className="bottom">
                    <h2>{doc[0].data.title[0].text}</h2>
                    <p>{doc[0].data.services[0].text}</p>
                  </div>
                </Tween></Reveal>
              </Link>
            )}
          </div>
        </div>
      </CampaignsGridCon>
    </>
  );
}
export default CampaignsGrid;