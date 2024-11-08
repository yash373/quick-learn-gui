import React from 'react'

interface Props {
    text: string
}

const Heading = ({text}: Props) => {
  return (
    <div>{text}</div>
  )
}

export default Heading