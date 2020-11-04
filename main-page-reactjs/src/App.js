import React from 'react'
import Header from './Header'
import Themes from './Themes/Themes'
import Train from './Train'
import ThemesItems from './Themes/ThemesItems'

function App() {

  

  return (
    <div className='body'>
      <Header/>
      <div className='page-content'>
        <Train />
      </div>
    </div>
  );
}

export default App;
