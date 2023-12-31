DISTRIBUTED CHAT APPLICATION.

Welcome to my  chat applicatio! This system is designed basically to do the following :
(1) Register users
(2) Login in users
After successful registration ang login, users can do the following on the app
(3) Create Chatrooms
(4) Join chatrooms
(5) Exchange messages in chatrrooms with chatroom members in real time
(6) Get all messages in a chatroom of which user is a member e.t.c.

Installation and Usage
(1) Clone the repository: git clone https://github.com/DESTINYAS/DISTRIBUTED-CHAT-APPLICATION.git
(2) Navigate to the project directory: cd task-management-system
(3) Install dependencies: npm install
(4) Create a .env file and add MONGODB_URI and SECRET as indicated in the .env.copy file.
(5) You can then run the application using: npm start
(8) Once the application is running you can access the API swagger documentation on your browser via http://localhost:3000/api/  

Note
(1) The hosted application swagger url can be reached on https://chat-app-nl1a.onrender.com/api/
(2) The site was designed with Nodejs and Express so you must have nodejs installed to run it.
(3) A registered user can only get and perform operations on the chatrooms he or she created or joined.
(4) To run the docker file use the command docker-compose up and this will connect to the database and spin up 2 instances of the containerized application behind the load balancer when run.
