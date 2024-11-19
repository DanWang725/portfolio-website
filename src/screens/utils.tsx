import picture from '../img/picture.jpeg';
import {
  Article,
  ArticleSection,
  ContentType,
  CustomArticleSection,
  SectionType,
} from '../components/Article/types/article';
const articleContent: ArticleSection[] = [
  {
    title: 'About Me',
    id: 'about',
    type: SectionType.CUSTOM,
    content: [
      {
        size: 3,
        type: ContentType.IMAGE,
        src: picture,
        alt: 'profile picture',
        sx: {
          borderRadius: '50%',
          margin: '1rem',
          mr: '0rem',
        },
      },
      {
        size: 9,
        type: ContentType.TEXT,
        text: `Programming has been my thing ever since I discovered a python tutorial my early teenage years. Ever since, I've done programming in quite a few different areas, such as programming problems (always about that time efficiency), game development and developing this website. I always approach challenges with the goal of obtaining a deep understanding of anything I am working with. When I am not programming, you can usually find me either bouldering, playing board games, or going hiking on the Bruce Trail somewhere.`,
      },
    ],
  },
  //   {
  //     id: 'links',
  //     title: 'Other Websites',
  //     content: [
  //       <a href="https://github.com/DanWang725" key="gh" className="title-links">
  //         Github
  //       </a>,
  //       `
  // `,
  //       <a
  //         href="https://www.linkedin.com/in/danielwang725/"
  //         key="li"
  //         className="title-links"
  //       >
  //         linkedIn
  //       </a>,
  //     ],
  //   },
  {
    title: 'Education',
    id: 'education',
    type: SectionType.CUSTOM,
    content: [
      {
        size: 12,
        type: ContentType.TEXT,
        text: 'I am currently attending University of Guelph in get a Bachelor of Computing.',
      },
    ],
  },
  {
    title: 'To be added',
    id: 'more',
    type: SectionType.TEXT,
    content: `I am currently working on adding more content to this website. Please check back later for more information.`,
  },
];

export { articleContent };
