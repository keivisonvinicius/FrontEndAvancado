import React from 'react'
import { useState } from 'react'

const HookQuina = () => {

    const[sorteados, setSorteados] = useState()
    const[listaSorteados, setListaSorteados] = useState([])

    function sortearNumero(){
        if(listaSorteados.length < 5){
            let numeroSorteado = Math.floor(Math.random()*80 +1)
            setSorteados(numeroSorteado)
            setListaSorteados([...listaSorteados,numeroSorteado])

        }else{
            alert("Já temos 5 números sorteados!")
        }
    }

  return (
    <div>
        <h1>Sorteador de Quina em React!</h1>
        <button onClick={sortearNumero}>Sortear número</button>
        <h1>Último número sorteado: {sorteados}</h1>
        <h1>Números sorteados: {listaSorteados.join(" - ")}</h1>
        </div>

  )
}

export default HookQuina