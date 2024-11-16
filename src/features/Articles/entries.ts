import cover1 from './images/coverWTR1.png';
import cover2 from './images/ncrVoyix.jpg';
import { Article } from '../../components/Article/types/article';

const workTermReport1: Article = {
  title: 'Work Term Report S23',
  id: 'wtr-s23',
  image: cover1,
  description: 'Report for the first half of my NCR placement',
  entries: [
    {
      title: 'Introduction',
      titleShort: 'Intro',
      id: 'introduction',
      content: `This is my first work term report. It will describe my experiences for the first 4 months of my 8-month work term at NCR. As my first work placement in the field, it has been an amazing experience and awesome learning opportunity. I will give some background on NCR, as well as talk about a few of my goals for this term. I will also describe my overall experience working there. `,
    },
    {
      title: 'About NCR',
      titleShort: 'About',
      id: 'about',
      content: `National Cash Register, or NCR is an American software and technology company that provides a variety of services. These include retail, banking and IT software services, Point of Sale (POS) for commercial retail services, and ATMs. An interesting piece of information is that they had invented the cash register. The Waterloo office which I was working at focused on their interactive teller software solution as well as other software-based services. `,
    },
    {
      title: 'Goals',
      id: 'goals',
      content: `Prior to my placement, I had set a few simple goals since going into my position. I did not have a clear idea of what to expect, it was a better idea to start the job with an open mind and make goals from there. Thus, after my first day, I aimed to learn all the react topics. I also set a goal to collaborate with my team. Finally, I aimed to learn more about the design aspect of front end. 

      First, to become a successful React front-end developer, I had to be successful in learning all parts of React. My only prior experience came from the Systems Development and Integration course. In the final project, I took it upon myself to learn and use React instead of jQuery, which gave me a decent understanding of basic concepts. However, I identified some areas of React where my knowledge was weak: hooks, styling, and security and best practices. I tackled these topics using company courses and lessons. In addition, I always looked for the next opportunity to work on the app and get practical experience with React. When doing any work on the app, I would make sure to get my team lead's opinion of my work to get a second opinion on the correctness of my code. 
      
      In addition, I also aimed to create a full React component within the web app during this first term. I would have to have understood how to use and follow the given designs and hold design reviews. Understand how to code following the practices, creating unit and integration tests, and styling. Knowing about all facets of the React framework was one aspect of programming, however being able to correctly create new components from this knowledge was another thing altogether. I made sure to take note of any design practices that were used when I worked with the app. For example, I learned how to migrate functionality within a component into a reusable hook. As a result, when it came time to create a new modal, I was already prepared on what practices to use and how it would be designed. 
      
      Furthermore, I also prioritized the goal to collaborate and communicate with other developers. Being able to collaborate with co-workers is an important skill to have in any workplace. It was beneficial to have collaboration when developing new features. When we encountered blockers, that is an issue we couldn’t solve on our own, it helpful to have my team help me out. In addition, my personality is very reserved and shy. With this placement, I took the opportunity to be more assertive and take the initiative in communication. Whenever I had the chance, I would ask my team members for help in their respective areas. For example, I would ask our team QA about the user flows in the web app. I often asked the other front ends on my team about my work to get feedback. As a result, I became more used to reaching out and communicated more often. 
      
      As for the resolution of these goals, I am very proud to say that I accomplished all three of these goals much quicker than I thought. It was a huge benefit to my overall goal to become a capable developer on the team. The first two goals represented my onboarding journey for front end development, given it was the skills I needed for day-to-day development. Moreover, building collaboration skills was a benefit in many ways. I was getting clarification and help on my many issues starting out, as well as returning the favor by helping team members out with their work. In reflection, the goals that I had set myself were an appropriate challenge. It helped me focus my efforts and opened many opportunities to contribute to the product. 
      `,
    },
    {
      title: 'Job Description',
      titleShort: 'Job',
      id: 'job-description',
      content: `For my placement at NCR, I joined a feature team as a front-end developer. At the Waterloo office, there were a pretty large number of teams. Most of the teams, including mine, would be working on a full stack software product. My team, being a feature team, would work on developing and delivering new features for one of NCR’s customers. 

    Given that I was assigned to a feature team, much of my work that I did were related to the continued development and improvement of the web app. These tasks included new feature development as well as general improvements to the product to better the user experience. In addition, our team followed the agile development methodology. Although I lacked experience following agile, I followed it to the best of my ability, and after a few sprints I started to understand the benefits of agile process and learned how to follow it. 
    
    The type of work I would be doing day to day varied, but it often was either working on a story, fixing bugs, or doing testing on the app. My work has allowed me to get a new view on implementing solutions in code. Throughout the work term, I learned new ways to approach programming problems. I often would get stuck on a singular design implementation, and after discussing it with my team members they would often suggest a different idea that could be implemented much cleaner. Some of the frameworks I became familiar with were Storybook and Formik libraries. Often the bugs that I was assigned and helped with related to Formik, since many components featured forms utilizing the libraries’ features. However, the implementations and usages differed across the app as different teams followed different designs. As a result, the number and variety of designs gave me a lot of experience and knowledge of Formik Library. My experience using storybook would come with my goal to create a React component, since creating a storybook for components was often required. In addition, I was also assigned to create a storybook for a very important form in the app around the halfway point in my term. This form, which appears in many of the user flows of the app, would be related to bugs assigned to our team. Creating a storybook would benefit developers by rendering it as an isolated component. This form had a lot of information it required from contexts and other components, so when I finally created a storybook for that form, I had gained a lot of experience with Storybook. 
    
    The main feature that my team and I worked on during my work term occupied around half of my work period. I was fortunate enough to join the team as they were starting development on a major feature to be shipped to our client. This enabled me to experience most stages of the development cycle for a large feature. I participated in many planning and discussions about the requirements, along with design reviews for the back-end development. A portion of the front-end work for this feature would be assigned to me as well. Joining the team as they were beginning development on such a large feature was a huge help to my learning. Despite the overwhelming number of topics to learn, I paid attention and asked questions during the meetings. Throughout the development I was able to stay caught up with what our customer required and understood the design requirements. As a result, once I felt capable of front-end development and worked on the story, I felt more confident knowing where my work fit into the final capability. 
    
    The skills that I found were most important to my job were the web development languages (HTML, CSS), React, and JavaScript. Development tools including git and Jira were used everywhere, as well as agile development cycles. Surprisingly, when I started out, I only had some knowledge of web dev languages and git. The rest of the skills I picked up on the job. In addition, during my job I also learned about project architecture, design planning, development cycles and sprints, web accessibility, web security, software development in general, along with a lot of definitions. `,
    },
    {
      title: 'Conclusion',
      titleShort: 'Conc.',
      id: 'conclusion',
      content: `I have had an amazing experience working with my team and at NCR. I couldn’t have picked a better company to work at, and my team has been a blast to be part of. Even though it has only been four months, I have learned so much about software development, along with valuable experience of front-end development. I am looking forward to what my remaining four months at NCR have in store! 

    `,
    },
  ],
};

