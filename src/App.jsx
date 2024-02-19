import { useState } from 'react'
import { Button } from 'reactstrap';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button color="danger">Danger!</Button>
    </>
  )
}

export default App
