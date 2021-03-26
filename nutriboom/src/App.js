import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/header";
import LoginForm from "./components/login-form";
import Footer from './components/footer';
import {store} from './store';
import {Provider} from 'react-redux';
import Home from './components/home';
import EventCalendar from './components/event-calendar';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header title="Test Header" />
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/register">

          </Route>
          <Route path="/error">

          </Route>
          <Route path="/calendar">
            <br />
            <br />
            <EventCalendar />
          </Route>
          <Route path="/logout">

          </Route>
          <Route path="/">
          
          </Route>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
