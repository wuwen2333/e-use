import React from 'react';
import Navigator from './components/Navigator';
import Module from './components/Module';
import Alerts from './components/Alerts';

import './App.scss'

const App: React.FC = () => {
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
      <Alerts />
    </div>
  );
}

export default App;
