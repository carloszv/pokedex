import React, { ReactElement } from 'react'
import { ButtonDefault } from './Button.styles'

type ButtonType = {
  children: string
  className: string
  onClick: () => void
}

export default function Button({
  children,
  className,
  onClick,
}: ButtonType): ReactElement {
  return (
    <ButtonDefault className={className} onClick={onClick}>
      {children}
    </ButtonDefault>
  )
}
