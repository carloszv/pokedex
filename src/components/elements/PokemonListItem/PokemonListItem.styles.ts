import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  margin: 0 0.78125% 50px;
  cursor: pointer;
  border-radius: 10px;
  padding: 4px;

  &:hover {
    background: #b39db7;
    > div > span {
      color: white;
    }
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 12rem;
  height: 15rem;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  padding: 20px;
  margin: 0 2px;
  background-color: #f2f2f2;
  justify-content: space-around;
`

export const Img = styled.img`
  height: 100%;
  display: block;
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

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`
export const ItemId = styled.span`
  text-align: left;
  color: #919191;
  font-weight: 600;
  padding: 0 2px;
`

export const ItemName = styled.span`
  text-transform: capitalize;
  text-align: center;
  font-size: 120%;
  font-weight: 600;
  margin: 0.5em 0;
`
