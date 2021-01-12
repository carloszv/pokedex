import { PokemonListItemType, Pokemon } from 'types/pokedex'

export type PokedexState = {
  status: 'IDLE' | 'LOADING' | 'SUCCESS' | 'FAILURE'
  error: Error | null
  pokemonList: PokemonListItemType[]
  pokemonDeck: PokemonListItemType[]
  pokemons: Record<string, { pokemonData: Pokemon; pokemonInfo: any }>
}
