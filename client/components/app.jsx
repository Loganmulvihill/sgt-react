import React from 'react';
import Header from './header';
import Gradetable from './gradetable';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { grades: [] };
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
        <Header />
        <Gradetable grades={this.state.grades}/>
      </div >
    );
  }
}

export default App;
