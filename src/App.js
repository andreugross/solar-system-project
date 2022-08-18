import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <main>
        <div>
          <Header />
          <SolarSystem />
          <Missions />
        </div>
      </main>
    );
  }
}

export default App;
