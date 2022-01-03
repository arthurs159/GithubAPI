import './styles.css';

type Props = {
  avatar_url: string;
  html_url: string;
  followers: number;
  location: string;
  name: string;
};

const ResultCard = ({ avatar_url, html_url, followers, location, name }: Props) => {
  return (
    <div className="result-container">
      <div className="img-container">
        <img src={avatar_url} alt="fotoDoPerfil" />
      </div>
      <div className="info-container">
        <h1>Informações</h1>
        <div className="card-perfil">
          <h4>Perfil: <a href={html_url}>{html_url}</a></h4>
        </div>
        <div className="card-perfil">
          <h4>Seguidores: {followers}</h4>
        </div>
        <div className="card-perfil">
          <h4>Localidade: {location}</h4>
        </div>
        <div className="card-perfil">
          <h4>Nome: {name}</h4>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
