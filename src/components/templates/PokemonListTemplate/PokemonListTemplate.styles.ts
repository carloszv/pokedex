import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const SearchBoxWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 99%;
  }
`

export const SearchBox = styled.input`
  width: 50%;
`
