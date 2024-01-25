import type { Metadata } from "next";
import cn from 'classnames';

import "./globals.css";
import s from './layout.module.scss';
import { badScriptFont } from '@/fonts/loclaFonts';


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          <div className={cn(s.links, badScriptFont.className)}>
            <div className={s.link}>Обо мне</div>
            <div className={s.link}>Чем могу помочь</div>
            <div className={s.link}>Записаться</div>
          </div>
        </div>
        <div className={s.root}>
          {children}
        </div>
      </body>
    </html>
  );
}
