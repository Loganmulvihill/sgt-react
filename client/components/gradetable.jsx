import React from 'react';

export default class GradeTable extends React.Component {

  createTable() {
    return this.props.grades.map((studentGrade, index) => {
      const { id, name, course, grade } = studentGrade;
      return (
        <tr key={id}>
          <td>{name}</td>
          <td>{course}</td>
          <td>{grade}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {this.createTable()}
        </tbody>
      </table>
    );
  }
}
