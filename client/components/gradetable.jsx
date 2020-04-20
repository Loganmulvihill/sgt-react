import React from 'react';

import Grade from './grade';

function GradeTable(props) {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th>Name</th>
          <th>Course</th>
          <th>Grade</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {
          props.grades.map(gradeData => {
            return <Grade key={gradeData.id} grade={gradeData} />;
          })
        }
      </tbody>
    </table>
  );

}

export default GradeTable;
