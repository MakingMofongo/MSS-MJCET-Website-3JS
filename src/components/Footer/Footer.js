import { Link } from 'components/Link';
import { Text } from 'components/Text';
import { classes } from 'utils/style';
import styles from './Footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} MSS Projects Team.`}
      </span>
      <Link secondary className={styles.link} href="https://www.linkedin.com/in/abdul-rasheed-3a5635276/" target="_self">
        Crafted by yours truly
      </Link>
    </Text>
  </footer>
);
