import styles from '../styles/Header.module.css';
import  Chat from './FunctionCalling.tsx';

function Header() {

  return (
    <header className={`${styles.headerSection} ${styles.py5} ${styles.bgDark}`}>
    <div className="container">
      <div className="row py-5">
        <div className="col-auto">
        <Chat />
        </div>
      </div>
    </div>
    </header>
  );
};

export default Header;

