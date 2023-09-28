import React from "react";
import styled from "styled-components";
import media from "../../styles/media";

const PrivacyHeroCon = styled.div`
  height: 700px;
  width: 100vw;

  .author {
    position: absolute;
    top: 420px;
    left: 20px;
    text-transform: uppercase;
    color: white;
  }
  .title {
    width: 80vw;
    color: var(--dark-blue);
    position: absolute;
    left: 20px;
    top: 200px;
    font-size: 48px;
    line-height: 58px;
  }

  ${media.laptop`
    height: 85vh;
    min-height: 700px;

    .date {
      position: absolute;
      top: 60vh;
      left: 450px;
    }
    .author {
      position: absolute;
      top: 60vh;
      left: 12vw;
    }

    .title {
      width: 550px;
      left: 12vw;
      position: absolute;
      font-size: 76px;
      line-height: 80px;
      top: 25vh;
    }
  `}
`;

function PrivacyHero(info) {
  return (
    <PrivacyHeroCon>
      <p className="title blurbText">Website Privacy &amp; Cookies Policy</p>
      <p className="author subHeading">EFFECTIVE DATE: 22 September 2023</p>
    </PrivacyHeroCon>
  );
}
export default PrivacyHero;
