import { Link } from 'components/Link';
import { StoryContainer } from '../../../.storybook/StoryContainer';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://mss-mjcet-website-3-js.vercel.app/">Primary link</Link>
    <Link secondary href="https://mss-mjcet-website-3-js.vercel.app/">
      Secondary link
    </Link>
  </StoryContainer>
);
