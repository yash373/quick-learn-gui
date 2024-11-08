import React from 'react'

interface Props {
    onClick: () => void
}

const Submit = ({ onClick }: Props) => {
    return (
        <button onClick={onClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Submit</button>
    )
}

export default Submit