import { ReactChild, ReactChildren, useEffect, useRef } from 'react';
import scrollReveal from 'scrollreveal';

interface Props {
  children: ReactChild | ReactChildren;
}

export function HeroTitleScroll({ children }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        duration: 2000,
        reset: true
      });
  }, []);
  return <section ref={sectionRef}>{children}</section>;
}

export function HeroImgScroll({ children }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        origin: 'bottom',
        distance: '80px',
        duration: 2500,
        reset: true
      });
  }, []);
  return <section ref={sectionRef}>{children}</section>;
}

export function TextControlScroll({ children }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        origin: 'top',
        distance: '100px',
        duration: 2000,
        reset: true
      });
  }, []);
  return <section ref={sectionRef}>{children}</section>;
}

export function ControlScroll({ children }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        origin: 'bottom',
        distance: '100px',
        duration: 2000,
        reset: true
      });
  }, []);
  return <section ref={sectionRef}>{children}</section>;
}

export function GamesGaleryScroll({ children }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        duration: 5000,
        reset: true
      });
  }, []);
  return <section ref={sectionRef}>{children}</section>;
}

export function FaqScroll({ children }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        origin: 'bottom',
        distance: '100px',
        duration: 2000,
        reset: true
      });
  }, []);
  return <section ref={sectionRef}>{children}</section>;
}
