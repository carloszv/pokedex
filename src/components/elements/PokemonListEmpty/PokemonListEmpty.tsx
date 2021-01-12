import React, { ReactElement } from 'react'

import {
  ErrorWrapper,
  ErrorMessage,
  ImageWrapper,
  Image,
} from './PokemonListEmpty.styles'

export default function PokemonListEmpty(): ReactElement {
  return (
    <ErrorWrapper>
      <ErrorMessage>You have no Pokemons, go to get some!</ErrorMessage>
      <ImageWrapper exact to="/">
        <Image src="favicon.png" alt="Pokeball"></Image>
      </ImageWrapper>
    </ErrorWrapper>
  )
}
