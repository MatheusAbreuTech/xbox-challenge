import styles from '../styles/components/Header.module.css';

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div>
        <img src="../../public/img/logo-xbox.svg" alt="" />
      </div>
      <ul>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Games</a>
        </li>
        <li>
          <a href="">FAQ</a>
        </li>
      </ul>
      <button type="button">Ver disponibilidade</button>
    </div>
  );
}
