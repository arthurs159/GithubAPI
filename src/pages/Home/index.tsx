import Button from 'components/Button';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
    return (
        <div className="text-container">
        <h1>Desafio Github API</h1>
        <h4>Bootcamp Spring React - DevSuperior
        </h4>
  
        <Link to="/git">
        <div className="button-container">
          <Button />
        </div>
        </Link>
  
      </div>
    );
}

export default Home;
