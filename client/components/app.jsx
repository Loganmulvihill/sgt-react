import React from 'react';
import Header from './header';
import Gradetable from './gradetable';
import Gradeform from './gradeform';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { grades: [] };
    this.postGrade = this.postGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  deleteGrade(gradeId) {
    const req = {
      method: 'DELETE'
    };
    fetch(`/api/grades/${gradeId}`, req)
      .then(res => res.json())
      .then(updated => {
        const newGrades = this.state.grades.slice();
        for (let i = 0; i < newGrades.length; i++) {
          if (newGrades[i].id === gradeId) {
            const removedGrade = newGrades.splice(i, 1);
            break;
          }
        }
        this.setState({ grades: newGrades });

      });

  }

  postGrade(newGrade) {
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    };
    fetch('/api/grades', req)
      .then(res => res.json())
      .then(data => {
        const newGradesList = this.state.grades.concat(data);
        this.setState({ grades: newGradesList });
      });
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
      <div className="col">
        <div>
          <Header average={this.getAverageGrade()} />
        </div>
        <div className="row">
          <div className="col-8">
            <Gradetable grades={this.state.grades} delete={this.deleteGrade} />
          </div>
          <div className="col">
            <Gradeform post={this.postGrade}/>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
