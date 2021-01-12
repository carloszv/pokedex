import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const ErrorWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`
export const ErrorMessage = styled.span`
  color: red;
  font-size: 200%;
  font-weight: 600;
  margin: 0.5em 2em;
  align-self: center;
`

export const ImageWrapper = styled(NavLink)`
  display: block;
  overflow: hidden;
  height: 10rem;
  cursor: pointer;
  border: none;
  border-radius: 100%;
  padding: 20px;
  margin: 0 2px 10px;
  background-color: transparent;
  justify-content: space-around;
  align-self: center;

  &:hover {
    background: #b39db7;
  }
`

export const Image = styled.img`
  height: 100%;
  margin: 0 auto;
  object-fit: cover;

  > img {
    display: block;
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }
`
