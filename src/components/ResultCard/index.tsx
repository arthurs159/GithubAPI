import './styles.css';

type Props = {
  foto: string;
  perfil: string;
  seguidores: number;
  localidade: string;
  nome: string;
};

const ResultCard = ({ foto, perfil, seguidores, localidade, nome }: Props) => {
  return (
    <div className="result-container">
      <div className="img-container">
        <img src={foto} alt="foto" />
      </div>
      <div className="info-container">
        <h1>Informações</h1>
        <div className="card-perfil">
          <h4>Perfil: {perfil}</h4>
        </div>
        <div className="card-perfil">
          <h4>Seguidores: {seguidores}</h4>
        </div>
        <div className="card-perfil">
          <h4>Localidade: {localidade}</h4>
        </div>
        <div className="card-perfil">
          <h4>Nome: {nome}</h4>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
