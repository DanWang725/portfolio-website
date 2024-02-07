import picture from "../img/picture.jpeg";
const articleContent = [
  {
    options: {
      columns: "double",
    },
    id: "about",
    content: [
      <img key={"img1"} src={picture} className="article-profile-image"></img>,
      <p
        key={"about1"}
        className="article-content"
      >{`Programming has been my thing ever since I discovered a python tutorial my early teenage years. Ever since, I've done programming in quite a few different areas, such as programming problems (always about that time efficiency), game development and developing this website. I always approach challenges with the goal of obtaining a deep understanding of anything I am working with. When I am not programming, you can usually find me either bouldering, playing board games, or going hiking on the Bruce Trail somewhere.`}</p>,
    ],
  },
  {
    id: "links",
    title: "Other Websites",
    content: [
      <a href="https://github.com/DanWang725" key="gh" className="title-links">
        Github
      </a>,
      `
`,
      <a
        href="https://www.linkedin.com/in/danielwang725/"
        key="li"
        className="title-links"
      >
        linkedIn
      </a>,
    ],
  },
  {
    title: "Education",
    id: "education",
    content: [
      "I currently am attending ",
      <b key="1">University of Guelph</b>,
      " in get a Bachelor of Computing.",
    ],
  },
  {
    title: "To be added",
    id: "more",
    content: "More information will be added later",
  },
];

export { articleContent };
