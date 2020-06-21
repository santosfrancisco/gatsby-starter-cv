import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  ${'' /* put your global css here */}
  body {
    color: ${({ theme }) => theme.colors.fontColor}
  }
`
