import { PokedexState } from 'store/state'

type PokemonListFetchRequest = {
  state: PokedexState
}

export type PokemonListFetchRequestAction = {
  type: 'POKEMON_LIST_FETCH_REQUEST'
}

export default function pokemonListFetchRequest({
  state,
}: PokemonListFetchRequest): PokedexState {
  return {
    ...state,
    status: 'LOADING',
  }
}


