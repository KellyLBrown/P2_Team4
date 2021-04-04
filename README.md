# NutriBoom - A Recipe builder, with user created recipes with custom ingredients or searched foods from Edamam API.
This is Project 2 of our Revature training program. In this program we created a full-stack application that uses an AWS hosted backend with Jenkins on an EC2 instance, with the frontend developed using React Redux.

# Description
This program is intended to allow users to register their information. Once done they are redirected to the login page to then login. The navigation bar will allow them multiple choices: Home, Calendar, Recipe Builder, Recipe Viewer, Logout. 
* Home - Here is where a user may view their current day's recipes, and what the nutritional value of those recipes will be.
* Calendar - A user may use this page to check their recipes by the days which they will be used. So a recipe created for April 4th, will be displayed when the user chooses that date on the calendar options.
* Recipe Builder - Here a user may search for ingredients using the Edamam API, or optionally input their own ingredients. Once this information is input those ingredients will be displayed and can be added to the recipe that the user is creating. A date will also be chosen by the user so they can set the date of the recipe, allowing it to be searched through the calendar.
* Recipe Viewer - Here is where the user may display their entire list of created recipes.
* Logout - The user's web session is cleared and then the user is returned to the login page

* Notes for use
Unfortunately the backend for this project will not remain hosted beyond project completion, but if so desired the project can be downloaded and implemented on your own backend.


# Prerequisites
With a fully hosted backend, only a web-browser is need to use this program.

# Built-With
* Spring Boot - Enterprise Java Framework
* Hibernate - The ORM(Object Relational Mapping) framework
* Maven - Dependency Manager for the Spring Data
* React - The frontend web library used to create the SPA(Single Page Application)
* Log4j - The logging framework for creating a log of important backend events
* Mockito & jUnit - These two were used for backend testing to assure proper functionality
* AWS S3 and EC2 - The backend hosting used for this project for images and the database
* Jenkins - The open-source automation server we used as the pipline for testing, building, and deployment

# Authors
* Dominick
* Kelly
* Jennifer
* Josh
* Mathew

# License
Free to use, copy, and reproduce.

# Acknowledgements
Edimama API as the online food sourced API outside of user created ingredients.
