import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Header from "./components/header";
import LoginForm from "./components/login-form";
import Footer from './components/footer';
import {store} from './store';
import {Provider} from 'react-redux';
import Home from './components/home';
import EventCalendar from './components/event-calendar';
import {logOut} from './actions/actions';
import RegisterForm from './components/register'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>  
          <Route path="/login">
            <Header title="Please log in or click 'Register' to sign up!" navHidden={true} />
            <LoginForm />
          </Route>
          <Route path="/home">
            <Header title={store.getState().user.currentUser != null ? `Welcome, ${store.getState().user.currentUser.firstname}!` : "Welcome, user!"}/>

            <Home />
          </Route>
          <Route path="/register">
            <Header title="Please enter your information below." />
            <RegisterForm />
          </Route>
          <Route path="/error">
            <Header title="Oops, something went wrong! Please try again later." />
          </Route>
          <Route path="/calendar">
            <Header title="Recipe Calendar" />
            <br />
            <br />
            <EventCalendar />
          </Route>
          <Route path="/logout">
           { /*store.dispatch(logOut)*/} 
            <Header title="Thank you for using this service! Have a wonderful day!" />
          </Route>
          <Route path="/">
            <Redirect to="/login" />
          </Route>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
