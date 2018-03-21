import React, { Component } from 'react';

export default class Resume extends Component {

  render() {
    return (
      <div>
        <h1>Resume</h1>
        <h2>Tech Skills</h2>
        <h3>Languages</h3>
        <p>JavaScript/ES6/JSX, Python, C#</p>
        <h2>Front End</h2>
        <p>HTML, CSS, Bootstrap</p>
        <h2>Back End</h2>
        <p>MongoDB, MS SQL Server, Firebase, NodeJS</p>
        <h2>Soft Skills/Attributes</h2>
        <ul>
          <li>Exceptional verbal comprehension: reading, writing, etc.</li>
          <li>Polite, agreeable, and very resistant to stress.</li>
          <li>Curiosity, love of learning, interest in abstract concepts.</li>
          <li>Critical thinking/objectivity/open-mindedness.</li>
        </ul>
        <h2>Education</h2>
        <h3><a href="https://www.ncu.edu/">Northcentral University</a></h3>
        <p>Master of Arts in General Psychology</p>
        <ul>
          <li>
            Composed a literature review on &nbsp;
            <a href="https://en.wikipedia.org/wiki/Sluggish_cognitive_tempo">
              Sluggish Cognitive Tempo
            </a>
          </li>
          <li>Completed while working full-time, demonstrating ability to
            manage time and learn independantly.</li>
        </ul>
        <h3><a href="http://www.smcm.edu/">St. Mary's College</a></h3>
        <p>Batchelor of Arts in Psychology</p>
        <h3><a href="https://www.freecodecamp.org/">Free Code Camp
          </a>&nbsp;(in progress)</h3>
        <p>
          <a href="https://www.freecodecamp.org/lraulin/front-end-certification">
          Front End Development Certification</a>
        </p>
        <ul>
          <li>Created 11 front-end projects and 4 React projects.</li>
          <li>Completed 47 algorithm scripting challenges.</li>
        </ul>
        <h3>.NET Boot Camp</h3>
        <p>Graduate of a 16-weeks of advanced formal training
          in Microsoft .NET best practices programming</p>
        <ul>
          <li>n-tier architecture using webforms for interface, C# for business
            layer, and MS Sequel Server as backend.</li>
          <li>User state management.</li>
        </ul>
        <h2>Military Experience</h2>
        <h3>USCG, Boatswain's Mate</h3>
        <ul>
          <li>District 7 Headquarter's Aids to Navigation Discrepancy Manager</li>
          <li>Attained E5 in less than 3 years.</li>
          <li>Honorable discharge.</li>
        </ul>
      </div>
    )
  }
}
