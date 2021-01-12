import { AnyAction } from 'redux'
import { PokedexState } from 'store/state'
import { PokemonListItemType } from 'types/pokedex'

interface AddPokemonToMyList {
  state: PokedexState
  action: AddPokemonToMyListAction
}

export interface AddPokemonToMyListAction extends AnyAction {
  type: 'ADD_POKEMON_TO_MY_LIST'
  payload: PokemonListItemType
}

export default function addPokemonToMyList({
  state,
  action,
}: AddPokemonToMyList): PokedexState {
  return {
    ...state,
    pokemonDeck: [...state.pokemonDeck, action.payload],
  }
}
