import React from "react";
import interviewing from "./assets/interviewing_aof.jpg";

const About = () => (
  <section>
    <h1>Hi, I'm Anneka</h1>
    <img
      className="image"
      src={interviewing}
      alt="Anneka interview Jordan Hasting, drummer of Alexisonfire in 2012"
    />
    <p>
      I've spent the initial years of my career working in journalism (this is
      why I don't blog too much, reminds me too much of the previous day job).
      But you can read my thoughts over at{" "}
      <a href="https://medium.com/@annekasillitoe">my medium page</a>. I worked
      as a music journalist before making the career change to the other side
      and working in PR and marketing within the music industry. I decided after
      doing this for almost 7 years that I wanted more from my career and I had
      just started learning to code. Since then I've spent the last 5 years
      working as a web developer, with a focus on front end development and
      accessibility.
    </p>
    <p>
      I've spoken at meetups on accessibility in web development and given
      talks, and attended careers days and seminars in schools to try and
      encourage females into STEM careers (specifically working as a web
      developer because it's what I know).
    </p>
    <p>
      At present I live in Surrey in the UK, where I spend time gaming, watching
      wrestling, working as a patient advocate for my own health conditions,
      watching cartoons and practicing my voice acting skills, drinking
      speciaility coffee and educating myself on the science behind a good cup.
      If you'd like to speak to me about any of this or anything else, please
      say <a href="mailto:annekasillitoe@gmail.com?Subject=Hello">hello!</a>
    </p>
  </section>
);

export default About;
