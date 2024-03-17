import React from 'react';

const App: React.FC = () => {
  const handleLogin = () => {
    // Handle login functionality here
    console.log('Login clicked');
  };

  return (
    <div className="App" style={{ backgroundColor: 'black' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', margin: '20px' }}>
        <h1 style={{ color: 'white' }}>KuaMongous</h1>
        <p style={{ color: 'white' }}>
          Authenticate through <button onClick={handleLogin}>Azure portal</button>
        </p>
      </div>
    </div>
  );
};

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
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