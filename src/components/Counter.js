import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [employee, setEmployee] = useState({
    id : 1,
    nama : "Yanto",
    alamat : "Tegal Rotan"
  })

  const increment = ()=> {
    setCount((prevState) => prevState + 1)
  }

  const decrement = ()=> {
    setCount((prevState) => {
      if (prevState <= 0){
        return prevState = 0
      }

      return prevState - 1
      
    })
  }


  const handleUpdateEmployee = () => {
    setEmployee((prevState) => {
        return {
          ...prevState,
          nama: "joni"
      }
  });
  }

  useEffect(() => {
    console.log("test")
  }, [count])
  

  const emp = [
    { id : 1, name : "begenk"},
    { id : 2, name : "kusuma"},
    { id : 3, name : "lorem ipsum"}
  ]


  return (
    <>
      <Header name="Oky" />
      <Content employee={employee}/>
      <h1>{count}</h1>

      <button onClick={handleUpdateEmployee}>update employee</button>
      <button onClick={increment}>+</button> | <button onClick={decrement}>-</button>
      <hr></hr>

    </>
    

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
