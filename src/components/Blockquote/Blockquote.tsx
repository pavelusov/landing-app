import { FC } from "react";

import s from './blockquote.module.scss';

type Props = {
  children: string;
}

export const Blockquote: FC<Props> = ({ children  }) => {
  return (
    <blockquote className={s.blockquote}>
      <p>{children}</p>
      <cite>Станислав Цветков</cite>
    </blockquote>
  )
}
