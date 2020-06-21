import styled from 'styled-components'
import { config } from 'react-awesome-styled-grid'

const Wrapper = styled.main.attrs({
  role: 'main',
})`
  position: relative;
  border-radius: 3px;
  width: 90%;
  padding: 25px;
  max-width: 960px;
  word-wrap: break-word;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 0px auto 30px auto;
  top: -100px;
  box-shadow: 0 0 0 0, 0 6px 12px rgba(0, 0, 0, 0.1);
  min-height: 150px;
  
  ${(props) => config(props).media.sm`
    width: 80%;
    padding: 50px;
  `}
`

export default Wrapper
