import styles from '../styles/components/ControlInfo.module.css';
// import '../styles/global.css';

export default function ControlInfo() {
  return (
    <div className={styles.controlContainer}>
      <div className={styles.left}>
        <h2>
          Desempenho <span>aperfeiçoado</span>
        </h2>
        <p>
          O controle sem fio Xbox traz um design elegante, conforto refinado e compartilhamento instantâneo para um
          favorito comum.
        </p>
      </div>
      <div className={styles.rigth}>
        <img src="../../public/img/control.svg" alt="" />
      </div>
    </div>
  );
}
