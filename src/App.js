import "./App.css";
import Sigin from "./components/Sigin";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Detail from "./components/Detail";
import { Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Sigin} exact />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/detail/:id" component={Detail} />
      </div>
    </Router>
  );
}

export default App;
