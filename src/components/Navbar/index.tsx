
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar bg-primary main-nav">
      <div className="main-div">
        <Link to={"/"}>
        <h4 className="main-text">
          Github API
        </h4>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
