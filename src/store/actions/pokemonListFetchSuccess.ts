import { PokedexState } from 'store/state'
import { PokemonListItemType } from 'types/pokedex'

type PokemonListFetchSuccess = {
  state: PokedexState
  action: PokemonListFetchSuccessAction
}

export type PokemonListFetchSuccessAction = {
  type: 'POKEMON_LIST_FETCH_SUCCESS'
  pokemonList: PokemonListItemType[]
}

export default function pokemonListFetchSuccess({
  state,
  action,
}: PokemonListFetchSuccess): PokedexState {
  return {
    ...state,
    status: 'SUCCESS',
    pokemonList: action.pokemonList,
  }
}
