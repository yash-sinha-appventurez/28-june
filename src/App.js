import './App.css';
import Sigin from './components/Sigin';
import Login from './components/Login'
import {Route,BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (

    <Router>
      <div className="App">
      
      <Route path='/' component={Sigin} exact />
      <Route path='/login' component={Login} />
    </div>

    </Router>
    
  );
}

export default App;
