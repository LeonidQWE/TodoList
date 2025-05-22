import { JSX } from 'react';
import s from './Title.module.scss';

type TitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text?: string;
};

export const Title = ({ level = 1, text }: TitleProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={s.title} data-testid='title'>{text ? text : 'No title'}</Tag>
  )
}
