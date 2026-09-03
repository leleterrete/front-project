function MenuLateral({ aberto, setTela }) {
  if (!aberto) return null

  return (
    <aside className="bg-dark text-white p-3 vh-100 style-menu">
      <h5 className="mb-3">Menu</h5>
      <div className="d-grid gap-2">
        <button 
          className="btn btn-sm btn-dark text-start" 
          onClick={() => setTela('inicio')}
        >
          Início
        </button>

        <hr className="text-secondary my-2" />
        <span className="text-muted small px-2">Cadastros</span>

        <button 
          className="btn btn-sm btn-dark text-start" 
          onClick={() => setTela('safra')}
        >
          Safra
        </button>

        <button 
          className="btn btn-sm btn-dark text-start" 
          onClick={() => setTela('unidade')}
        >
          Unidade
        </button>

        <button 
          className="btn btn-sm btn-dark text-start" 
          onClick={() => setTela('equipamentos')}
        >
          Equipamentos
        </button>

        <button 
          className="btn btn-sm btn-dark text-start" 
          onClick={() => setTela('medicao')}
        >
          Medição
        </button>

        <button 
          className="btn btn-sm btn-dark text-start" 
          onClick={() => setTela('tipoInformacao')}
        >
          Tipo de Informação
        </button>

        <button 
          className="btn btn-sm btn-dark text-start" 
          onClick={() => setTela('unidadeMedida')}
        >
          Unidade de Medida
        </button>

        <button 
          className="btn btn-sm btn-dark text-start" 
          onClick={() => setTela('indicadores')}
        >
          Indicadores
        </button>
        <button 
          className="btn btn-sm btn-dark text-start" 
          onClick={() => setTela('funcionarios')}
        >
          Funcionários
        </button>
      </div>
    </aside>
  )
}

export default MenuLateral