import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleCourseChange(event) {
    this.setState({
      course: event.target.value
    });
  }

  handleGradeChange(event) {
    this.setState({
      grade: parseInt(event.target.value)
    });
  }

  handleSubmit() {
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.post(newGrade);
  }

  handleReset() {
    this.setState({ name: '', course: '', grade: '' });
  }

  render() {

    return (

      <form className="col" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <i className="fas fa-user"></i>
              </span>
            </div>
            <input type="text" onChange={this.handleNameChange} className="form-control" placeholder="Name" name="name" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
        </div>

        <div className="form-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <i className="fas fa-list"></i>
              </span>
            </div>
            <input type="text" onChange={this.handleCourseChange} className="form-control" placeholder="Course" name="course" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
        </div>

        <div className="form-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <i className="fas fa-graduation-cap"></i>
              </span>
            </div>
            <input type="text" onChange={this.handleGradeChange} className="form-control" placeholder="Grade" name="grade" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
        </div>

        <button type="submit" className="btn btn-success">Add</button>
        <button type="reset" onClick={this.handleReset} className="btn btn-primary">Cancel</button>

      </form>
    );
  }
}
