import './styles.css';

const GitSearch = () => {
  return (
    <div className="git-search-container">
      <div className="content-container">
      <h1 className="text-container-page">Encontre um perfil Github</h1>
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
          <h4>Encontrar</h4>
        </button>
      </form>
      </div>
    </div>
  );
};

export default GitSearch;
