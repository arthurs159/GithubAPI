import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import './styles.css';

type FormData = {
  user: string;
  test: string;
}

const GitSearch = () => {

  const [formData, setFormData] = useState<FormData>({
    user: '',
    test: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData( { ...formData, [name]:value } )

  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  }


  return (
    <div className="git-search-container">
      <div className="content-container">
      <h1 className="text-container-page">Encontre um perfil Github</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <input
            type="text"
            name="user"
            value={formData.user}
            className="search-input"
            placeholder="Usuário Github"
            onChange={(handleChange)}
          />

          <input
            type="text"
            name="test"
            value={formData.test}
            className="search-input"
            placeholder="Usuário Github"
            onChange={(handleChange)}
          />

        </div>
        <button type="submit" className="btn btn-primary search-button">
          <h4>Encontrar</h4>
        </button>
      </form>
      </div>
      <div className="information-container">
      <ResultCard perfil={'https://api.github.com/users/acenelio'} seguidores={4379} localidade={'Uberlância'} nome={'Nelio Alves'} foto={'https://avatars.githubusercontent.com/u/13897257?v=4'} />
      </div>
    </div>
    
  );
};

export default GitSearch;
