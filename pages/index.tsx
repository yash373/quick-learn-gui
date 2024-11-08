import React from 'react'
import Heading from '@/components/Heading'
import TextField from '@/components/TextField'
import { useState } from 'react'

const Index = () => {
  const [value, setValue] = useState("")

  return (
    <div className='flex flex-col gap-2'>
      <Heading text="Hello World" />
      <TextField value={value} onChange={(val) => setValue(val)} />
    </div>
  )
}

export default Index