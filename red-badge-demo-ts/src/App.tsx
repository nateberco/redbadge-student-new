import React from "react";
import PropsExample from './components/PropsExample';
import PropsMappingExample from './components/PropsMapping';

function App() {
  const visitedPlaces = ['Spain', 'Netherlands', 'Switzerland', 'Italy', 'Morocco', 'Canada']
  return (
  <div>
    <PropsExample name="Tom" business="MySpace" />
    <PropsMappingExample visited={visitedPlaces} />
  </div>);
}

export default App;

