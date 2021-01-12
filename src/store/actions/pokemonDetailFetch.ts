import { PokedexState } from 'store/state'

// REQUEST
type PokemonDetailFetchRequest = {
  state: PokedexState
}

export type PokemonDetailFetchRequestAction = {
  type: 'POKEMON_DETAIL_FETCH_REQUEST'
  error: Error
}

export function pokemonDetailFetchRequest({
  state,
}: PokemonDetailFetchRequest): PokedexState {
  return {
    ...state,
    status: 'LOADING',
  }
}

// SUCCESS
type PokemonDetailFetchSuccess = {
  state: PokedexState
  action: PokemonDetailFetchSuccessAction
}

export type PokemonDetailFetchSuccessAction = {
  type: 'POKEMON_DETAIL_FETCH_SUCCESS'
  pokemon: any
}

export function pokemonDetailFetchSuccess({
  state,
  action,
}: PokemonDetailFetchSuccess): PokedexState {
  if (!action.pokemon) {
    throw new Error('Undefined pokemon')
  }

  if (!action.pokemon.pokemonData.name) {
    throw new Error('Undefined pokemon name')
  }

  return {
    ...state,
    status: 'SUCCESS',
    pokemons: {
      ...state.pokemons,
      [action.pokemon.pokemonData.name]: action.pokemon,
    },
  }
}

// FAILURE
type PokemonDetailFetchFailure = {
  state: PokedexState
  action: PokemonDetailFetchFailureAction
}

export type PokemonDetailFetchFailureAction = {
  type: 'POKEMON_DETAIL_FETCH_FAILURE'
  error: Error
}

export function pokemonDetailFetchFailure({
  state,
  action,
}: PokemonDetailFetchFailure): PokedexState {
  return {
    ...state,
    status: 'FAILURE',
    error: action.error,
  }
}
