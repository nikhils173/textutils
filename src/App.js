import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark'); // whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
    }
    else
      setMode('light')
    }

  const showAlert = (message,type) =>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setAlert(null)
        }, 2000);
  }

  return (
    <Router>
      <Navbar title="Rohit" mode={mode} toggleMode={toggleMode} />   
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route path="/about">
            <About />
          </Route>        
          <Route exact path="/">
            <TextForm  heading="Enter the text to analyze" showAlert={showAlert} />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
