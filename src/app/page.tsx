import styles from "./page.module.css";
import Main from "@/components/Main";
import cn from "classnames";
import s from "@/components/Main/main.module.scss";

export default function Home() {
  return (
    <main className={styles.root}>
      <Main />
      <div className={cn(s.describe)}>
        <div>Давайте знакомиться</div>
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
        <p>
          22 года я проработал в системе
          МЧС, расследовал пожары и их последствия. Весь жизненный опыт сделал меня любящим,
          отзывчивым, заботливым, эмпатичным, внимательным, принимающим людей.
        </p>
      </div>
    </main>
  );
}
