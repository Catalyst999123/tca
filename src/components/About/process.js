import React from "react"
import styled from 'styled-components'
import media from "../../styles/media";

const ProcessCon = styled.div`
  background: var(--light-red);
  height: auto;
  padding: 0px 20px 50px;
  display: block;
  h2 {
    font-weight: normal;
    color: var(--dark-red);
    margin: -2px 0 30px;
  }
  p {
    color: white;
    &:nth-child(1) {
      margin-right: 40px;
    }
  }

  ${media.laptop`
    height: 40vh;
    padding: 50px 16vw 100px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 40px;
    h2 {
      font-weight: normal;
      color: var(--dark-red);
      margin: 50px 80px 0 0;
    }
  `}
`

function Process() {
  return (
    <>
    <ProcessCon>
      <h2 className="headingText">
        Our process and approach.
      </h2>
      <p className="bodyText">
      We tap into our vast industry and channel experience, finding new, inventive solutions to every challenge. Our strength comes from building solid relationships with our customers. This way, we gain a deep understanding of their business, their challenges and their desired results. 
      </p>
      <p className="bodyText">
      Using effective creativity and solutionist thinking, we collaborate with you each step of the way. Continually analysing, refining, adjusting and evolving.
      </p>
    </ProcessCon>
    </>
  );
}
export default Process;