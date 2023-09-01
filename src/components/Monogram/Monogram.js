import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="46"
      height="29"
      viewBox="0 0 46 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          {/* Replace the existing path with a text element */}
          <text x="5" y="20" font-family="Georgia" font-size="20" fill="black">MSS</text>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
