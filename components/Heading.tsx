import React from 'react'

interface Props {
    text: string
}

const Heading = ({ text }: Props) => {
  return (
    <div className="text-2xl font-bold text-center my-4">
      {text}
    </div>
    // <div>{text}</div>
  )
}

export default Heading