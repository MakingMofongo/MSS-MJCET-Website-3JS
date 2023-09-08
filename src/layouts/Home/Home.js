// import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
// Upper screen texture ^^^
import gamestackTexture2Large from 'assets/CWS.png';
import RaniyaImg from 'assets/Raniya.png';
import NabahatImg from 'assets/NabahatPic.png';
import NadiaImg from 'assets/Nadia.png'
import UmaimaImg from 'assets/UmaimaPic.png';
import SufyanImg from 'assets/Sufyan.png';


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
// import {EventsHeader} from 'layouts/Home/EventsHeader'
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
    const sections = [intro,projectOne, projectTwo, projectThree, details,memberOne, memberTwo, memberThree, memberFour, memberFive];

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
        buttonText="Linkedin"
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
              placeholder: gamestackTextureLarge,
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
        title="Nabahat Injela"
        description="Chief Representative"
        buttonText="Linkedin"
        buttonLink="https://www.linkedin.com/in/ACoAAEJaDykBZArFjQK5laI1CE0DhawtQ9fxyAM?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3B7MFcX8jpToWOkVMZMPAvfw%3D%3D"
        model={{
          type: 'phone',
          alt: 'C Work Shop',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [NabahatImg,NabahatImg],
              placeholder: gamestackTextureLarge,
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
        title="Nadia Aref"
        description="Principal Secretary"
        buttonText="Linkedin"
        buttonLink="https://www.linkedin.com/in/ACoAADN3UoEB3w9O9M6Ai0m6LOGrEp_PDJaZjA4?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BTBl61Yc1SYariZr60EZVzg%3D%3D"
        model={{
          type: 'phone',
          alt: 'C Work Shop',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [NadiaImg,NadiaImg],
              placeholder: gamestackTextureLarge,
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
        title="Umaima Khan"
        description="Vice Chief Coordinator"
        buttonText="Linkedin"
        buttonLink="https://www.linkedin.com/in/ACoAADuZoLsBVZDhWrpkS24F4CMKDs7UNYAl-GY?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3B7MFcX8jpToWOkVMZMPAvfw%3D%3D"
        model={{
          type: 'phone',
          alt: 'C Work Shop',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [UmaimaImg,UmaimaImg],
              placeholder: gamestackTextureLarge,
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
        title="Mohammed Sufyan Talish"
        description="Tech Lead"
        buttonText="View website"
        buttonLink="https://www.linkedin.com/in/mohd-sufyaan-talish/"
        model={{
          type: 'phone',
          alt: 'C Work Shop',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [SufyanImg,SufyanImg],
              placeholder: gamestackTextureLarge,
            },
          ],
        }}
      />
      <Footer />
    </div>
  );

};
