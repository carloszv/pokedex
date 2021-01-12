import React, { ReactElement, useCallback, useState } from 'react'
import { PokemonListItemType } from 'types/pokedex'

import {
  ListItem,
  ImageWrapper,
  Img,
  Info,
  ItemId,
  ItemName,
} from './PokemonListItem.styles'

type PokemonListItemProps = {
  pokemon: PokemonListItemType
  onClick: (name: string) => void
}

export default function PokemonListItem({
  pokemon,
  onClick,
}: PokemonListItemProps): ReactElement {
  const [imageUrl, setImageUrl] = useState(pokemon.imageUrl)

  const handleClick = useCallback(() => onClick(pokemon.name), [])
  const handleError = useCallback(() => setImageUrl(() => 'favicon.png'), [])

  return (
    <ListItem key={pokemon.id} onClick={handleClick}>
      <ImageWrapper>
        <Img src={imageUrl} alt={pokemon.name} onError={handleError} />
      </ImageWrapper>
      <Info>
        <ItemId>{`Nº ${pokemon.id}`}</ItemId>
        <ItemName>{pokemon.name}</ItemName>
      </Info>
    </ListItem>
  )
}
