import { PokedexState } from 'store/state'

type PokemonListFetchFailure = {
  state: PokedexState
  action: PokemonListFetchFailureAction
}

export type PokemonListFetchFailureAction = {
  type: 'POKEMON_LIST_FETCH_FAILURE'
  error: Error
}

export default function pokemonListFetchFailure({
  state,
  action,
}: PokemonListFetchFailure): PokedexState {
  return {
    ...state,
    status: 'FAILURE',
    error: action.error,
  }
}
