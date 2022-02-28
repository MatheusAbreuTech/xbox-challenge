import styles from '../styles/components/ControlInfo.module.css';
import { TextControlScroll, ControlScroll } from './ScrollReveal';

export default function ControlInfo() {
  return (
    <div className={styles.controlContainer}>
      <div className={styles.left}>
        <TextControlScroll>
          <>
            <h2>
              Desempenho <span>aperfeiçoado</span>
            </h2>
            <p>
              O controle sem fio Xbox traz um design elegante, conforto refinado e compartilhamento instantâneo para um
              favorito comum.
            </p>
          </>
        </TextControlScroll>
      </div>
      <div className={styles.rigth}>
        <ControlScroll>
          <img src="../../public/img/control.svg" alt="" />
        </ControlScroll>
      </div>
    </div>
  );
}
