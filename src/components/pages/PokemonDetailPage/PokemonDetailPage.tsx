import React, { ReactElement, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import LoadingSpinner from 'components/foundations/LoadingSpinner/LoadingSpinner'
import PokemonDetailTemplate from 'components/templates/PokemonDetailTemplate/PokemonDetailTemplate'
import { useDispatch, useSelector } from 'react-redux'
import { PokedexState } from 'store/state'
import getPokemonByName from 'services/pokeapi/getPokemonByName'

export default function PokemonDetailPage(): ReactElement {
  interface RouteParams {
    pokemonName: string
  }

  const { pokemonName } = useParams<RouteParams>()

  const pokemon = useSelector((state: PokedexState) => {
    return state.pokemons[pokemonName]
  })

  const dispatch = useDispatch()
  useEffect(() => {
    if (!pokemon) {
      getPokemonByName({ dispatch, name: pokemonName })
    }
  }, [pokemonName])

  if (!pokemon) {
    return <LoadingSpinner />
  }

  return (
    <PokemonDetailTemplate
      pokemon={pokemon.pokemonData}
      pokemonInfo={pokemon.pokemonInfo}
    />
  )
}
