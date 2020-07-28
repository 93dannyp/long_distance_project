#The Long Distance Project

The Long Distance Project is an app designed for runners dipping their toe into long distances. Our goal is to provide the tools necesary for proper marathon training. 



##Features

###1. Sign Up
The user signs in and inputs their skilll level (beginner is the only skill level currently available).


###2. Login
The user logs in and then is able to use all features of the app.


###3. Home
The user's running log is available on the Home page. 

The user can click the 'Goal Met' button if they achieved their goal workout. The goal workout is the corresponding day of the week as in the Calender. For example, if the user ran 3 miles on day 1 of week 1, they will have met their goal for that day. They can then click the 'Goal Met' button and see strike through lines appear in their log for that day.

The user can also delete a day if they would like to clear space in their log or redo a log for a day. 


###4. Record
The user can record their workouts on the Record page then they will appear on the Home page. The user inputs the distance ran (in miles), elapsed time (in minutes), number week of training, and number day of the training week.


##The Back End
The server side uses Mongoose, Node.js, and Express for its database and server functionality.The back end contains the Models and Controllers. 

The two models are related in a one to many relationship because the User model contains the information from the Training Day model.

The controllers include a users controller for user sign up, a sessions controller for user login, and a training controller for training sessions. The training sessions controller includes the necessary route's for full CRUD functionality. 


##The Front End
The front end uses React to implement the Views portion of the project. It uses Switch Routes for different pages. The website contains a navigation bar where it hosts links to the various pages (described in the Features section). 


##Styling
Bootstrap was used as the CSS framework.