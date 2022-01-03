import axios from 'axios';
import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import './styles.css';

type FormData = {
  user: string;
};

type GitInfo = {
  html_url: string;
  followers: number;
  name: string;
  location: string;
  avatar_url: string;
};

const GitSearch = () => {
  const [gitInfo, setGitInfo] = useState<GitInfo>();

  const [formData, setFormData] = useState<FormData>({
    user: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setGitInfo(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setGitInfo(undefined);
        console.log(error);
      });
  };

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
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary search-button">
            <h4>Encontrar</h4>
          </button>
        </form>
      </div>

      {gitInfo && (
        <div className="information-container">
          <ResultCard
            avatar_url={gitInfo.avatar_url}
            html_url={gitInfo.html_url}
            followers={gitInfo.followers}
            location={gitInfo.location}
            name={gitInfo.name}
          />
        </div>
      )}
    </div>
  );
};

export default GitSearch;