const workTermReport2: Article = {
  title: 'Work Term Report F23',
  id: 'wtr-f23',
  image: cover2,
  description: 'Report for the second half of my NCR placement.',
  entries: [
    {
      title: 'Introduction',
      titleShort: 'Intro',
      id: 'introduction',
      content:
        'This work term report goes over the second half of my 8-month work term as a front-end developer at NCR. My experience working throughout this half continued to be amazing, and I had many challenging but fulfilling tasks I worked on. Within this report, I will talk about the major company split that occurred. I will also describe the goals I set for this term and how my work experience has changed from the first half, including some notable features I worked on. I will also talk about how I got a patent from the company hackathon.',
    },
    {
      title: 'Company Split',
      titleShort: 'Split',
      id: 'company-split',
      content:
        'Around October, NCR officially split into two new companies: NCR Atleos and NCR Voyix. These new companies would specialize in NCR’s two main products or services: Atleos covering the ATM businesses and Voyix covering digital commerce. These two companies were independent of each other. Voyix was the legal successor to NCR Corporation, while Atleos was spun off. Currently, Voyix offers a variety of services focused on software in three main areas: retail, restaurants, and digital banking.',
    },
    {
      title: 'Goals',
      id: 'goals',
      content: `Moving into the second half of this work term, I had a decision to make: whether to try taking on some back-end development tasks or to dedicate my learning to front-end development. I felt that I had learned a good deal about front-end development at the halfway point to consider trying something new. Switching to a full-stack developer role, I could also learn about the back-end codebase. In the end, I decided that the best choice would be to continue focusing on front-end development. Since this was my first co-op work term, I still had two chances to try out the backend. This was my chance to learn and experience in-depth front-end development. To go along with this decision, I created the following goals to suit my decision:
      
      My first goal was to learn the rest of JavaScript and React. Despite the amount of work I had done in the first four months, there were still some areas of React that I had not touched fully upon. After discussing with my team lead, I still needed to work with React providers, asynchronous functions and promises, and advanced JavaScript object/array methods. I was not sure how long this goal would take to achieve since it was dependent on what my team was working on. However, I finished it quickly, since many of the topics I lacked knowledge on I quickly learned after working on a story that used them or reading up on that topic.
      
      Next, I also wanted to improve my clarity and organization when presenting demos or conducting reviews. While my explanations and demos were sufficient in the previous sprint, they were far from great. I noticed that while I would be explaining a complex component that has many features, I struggled to describe how it functions in a concise way. I would also benefit from improving my communication skills early, since being able to write and explain code is an important skill for a software developer in general. Over the course of the work term, I would use strategies to prepare my talking points prior to demos or reviews, and gradually I noticed improvements in clarity. For my last demo during the sprint review, I demoed all my team’s front-end stories without any issues.
      
      In addition, I wanted to develop safer coding techniques when adding to existing code. Considering that the application I worked on was mostly finished and my team would be developing additional features, it was important to prevent accidental changes to the existing code. During the first half of my work term, I did not consider the impact of my changes on existing functionality. As I began to take on larger tasks, the significance of preserving the existing implementation became more apparent. Some components within the application contained bad code that did not follow our conventions. Initially, I often tried to clean it up but kept the same functionality. However, making improvements such as that was not that beneficial to an app that was already released to customers who wanted to keep it the same. Only code that was directly within the scope of the story would warrant making changes. As I was given larger stories to work on, I started to recognize what code could be changed.
      
      Finally, I wanted to learn more about how the app was designed for large, codebase-wide components and conventions. I felt it was important to have knowledge of good code design within an app, since inevitably some developers would need to make changes later. In addition, with the amount of work I did developing components this term, being able to create good designs was a must. Having experience would also inform me of any design patterns to avoid, such as adding functions that fulfill more than one purpose. This was the most challenging goal to achieve since good design is always subjective. However, the developer process that we follow when working on features contains many steps to get reviews and opinions from other developers. Being able to get a second opinion helps a lot, and I often checked my ideas with my team lead or during design reviews.
      `,
    },
    {
      title: 'Job Description',
      titleShort: 'Job',
      id: 'job-description',
      content: `My placement at NCR had me continue working as a front-end developer with my team from the first portion of the term. Our team was still a feature team, which meant that we were developing new additional features for our bank teller platform. Since our team was moved to work under a new customer, the features we developed were less connected to the existing code and would be entirely new user flows. In addition to these features, I worked on a wide variety of other areas within the app. There were some days, or even sprints, where bugs dominated much of our work capacity. Some days, all of us front-end developers would be trying to merge two development branches together to sync changes.
      
      With 4 months of experience, I felt integrated with my team and my role, and I was ready to start working on larger and more complex stories. I felt much more capable and familiar with the application now. During sprint planning and implementation reviews, I actively participated and suggested my own ideas and thoughts.
      
      During this term, I was able to work on some notable features, such as creating a new screen. Developing this screen required an understanding of how the app renders its routes and the other properties required to properly show this screen. In addition, one of the last features I worked on was a generic transaction editor. This editor would be used for all future transactions with our customer, and it needed to be both generic and handle all the necessary API calls that other editors do. Like the screen component, I needed to understand how other existing editors within the app work and what properties they require, as well as what API endpoint they would be calling. Both components were very interesting to work on, and it was exciting to learn about how everything was organized and integrated with the editors.
      
      In addition to new features, I was able to contribute to the improvement of the existing application. During one of my investigations, I noticed that one of the large forms in the app called a performance-heavy function hundreds of times per input, slowing the user experience by 80%. I was given the okay to refactor this issue and reduce the number of calls to single digits. As a result, the developer and user experience were greatly improved, as it felt more responsive to work with. This investigation also identified the issue existing throughout the entire app. I was able to help my team improve performance throughout the entire app. I also learned a lot from this investigation. I wanted to understand the cause of this suboptimal behaviour, and I ended up learning how forms from the Formik library work. I gained an understanding of how React itself performs updates and re-renders through the DOM, the document object model, where the HTML elements are stored.
      
      The skills that were important to my job are the same as those listed in my first work term report: web development languages including HTML, CSS, and React; development tools like GitHub and Jira; and the agile development methodology. More importantly, however, is the mindset when working here. I always took any chance to challenge myself and accomplish as much as I could, such as taking the initiative to look for work and advocating ideas during meetings, to name some examples. My team was more than happy to accept and encourage me to do challenging work, which is how I was able to gain and learn all the skills I have now.
      `,
    },
    {
      title: 'NCR Hackathon',
      titleShort: 'Hack',
      id: 'hackathon',
      content: `In addition to all my accomplishments during my work term, I got a patent filed with my name on it. In the first half of my work term in August, our company hosted a company-wide hackathon that would last two days. My team, called Eason and Friends, was a group of seven Guelph co-ops. We came up with the idea of using blockchain as a medium for interbank transfers. As a quick rundown on how blockchain networks like Ethereum work in general, they function using smart contracts. These contracts basically have their programming hard-coded into the blockchain. When anyone performs a transaction (as in running the smart contract), the entire procedure is public, as everyone can see and verify the code run. The most common language to use to write these is Solidity, which was a new language to everyone on the team. I took the initiative, learning and then creating a basic smart contract in Solidity over the two days. I also helped my team setup a local blockchain using my contract and helped develop a front end that would connect to the blockchain. At the end of the hackathon, we had a fully working prototype of our idea consisting of a front-end React application, a Java back-end, and a blockchain network. Although we didn’t win any prizes, the hackathon was a blast! It was fun working together as a team for over 12 hours at the office.
      
      The great thing about the company hackathon was that many ideas had the potential to become actual applications (one of NCR's platforms started out as a hackathon idea). It was a welcome surprise to see that the application we had sent in had passed all rounds of judging and that our idea would be patented. The process of getting the patent created took months, and the updates were slow. By the time our lawyer had a draft for us to approve, most of us were finished with this term. In fact, when this report was written in January, the patent had not yet been filed. However, it is amazing that, as a team, we managed to get a patent filed for our idea.
      `,
    },
    {
      title: 'Conclusion',
      titleShort: 'Conc.',
      id: 'conclusion',
      content: `Choosing NCR as my first co-op placement has been an amazing opportunity. I have grown so much in experience and knowledge since I started my placement. It feels unreal that, by the end, I was being assigned work equal to that of a regular developer. I was presented with challenging but fulfilling work that greatly benefited my learning experience. Reflecting on all the things I have done, it is amazing how much I was able to do during my term and the impact my code has on the current application. Aside from the work I did, the people I worked with and interacted with were outstanding. Everyone at NCR was very helpful and would usually take some time to assist me with my issue when I asked. My team was always looking out for my success and was supportive in many ways, making this experience unforgettable. I hope that I can come back to work at NCR in the future!`,
    },
    {
      title: 'Acknowledgements',
      titleShort: 'Thanks',
      id: 'acknowledgements',
      content:
        'My experience at NCR can be attributed to the awesome team I worked with. Big thanks to my team leader, Lubna, for supporting me throughout my placement and helping me improve in my weaker areas, as well as to my entire team for being fun to work with and making this first work term so memorable. Finally, I want to thank some of the other co-ops (Eason, Mark, Ethan, Myron, Isaiah, and Max) for being great to hang out with and keeping the $2 burger tradition.',
    },
  ],
};
const workTermReport3: Article = {
  title: 'Work Term Report S24',
  id: 'wtr-s24',

  image:
    'https://media.licdn.com/dms/image/C4D0BAQEU7NLxVO2miA/company-logo_200_200/0/1631353160813?e=2147483647&v=beta&t=27HCzvz9KhfZJq38rGFwp0LLZAg_9w3kHYT9K1yh560',
  description: 'Work term report of my S24 placement at Pacwill Environmental',
  entries: [
    {
      title: 'Introduction',
      titleShort: 'Intro',
      id: 'introduction',
      content: `      Welcome to my third co-op work term report! This placement was for 3 months from May to July. Within this report, I will describe the company I worked for, the software I would be developing, and some of the goals I set myself. I will also explain the many areas in which my knowledge and experience have grown as a software developer.`,
    },
    {
      title: 'Pacwill Environmental',
      titleShort: 'Pacwill',
      id: 'pacwill',
      content: `  I worked with Pacwill Environmental, a small company based in Stoney Creek, Ontario. They provide a range of environmental monitoring equipment to customers across Canada, including various types of analyzers. One of their biggest clients is Environment Canada, which uses the equipment to monitor various sites and for scientific purposes. Although Pacwill’s specialty was only equipment supply and maintenance, they were interested in creating a new software solution to assist with monitoring equipment in the field.`,
    },
    {
      title: 'Goals',
      id: 'goals',
      content: `      For this placement, I had set many small goals for myself. Creating a new software solution from scratch presents many challenges and goals to overcome. I wanted to ensure my work met a certain quality standard, so my goals involved the development of skills to achieve that. I’ll describe a few goals that I found were essential to my success in this project.

      My first goal was to gain a wider understanding of security vulnerabilities and strategies to address them within a full-stack web application. Security is an important aspect of any software developed, as any public application can be exploited by malicious attackers. In addition, I have learned from my cryptography course that it is essential to include security controls in the early stages of designing the software. Introducing it later in development becomes challenging and costly quickly, as the system was not designed with security initially. Thus, to develop the software properly, it was important to succeed in this goal early on. Although I had extensive knowledge about the theory behind software security, designing them was a whole different story. I ended up succeeding in this goal at the halfway point in my term, when I was able to implement my own designs into the application. You can read more about my implementation in the job description. Succeeding in this goal was a challenging but important learning experience about software design with robust security. I also gained a bit of experience in probing my system. Since I needed to ensure the code was secure, I found and fixed my bugs by trying to access data from the outside.

      Another important goal was to build up skills communicating with my manager about his new software application. When I started, it was apparent that I would need to work closely with my manager to plan the software project. He did not have a technical background in software development, so it would be ineffective to use unfamiliar technical language in discussions. I found it hard to be able to simplify things down, using diction that he could understand. I was required to take the ideas and turn them into requirements. I would often need to ask how an idea would be displayed visually on the webpage or how some functionality would work when interfacing with analyzers. I learned to use many techniques taught in my courses, such as creating user stories, card sorting sessions, and wireframes. Gradually, I started to learn and improve my general communication skills. I was better at omitting or explaining technical concepts as required, and it became easier to communicate technical discussion points with my manager.

      Equally important was my goal to understand more design patterns within various parts of software. This goal was essentially about two sub-goals: database table design as well as the OOP design principles with back-end code. While this may seem like a large and maybe too ambitious goal, I felt it was necessary given the opportunity. Since I was creating the initial application, it was very likely most features would be developed on what I wrote. If they were designed poorly, it would hinder future development. Although the two sub-goals covered slightly different topics, both goals were achieved through the strategy of trial and error. I started off by researching and looking at implementations in public GitHub repositories, which enabled me to create my first design for a table or class. I would continue development as usual until I found some glaring issues with my design. After experiencing a few design flaws, I would make a small refactor improving the code. As a result, from each refactor, I learned a new lesson on how the database table or back-end code should be designed. Interestingly, I learned that good design also includes the ability to gauge how complex a system design should be. For example, if there was a class that had a very specific purpose, there would be very little purpose to create boilerplate (code that standardizes functionality between similar code).

      Finally, organization and time management of my work is another important goal I had set during my placement. I often had many things to work on: back-end and front-end code development, the UI wireframe, designs for future features, APIs to the analyzers. In addition, as mentioned in the above goals, I was constantly reviewing my work to ensure that I was writing well-designed code as well as ensuring robust security. At first, the abundance of options was overwhelming, resulting in my focus constantly jumping between different things. Although development was moving forward, the lack of organization influenced the quality of my work. I learned to use tools to track and organize my tasks. This partially solved my habit of jumping between tasks. However, there was one issue that presented itself throughout my work term: dependencies on other tasks. Although I tried to account for this by ordering everything logically, the issue still presented itself during my self-code reviews. I would be unsure if my current implementation would be good enough for future things, so I would get the urge to do more research into how else to code it. As a result of these uncertainties, this goal was not successfully achieved, or at least to the level I was happy with. This was partially due to my lack of experience. However, I would argue it came from the nature of the content I learned from my courses – that it should be done in a group. 
`,
    },
    {
      title: 'Job Description',
      titleShort: 'Job',
      id: 'job-desc',
      content: `      In this co-op placement, I was the sole developer on a new cloud-based full-stack application. It would be a data acquisition service, which would help customers monitor their analyzers that were out in the field. I was excited but also nervous to have this responsibility. Although officially, my position was a Web Developer, it was more so a full software developer role, as I did more than what was listed in the job description.

      Starting an entirely new software required experience in MANY fields: software design, user interface design, software security, cloud development, as well as front-end, back-end, and database development. Some fields I had practical experience in, such as design and front-end development. Topics in software security, cloud development, and back-end development were weak points, as I had only theoretical knowledge of or didn’t work with much. Another setback was the lack of mentorship from this position. Since I was the sole developer, I could not get feedback for the code I wrote, which made it significantly harder to improve upon my skills that I learned. What I did day to day varied a lot, depending on what stage I was in development. I managed the project’s requirements, developed the backend server, created the designs for the UI components, and much more. I have done and learned so much about so many different things, and if I were to explain everything that I was excited to learn about, it would be a bit too much for this report.

      One important aspect of being the sole developer on a new software project was that I had complete creative control over everything! It allowed me to experience all aspects of software development and additionally focus on ones I had less experience in. Backend development was one area I did not have much experience in; as a result, I invested more time developing in that area. Instead of developing on an established web framework, I instead opted to create my own RESTful framework. This included custom security controls like authentication through JSON web tokens (JWT). This was an amazing learning opportunity, as I learned about the high-level structure of web frameworks and how routing requests to controllers works.

      In terms of skills required for this job, I would say having independent work skills was required to do well. As I have said before, I worked as the sole developer on the new software, which meant I managed myself and the work that I did. In terms of required coding skills, my prior experience in front-end development was a plus, but databases and backend languages were new to me. For this reason, my ability and passion for learning played a larger part in coding skills. There were many new languages and tools I learned from this job, which I attribute to those skills. In addition, many of the skills I learned from my courses helped me. Skills from my software design course helped me in the initial stages of planning, while my user interface design course helped me with the creation of the UI wireframe, along with conducting card sorting sessions.

      In terms of languages and technologies I used, there is unsurprisingly a long list of them that I used during my eventful work term. In terms of languages, I used PHP for the backend, MySQL for the backend, and the usual Javascript, React, HTML, and CSS combo for the frontend. For technical documentation, I used PlantUML to create all my sequence and class diagrams. I used Swagger to write my endpoint documentation. For technologies used during my co-op term, I used Git, Figma, Apache, Google Cloud Platform, and Docker. Although I did list a lot, I feel proud to have gained a significant amount of experience working with each.
`,
    },
    {
      title: 'Conclusion',
      titleShort: 'Conc.',
      id: 'conclusion',
      content: `      Working at Pacwill Environmental has been an amazing and fulfilling experience and has been invaluable to my skills as a software engineer. Being in charge of a new cloud-based software project as its sole developer presented a great and rewarding challenge and allowed me to flex all of my programming muscles. I would like to thank everyone in Pacwill for being supportive and helping me when I was unsure. I would like to thank Sean, my manager, for allowing me to turn his idea into software. I would also like to thank Tom for helping me get used to PHP and Ahbi for assisting me with Teledyne issues.`,
    },
  ],
};
export const workTermReportEntries = [
  workTermReport1,
  workTermReport2,
  workTermReport3,
];
