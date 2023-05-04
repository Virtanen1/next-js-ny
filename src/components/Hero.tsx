import styles from './Hero.module.css'
import { ReactNode } from 'react';

type HeroProps = {
    children?: ReactNode
}

export default function  Hero ({children}: HeroProps) {
  return (
    <div> HERO!</div>
  );
}
