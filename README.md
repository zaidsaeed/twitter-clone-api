Architecture overview:

A postgresSQL database was used with two tables:

User Table -> username (PK), password
Messages Table -> id (PK), username (FK), messageText

The app uses a database for testing (which is reset to an initial state everytime npm run test is called) and another for dev/prod.

BACKEND URI: https://twittercloneklip.herokuapp.com/

##API DOCUMENTATION
GET /messages/:id -> in order to get a message with an ID
PUT /messages/:id -> in order to edit a message with an ID
POST /messages {username: username in user's table of database, messageText: 'messageText of the message'} -> in order to create a message
