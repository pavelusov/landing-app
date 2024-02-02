import cn from "classnames";
import Image from "next/image";

import Main from "@/components/Main";
import s from "./page.module.css";

import author02 from "/public/images/author_02.jpg";
import Links from "@/components/Links";

export default function Home() {
  return (
    <main className={s.root}>
      <Main />
      <div className={cn(s.describe)}>
        <div className={s.title}>#Давайте знакомиться</div>
        <div className={s.container}>
          <div className={s.image}>
            <Image
              src={author02}
              width={300}
              alt='Станислав Цветков'
            />
          </div>
          <div>
            <p>
              Всем привет. Меня зовут Станислав, мне 42 года я практикующий гештальт-консультант.
              Воспитываю сына, ему 11 лет.
            </p>
            <p>
              Я увлечен психологией, спортом, кулинарией. Сейчас у меня
              третий год обучения (очно) в институте «Гештальта» город Екатеринбург, много личной терапии,
              участие в мастер-классах и семинарах института, а в жизни большой человеческий опыт в
              общении с людьми, попавшими в сложные жизненные ситуации.
            </p>
            <p id="#part1">
              22 года я проработал в системе
              МЧС, расследовал пожары и их последствия. Весь жизненный опыт сделал меня любящим,
              отзывчивым, заботливым, эмпатичным, внимательным, принимающим людей.
            </p>
          </div>
        </div>
      </div>
      <Links center />
    </main>
  );
}
