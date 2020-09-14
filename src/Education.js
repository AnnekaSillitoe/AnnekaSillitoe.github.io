import React from "react";
import talk from "./assets/talk.jpeg";

const Education = () => (
  <section>
    <h2>Education</h2>
    <img
      className="image"
      src={talk}
      alt="Anneka giving talk at Accessibility meetup 2018"
    />
    <p>
      I like attending conferences and meetups around women in tech,
      accessibility, front end development and design. Some of these have
      included, but are not limited to:
    </p>
    <ul>
      <li>Women In Tech Breakfast</li>
      <li>Turing Lecture: AI Through the Looking Glass</li>
      <li>Tech(K)now Day</li>
      <li>GovDesign meetups</li>
      <li>ReactJSGirls meetups</li>
      <li>Halfstack Conf</li>
      <li>Amazon Web Services Day</li>
    </ul>
    <p>
      I give talks in school's to young girls about getting involved in STEM
      careers. I also give talks and workshops in the tech community around
      accessibility.
    </p>
    <p>Things I am currently learning/refreshing my knowledge of:</p>
    <ul>
      <li>React</li>
      <li>Accessibility for web and mobile application development</li>
      <li>React testing library</li>
      <li>Modern JavaScript</li>
      <li>Advanced JavaScript</li>
      <li>Javascript testing</li>
      <li>Technical writing</li>
      <li>HTML Essential training </li>
      <li>Webpack and project tooling</li>
      <li>Vue.js</li>
    </ul>
    <p>
      I am looking for mentees and would love to help someone navigate the
      beginnings of their career in the tech industry. If you are starting your
      career and are looking for a mentor, please drop me an 
      <a href="mailto:annekasillitoe@gmail.com?Subject=I want a mentor">
        email
      </a>
       or 
      <a
        href="https://twitter.com/intent/tweet?screen_name=annekasillitoe&ref_src=twsrc%5Etfw"
        className="twitter-mention-button"
        data-show-count="false"
      >
        Tweet to @annekasillitoe
      </a>
      .
    </p>
  </section>
);
export default Education;
