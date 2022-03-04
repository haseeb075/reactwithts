import React from 'react'
import { PersonProps } from '../AllTypes/Person.types'


function Person(props: PersonProps) {
  return (
    <div>{props.name.first} ---{props.name.last}</div>
  )
}

export default Person