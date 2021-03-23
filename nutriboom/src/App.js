import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/header";
import LoginForm from "./components/login-form";

function App() {
  return (
    <div className="App">
      <Router>
        <Header title="Test Header" />
        <Route path="/login">
          <LoginForm />
        </Route>
      </Router>
    </div>
  );
}

export default App;
