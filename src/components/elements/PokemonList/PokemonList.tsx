import React, { ReactElement } from 'react'

import { PokemonListItemType } from 'types/pokedex'
import PokemonListItem from '../PokemonListItem/PokemonListItem'

import { ListWrapper } from './PokemonList.styles'

type PokemonListProps = {
  pokemonListDisplayed: PokemonListItemType[]
  onClick: (name: string) => void
}
export default function PokemonList({
  pokemonListDisplayed,
  onClick,
}: PokemonListProps): ReactElement {
  return (
    <ListWrapper>
      {pokemonListDisplayed.map((pokemon: PokemonListItemType) => (
        <PokemonListItem key={pokemon.id} pokemon={pokemon} onClick={onClick} />
      ))}
    </ListWrapper>
  )
}
