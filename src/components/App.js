import React from 'react';
import Header from './Header';
import LandingPage from './LandingPage';
import Bio from './Bio';
import SkillList from './SkillList';
import Employment from './Employment';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <LandingPage />
        <div className="container">
          <Bio />
        </div>
        <SkillList addSkill={this.addSkill} loadSkills={this.loadSkills} />
        <div className="container">
          <Employment />
          <Portfolio />
          <Contact />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
