import cn from "classnames";
import Image from "next/image";

import Main from "@/components/Main";
import s from "./page.module.css";

import author02 from "/public/images/photo-04.jpg";
import author03 from "/public/images/photo-02.jpg";
import author04 from "/public/images/photo-01.jpg";
import Links from "@/components/Links";
import { Blockquote } from "../components/Blockquote/Blockquote";

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
      <Blockquote>
        Не даю советы. Вместе мы найдем творческий подход к жизни. На личных или онлайн встречах будем работать над твоими запросами, и находить экологичные пути их решения.
        То, что ты есть, это уже уникальная новость для меня. Гештальт подход это про отношения и к себе и в паре.
      </Blockquote>
      <div className={s.imageWrapper} />
      <div className={cn(s.container, s.containerBottomMargin)}>
        <div>
          <div className={s.leftTitle}>С чем я работаю:</div>
          <ul>
            <li>травмы (в том числе у высокочувствительных людей)</li>
            <li>детско-родительские взаимоотношения (воспитание детей),</li>
            <li>отношения с партнером, консультирование пар (создание новых отношений, кризисы, эмоциональная зависимость, тяжелые расставания),</li>
            <li>тревоги и зависимости,</li>
            <li>лень и выгорание,</li>
            <li>страхи,</li>
            <li>низкая самооценка, нерешительность, не уверенность в себе, стеснительность (работа с самооценкой),</li>
            <li>кризисы: 30 или 40 лет, потеря близкого (смерть, горевание, расставание), экзистенциальные (потеря смысла жизни, отсутствие целей),</li>
            <li>чувства стыда или вины,</li>
            <li>мужские темы (не умение общаться с девушками, ставить/достигать цели в работе, учебе, бизнесе)</li>
          </ul>
          <p>
            Я использую эффективные и современные инструменты в психологии.
            Выстраиваю глубокие доверительные отношения клиент – терапевт.
          </p>
          <p>Хватит откладывать счастливую жизнь на потом, сформулируй запрос и записывайся прямо сейчас.</p>
          <div className={s.leftTitle}>С чем пока Не работаю:</div>
          <ul>
            <li>дети (до 18 лет),</li>
            <li>клинические заболевания,</li>
            <li>суицид (склонность, попытки).</li>
          </ul>
        </div>
        <div className={cn(s.image, s.imageMargin)}>
          <Image
            src={author03}
            width={300}
            alt='Станислав Цветков'
          />
        </div>
      </div>
      <Links center />
      <div className={s.footerImage} />
    </main>
  );
}
