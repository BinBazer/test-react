import React from 'react';
import ClassCounter from './Components/ClassCounter';
import Counter from './Components/Counter';

function App() {

    const [value, setValue] = React.useState('Window for you')


  return (
      <div className="App">
          <ClassCounter />
          <Counter />
      </div>
  );
}

export default App;
