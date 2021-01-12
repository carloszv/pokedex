import React, { ReactElement, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { PokedexState } from 'store/state'
import Chart from 'components/foundations/Chart/Chart'
import ButtonDefault from 'components/foundations/Button/Button'
import LoadingSpinner from 'components/foundations/LoadingSpinner/LoadingSpinner'
import ModalMessage from 'components/foundations/ModalMessage/ModalMessage'
import { Pokemon } from 'types/pokedex'

import { getPokemonTypeColor } from 'utils/getPokemonTypeColor'

import {
  PokemonWrapper,
  Title,
  PokemonName,
  PokemonId,
  Content,
  LeftContent,
  RigthContent,
  DescriptionWrapper,
  DescriptionText,
  ImageWrapper,
  Image,
  ChartWrapper,
  DetailsWrapper,
  DetailsColumn,
  DetailsItem,
  DetailTitle,
  DetailData,
  TypeWrapper,
  TypesList,
  TypeItem,
  EvolutionWrapper,
  EvolutionList,
  EvolutionArrow,
  EvolutionItem,
  EvolutionImageWrapper,
  AddWrapper,
  AddButtonWrapper,
} from './PokemonDetailTemplate.styles'

type PokemonDetailTemplateProps = {
  pokemon: Pokemon
  pokemonInfo: any
}
export default function PokemonDetailTemplate({
  pokemon,
  pokemonInfo,
}: PokemonDetailTemplateProps): ReactElement {
  const dispatch = useDispatch()
  const pokemonDeck = useSelector((state: PokedexState) => state.pokemonDeck)
  const history = useHistory()
  const [modalProps, setModalProps] = useState({
    modalShow: false,
    modalTitle: '',
    modalMessage: '',
  })

  const isPokemonInMyDeck =
    pokemonDeck.find((item) => item.name === pokemon.name) === undefined

  function onItemClicked(name: string) {
    history.push(`/pokemon/${name}`)
  }

  function addToMyPokemons() {
    const target = pokemonDeck.find((item) => item.name === pokemon.name)

    if (target !== undefined) {
      setModalProps((previousState) => ({
        ...previousState,
        modalShow: true,
        modalTitle: 'Ooops',
        modalMessage: 'This pokemon has already been added to MyPokemons.',
      }))
    } else {
      dispatch({
        type: 'ADD_POKEMON_TO_MY_LIST',
        payload: {
          name: pokemon.name,
          url: pokemon.name,
          imageUrl: pokemon.sprites.other['official-artwork'].front_default,
          id: pokemon.id.toString(),
        },
      })
      history.push('/mypokemons')
    }
  }

  function removeFromMyPokemons() {
    const target = pokemonDeck.find((item) => item.name === pokemon.name)

    if (target !== undefined) {
      dispatch({
        type: 'REMOVE_POKEMON_FROM_MY_LIST',
        payload: pokemon.name,
      })
      history.push('/mypokemons')
    } else {
      setModalProps((previousState) => ({
        ...previousState,
        modalShow: true,
        modalTitle: 'Ooops',
        modalMessage: 'This pokemon has already been removed to MyPokemons.',
      }))
    }
  }

  if (pokemonInfo.evolutionChain.firstLink.name === '') {
    return <LoadingSpinner />
  }

  return (
    <PokemonWrapper>
      <ModalMessage
        title={modalProps.modalTitle}
        message={modalProps.modalMessage}
        show={modalProps.modalShow}
        onHide={() =>
          setModalProps((previousState) => ({
            ...previousState,
            modalShow: false,
          }))
        }
      />
      <Title>
        <PokemonName>{pokemon.name}</PokemonName>
        <PokemonId>N.º{pokemon.id}</PokemonId>
      </Title>
      <Content>
        <LeftContent>
          <ImageWrapper>
            <Image
              style={{ cursor: 'default' }}
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
            ></Image>
          </ImageWrapper>
          <ChartWrapper>
            <Chart stats={pokemon.stats} />
          </ChartWrapper>
        </LeftContent>
        <RigthContent>
          <DescriptionWrapper>
            <DescriptionText>
              {pokemonInfo.species.flavor_text_entries[3].flavor_text.replace(
                /[&/\\#+()$~%'":*?<>{}]/g,
                '',
              )}
            </DescriptionText>
          </DescriptionWrapper>
          <DetailsWrapper>
            <DetailsColumn>
              <DetailsItem>
                <DetailTitle>height</DetailTitle>
                <DetailData>{pokemon.height / 10} m</DetailData>
              </DetailsItem>
              <DetailsItem>
                <DetailTitle>weight</DetailTitle>
                <DetailData>{pokemon.weight / 10} kg</DetailData>
              </DetailsItem>
            </DetailsColumn>
            <DetailsColumn>
              <DetailsItem>
                <DetailTitle>category</DetailTitle>
                <DetailData style={{ textTransform: 'capitalize' }}>
                  {pokemon.types[0].type.name}
                </DetailData>
              </DetailsItem>
              <DetailsItem>
                <DetailTitle>skills</DetailTitle>
                {pokemon.abilities.map(
                  (abilities: { ability: { name: string } }) => (
                    <DetailData
                      key={abilities.ability.name}
                      style={{ textTransform: 'capitalize' }}
                    >
                      {abilities.ability.name}
                    </DetailData>
                  ),
                )}
              </DetailsItem>
            </DetailsColumn>
          </DetailsWrapper>
          <TypeWrapper>
            <DetailsItem>
              <DetailTitle style={{ color: 'black', margin: '10px 0' }}>
                type
              </DetailTitle>
              <TypesList>
                {pokemon.types.map((types: { type: { name: string } }) => (
                  <TypeItem
                    key={types.type.name}
                    style={{
                      backgroundColor: getPokemonTypeColor(types.type.name),
                    }}
                  >
                    {types.type.name}
                  </TypeItem>
                ))}
              </TypesList>
            </DetailsItem>
          </TypeWrapper>
          {pokemonInfo.evolutionChain.secondLink.img !== '' && (
            <EvolutionWrapper>
              <DetailTitle style={{ color: 'black', margin: '10px 0' }}>
                evolution
              </DetailTitle>
              <EvolutionList>
                <EvolutionItem
                  onClick={() =>
                    onItemClicked(pokemonInfo.evolutionChain.firstLink.name)
                  }
                >
                  <EvolutionImageWrapper>
                    <Image
                      src={pokemonInfo.evolutionChain.firstLink.img}
                      alt={pokemonInfo.evolutionChain.firstLink.name}
                    ></Image>
                  </EvolutionImageWrapper>
                </EvolutionItem>
                <EvolutionArrow>{'>'}</EvolutionArrow>
                <EvolutionItem
                  onClick={() =>
                    onItemClicked(pokemonInfo.evolutionChain.secondLink.name)
                  }
                >
                  <EvolutionImageWrapper>
                    <Image
                      src={pokemonInfo.evolutionChain.secondLink.img}
                      alt={pokemonInfo.evolutionChain.secondLink.name}
                    ></Image>
                  </EvolutionImageWrapper>
                </EvolutionItem>
                {pokemonInfo.evolutionChain.thirdLink.img !== '' && (
                  <>
                    <EvolutionArrow>{'>'}</EvolutionArrow>
                    <EvolutionItem
                      onClick={() =>
                        onItemClicked(pokemonInfo.evolutionChain.thirdLink.name)
                      }
                    >
                      <EvolutionImageWrapper>
                        <Image
                          src={pokemonInfo.evolutionChain.thirdLink.img}
                          alt={pokemonInfo.evolutionChain.thirdLink.name}
                        ></Image>
                      </EvolutionImageWrapper>
                    </EvolutionItem>
                  </>
                )}
              </EvolutionList>
            </EvolutionWrapper>
          )}
          <AddWrapper>
            <DetailTitle style={{ color: 'black', margin: '10px 0' }}>
              My Pokemons
            </DetailTitle>
            <AddButtonWrapper>
              {isPokemonInMyDeck ? (
                <ButtonDefault className="primary" onClick={addToMyPokemons}>
                  Add
                </ButtonDefault>
              ) : (
                <ButtonDefault
                  className="secondary"
                  onClick={removeFromMyPokemons}
                >
                  Remove
                </ButtonDefault>
              )}
            </AddButtonWrapper>
          </AddWrapper>
        </RigthContent>
      </Content>
    </PokemonWrapper>
  )
}
