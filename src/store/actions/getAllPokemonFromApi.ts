import { AnyAction } from 'redux'
import { PokedexState } from 'store/state'
import { PokemonListItemType } from 'types/pokedex'

interface GetAllPokemonFromApi {
  state: PokedexState
  action: GetAllPokemonFromApiAction
}

export interface GetAllPokemonFromApiAction extends AnyAction {
  type: 'GET_ALL_POKEMON_FROM_API'
  payload: PokemonListItemType[]
}

export default function getAllPokemonFromApi({
  state,
  action,
}: GetAllPokemonFromApi): PokedexState {
  return {
    ...state,
    pokemonList: action.payload,
  }
}
