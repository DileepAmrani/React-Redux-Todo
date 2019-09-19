import React from 'react';
import './App.css';
import Home from './Container/Home/Home.js'
import { Provider } from 'react-redux'
import {store, persistor} from './Redux'
import { PersistGate } from 'redux-persist/integration/react'
 

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "Dileep",
    }
  }
  render() {
    return (
      <div>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> 
        <Home />
        </PersistGate>
        
        </Provider>
      </div>
    )
  }
}

export default App;
