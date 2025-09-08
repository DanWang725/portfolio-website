import cover1 from './images/coverWTR1.png';
import cover2 from './images/ncrVoyix.jpg';
import cover4 from './images/camis_inc__logo.jpg';
import shoppingCart from './images/screenshot-shoppingcart.png';
import { Article, ContentType } from '../../components/Article/types/article';

const workTermReport1: Article = {
  title: 'Work Term Report S23',
  id: 'wtr-s23',
  image: cover1,
  description: 'First 4 months for my placement at NCR.',
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
      
      Furthermore, I also prioritized the goal to collaborate and communicate with other developers. Being able to collaborate with co-workers is an important skill to have in any workplace. It was beneficial to have collaboration when developing new features. When we encountered blockers, that is an issue we couldn't solve on our own, it helpful to have my team help me out. In addition, my personality is very reserved and shy. With this placement, I took the opportunity to be more assertive and take the initiative in communication. Whenever I had the chance, I would ask my team members for help in their respective areas. For example, I would ask our team QA about the user flows in the web app. I often asked the other front ends on my team about my work to get feedback. As a result, I became more used to reaching out and communicated more often. 
      
      As for the resolution of these goals, I am very proud to say that I accomplished all three of these goals much quicker than I thought. It was a huge benefit to my overall goal to become a capable developer on the team. The first two goals represented my onboarding journey for front end development, given it was the skills I needed for day-to-day development. Moreover, building collaboration skills was a benefit in many ways. I was getting clarification and help on my many issues starting out, as well as returning the favor by helping team members out with their work. In reflection, the goals that I had set myself were an appropriate challenge. It helped me focus my efforts and opened many opportunities to contribute to the product. 
      `,
    },
    {
      title: 'Job Description',
      titleShort: 'Job',
      id: 'job-description',
      content: `For my placement at NCR, I joined a feature team as a front-end developer. At the Waterloo office, there were a pretty large number of teams. Most of the teams, including mine, would be working on a full stack software product. My team, being a feature team, would work on developing and delivering new features for one of NCR's customers. 

    Given that I was assigned to a feature team, much of my work that I did were related to the continued development and improvement of the web app. These tasks included new feature development as well as general improvements to the product to better the user experience. In addition, our team followed the agile development methodology. Although I lacked experience following agile, I followed it to the best of my ability, and after a few sprints I started to understand the benefits of agile process and learned how to follow it. 
    
    The type of work I would be doing day to day varied, but it often was either working on a story, fixing bugs, or doing testing on the app. My work has allowed me to get a new view on implementing solutions in code. Throughout the work term, I learned new ways to approach programming problems. I often would get stuck on a singular design implementation, and after discussing it with my team members they would often suggest a different idea that could be implemented much cleaner. Some of the frameworks I became familiar with were Storybook and Formik libraries. Often the bugs that I was assigned and helped with related to Formik, since many components featured forms utilizing the libraries' features. However, the implementations and usages differed across the app as different teams followed different designs. As a result, the number and variety of designs gave me a lot of experience and knowledge of Formik Library. My experience using storybook would come with my goal to create a React component, since creating a storybook for components was often required. In addition, I was also assigned to create a storybook for a very important form in the app around the halfway point in my term. This form, which appears in many of the user flows of the app, would be related to bugs assigned to our team. Creating a storybook would benefit developers by rendering it as an isolated component. This form had a lot of information it required from contexts and other components, so when I finally created a storybook for that form, I had gained a lot of experience with Storybook. 
    
    The main feature that my team and I worked on during my work term occupied around half of my work period. I was fortunate enough to join the team as they were starting development on a major feature to be shipped to our client. This enabled me to experience most stages of the development cycle for a large feature. I participated in many planning and discussions about the requirements, along with design reviews for the back-end development. A portion of the front-end work for this feature would be assigned to me as well. Joining the team as they were beginning development on such a large feature was a huge help to my learning. Despite the overwhelming number of topics to learn, I paid attention and asked questions during the meetings. Throughout the development I was able to stay caught up with what our customer required and understood the design requirements. As a result, once I felt capable of front-end development and worked on the story, I felt more confident knowing where my work fit into the final capability. 
    
    The skills that I found were most important to my job were the web development languages (HTML, CSS), React, and JavaScript. Development tools including git and Jira were used everywhere, as well as agile development cycles. Surprisingly, when I started out, I only had some knowledge of web dev languages and git. The rest of the skills I picked up on the job. In addition, during my job I also learned about project architecture, design planning, development cycles and sprints, web accessibility, web security, software development in general, along with a lot of definitions. `,
    },
    {
      title: 'Conclusion',
      titleShort: 'Conc.',
      id: 'conclusion',
      content: `I have had an amazing experience working with my team and at NCR. I couldn't have picked a better company to work at, and my team has been a blast to be part of. Even though it has only been four months, I have learned so much about software development, along with valuable experience of front-end development. I am looking forward to what my remaining four months at NCR have in store! 

    `,
    },
  ],
};

const workTermReport2: Article = {
  title: 'Work Term Report F23',
  id: 'wtr-f23',
  image: cover2,
  description: 'Remaining 4 months for my placement at NCR.',
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
      content: `Around October, NCR officially split into two new companies: NCR Atleos and NCR Voyix. These new companies would specialize in NCR's two main products or services: Atleos covering the ATM businesses and Voyix covering digital commerce. These two companies were independent of each other. Voyix was the legal successor to NCR Corporation, while Atleos was spun off. Currently, Voyix offers a variety of services focused on software in three main areas: retail, restaurants, and digital banking.`,
    },
    {
      title: 'Goals',
      id: 'goals',
      content: `Moving into the second half of this work term, I had a decision to make: whether to try taking on some back-end development tasks or to dedicate my learning to front-end development. I felt that I had learned a good deal about front-end development at the halfway point to consider trying something new. Switching to a full-stack developer role, I could also learn about the back-end codebase. In the end, I decided that the best choice would be to continue focusing on front-end development. Since this was my first co-op work term, I still had two chances to try out the backend. This was my chance to learn and experience in-depth front-end development. To go along with this decision, I created the following goals to suit my decision:
      
      My first goal was to learn the rest of JavaScript and React. Despite the amount of work I had done in the first four months, there were still some areas of React that I had not touched fully upon. After discussing with my team lead, I still needed to work with React providers, asynchronous functions and promises, and advanced JavaScript object/array methods. I was not sure how long this goal would take to achieve since it was dependent on what my team was working on. However, I finished it quickly, since many of the topics I lacked knowledge on I quickly learned after working on a story that used them or reading up on that topic.
      
      Next, I also wanted to improve my clarity and organization when presenting demos or conducting reviews. While my explanations and demos were sufficient in the previous sprint, they were far from great. I noticed that while I would be explaining a complex component that has many features, I struggled to describe how it functions in a concise way. I would also benefit from improving my communication skills early, since being able to write and explain code is an important skill for a software developer in general. Over the course of the work term, I would use strategies to prepare my talking points prior to demos or reviews, and gradually I noticed improvements in clarity. For my last demo during the sprint review, I demoed all my team's front-end stories without any issues.
      
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
      content: `In addition to all my accomplishments during my work term, I got a patent filed with my name on it. In the first half of my work term in August, our company hosted a company-wide hackathon that would last two days. My team, called Eason and Friends, was a group of seven Guelph co-ops. We came up with the idea of using blockchain as a medium for interbank transfers. As a quick rundown on how blockchain networks like Ethereum work in general, they function using smart contracts. These contracts basically have their programming hard-coded into the blockchain. When anyone performs a transaction (as in running the smart contract), the entire procedure is public, as everyone can see and verify the code run. The most common language to use to write these is Solidity, which was a new language to everyone on the team. I took the initiative, learning and then creating a basic smart contract in Solidity over the two days. I also helped my team setup a local blockchain using my contract and helped develop a front end that would connect to the blockchain. At the end of the hackathon, we had a fully working prototype of our idea consisting of a front-end React application, a Java back-end, and a blockchain network. Although we didn't win any prizes, the hackathon was a blast! It was fun working together as a team for over 12 hours at the office.
      
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
  description: '4-month placement at Pacwill Environmental.',
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
      content: `  I worked with Pacwill Environmental, a small company based in Stoney Creek, Ontario. They provide a range of environmental monitoring equipment to customers across Canada, including various types of analyzers. One of their biggest clients is Environment Canada, which uses the equipment to monitor various sites and for scientific purposes. Although Pacwill's specialty was only equipment supply and maintenance, they were interested in creating a new software solution to assist with monitoring equipment in the field.`,
    },
    {
      title: 'Goals',
      id: 'goals',
      content: `      For this placement, I had set many small goals for myself. Creating a new software solution from scratch presents many challenges and goals to overcome. I wanted to ensure my work met a certain quality standard, so my goals involved the development of skills to achieve that. I'll describe a few goals that I found were essential to my success in this project.

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

      Starting an entirely new software required experience in MANY fields: software design, user interface design, software security, cloud development, as well as front-end, back-end, and database development. Some fields I had practical experience in, such as design and front-end development. Topics in software security, cloud development, and back-end development were weak points, as I had only theoretical knowledge of or didn't work with much. Another setback was the lack of mentorship from this position. Since I was the sole developer, I could not get feedback for the code I wrote, which made it significantly harder to improve upon my skills that I learned. What I did day to day varied a lot, depending on what stage I was in development. I managed the project's requirements, developed the backend server, created the designs for the UI components, and much more. I have done and learned so much about so many different things, and if I were to explain everything that I was excited to learn about, it would be a bit too much for this report.

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

const workTermReport4: Article = {
  id: 'wtr-w25',
  title: 'Work Term Report W25',
  image: cover4,
  description: 'First 4-month for my placement at Camis.',
  entries: [
    {
      title: 'Introduction',
      titleShort: 'Intro',
      id: 'introduction',
      content: `    This is my 4th work term report in my co-op journey! This report covers the first 4 months of my eight-month placement at Camis as a full-stack software developer. I will first introduce the company along with some interesting facts about it. Then I will describe my goals for going into the job. Finally, I will cover the job description along with the highlights from my work.`,
    },
    {
      title: 'About Camis',
      titleShort: 'About',
      id: 'camis',
      content: `    Camis provides park reservation and management solutions for various national and provincial parks in America. They were founded in Guelph in the 1980s to address the issues with campsite reservations that their founder, Doug Hall, noticed during his stays. Their management solutions have evolved. Starting out with a DOS-based park management system with an in-house call centre, they then moved to a full software system, Everest Blue, and later on Everest Silver in 2006/2009 respectively. Their latest software solution, Camis-5, was first released in 2017. Their largest clients include Parks Canada, Parks Ontario, and Washington parks. Their most recent client to have their release was Mississippi Parks, which I had a hand in helping.Camis provides park reservation and management solutions for various national and provincial parks in America. They were founded in Guelph in the 1980s to address the issues with campsite reservations that their founder, Doug Hall, noticed during his stays. Their management solutions have evolved. Starting out with a DOS-based park management system with an in-house call centre, they then moved to a full software system, Everest Blue, and later on Everest Silver in 2006/2009 respectively. Their latest software solution, Camis-5, was first released in 2017. Their largest clients include Parks Canada, Parks Ontario, and Washington parks. Their most recent client to have their release was Mississippi Parks, which I had a hand in helping.`,
    },
    {
      title: 'Goals',
      titleShort: 'Goals',
      id: 'goals',
      content: `    For my first goal, I was aware I would be using Angular, a front-end framework that I was unfamiliar with. I came to the position with a ton of experience in front-end development, so I was already familiar with the design patterns, along with a comprehensive understanding of React, a popular front-end language. From the first few days of working with Angular, it was apparent that the language differed greatly in its structure compared to React. I found it much more confusing and loaded with more boilerplate compared to React, which I had to understand. While this goal would eventually be achieved by working, I wanted to ultimately work on more advanced tickets, which required basic understanding of the language. For my first few tickets in Angular, I performed more research to understand the different aspects of Angular which I didn't understand, such as their templates and data binding structure so I could pick up the language faster. At this time of this report, I haven't fully understood how to optimally utilize Angular's advanced features with observables. However, I have gained a competent level of experience with it along with a good understanding of how the language works to achieve this goal. This has enabled me to implement many different stories, which involve complex data flows and code.

    Another set of goals to improve my skills as a developer was to improve my code design for features and improve the code quality of my merged code. While these are two separate goals, I completed both under the same action plan. Code design is important as a software developer, as ideally you want to write well-designed code that clearly achieves the acceptance criteria without causing issues or conflicts. Improving this aspect also would allow me to become proficient at developing solutions in the future.

    The second related goal was improving the code quality of my code contributions. This skill ensures that my code doesn't cause any issues and is fully robust in exploits. Poor code quality tends to leave uncaught bugs, which are only found later down the road. In addition, when writing code for very large or complex systems, some obscure, hard-to-replicate logic errors can pop up. Thus, it is important to catch these issues while you are working on your code to prevent these issues before they cause trouble in the future.

    Completion of these two goals synergized very well with each other. Well-designed code solutions usually coincide with high-quality code. During the planning stage, while I was working on a thorough solution, I worked on it through all possible scenarios.  The final code addresses any of the bugs that I found while creating a solution. In order to complete both goals, I placed a greater emphasis on planning prior to writing the code. I made sure to investigate the code I would be working with, ensuring that I documented any variables that I would need to pay attention to. I also made sure I understood at a high level what the component would have done if I hadn't worked with this before. Then I could use my notes as a reference to design the full solution without needing to browse code. This strategy came in handy when I started working on the more complex tasks in the latter half of this work term. Understanding the many data structures that are related to each other in complicated relationships introduced many different scenarios. Using this strategy, it assisted me in addressing these things after I investigated parts of the codebase.

    While I have tried using notes in my previous work terms, I would make sure I did this strategy from the get-go. As a result, I was able to create many robust and effective code solutions for the tickets I worked on. In addition, my investigation strategy enabled me to understand a larger portion of the codebase this term. Since I was doing an investigation, whenever I ran into some data that I didn't understand, I could get some explanation from my team, which both helped with the current story as well as expanding my knowledge of the codebase. Furthermore, I could use my previous task notes as reference in future stories that involved the same relative area. This came in handy a few times when I worked on familiar areas that I needed a refresher on.

    Finally, my last goal was to just improve my participation within meetings. Since I didn't have any in-depth insight on how the application worked, I noticed that it was hard at points to participate in some discussions. I built off this difficulty with the aim of getting more comfortable within these situations.  I pushed myself to actively ask about the topics to understand and participate in during meetings. Although sometimes the topics took a while to wrap my head around, I was successfully able to participate in a few discussions. 
`,
    },
    {
      title: 'Job Description',
      titleShort: 'Job',
      id: 'job-description',
      content: `    My position as a software developer co-op placed me on the Web Squad, who would be responsible for developing Camis' web application for park reservations. I would be working as a full-stack software developer on this squad. While some work was on the back-end server, much of the work had an emphasis on the front-end, as our squad's responsibilities were towards the web application.  We followed an agile methodology for development, with two-week sprints.
 
    Since Camis was a smaller company, the web squad would be responsible for almost all development! This experience was slightly different compared to my NCR placement, where many teams worked on the same product.

    When I started out on the job, my previous co-op experiences helped me quickly pass through the onboarding processes. Much of the process and procedures involved with agile software development were already familiar to me, which allowed me to get started on the application within the first sprint. I was already familiar with the agile methodologies from my software development course (CIS 3760) as well as my NCR work term.

    During the work term, I was able to work on many notable things within the application, so I will describe some of the more important ones. Form input and handling is one aspect of front-end development I have a lot of expertise in. I was able to apply my knowledge to refactor a widely used number stepper component to be more compatible with Angular's form handling. During one bug fix involving this component, I needed to prevent a form error message from flashing very briefly. I found that the number stepper was validating the values too early when being changed. If the user increased the value, the error would show up right before the value changed to a valid one. With the approval from my team, I changed this component to wait for the user to finish changing the value—such as when they click away—before showing any errors with the value.

    Some of the most important skills required for my position were the ability to do independent work. I quickly found that I could complete work independently given that I understood the problem at hand. Another skill that I found important on this team was creativity towards improving the design of existing code. Since Web Squad was the only team handling development, there was more freedom to the extent I could make changes to improve existing code without an actual task to do it. Often, I would see some subpar code written years ago when it was being created. In NCR, which was a larger and older codebase, improving this code was not encouraged as it did not directly improve customer-facing experience, and there were other squads that would be working on the same product. On the other hand, at Camis, the application was much smaller, and the atmosphere was more relaxed. Often when I am talking with Amninder, my squad's senior front-end developer, he suggests I refactor some part of the component I was working on to improve it.

    The atmosphere at Camis felt both relaxed and experienced. Within my team, many of my squad members originally started out as Guelph co-ops at Camis and then came back after graduation. During the sprints, rather than assigning people to work on it during planning, we instead would add a bunch of tickets, and developers would pick up the tickets they wanted to work on that sprint.

    For the technologies I worked with in my developer position, I was primarily working with Angular, which involved HTML, CSS, and TypeScript. I also worked with C# for the back end, including Windows Presentation Format (WPF) used for building application UI for Camis' Park software. I also worked with GitHub for version control and Jira for project management.
`,
    },
    {
      title: 'Conclusion',
      titleShort: 'Conc.',
      id: 'conclusion',
      content:
        '    My first four months at Camis were a very fulfilling and rewarding experience. I feel like I have contributed an impressive amount of work towards the application. I look forward to working on bigger stories by the end of this work term!',
    },
    {
      title: 'Acknowledgements',
      titleShort: 'Thanks',
      id: 'acknowledgements',
      content: `    I would like to thank my team, the Web Squad, for helping me and supporting me while I became acclimated to the codebase and for supporting me on increasingly challenging tickets. I would like to thank Julian, Nihar, and Amninder in particular for answering all of my questions and giving me advice.`,
    },
  ],
};

const workTermReport5: Article = {
  id: 'wtr-s25',
  title: 'Work Term Report S25',
  description: 'Remaining 4-month placement at Camis.',
  entries: [
    {
      title: 'Introduction',
      titleShort: 'Intro',
      id: 'introduction',
      content:
        'This is my 5th and final work term report in my co-op! This report will cover some of my achievements from my remaining 4 months in my 8-month full-stack software developer co-op at Camis. I will first cover some changes that happened in the company. Then I will describe my goals I set for this term. Finally, I will cover the job description along with the highlights from my work.',
    },
    {
      id: 'about',
      content:
        'During this term, Camis celebrated reaching release version 100 of Camis 5. This was the main reservation software platform we provided and was what I was working on. ',
      title: 'About',
      titleShort: 'About',
    },
    {
      id: 'goals',
      title: 'Goals',
      titleShort: 'Goals',
      content: [
        {
          type: ContentType.TEXT,
          value:
            'Continuing into the second half of this work term, I developed several new goals to develop other skills to round out my developer skills in the workplace. Through my previous work terms, I have alluded to trying to develop backend skills. At this point, I have had several opportunities working in this area and have concluded that front-end suits me better for now.',
        },
        {
          type: ContentType.TEXT,
          value:
            'My first goal was to get more experience working with web accessibility. This included visual accessibility such as text spacing and colour contrast as well as screen readers and keyboard navigation. While I have interacted with it as part of various tickets, I felt that I needed a ticket that had a larger emphasis on reaching the accessibility standards. Learning how to develop web components to adhere to/assist those with accessibility needs is essential to becoming a web developer, which heavily intersects with UI design. Luckily, I completed this goal quickly by undertaking a big webpage redesign, which I’ll explain more in the later section. When it came to accessibility in that ticket, the visual elements such as colours and text spacing were mainly handled by the webpages’ theming automatically. Nonetheless, knowing the tools to check this was important for awareness. In addition, I played around a lot with screen readers to understand how they work and how to improve their experience. This is something I have talked about in a later section.',
        },
        {
          type: ContentType.TEXT,
          value:
            'Next, I created a goal to take more responsibility for my code and be more confident in my work. When I started my co-op sequence, I maintained a low confidence in my code intentionally to get validation in my work. This was essential to learning the ropes and ensuring I was following proper procedures and design as a software developer. In addition, since I wasn’t knowledgeable about the codebase, my team would usually respond to me with deeper inquiries about my work. After many valuable work placements, this became less relevant as I gained experience in front-end and the codebase.I tried taking on tickets that would push me out of my comfort zone, such as critical tickets requiring communication updates, as well as more complex tickets in general. When it came to situations in which I was stuck on which code design to use, I weighed the benefits of each to come to a resolution with myself. As a result, I gradually shed some habits.',
        },
        {
          type: ContentType.TEXT,
          value:
            'Finally, for my last goal for this term, I wanted to work on my independent work skills as a developer. During one of my one-on-ones with Jonathan, my team lead, he suggested improving my self-direction. For example, I could try choosing items to work on myself rather than expecting someone else to choose. This desire relates to the previous goal—now that I have gained enough developer-specific skills, I want to prioritize general goals that will benefit a full-time placement. To carry this goal out, I needed to know if my current knowledge of the task was enough to complete a ticket. With all my skills, I was more than ready to achieve this goal. It gave me a chance to reflect on how far I have come in my co-op terms. Being able to quickly identify what the ticket required was enough to show that I had awareness of many common code designs. If there was something in the ticket that I wasn’t so sure how to code, I knew which team member to reach out to.',
        },
      ],
    },
    {
      id: 'job-description',
      title: 'Job Description',
      titleShort: 'Job',
      content: [
        {
          type: ContentType.TEXT,
          value:
            'I continued working with the web squad as a full-stack developer. This squad was responsible for developing Camis’ web application for park reservations. Our team followed an agile methodology with two-week sprints. My role was focused mainly on the front end, since I had proven my proficiency in Angular, but I was treated as a full-stack developer with independence to contribute across the Camis5 platform. I had some opportunities to try working on other areas, including the server-side code, .NET applications, and node package updating. This co-op gave me a chance to work on many fulfilling tasks throughout and gain invaluable experience.',
        },
        {
          size: { md: 6, sm: 12 },
          type: ContentType.TEXT,
          value:
            'The highlight of this work term was Shopping Cart Redesign. I singlehandedly implemented the entire feature, ensuring that it was the highest quality. It required a lot of the skills I had obtained from my co-op work terms. When starting out, I made sure to discuss any questions or issues with functionality I saw before starting and made sure to show it for review. It also was a challenge for my code design skills, which I had built up through the work terms, as it was a good chance to fully redo an old component. I used many organizational skills to ensure I had a strong outline and plan, as well as to make sure there were no logical bugs in the code. Finally, I used my test development skills to write up all of the unit and E2E tests for this feature. I am proud to say that my work featured in the seasonal company all hands!',
        },
        {
          size: { md: 6, sm: 12 },
          type: ContentType.IMAGE,
          value: { src: shoppingCart, alt: 'Old shopping cart page' },
        },
        {
          type: ContentType.TEXT,
          value:
            'I also have some honourable mentions for notable things I did. I helped fix a critical bug vulnerability, which was a bit nerve-racking the first time doing it. I also played a part in the Angular versioning upgrades, where I looked through many changelogs to ensure there were no vulnerabilities. Finally, I suggested a new feature design for one of the flows in our application. I created Jira tickets as well as a whole design on Figma along with my proposal.',
        },
        { type: ContentType.TEXT, value: '' },
        { type: ContentType.TEXT, value: '' },
      ],
    },
    {
      id: 'conclusion',
      title: 'Conclusion',
      titleShort: 'Conc',
      content:
        'My co-op journey has been amazing, and it feels like a proper ending at Camis. I have learned so much about working in the software industry, and also about myself and where I might want to work in the future. Hint: it might be Camis! Looking back, I’d say my journey worked out great. NCR was a great first employer which allowed me to quickly jumpstart my learning. I felt the actual work environment was a bit too much for me in a permanent position, but I was their fast pace allowed me to build my fundamental skills and also try different things. Working at Pacwill showed me a different job as more of a contractor, where I was building software from the ground up. I was able to make use of the courses that I had just taken, to create a full systems design. Finally, working at Camis gave me a chance to refine the skills I wanted, as well as introducing me to a company which I enjoyed working at.',
    },
    {
      title: 'Screen Reader',
      titleShort: 'SR',
      id: 'screen-reader',
      content: [
        {
          size: 12,
          type: ContentType.TEXT,
          value:
            'From my exploration of screen readers when carrying out the cart redesign page, I ended up developing some procedure to do attempt to improve the user experience.',
        },
        {
          size: 12,
          type: ContentType.TEXT,
          value:
            'How does a screen reader work? If you’ve ever used the keyboard to navigate a webpage, it’s an extension of functionality to that. You must install external software, such as NonVisual Desktop Access (NVDA). These basically have an invisible selector which goes through the dom (Document Object Model). There’s a ton of different commands, but I usually find myself using the arrow keys to move down each readable text. However, it’s also common to use tab to hop between the interactable content.',
        },
        {
          size: 12,
          type: ContentType.TEXT,
          value:
            'When developing on the webpage, there’s a few things which can hinder the experience.',
        },
        {
          size: 12,
          type: ContentType.LIST,
          value: [
            'Ease of Use',
            'Visual vs Audible Content Arrangement',
            'Context',
          ],
        },
        {
          size: 12,
          type: ContentType.TEXT,
          value: 'I will go through each of these below.',
        },
        {
          type: ContentType.SUBHEADER,
          id: 'ease-of-use',
          title: 'Ease of use',
          titleShort: 'Ease',
          value: [
            {
              size: 12,
              type: ContentType.TEXT,
              value:
                'It’s important to first state that screen readers can skip the current text block they are reading. Users aren’t forced to listen to the entire block of text before moving onto the next one. So, as long as the user knows the block of text, they can easily skip past it if they don’t need to listen through it. However, if there’s a ton of small text blocks, the user must still skip past each one. This is more common than you think. If you’ve needed to split up text into different spans to do localizations, include an icon in the middle or arrange overflow in a specific way, this situation can occur. Using a screen reader, each time you press the down key, you hear:',
            },
            {
              size: 12,
              type: ContentType.LIST,
              value: [
                '"Fees"',
                '"2 Adventure Pass"',
                '"for"',
                '"two dollars"',
                '"at"',
                '"one dollar"',
                '"per unit"',
              ],
            },
            {
              size: 12,
              type: ContentType.TEXT,
              value: 'This is annoying.',
            },
          ],
        },
      ],
    },
  ],
};

export const workTermReportEntries = [
  workTermReport1,
  workTermReport2,
  workTermReport3,
  workTermReport4,
  workTermReport5,
];
