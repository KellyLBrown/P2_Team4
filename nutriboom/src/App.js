import './App.css';
import {useState} from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Header from "./components/header";
import LoginForm from "./components/login-form";
import Footer from './components/footer';
import {store} from './store';
import {Provider} from 'react-redux';
import Home from './components/home';
import EventCalendar from './components/event-calendar';
import {logOut} from './actions/actions';
import RegisterForm from './components/register';
import RecipeBuilder from './components/recipe-builder';
import Error from './components/error'
import ProtectedRoute from './components/protected-route';

function App() {
let homeProtect = 'homeProtect';
let calendarProtect = 'calendarProtect';
let recipeBuilderProtect = 'recipeBuilderProtect';

  return (
    <Provider store={store}>
      <div className="App">
        <Router>  

          <Route exact path='/login' render={
          props => <LoginForm  />} />

          <Route path="/register">
            <Header title="Please enter your information below." navHidden={true} />
            <RegisterForm />
          </Route>

          <Route path="/error">
            <Header title="Oops, something went wrong! Please try again later." />
          </Route>

          
{/*
      <Route path="/calendar">
      <Header title="Recipe Calendar" />
      
      <EventCalendar />
      </Route>

      <Route path="/recipe-builder">
      <Header title="Recipe Builder" />
      
      <RecipeBuilder />
      </Route>

      <Route path="/view-my-recipes">
        <Header title="View Recipes" />
        <ViewMyRecipes />
     </Route> */}

          <Route path="/logout">
            <Header title="Thank you for using this service! Have a wonderful day!" />
          </Route>

          <Route path="/">
            <Redirect to="/login" />
          </Route>



          <ProtectedRoute exact path='/home' component={homeProtect} />

          <ProtectedRoute exact path="/calendar" component={calendarProtect} />

          <ProtectedRoute path="/recipe-builder" component={recipeBuilderProtect} />

          
            
          

          
          
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
