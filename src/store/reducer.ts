import getAllPokemonFromApi, {
  GetAllPokemonFromApiAction,
} from './actions/getAllPokemonFromApi'
import addPokemonToMyList, {
  AddPokemonToMyListAction,
} from './actions/addPokemonToMyList'
import removePokemonFromMyList, {
  RemovePokemonFromMyListAction,
} from './actions/removePokemonFromMyList'
import { PokedexState } from './state'
import pokemonListFetchRequest, {
  PokemonListFetchRequestAction,
} from './actions/pokemonListFetchRequest'
import pokemonListFetchFailure, {
  PokemonListFetchFailureAction,
} from './actions/pokemonListFetchFailure'
import pokemonListFetchSuccess, {
  PokemonListFetchSuccessAction,
} from './actions/pokemonListFetchSuccess'
import {
  PokemonDetailFetchFailureAction,
  PokemonDetailFetchRequestAction,
  PokemonDetailFetchSuccessAction,
  pokemonDetailFetchRequest,
  pokemonDetailFetchSuccess,
  pokemonDetailFetchFailure,
} from './actions/pokemonDetailFetch'

export type PokedexActions =
  | GetAllPokemonFromApiAction
  | AddPokemonToMyListAction
  | RemovePokemonFromMyListAction
  | PokemonListFetchRequestAction
  | PokemonListFetchSuccessAction
  | PokemonListFetchFailureAction
  | PokemonDetailFetchRequestAction
  | PokemonDetailFetchSuccessAction
  | PokemonDetailFetchFailureAction

const initialState: PokedexState = {
  status: 'IDLE',
  error: null,
  pokemonList: [],
  pokemonDeck: [],
  pokemons: {},
}

export default function reducer(
  state: PokedexState = initialState,
  action: PokedexActions,
) {
  switch (action.type) {
    case 'GET_ALL_POKEMON_FROM_API':
      return getAllPokemonFromApi({ state, action })
    case 'ADD_POKEMON_TO_MY_LIST':
      return addPokemonToMyList({ state, action })
    case 'REMOVE_POKEMON_FROM_MY_LIST':
      return removePokemonFromMyList({ state, action })
    case 'POKEMON_LIST_FETCH_REQUEST':
      return pokemonListFetchRequest({ state })
    case 'POKEMON_LIST_FETCH_SUCCESS':
      return pokemonListFetchSuccess({ state, action })
    case 'POKEMON_LIST_FETCH_FAILURE':
      return pokemonListFetchFailure({ state, action })
    case 'POKEMON_DETAIL_FETCH_REQUEST':
      return pokemonDetailFetchRequest({ state })
    case 'POKEMON_DETAIL_FETCH_SUCCESS':
      return pokemonDetailFetchSuccess({ state, action })
    case 'POKEMON_DETAIL_FETCH_FAILURE':
      return pokemonDetailFetchFailure({ state, action })
    default:
      return state
  }
}
