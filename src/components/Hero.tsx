import styles from '../styles/components/Hero.module.css';
import { HeroImgScroll, HeroTitleScroll } from './ScrollReveal';

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <HeroTitleScroll>
        <>
          <h1>Xbox series X</h1>
          <p>Pedido antecipado</p>
        </>
      </HeroTitleScroll>

      <div>
        <div className={styles.gradient}></div>
        <HeroImgScroll>
          <img src="../../public/img/xbox.svg" alt="" />
        </HeroImgScroll>
      </div>
    </div>
  );
}
