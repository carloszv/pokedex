import styled from 'styled-components'

export const Head = styled.header`
  top: 0;
  background: #ffffff;
`

export const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  text-align: center;
`

export const Logo = styled.img`
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 80%;
  }
`
