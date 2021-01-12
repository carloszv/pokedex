import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

import Navigation from 'components/foundations/Navigation/Navigation'

import { Head, Outer, Logo } from './styles'

export default function Header(): ReactElement {
  return (
    <Head>
      <Outer>
        <NavLink to="/">
          <Logo src={`${process.env.PUBLIC_URL}/logo.png`} alt="Pokedex" />
        </NavLink>
        <Navigation />
      </Outer>
    </Head>
  )
}
