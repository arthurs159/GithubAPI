import './styles.css';

const GitSearch = () => {
  return (
    <div className="git-search-container">
      <h1 className="text-container">Encontre um perfil Github</h1>
      <form>
        <div className="form-container">
          <input
            type="text"
            className="search-input"
            placeholder="Usuário Github"
            onChange={() => {}}
          />
        </div>
        <button type="submit" className="btn btn-primary search-button">
          Encontrar
        </button>
      </form>
    </div>
  );
};

export default GitSearch;
