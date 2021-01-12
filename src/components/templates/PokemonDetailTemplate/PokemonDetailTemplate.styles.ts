import styled from 'styled-components'

export const PokemonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10%;

  @media (max-width: 768px) {
    width: -webkit-fill-available;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
`

export const PokemonName = styled.span`
  text-transform: capitalize;
  font-size: 200%;
  font-weight: 600;
  margin: 0.5em;
`

export const PokemonId = styled.span`
  color: #919191;
  text-transform: capitalize;
  font-size: 200%;
  font-weight: 600;
  margin: 0.5em 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`

export const RigthContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const DescriptionWrapper = styled.div`
  display: flex;
  padding-top: 10px;
  margin-bottom: 20px;
`

export const DescriptionText = styled.span`
  font-size: 120%;
`

export const ImageWrapper = styled.div`
  display: flex;
  overflow: hidden;
  height: 30rem;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  margin: 0 2px 10px;
  background-color: #f2f2f2;
  justify-content: space-around;

  @media (max-width: 768px) {
    height: 15rem;
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

export const ChartWrapper = styled.div`
  display: flex;
  height: 20rem;
  background-color: bisque;
  border-radius: 10px;
  padding-top: 10%;
  margin: 10px 0;
  align-self: center;
  width: 100%;

  @media (max-width: 768px) {
    height: 15rem;
  }
`

export const DetailsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  background-color: #30a7d7;
  border-radius: 10px;
  padding: 20px;
`

export const DetailsColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const DetailsItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const DetailTitle = styled.span`
  text-transform: capitalize;
  font-size: 120%;
  font-weight: 600;
  color: white;
`

export const DetailData = styled.span`
  font-size: 120%;
`

export const TypeWrapper = styled.div`
  display: flex;
  height: 5rem;
  border-radius: 10px;
  margin: 10px 0;
  margin-top: 20px;
`

export const TypesList = styled.div`
  display: flex;
  flex-direction: row;
`

export const TypeItem = styled.span`
  text-transform: capitalize;
  margin: 0 10px 0 0;
  width: 10rem;
  padding: 2px;
  border-radius: 10px;
  text-align: center;
  color: white;
`

export const ItemType = styled.span`
  padding: 2px;
  border-radius: 10px;
  text-align: center;
  margin: 5px 30%;
  color: white;
`

export const EvolutionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 13rem;
  margin-top: 20px;
  background-color: grey;
  border-radius: 10px;
  padding: 0 10px 10px 10px;

  @media (max-width: 768px) {
    height: 40rem;
  }
`

export const EvolutionList = styled.div`
  display: flex;
  border-radius: 10px;
  margin: 10px 0;
  align-items: center;
  width: 100%;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const EvolutionArrow = styled.span`
  font-size: 300%;
  font-weight: 600;
  margin: 0 30px;
`

export const EvolutionItem = styled.div``

export const EvolutionImageWrapper = styled.div`
  border-radius: 100%;
  height: 8rem;
  background-color: #b39db7;
  border: 2px solid black;
  padding: 20px;
  cursor: pointer;
`

export const AddWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const AddButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`
