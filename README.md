## This chat is a task for ForaSoft.

### The requirements are as follows:

As a part of the test task, you need to develop a simple JavaScript application – text chat
room:
* After opening a page, user should enter his name
* After entering the name user should join new chat room
* There can be several chat rooms at the same time
* User can copy link to the room and send to another user to invite him
* User can send text messages to the chat and all users in the chat will see message
* Users should see who sent message to the chat and when
* Users should see who is in the chat room right now

### Launch:

To launch this app you need to:

* Change SOCKET_HOSTNAME in `frontend/src/constants.js` to reflect where the backend will be deployed.
* (optionally) Change the `hostname` key in `frontend/package.json` to reflect where the frontend app will be deployed.
* You can also change the port on which the backend server will be listening by modifying the `PORT` variable in `backend/index.js`.
* Run `docker-compose up -d --build`. 
