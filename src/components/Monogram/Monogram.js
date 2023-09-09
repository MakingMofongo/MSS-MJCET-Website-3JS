import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import { useTheme } from 'components/ThemeProvider';
import { cssProps, media } from 'utils/style';
import styles from './Monogram.module.css';
import projectKatakana from 'assets/OG-logo-black.svg?url';
export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;
  const theme = useTheme();
  const svgOpacity = theme.themeId === 'light' ? 0.7 : 1;

  return (
    <svg
      aria-hidden="true"
      width="200"
      height="100"
      viewBox="-250 0 750 137"
      data-light={theme.themeId === 'light'}
      style={cssProps({ opacity: svgOpacity })}
      className={styles.svg}
    >
      <use href={`${projectKatakana}#katakana-project`} />
    </svg>
  );
});
