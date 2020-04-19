import React from 'react';
import Header from './header';
import Gradetable from './gradetable';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { grades: [] };
  }

  getAverageGrade() {
    if (this.state.grades.length <= 0) {
      return 0;
    } else {
      let total = 0;
      for (let i = 0; i < this.state.grades.length; i++) {
        total += this.state.grades[i].grade;
      }
      const average = Math.round(total / this.state.grades.length);
      return average;
    }
  }

  componentDidMount() {

    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => this.setState({ grades }))
      .catch(err => console.error(err));

  }

  render() {
    return (
      <div>
        <Header average={this.getAverageGrade()} />
        <Gradetable grades={this.state.grades}/>
      </div >
    );
  }
}

export default App;
