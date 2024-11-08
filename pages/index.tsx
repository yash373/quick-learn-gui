import React from 'react'
import Heading from '@/components/Heading'
import TextField from '@/components/TextField'
import { useState } from 'react'

const Index = () => {
  const [exam, setExam] = useState("")
  const [syllabus, setSyllabus] = useState("")
  const [time, setTime] = useState("")
  const [context, setContext] = useState("")

  return (
    <div className='flex flex-col gap-2'>
      <Heading text="Quick Learn" />
      <TextField placeholder='Exam Name: (ex: SST Pre-board)' value={exam} onChange={(val) => setExam(val)} />
      <TextField placeholder='Syllabus: (ex: SST Pre-board)' value={syllabus} onChange={(val) => setSyllabus(val)} />
      <TextField placeholder='Time: (ex: 9 days)' value={time} onChange={(val) => setTime(val)} />
      <TextField placeholder='Context: (ex: I am bad at history)' value={context} onChange={(val) => setContext(val)} />
    </div>
  )
}

export default Index