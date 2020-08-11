import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/global.css';
import './css/layout.css'
import './css/sample-wallpaper.css'
import './css/components.css'
import Navbar from './Navbar'
import Text from './Text'
import Wallpaper from './Wallpaper'
import hulk from './img/hulk-1.jpg'
import venom from './img/venom-1.jpg'
import venom2 from './img/venom-2.jpg'


function App() {
  return (
    <div className="App">
      <Navbar />
      
      <header classmate='header'>
        <div className='container'>
          <Text />

   <div className='sample-Wallpaper'>
     <Wallpaper pic={venom}/>
     <Wallpaper pic={hulk}/>
     <Wallpaper pic={venom2}/>

     </div>

  </div>
  </header>
    </div>
  );
}

export default App;
