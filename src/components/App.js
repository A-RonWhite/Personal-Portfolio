import React from 'react';
import Header from './Header';
import LandingPage from './LandingPage';
import Bio from './Bio';
import SkillList from './SkillList';
import Employment from './Employment';
import Portfolio from './Portfolio';
import Contact from './Contact';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <LandingPage />
        <div className="container">
          <Bio />
          <SkillList addSkill={this.addSkill} loadSkills={this.loadSkills} />
          <Employment />
          <Portfolio />
          <Contact />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
