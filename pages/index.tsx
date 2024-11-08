import React from 'react'
import Heading from '@/components/Heading'
import TextField from '@/components/TextField'
import { useState } from 'react'
import Submit from '@/components/Submit'
import Result from '@/components/Result'
import Footer from '@/components/Footer'


interface Data {
  plan: string;
}

const Index = () => {
  const [exam, setExam] = useState("")
  const [syllabus, setSyllabus] = useState("")
  const [time, setTime] = useState("")
  const [context, setContext] = useState("")
  const [result, setResult] = useState<Data | null>(null)
  const [status, setStatus] = useState("Not submitted")

  const submit = () => {
    setStatus("Loading...")

    fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ exam, time, syllabus, context })
    }).then(res => res.json()).then(data => setResult(data))

    setStatus("Result")
  }

  return (
    <div className='flex items-center justify-center h-full flex-col gap-5'>
      <Heading text="Quick Learn" />
      <Heading text={`Status: ${status}`} />
      <div className='flex flex-col gap-3'>
        <TextField placeholder='Exam Name: (ex: SST Pre-board)' value={exam} onChange={(val) => setExam(val)} />
        <TextField placeholder='Syllabus: (ex: SST Pre-board)' value={syllabus} onChange={(val) => setSyllabus(val)} />
        <TextField placeholder='Time: (ex: 9 days)' value={time} onChange={(val) => setTime(val)} />
        <TextField placeholder='Context: (ex: I am bad at history)' value={context} onChange={(val) => setContext(val)} />
      </div>
      <Submit onClick={submit} />
      {result && <Result result={result.plan} />}
      <Footer />
    </div>
  )
}

export default Index