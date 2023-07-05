'use client';

import EmotionRootLayout from '@/app/emotion';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import { Fragment, useState } from 'react';
import { SectionProps } from './section/props';

const AppBarSection = dynamic(() => import('./appbar-section'));

type Props = {
  sections: ((props: SectionProps) => JSX.Element)[];
};

export default function PageTemplate({ sections }: Props) {
  const [sectionVisibility, setSectionVisibility] = useState(
    Array.from({ length: sections.length }, (_, i) => (i === 0 ? true : false)),
  );

  const onViewChange = (index: number) => (inView: boolean) => {
    if (inView) setSectionVisibility((prev) => prev.map((v, i) => (i === index + 1 ? true : v)));
  };

  return (
    <EmotionRootLayout>
      <ThemeProvider theme={createTheme()}>
        <AppBarSection />
        {sections.map((func, index) => (
          <Fragment key={index}>
            {sectionVisibility[index] && <>{func({ onViewChange: onViewChange(index) })}</>}
          </Fragment>
        ))}
      </ThemeProvider>
    </EmotionRootLayout>
  );
}
