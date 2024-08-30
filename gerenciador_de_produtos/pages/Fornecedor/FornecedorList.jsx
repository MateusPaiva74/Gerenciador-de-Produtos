import React, { useEffect, useEffect } from 'react'
import axios from '../../src/api'

const FornecedorList = () => {

    const [fornecedores, setFornecedores] = useState([])
    useEffect(() => {
        const buscarFornecedores = () =>{
            axios.get('/fornecedores')
            .then(response => {
                setFornecedores(response.data)
            }).catch(error => {
                console.error("Ocorreu um erro", error)
            })
        }
        buscarFornecedores
    },[])
  return (
    <div>FornecedorList</div>
  )
}

export default FornecedorList