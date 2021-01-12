import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'

import PokemonListEmpty from 'components/elements/PokemonListEmpty/PokemonListEmpty'
import PokemonListTemplate from 'components/templates/PokemonListTemplate/PokemonListTemplate'
import { PokedexState } from 'store/state'

export default function PokemonDeckPage(): ReactElement {
  const pokemonDeck = useSelector((state: PokedexState) => state.pokemonDeck)

  if (pokemonDeck.length === 0) {
    return <PokemonListEmpty />
  }

  return <PokemonListTemplate pokemonList={pokemonDeck} />
}
