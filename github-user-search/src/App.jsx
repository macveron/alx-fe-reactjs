import React from 'react';
import Search from './components/Search';

const App = () => {
  return (
    <div className="App">
      <header className="p-4 bg-gray-800 text-white text-center">
        <h1>GitHub User Search</h1>
      </header>
      <main className="p-4">
        <Search />
      </main>
    </div>
  );
};

export default App;
