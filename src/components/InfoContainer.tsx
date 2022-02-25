import { ReactChild, ReactChildren } from 'react';
import styles from '../styles/components/InfosContainer.module.css';

interface Props {
  children: ReactChild | ReactChildren;
}

export default function InfoContainer({ children }: Props) {
  return <section className={`${styles.infosContainer}`}>{children}</section>;
}
