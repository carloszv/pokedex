export type PokemonListItemType = {
  name: string
  url: string
  imageUrl: string
  id: string
}

export type Pokemon = {
  name: string
  id: number
  species: {
    url: string
  }
  stats: Stats[]
  sprites: {
    front_default: string
    other: { 'official-artwork': { front_default: string } }
  }
  height: number
  weight: number
  types: Types[]
  abilities: Abilities[]
}

type Stats = {
  base_stat: number
  effort: number
  stat: Stat
}

type Stat = {
  name: string
  url: string
}

type Types = {
  slot: number
  type: {
    name: string
    url: string
  }
}

type Abilities = {
  ability: Ability
  is_hidden: boolean
  slot: number
}

type Ability = {
  name: string
  url: string
}
