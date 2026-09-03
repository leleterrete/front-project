import { useState } from 'react'
import Header from './components/Header'
import MenuLateral from './components/MenuLateral'
import Conteudo from './components/Conteudo'

import Safra from './components/cadastros/Safra'
import Unidade from './components/cadastros/Unidade'
import Equipamentos from './components/cadastros/Equipamento'
import Medicao from './components/cadastros/Medicao'
import TipoInformacao from './components/cadastros/TipoInformacao'
import UnidadeMedida from './components/cadastros/UnidadeMedida'
import Indicadores from './components/cadastros/Indicadores'
import Funcionarios from './components/cadastros/Funcionarios'

import './App.css'

function App() {
  const [menuAberto, setMenuAberto] = useState(true)
  const [tela, setTela] = useState('inicio')

  function alterarMenu() {
    setMenuAberto(!menuAberto)
  }

  return (
    <>
      <Header />
      <div className="layout d-flex">
        <MenuLateral
          aberto={menuAberto}
          setTela={setTela}
        />
        <main className="area-conteudo flex-grow-1">
          <div className="p-3 border-bottom bg-white">
            <button className="btn btn-primary" onClick={alterarMenu}>
              ☰ Menu
            </button>
          </div>

          {tela === 'inicio' && <Conteudo />}
          {tela === 'safra' && <Safra />}
          {tela === 'unidade' && <Unidade />}
          {tela === 'equipamentos' && <Equipamentos />}
          {tela === 'medicao' && <Medicao />}
          {tela === 'tipoInformacao' && <TipoInformacao />}
          {tela === 'unidadeMedida' && <UnidadeMedida />}
          {tela === 'indicadores' && <Indicadores />}
          {tela === 'funcionarios' && <Funcionarios />}
        </main>
      </div>
    </>
  )
}

export default App