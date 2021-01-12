import React, { ChangeEvent, ReactElement, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { PokemonListItemType } from 'types/pokedex'
import PokemonList from 'components/elements/PokemonList/PokemonList'

import {
  PageWrapper,
  SearchBoxWrapper,
  SearchBox,
} from './PokemonListTemplate.styles'

type ListPageTemplateProps = {
  pokemonList: PokemonListItemType[]
}

export default function ListPageTemplate({
  pokemonList,
}: ListPageTemplateProps): ReactElement {
  const history = useHistory()

  const [state, setState] = useState<PokemonListTemplateState>({
    pokemonListDisplayed: pokemonList,
    searchBox: '',
    selectedItem: '',
  })

  function search(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    const value = e.target.value

    setState((previousState) => ({ ...previousState, searchBox: value }))

    if (value.length === 0) {
      // reset the list
      setState((previousState) => ({
        ...previousState,
        pokemonListDisplayed: pokemonList,
      }))
    } else {
      // filter the list
      setState((previousState) => ({
        ...previousState,
        pokemonListDisplayed: pokemonList.filter(
          (item: PokemonListItemType) =>
            item.name.toLowerCase().includes(value.toLowerCase()) ||
            `${item.id}`.indexOf(value) > -1,
        ),
      }))
    }
  }

  function onClick(name: string) {
    history.push(`/pokemon/${name}`)
  }

  return (
    <PageWrapper>
      <SearchBoxWrapper>
        <SearchBox
          value={state.searchBox}
          onChange={search}
          placeholder="Search by Pokemon's name or number"
        />
      </SearchBoxWrapper>
      <PokemonList
        pokemonListDisplayed={state.pokemonListDisplayed}
        onClick={onClick}
      />
    </PageWrapper>
  )
}

export type PokemonListTemplateState = {
  pokemonListDisplayed: PokemonListItemType[]
  searchBox: string
  selectedItem: string
}
