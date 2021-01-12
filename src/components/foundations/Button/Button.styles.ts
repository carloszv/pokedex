import styled from 'styled-components'

export const ButtonDefault = styled.button`
  width: 10rem;
  border-radius: 10px;
  border: 2px solid;
  margin-right: 5px;
  background-color: white;

  ${(props) => {
    switch (props.className) {
      case 'primary':
        return `
              color: green;
              border-color: green;
              &:hover {
                color: white;
                background-color: green;
              }
            `
      case 'secondary':
        return `
            color: red;
            border-color: red;
            &:hover {
              color: white;
              background-color: red;
            }`
      default:
        return ``
    }
  }}

  &:focus {
    outline: none;
  }
`
