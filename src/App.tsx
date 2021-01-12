import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import PageLayout from 'components/foundations/PageLayout/PageLayout'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import PokemonListPage from 'components/pages/PokemonListPage/PokemonListPage'
import PokemonDeckPage from 'components/pages/PokemonDeckPage/PokemonDeckPage'
import PokemonDetailPage from 'components/pages/PokemonDetailPage/PokemonDetailPage'
import getAllPokemon from 'services/pokeapi/getAllPokemon'

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    getAllPokemon(dispatch)
  }, [])

  return (
    <Router>
      <PageLayout>
        <Switch>
          <Route exact path="/">
            <PokemonListPage />
          </Route>
          <Route exact path="/pokemon/:pokemonName">
            <PokemonDetailPage />
          </Route>
          <Route exact path="/mypokemons">
            <PokemonDeckPage />
          </Route>
          <Route path="*">
            <span>Page not found</span>
          </Route>
        </Switch>
      </PageLayout>
    </Router>
  )
}
