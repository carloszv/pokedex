export function getPokemonTypeColor(name: string): string {
  switch (name) {
    case 'normal':
      return '#A3ACAF'
    case 'grass':
      return '#9BCC50'
    case 'fire':
      return '#FA7D23'
    case 'water':
      return '#4592C4'
    case 'bug':
      return '#729F3F'
    case 'poison':
      return '#B97FC9'
    case 'electric':
      return '#EED535'
    case 'ground':
      return '#AB9842'
    case 'fairy':
      return '#FDB9E9'
    case 'psychic':
      return '#F366B9'
    case 'fighting':
      return '#D56723'
    case 'rock':
      return '#A38C21'
    case 'ghost':
      return '#7B62A3'
    case 'ice':
      return '#51C4E7'
    case 'dragon':
      return '#F16E57'
    case 'dark':
      return '#707070'
    case 'steel':
      return '#9EB7B8'

    default:
      return '#A3ACAF'
  }
}
