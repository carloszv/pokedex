import { AnyAction } from 'redux'
import { PokedexState } from 'store/state'
import { PokemonListItemType } from 'types/pokedex'

interface RemovePokemonFromMyList {
  state: PokedexState
  action: RemovePokemonFromMyListAction
}

export interface RemovePokemonFromMyListAction extends AnyAction {
  type: 'REMOVE_POKEMON_FROM_MY_LIST'
  extraProps: string
}

export default function removePokemonFromMyList({
  state,
  action,
}: RemovePokemonFromMyList): PokedexState {
  return {
    ...state,
    pokemonDeck: state.pokemonDeck.filter(
      (element: PokemonListItemType) => element.name !== action.payload,
    ),
  }
}
