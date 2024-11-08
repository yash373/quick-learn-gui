import React from 'react'

interface Props {
    onClick: () => void
}

const Submit = ({ onClick }: Props) => {
    return (
        <button onClick={onClick} >Submit</button>
    )
}

export default Submit