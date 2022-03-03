import React from 'react'

export interface HeaderProps{
    title: string
    color?: string 
}

function Header(props: HeaderProps) {
  return (
    <header>
    <h1 style={{color: props.color ? props.color : 'blue'}} >{props.title}</h1>    
        
    </header>
  )
}

export default Header