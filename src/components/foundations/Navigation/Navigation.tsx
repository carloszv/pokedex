import React, { ReactElement } from 'react'
import { useLocation } from 'react-router-dom'

import { NavigationBar, NavigationItem } from './Navigation.styles'

export default function Navigation(): ReactElement {
  const location = useLocation()

  return (
    <NavigationBar>
      <NavigationItem
        exact
        to="/"
        className={location.pathname === '/' ? 'activated' : 'deactivated'}
      >
        All Pokemons
      </NavigationItem>
      <NavigationItem
        exact
        to="/mypokemons"
        className={
          location.pathname === '/mypokemons' ? 'activated' : 'deactivated'
        }
      >
        My Pokemons
      </NavigationItem>
    </NavigationBar>
  )
}
