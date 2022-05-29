import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { prismicClient } from '../client'
import * as Prismic from '@prismicio/client'

import media from "../../styles/media"
import Arrow from '../../images/arrow-white.svg'
import BrandMark from '../../images/yellowbrandmark.svg'



import { Reveal, Tween } from "react-gsap"

const CampaignsGridCon = styled.div`
  max-width: 100vw;
  padding: 0 5vw;
  margin-top: 50px;
        margin-bottom: 100px;
  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }

  h2, p, a {
    color: #fff;
  }

  .caserow {
    display: block;
  }

  .caseStudy {
      margin: 20px;
      background-color: #FCC71A;
      display: flex;
      padding: 23px;
      flex-direction: column;
      justify-content: space-between;
    }

   .work-brandmark{
     height: 150px;
    margin-right: -23px;
    margin-bottom: -24px;
   }

  .learn-more-container {
    display: flex; 
    align-items: center;
    p{
      margin-right: 20px;
    }
    img {
      width: 20px;
    }
  }

  .learn-more-cta {
    display: flex;
    border-width: .5px;
    border-color: #fff;
    padding: 5px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border-style: solid;
    align-items: center;
    justify-content: center;
}

${media.tablet` 
padding-top: 150px;
    margin-top: 0;
.caserow {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 5px;
      grid-row-gap: 30px;
    }

    .work-brandmark{
     height: 200px;
    margin-right: -23px;
    margin-bottom: -24px;
   }
`}
  
  

  ${media.laptop`
    padding-top: 150px;
    margin-top: 0;

    .caserow {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 10px;
      grid-row-gap: 30px;
    }

    .work-brandmark{
     height: 200px;
    margin-right: -23px;
    margin-bottom: -24px;
   }

    .caseStudy {
      height: 400px;
      width: 400px;
      display: flex;
      padding: 23px;
      flex-direction: column;
      justify-content: space-between;
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
        <div className="caserow">
          {(doc || []).map(d => (
            <div key={d.id} className="caseStudy">
              <Reveal>
                <Tween from={{ opacity: '0' }} duration={.5}>
                  <h2>{d.data.title[0].text}</h2>
                </Tween>
              </Reveal>

              <Reveal>
                <Tween from={{ opacity: '0' }} duration={.5}>
                  <p>{d.data.services[0].text}</p>
                </Tween>
              </Reveal>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <Link
                    to={{
                      pathname: `/work/${d.slugs[0]}`,
                      state: d
                    }}
                    onClick={() => localStorage.setItem('casestudy', JSON.stringify(d))}
                    onContextMenu={() => localStorage.setItem('casestudy', JSON.stringify(d))}
                  >
                    <Reveal>
                      <Tween from={{ opacity: '0' }} duration={.5}>
                        <div className="learn-more-container">
                          <p>Learn more</p>
                          <div className="learn-more-cta">
                            <img src={Arrow} alt="learn more" />
                          </div>
                        </div>

                      </Tween>
                    </Reveal>
                  </Link>
                </div>
                <img src={BrandMark} className="work-brandmark" alt="TCA" />
              </div>


            </div>
          ))}

        </div>
        {/*   <div className="caseStudy">
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
              </div> /}
            </div>
          </div> */}


        {/* Row 2 */}
        {/*  <div className="caserow">
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
 */}
        {/* Row 3 */}
        {/* <div className="caserow">
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
        </div> */}

        {/* Row 4 */}
        {/* <div className="caserow ">
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
        </div> */}

        {/*  
        <div className="caserow">
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
            </div> /}
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
        </div> */}
      </CampaignsGridCon>
    </>
  );
}
export default CampaignsGrid;