import React from 'react'

const Result = ({ result }: { result: string }) => {
  return (
    <div className="p-4 my-4 border rounded-md">
      <h2 className="font-bold">Action Plan</h2>
      <div dangerouslySetInnerHTML={{ __html: result }} />
    </div>
  )
}

export default Result
