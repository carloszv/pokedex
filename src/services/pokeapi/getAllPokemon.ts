import { Dispatch } from 'redux'
import { PokemonListItemType } from 'types/pokedex'

import { API_URL, IMAGE_URL } from './config'

export default function getAllPokemon(dispatch: Dispatch) {
  dispatch({ type: 'POKEMON_LIST_FETCH_REQUEST' })

  return fetch(`${API_URL}?limit=1118`).then(
    (response) =>
      response.json().then((data) =>
        dispatch({
          type: 'POKEMON_LIST_FETCH_SUCCESS',
          pokemonList: pokemonListParser(data),
        }),
      ),
    (error) => dispatch({ type: 'POKEMON_LIST_FETCH_FAILURE', error }),
  )
}

// To improve the UX, it's importante to display the image, ID and type from the pokemon.
// But to get that data, it would require independent API calls to each pokemon.
// Therefore, "pokemonItemParser" is used to avoid many calls to API what would reduce the page performance.
// Instead of just returning the name when calling to get the list,
// the API could also return the ID, image and type when fetching the list

type PokemonItemParser = {
  name: string
  url: string
}

function pokemonListParser(data: { results: PokemonItemParser[] }) {
  return data.results.map((item) => pokemonItemParser(item))
}

function pokemonItemParser({
  name,
  url,
}: PokemonItemParser): PokemonListItemType {
  // example -> https://pokeapi.co/api/v2/pokemon/101/
  const urlSplit = url.split('/')

  const pokemonID = urlSplit[urlSplit.length - 2]
  const pokemonImageUrl = `${IMAGE_URL}${pokemonID}.png`
  return { name, url, imageUrl: pokemonImageUrl, id: pokemonID }
}
