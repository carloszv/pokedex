import React, { ReactElement } from 'react'

import PokemonListTemplate from 'components/templates/PokemonListTemplate/PokemonListTemplate'
import { useSelector } from 'react-redux'
import { PokedexState } from 'store/state'
import LoadingSpinner from 'components/foundations/LoadingSpinner/LoadingSpinner'

export default function PokemonListPage(): ReactElement {
  const pokemonList = useSelector((state: PokedexState) => state.pokemonList)

  if (pokemonList.length === 0) {
    return <LoadingSpinner />
  }

  return <PokemonListTemplate pokemonList={pokemonList} />
}
