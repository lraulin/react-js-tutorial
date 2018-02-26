import React, {Component} from 'react';

export default class CodeSchool extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://www.codeschool.com/users/lraulin.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setSTate({
            isLoaded: true,
            items: results.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
        {items.courses.completed.map(item => (
          <li key={item.title}>
            <img src={item.badge} />
          </li>
        ))}
        </ul>
      );
    }
  }
}
