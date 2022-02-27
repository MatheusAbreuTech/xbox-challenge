import styles from '../styles/components/Footer.module.css';
import { IoLogoGithub } from 'react-icons/io';
import { ImLinkedin2 } from 'react-icons/im';

export default function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footer1}>
          <img src="../../public/img/logo-xbox.svg" alt="" />
          <div>
            <p>© Microsoft 2022</p>
            <p>Todos os direitos reservados</p>
          </div>
        </div>
        <div className={styles.footer2}>
          <div>
            <p>Developed by Matheus Abreu</p>

            <div className={styles.socialMedia}>
              <a href="https://www.linkedin.com/in/matheus-santosab/" target="_blank">
                <ImLinkedin2 />
              </a>
              <a href="https://github.com/MthAbreu" target="_blank">
                <IoLogoGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
