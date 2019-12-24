import React from 'react';
import Navigator from './components/Navigator';
import Module from './components/Module';

import './App.scss'
import navs from './conts/navigator'

function App() {
  const [currentPage, setCurrentPage] = React.useState(navs[0]);

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
