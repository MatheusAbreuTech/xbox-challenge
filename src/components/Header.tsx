import styles from '../styles/components/Header.module.css';

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div>
        <img src="../../public/img/logo-xbox.svg" alt="" />
      </div>
      <div className={styles.menuItens}>
        <ul>
          <li>
            <a href="#">Visão geral</a>
          </li>
          <li>
            <a href="#">Jogos</a>
          </li>
          <li>
            <a href="#">Galeria</a>
          </li>
          <li>
            <a href="#">unbox</a>
          </li>
        </ul>
      </div>

      <button type="button">Ver disponibilidade</button>
    </div>
  );
}
