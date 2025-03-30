import React from 'react'
import Aluno from './components/Aluno'


const App = () => {
  return (
    <div>
      {
        [{nome: "Keivison", email: "eikeivison@gmail.com", curso: "Sistemas de Informação",media:10},
          {nome: "Rafaella", email: "rafaella@gmail.com", curso: "Fisioterapia", media: 2},
          {nome: "Diogo", email: "diogo@gmail.com", curso: "Ciencia da computação", media:8},
          {nome: "Laiane", email: "laiane@gmail.com", curso: "Fisioterapia", media: 8}
        ].map((aluno) => 
          <Aluno nome = {aluno.nome} email = {aluno.email} curso = {aluno.curso} media = {aluno.media} /> 
        )
      }
      
    </div>
  )
}

export default App