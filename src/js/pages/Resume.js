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

        <h2>Education</h2>
        <h3><a href="https://www.ncu.edu/">Northcentral University</a></h3>
        <p>Master of Arts in Psychology</p>
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
        <h3>Free Code Camp (in progress)</h3>
        <p>Front Development Certification</p>
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
      </div>
    )
  }
}
