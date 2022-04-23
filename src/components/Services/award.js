import React from "react"
import styled from 'styled-components'
import media from '../../styles/media'

const AwardCon = styled.div`
  height: auto;
  padding: 25px 20px;
  align-items: center;
  display: block;
  h2 {
    font-weight: normal;
    color: var(--dark-green);
    margin: 20px 0;
  }
  p {
    color: #909090;
    &:nth-child(1) {
      margin-right: 40px;
    }
  }

  ${media.laptop`
  height: 300px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 80px;
    padding: 100px 60px;
    h2{
      max-width: 35vw;
    margin: 90px 0 60px;
    }
  `}
`

function Award() {
  return (
    <AwardCon>
      <h2 className="headingText">
        Marketing initiatives that deliver an impact by being built with care and backed by results.
      </h2>
      <p className="bodyText">
      We are the initiators of strong, impactful
      relationships between businesses and their
      customers. Being solutionists at heart, we
      deliver results that spark and solidify new
      connections. Delivering work that matters,
      with purpose.
      </p>
    </AwardCon>
  );
}
export default Award;