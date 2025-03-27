import React from 'react'
import Aluno from './components/Aluno'


const App = () => {
  return (
    <div>
      {
        [{nome: "Keivison", email: "eikeivison@gmail.com", curso: "Sistemas de Informação"},
          {nome: "Rafaella", email: "rafaella@gmail.com", curso: "Fisioterapia"},
          {nome: "Diogo", email: "diogo@gmail.com", curso: "Ciencia da computação"},
          {nome: "Laiane", email: "laiane@gmail.com", curso: "Fisioterapia"}
        ].map((aluno) => 
          <Aluno nome = {aluno.nome} email = {aluno.email} curso = {aluno.curso}  /> 
        )
      }
      
    </div>
  )
}

export default App