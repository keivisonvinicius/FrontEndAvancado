import React from 'react'
import Adicao from './componets/Adicao'
import Subtracao from './componets/Subtracao'
import Multiplicacao from './componets/Multiplicacao'
import Divisao from './componets/Divisao'

const App = () => {
  return (
    <div>
      <Divisao num1 = {10} num2 = {2} />
    </div>
  )
}


export default App