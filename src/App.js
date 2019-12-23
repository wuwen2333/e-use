import React from 'react';
import Navigator from './components/Navigator';
import Time from './pages/Time';

import './App.scss'

function App() {
  const [currentPage, setCurrentPage] = React.useState('');

  let currentPageComponent = <></>;
  switch (currentPage) {
    case 'time':
      currentPageComponent = <Time />
      break;
  
    default:
      break;
  }

  return (
    <div className={`app ${!currentPage && 'dashboard'}`}>
      <Navigator currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="body">
        {currentPageComponent}
      </div>
    </div>
  );
}

export default App;
