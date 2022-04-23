import { css } from "styled-components"

const sizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 435,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560
}
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})