import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import NewsItems from './components/NewsItems';
// function based component
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'

export default class App extends Component {
  // c='parishkar'
  render() {
    return (
      <div>
        {/* Hey This is a Class Based Component {this.c} */}
      <NavBar/>
      <News/>

      </div>
    )
  }
}
