import React from 'react';
import Header from './Header';
import LandingPage from './LandingPage';
import Bio from './Bio';
import SkillList from './SkillList';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <LandingPage />
        <div className="container">
          <Bio />
          <SkillList />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
