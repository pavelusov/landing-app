import { PhoneCall, Send, Phone } from 'lucide-react';
import Link from "next/link";
import { FC } from "react";
import cn from 'classnames';

import s from './links.module.scss';

type Props = {
  center?: boolean;
}

export const Links: FC<Props> = ({ center }) => {
  return (
    <div className={cn(s.links, {[s.center]: center})}>
      <Link
        href="https://wa.me/79827141518?text=Здравствуйте,%20хочу%20записаться%20к%20вам%20на%20прием."
        target="_blank"
        className={s.link}
      >
        <PhoneCall  />
        <div className={s.linkText}>Whats Up</div>

      </Link>
      <Link
        href="https://t.me/+79827141518?text=Здравствуйте,%20хочу%20записаться%20к%20вам%20на%20прием."
        target="_blank"
        className={s.link}
      >
        <Send />
        <div className={s.linkText}>Telegram</div>
      </Link>
      <Link
        href="tel:+79827141518"
        target="_blank"
        className={s.link}
      >
        <Phone />
        <div className={s.linkText}>+7-982-714-15-18</div>
      </Link>
    </div>
  )
}
