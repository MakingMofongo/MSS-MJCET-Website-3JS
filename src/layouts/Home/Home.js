// import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
// Upper screen texture ^^^
import gamestackTexture2Large from 'assets/CWS.png';
import RaniyaImg from 'assets/Raniya.png';

import gamestackTexture2Placeholder from 'assets/CWS.png';
import gamestackTexture2 from 'assets/CWS.png';
import gamestackTextureLarge from 'assets/msslogowhite.jpeg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/msslogowhite.jpeg';
import sliceTextureLarge from 'assets/slice-app-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/cat.jpg';
// import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTextureLarge from 'assets/MSSlive1.png';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Invent','Innovate','Inspire'];
export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const memberOne = useRef();
  const memberTwo = useRef();
  const memberThree = useRef();
  const memberFour = useRef();
  const memberFive = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details, memberOne, memberTwo, memberThree, memberFour, memberFive];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Club Details"
        description="Club for Tech enthusiasts at MJCET, Supported by Microsoft"
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="MSS Live."
        description="Lectures by Microsoft Student Partners, guided by MVPs and MCAs"
        buttonText="View event"
        buttonLink="https://www.instagram.com/stories/highlights/18102281398005480/"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="C Work Shop"
        description="A workshop on C programming by Microsoft Student Partners"
        buttonText="View website"
        buttonLink="https://www.instagram.com/stories/highlights/17865281374305480/"
        model={{
          type: 'phone',
          alt: 'C Work Shop',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Event 3"
        description="Event 3 details"
        buttonText="View event"
        buttonLink=""
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />

<ProjectSummary
        id="Member1"
        alternate
        sectionRef={memberOne}
        visible={visibleSections.includes(memberOne.current)}
        index={1}
        title="Raniya Farhan Sheikh"
        description="Chief Coordinator"
        buttonText="View website"
        buttonLink="https://www.instagram.com/stories/highlights/17865281374305480/"
        model={{
          type: 'phone',
          alt: 'C Work Shop',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [RaniyaImg, RaniyaImg],
              placeholder: RaniyaImg,
            },
          ],
        }}
      />
<ProjectSummary
        id="Member2"
        alternate
        sectionRef={memberTwo}
        visible={visibleSections.includes(memberTwo.current)}
        index={2}
        title="Raniya Farhan Sheikh"
        description="Chief Coordinator"
        buttonText="View website"
        buttonLink="https://www.instagram.com/stories/highlights/17865281374305480/"
        model={{
          type: 'phone',
          alt: 'C Work Shop',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [RaniyaImg, RaniyaImg],
              placeholder: RaniyaImg,
            },
          ],
        }}
      />
<ProjectSummary
        id="Member3"
        alternate
        sectionRef={memberThree}
        visible={visibleSections.includes(memberThree.current)}
        index={3}
        title="Raniya Farhan Sheikh"
        description="Chief Coordinator"
        buttonText="View website"
        buttonLink="https://www.instagram.com/stories/highlights/17865281374305480/"
        model={{
          type: 'phone',
          alt: 'C Work Shop',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [RaniyaImg, RaniyaImg],
              placeholder: RaniyaImg,
            },
          ],
        }}
      />
<ProjectSummary
        id="Member4"
        alternate
        sectionRef={memberFour}
        visible={visibleSections.includes(memberFour.current)}
        index={4}
        title="Raniya Farhan Sheikh"
        description="Chief Coordinator"
        buttonText="View website"
        buttonLink="https://www.instagram.com/stories/highlights/17865281374305480/"
        model={{
          type: 'phone',
          alt: 'C Work Shop',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [RaniyaImg, RaniyaImg],
              placeholder: RaniyaImg,
            },
          ],
        }}
      />
<ProjectSummary
        id="Member5"
        alternate
        sectionRef={memberFive}
        visible={visibleSections.includes(memberFive.current)}
        index={5}
        title="Raniya Farhan Sheikh"
        description="Chief Coordinator"
        buttonText="View website"
        buttonLink="https://www.instagram.com/stories/highlights/17865281374305480/"
        model={{
          type: 'phone',
          alt: 'C Work Shop',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [RaniyaImg, RaniyaImg],
              placeholder: RaniyaImg,
            },
          ],
        }}
      />
      <Footer />
    </div>
  );

};
