import styled from 'styled-components'

export const ListWrapper = styled.ul`
  display: flex;
  flex-flow: wrap;
  width: 100%;

  @media (max-width: 768px) {
    place-content: center;
    padding: 0;
  }
`
