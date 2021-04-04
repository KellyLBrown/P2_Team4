import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import Home from './home';
import EventCalendar from './event-calendar';
import RecipeBuilder from './recipe-builder';
import Error from './error';

const ProtectedRoute = ({ component: path, ...rest }) => {
  let currentUser = useSelector(state => state.user);
  
    return (
      <Route {...rest} render={
        props => {
          if (currentUser == null) {
            console.log("not userAuth")
            return <Redirect to={
              {
                pathname: '/error',
                state: {
                  from: props.location
                }
              }
            } />
          } else if (currentUser.currentUser != null) {
            console.log("not userAuth")
            switch(path) {
              case 'homeProtect':
                return <Home />;
                case 'calendarProtect':
                  return <EventCalendar />;
                  case 'recipeBuilderProtect':
                    return <RecipeBuilder />;
              default:
                return 'foo';
            }
          } else {
            return <Error />

          }
        }
      } />
    )
  }
export default ProtectedRoute;



  
  
  