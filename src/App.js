import React, { useState } from 'react'
function App() {

const [nome, setNome] = useState('')
const [senha, setSenha] = useState('')

  function handleCSadastro(){
      alert(`Nome: ${nome} \nE-mail: ${senha}`)
  }


  return (
    <div>
        <h1>Estados Hooks</h1>
        <form onSubmit={handleCSadastro}>
            <label>Nome: </label>
            <input type="text"
            value={nome}
            onChange={ (e) =>setNome(e.target.value)}
            /><br/>
            <label>Senha: </label>
            <input type="text"
            value={senha}
            onChange={(e) =>setSenha(e.target.value)}
             /><br /><br />
            <button type="submit">Enviar</button>
        </form>
    </div>
  );
}

export default App;