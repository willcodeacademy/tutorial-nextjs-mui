import Box, { BoxProps } from '@mui/material/Box';
import { ReactNode, memo } from 'react';
import { InView } from 'react-intersection-observer';

type Props = {
  onViewChange?: (inView: boolean) => void;
  children: ReactNode | (({ inView, entry }: { inView: boolean; entry?: IntersectionObserverEntry }) => ReactNode);
} & Omit<BoxProps, 'children'>;

const Section = ({ onViewChange, children, ...boxProps }: Props) => {
  return (
    <InView
      threshold={0.1}
      onChange={(inView) => {
        if (onViewChange) onViewChange(inView);
      }}
    >
      {({ inView, ref, entry }) => (
          <Box ref={ref} {...boxProps}>
            {typeof children !== 'function' && children}
            {typeof children === 'function' && children({ inView, entry })}
          </Box>
      )}
    </InView>
  );
};

export default memo(Section);
