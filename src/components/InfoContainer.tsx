import { ReactChild, ReactChildren } from 'react';
import styles from '../styles/components/InfosContainer.module.css';

interface Props {
  children: ReactChild | ReactChildren;
}

export default function InfoContainer({ children }: Props) {
  return (
    <div className={`${styles.infosContainer}`}>
      <div className="container">{children}</div>
    </div>
  );
}
