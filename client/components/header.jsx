import React from 'react';

function Header(props) {

  return (
    <header className="row">
      <h1 className="col-8">Student Grade Table </h1>
      <h2 className="col text-right">
        Average Grade
        <span className="badge badge-secondary">
          {props.average}
        </span>
      </h2>
    </header>
  );

}

export default Header;
