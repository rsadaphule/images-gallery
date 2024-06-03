Create React App

Install VS Extensions
* Cobalt
* lint

Configure Linting


Local Settings
Add .env.local file in ./frontend folder with following settings
REACT_APP_UNSPLASH_KEY=xxx

Add .env.local file in ./api folder with following settings
UNSPLASH_KEY=xxx




Install Git

Creative Virtual Env
* Create .venv empty folder under api


Install Python Packages in virtal env
pipenv install Flask
pipenv install requests
pipenv install python-dotenv
pipenv install flask-cors

pipenv install --dev black
pipenv install --dev pylint
pipenv install --dev pycodestyle





Activate python virtual env
* Go to VS Command line 
* Navigate to api folder
* Run pipenv shell



Docker commands
* See list of running processess in the docker 
     docker ps


API
* Create docker image
  docker build . -t images-gallery-api 
* List docker images
  docker images  
* Run docker image in the background
    docker run -p 5050:5050 -d images-gallery-api  
* Connect docker image via bash
    docker exec -it <name> bash

Front End 
 * Build docker image 
  docker build . -t frontend
 * Run docker image in the background
    docker run -p 5050:5050 -d images-gallery-api  
  * Connect docker image via sh
    docker exec -it <name> sh
 
 
 Common Docker commands
  * stop docker process running in the background
    docker stop <psname>
  * start docker process whch was stopped
     docker start <psname>
  * to start front end and backend container at the same time
    docker-compose up 
  

Connect to mongo shell via docker
* docker exec -it images-gallery-mongo-1 mongosh --username admin --password example



Useful links
pypi.org for  code examples of python Packages
https://react-bootstrap.github.io/ for react and bootstrap documentation

