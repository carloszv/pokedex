type Stat = {
  name: string
  url: string
}

export type Stats = {
  base_stat: number
  effort: number
  stat: Stat
}

export type DataProps = {
  stats: Stats[]
}
