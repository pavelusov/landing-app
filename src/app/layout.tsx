import type { Metadata } from 'next';
import Link from 'next/link'
import { Phone } from 'lucide-react';

import './globals.css';
import s from './layout.module.scss';


export const metadata: Metadata = {
  title: "Станислав Цветков - гештальт-консультант",
  description: "Станислав Цветков - гештальт-консультант +7-982-714-15-18",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div className={s.root}>
        <span style={{ marginRight: 15 }}>Онлайн запись по телефону</span>
        <Link
          href="tel:+79827141518"
          target="_blank"
          className={s.link}
        >
          <Phone />
          <div className={s.linkText}>+7-982-714-15-18</div>
        </Link>
      </div>
        <div className={s.container}>
          {children}
        </div>
      </body>
    </html>
  );
}
