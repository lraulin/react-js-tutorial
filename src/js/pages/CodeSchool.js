import React, {Component} from 'react';

const json = require('../../data/lraulin.json');

export default class CodeSchool extends Component {
  constructor() {
    super();
    this.state = {
      items: json
    };
  }

  render() {
    const {items} = this.state;
    console.log(items);
    return (
      <div className="text-center">
        <h1>Courses Completed</h1>
        <div className="container-fluid">
          <div className="row">
            {
              items.courses.completed.map(item => (
                <div key={item.badge}>
                  <a title={item.title} href={item.url}>
                    <img
                      style={{
                        width: '150px'
                      }}
                      src={item.badge}
                      alt={item.title}/>
                  </a>
                </div>
              ))
            }
          </div>
        </div>
        <h1>Badges Earned</h1>
        <div className="container-fluid">
            {
              items.badges.map(item => (
                <div key={item.badge}>
                  <a title={item.name} href={item.course_url}>
                    <img
                      style={{
                        width: '150px'
                      }}
                      src={item.badge}
                      alt={item.title}/>
                  </a>
                </div>
              ))
            }
          </div>
      </div>
    )
  }
}
