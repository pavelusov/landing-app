import Image from "next/image";

import s from './main.module.scss';
import mainImage from '/public/images/photo-08.jpg';
import cn from 'classnames';

import { badScriptFont } from '@/fonts/loclaFonts';
import Links from "@/components/Links";


export const Main = () => {
  return (
    <div className={s.root}>
      <div className={s.content}>
        <div className={cn(s.name)}>#Станислав Цветков</div>
        <div className={cn(s.job, badScriptFont.className)}>Гештальт-терапевт</div>
        <div className={cn(s.job, badScriptFont.className)}>Психолог очно</div>
        <div className={cn(s.describe)}>
          Не даю советы. Вместе мы найдем творческий подход к жизни. На личных или онлайн
          встречах будем работать над твоими запросами, и находить экологичные пути их решения.
          То, что ты есть, это уже уникальная новость для меня.
        </div>
        <Links />
      </div>
      <Image
        src={mainImage}
        width={300}
        alt='Станислав Цветков'
      />
    </div>
  )
}
