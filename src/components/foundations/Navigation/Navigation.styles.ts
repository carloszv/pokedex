import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavigationBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const NavigationItem = styled(NavLink)`
  color: #919191;
  text-transform: capitalize;
  font-size: 200%;
  font-weight: 600;
  margin: 0.5em 2em;

  ${(props) => {
    switch (props.className) {
      case 'activated':
        return `
              color: DodgerBlue;
              border-radius: 10px;
              padding: 4px 8px;
              &:hover {
                color: DodgerBlue;
              }
            `
      case 'deactivated':
        return `
            color: turquoise;
            padding: 4px 8px;
            border-radius: 10px;
            &:hover {
              color: white;
              background-color: DodgerBlue;
            }`
      default:
        return ``
    }
  }}

  @media (max-width: 768px) {
    font-size: 120%;
    margin: 0.5em 1em;
  }
`
