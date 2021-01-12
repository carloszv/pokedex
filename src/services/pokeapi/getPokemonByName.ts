import { Dispatch } from 'redux'
import getPokemonData from 'utils/getPokemonData'
import { API_URL } from './config'

type GetPokemonByName = {
  name: string
  dispatch: Dispatch
}

export default function getPokemonByName({ name, dispatch }: GetPokemonByName) {
  dispatch({ type: 'POKEMON_DETAIL_FETCH_REQUEST' })

  return fetch(`${API_URL}${name}`).then(
    (response) =>
      response.json().then((pokemonData) => {
        getPokemonData(pokemonData.species.url).then((pokemonSpecies) => {
          getPokemonData(pokemonSpecies.evolution_chain.url).then(
            (pokemonEvolutionChain) => {
              Promise.all([
                getPokemonData(
                  `${API_URL}${pokemonEvolutionChain.chain.species.name}`,
                ),
                pokemonEvolutionChain.chain.evolves_to.length > 0
                  ? getPokemonData(
                      `${API_URL}${pokemonEvolutionChain.chain.evolves_to[0].species.name}`,
                    )
                  : Promise.resolve(),

                pokemonEvolutionChain.chain.evolves_to[0].evolves_to.length > 0
                  ? getPokemonData(
                      `${API_URL}${pokemonEvolutionChain.chain.evolves_to[0].evolves_to[0].species.name}`,
                    )
                  : Promise.resolve(),
              ]).then(
                ([
                  pokemonChainSpecies,
                  pokemonEvolutionPrimary,
                  pokemonEvolutionSecondary,
                ]) => {
                  const pokemon = {
                    pokemonData,
                    pokemonInfo: {
                      species: pokemonSpecies,
                      evolutionChain: {
                        firstLink: {
                          ...pokemonEvolutionChain.chain.species,
                          img:
                            pokemonChainSpecies.sprites.other[
                              'official-artwork'
                            ].front_default,
                        },
                        secondLink: {
                          ...pokemonEvolutionChain.chain.evolves_to[0].species,
                          img:
                            pokemonEvolutionPrimary.sprites.other[
                              'official-artwork'
                            ].front_default,
                        },
                        thirdLink: {
                          ...pokemonEvolutionChain.chain.evolves_to[0]
                            .evolves_to[0].species,
                          img:
                            pokemonEvolutionSecondary.sprites.other[
                              'official-artwork'
                            ].front_default,
                        },
                      },
                    },
                  }

                  dispatch({
                    type: 'POKEMON_DETAIL_FETCH_SUCCESS',
                    pokemon,
                  })
                },
              )
            },
          )
        })
      }),
    (error) => dispatch({ type: 'POKEMON_DETAIL_FETCH_FAILURE', error }),
  )
}
