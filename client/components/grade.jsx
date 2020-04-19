import React from 'react';

function Grade(props) {
  return props.grades.map((studentGrade, index) => {
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

export default Grade;
