import React, { ReactElement } from 'react'
import Spinner from 'react-bootstrap/Spinner'

export default function LoadingSpinner(): ReactElement {
  return <Spinner animation="border" variant="primary" />
}
