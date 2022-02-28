import styles from '../styles/components/GamesGalery.module.css';
import { GamesGaleryScroll } from './ScrollReveal';

export default function GamesGalery() {
  return (
    <GamesGaleryScroll>
      <div className={styles.gamesGaleyContainer}>
        <div>
          <img src="../../public/img/imageFarcry.png" alt="" />
        </div>
        <div>
          <img src="../../public/img/imageForza.png" alt="" />
        </div>
        <div>
          <img src="../../public/img/imageFifa.png" alt="" />
        </div>
        <div>
          <img src="../../public/img/imageMinecraft.png" alt="" />
        </div>
      </div>
    </GamesGaleryScroll>
  );
}
