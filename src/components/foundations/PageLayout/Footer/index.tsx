import React, { ReactElement } from 'react'
import { Outer, Powered } from './styles'

export default function Footer(): ReactElement {
  return (
    <Outer>
      <Powered>
        <p>© 2020 I FelFel in Love with Pokedex</p>
        <p style={{ marginLeft: '2px', marginRight: '2px' }}>
          {' '}
          - Web design by
        </p>{' '}
        <a href={`mailto:czamora.vera@gmail.com`} aria-label={'Carlos Zamora'}>
          {'Carlos Zamora'}
        </a>
      </Powered>
    </Outer>
  )
}
