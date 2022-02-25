import styles from '../styles/components/GamesGalery.module.css';

export default function GamesGalery() {
  return (
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
  );
}
