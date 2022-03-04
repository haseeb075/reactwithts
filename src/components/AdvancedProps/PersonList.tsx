import React from 'react'
import { Name } from '../AllTypes/Person.types'

export interface PersonListProps{
    // Receiving Array of objects. Also work for Array of strings, nos etc
   names:Name[]
}

function PersonList(props : PersonListProps) {
  return (
    <div>     
       { props.names.map(name => {
            return(
                <h2 key={name.first}>{name.first} {name.last}</h2>
            )
        })}

    </div>
  )
}

export default PersonList