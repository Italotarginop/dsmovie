import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import './styles.css';
function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DsMovie</h1>
          <a href="https://github.com/Italotarginop">
            <div>
              <GithubIcon />
              <p>/devSuperior</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
