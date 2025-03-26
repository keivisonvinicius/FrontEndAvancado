import React from 'react'

const RenderizaBackOuFront = () => {

    function escolhaTecnologia(oQueRenderizar) {
        if (oQueRenderizar === "java"){
            return <h1>
                Backend
            </h1>
        }
        else{
            return <b>
                frontend
            </b>
        }
    }

  return (
    <div>
        {escolhaTecnologia("java")}
        {escolhaTecnologia("react")}

    </div>
  )
}

export default RenderizaBackOuFront