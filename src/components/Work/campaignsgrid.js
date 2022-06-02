import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { prismicClient } from '../client'
import * as Prismic from '@prismicio/client'

import media from "../../styles/media"
import Arrow from '../../images/arrow-white.svg'
import BrandMark from '../../images/tca_work_mark.svg'

import { Reveal, Tween } from "react-gsap"

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
            <div key={d.id} className="caseStudy" style={{ backgroundColor: d.data.bgcolor ? d.data.bgcolor : '#FCC71A' }}>
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

                  <img src={d.data.companylogo.url} className="companylogo" />

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

      </CampaignsGridCon>
    </>
  );
}

const CampaignsGridCon = styled.div`
  max-width: 100vw;
  padding: 0 5vw;
  display: flex;
  padding: 0 5vw;
    justify-content: center;
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
      margin: 10px 5px;
      display: flex;
      padding: 23px;
      flex-direction: column;
      justify-content: space-between;
    }

   .work-brandmark{
     height: 100px;
    margin-right: -23px;
    margin-bottom: -60px
   }

   .companylogo {
    margin-top: 40px;
     height: 25px;
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
padding: 0 5vw;
padding-top: 150px;
    margin-top: 0;
.caserow {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 5px;
      grid-row-gap: 30px;
    }

    .companylogo {
      height: 35px;
  margin-top: 0;
  margin-bottom: 40px;
   }

    .work-brandmark{
     height: 200px;
    margin-right: -23px;
    margin-bottom: -24px;
   }
   
`}
  
  

  ${media.laptop`
  padding: 0;
    padding-top: 0px;
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

   .companylogo {
  height: 35px;
  margin-top: 0;
  margin-bottom: 40px;
   }

    .caseStudy {
      height: 350px;
      width: 350px;
      display: flex;
      padding: 23px;
      flex-direction: column;
      justify-content: space-between;
    }
  `}
`


export default CampaignsGrid;