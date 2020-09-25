Architecture overview: <br>

A postgresSQL database was used with two tables: <br>

User Table -> username (PK), password <br>
Messages Table -> id (PK), username (FK), messageText <br>

The app uses a database for testing (which is reset to an initial state everytime npm run test is called) and another for dev/prod. <br>

BACKEND URI: https://twittercloneklip.herokuapp.com/ <br>

##API DOCUMENTATION <br>
GET /messages/:id -> in order to get a message with an ID <br>
PUT /messages/:id -> in order to edit a message with an ID <br>
POST /messages {username: username in user's table of database, messageText: 'messageText of the message'} -> in order to create a message <br>
Please visit: https://documenter.getpostman.com/view/3799100/TVKG1weF for official api documentation
