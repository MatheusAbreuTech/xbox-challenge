import styles from '../styles/components/Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <h1>Xbox series X</h1>
      <p>Pedido antecipado</p>
      <div>
        <div className={styles.gradient}></div>
        <img src="../../public/img/xbox.svg" alt="" />
      </div>
    </div>
  );
}
