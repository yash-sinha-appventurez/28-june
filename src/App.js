import "./App.css";
import Sigin from "./components/Sigin";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Detail from "./components/Detail";
import { Route, BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute";
import Audio from "./components/Audio";
import Audiotrial from "./components/Audiotrial";
function App() {
  return (
    <Router>
      <div className="app">
        <PublicRoute component={Sigin} path="/" exact restricted={true} />
        <PublicRoute component={Login} path="/login" exact restricted={true} />
        <PrivateRoute exact path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute component={Detail} exact path="/detail/:id" />
        <Route path="/audio" component={Audio} />
        {/* <Route path="/detail/:id" component={Detail} /> */}
        {/* <Route path="/audiotrial" component={Audiotrial} /> */}
      </div>
    </Router>
  );
}

export default App;
