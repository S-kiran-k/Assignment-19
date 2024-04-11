import './App.css'
import Header from './component/Header/Header';
import React from 'react'
function App() {
  const TitleComponent = () => {
    return React.createElement("div", { className: 'title', }, [
      React.createElement("h1", { className: 'title' }, "Hello world"),
      React.createElement("h2", { className: 'title' }, "Hello world"),
      React.createElement("h3", { className: 'title' }, "Hello world"),
    ])
  }


  // )
  //   return (
  //     <>
  //         {Title1}    
  //     </>
  //   )
  // }

  return (
  <>
    <Header/>
    <TitleComponent />
    {TitleComponent()}
    <TitleComponent></TitleComponent>
  </>
  )
}

export default App
