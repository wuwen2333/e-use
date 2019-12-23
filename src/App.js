import React from 'react';
import Navigator from './components/Navigator';
import Module from './components/Module';

import './App.scss'

function App() {
  const [currentPage, setCurrentPage] = React.useState();

  return (
    <div className='app'>
      <Navigator currentPage={currentPage && currentPage.name} onPageChange={setCurrentPage} />
      {currentPage && (
        <div className="body">
          <Module className={currentPage.name} title={currentPage.title}>
            {currentPage.component}
          </Module>
        </div>
      )}
    </div>
  );
}

export default App;
