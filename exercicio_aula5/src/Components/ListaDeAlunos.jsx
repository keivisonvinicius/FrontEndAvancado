
import React, { useEffect, useState } from 'react'

const ListaDeAlunos = () => {
    const [alunos, setAlunos] = useState([])

    //  Trabalhando com requisição GET
    useEffect(() => {
        async function fetchData() {

            const res = await fetch("http://localhost:3000/alunos")

            const data = await res.json() 

            setAlunos(data)
        }
        fetchData()
    }, [])

  return (
    <div>
        <table border='1px'>            
            <thead>
                    <th>Matricula</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Curso</th>
            </thead>

            <tbody>
                {
                    alunos.map((aluno) => (
                    <tr key={aluno.id}>
                        <td>{aluno.id}</td>
                        <td>{aluno.nome}</td>
                        <td>{aluno.email}</td>
                        <td>{aluno.curso}</td>
                    </tr>
                    ))
                }   
            </tbody>
        </table>
    </div>
  )
}

export default ListaDeAlunos