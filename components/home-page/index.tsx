'use client';

import { SectionProps } from "@/components/template/section/props";
import dynamic from 'next/dynamic';
import PageTemplate from "../template";

const FirstSection = dynamic(() => import('./first-section'));
const SecondSection = dynamic(() => import('./second-section'));
const ThirdSection = dynamic(() => import('./third-section'));

const HomePage = () => {
  return (
    <PageTemplate sections={[
      ({ onViewChange }: SectionProps) => <FirstSection {...{onViewChange}} />,
      ({ onViewChange }: SectionProps) => <SecondSection {...{onViewChange}} />,
      ({ onViewChange }: SectionProps) => <ThirdSection {...{onViewChange}} />,
    ]}
    />    
  );
};

export default HomePage;