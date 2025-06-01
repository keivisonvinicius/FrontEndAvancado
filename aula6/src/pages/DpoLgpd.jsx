import React, {useEffect, useState } from 'react'
import axios from 'axios'

const DpoLgpd = () => {

  const [dpoLgpd, setDpoLgpd] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/dpo-lgpd") //request
    .then(response => setDpoLgpd(response.data)) //response
    .catch(error => console.error("Erro ao carregar a lista de dpo-lgpd: ", error))
  }, [])

  return (
    <div>
      <h1>DPO-LGPD</h1>
      <ul>
        {
          dpoLgpd.map((dpoLgpd) => (
            <li key={dpoLgpd.id}>
              <h2>{dpoLgpd.titulo}</h2>
              <p>{dpoLgpd.texto}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default DpoLgpd