import { useState } from 'react'
import './App.css'
import { Test } from './test'
import { CadastroExposicao } from './components/CadastroExposicao'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Test/>*/}
      {/* <CadastroExposicao/> */}
      <Footer/>
    </>
  )
}

export default App
