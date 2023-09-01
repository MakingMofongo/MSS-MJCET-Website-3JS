import profileKatakana from 'assets/katakana-profile.svg?url';
import AboutUsImageLarge from 'assets/MSSlogo.png';
import AboutUsImagePlaceholder from 'assets/MSSlogo.png';
import AboutUsImage from 'assets/MSSlogo.png';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="About us" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
    The <strong>Microsoft Student Society</strong> is a place where students can unite, build, and grow. This Society serves as a platform for the students to build their network and enhance their technical skills by utilizing all the latest technologies that <strong>Microsoft Company</strong> and <strong>Student Chapter at MJCET</strong> has to offer.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
    All of our members get brilliant exposure as part of our effort to help them advance in their areas of expertise. The <strong>MSS</strong> offers a well-established network that has made interaction amongst various Microsoft groups possible in order to do this.
We believe in advancing together rather than individually.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send us a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Us
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={AboutUsImagePlaceholder}
                  srcSet={[AboutUsImage, AboutUsImageLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
