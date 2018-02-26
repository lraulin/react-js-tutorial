import React, {Component} from 'react';
import { projectsList } from '../../data/projects';

export default class CodeSchool extends Component {
  constructor() {
    super();
    this.state = {
      items: projectsList
    };
  }

  render() {
    const { items } = this.state;
    console.log(items);
    return (
      <div>
        <h1>Projects</h1>
        {items.map((item) => (
          <a key={item} href={`https://lraulin.github.io/${item}/`}>
            <img
              style={{width: '200px'}}
              src={`../../img/${item}.png`}
              alt={item}
            />
          </a>
        ))}
      </div>
    )
  }
}
