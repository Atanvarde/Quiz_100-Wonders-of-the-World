# Quiz - Country flags of the world 

A quiz game for testing one's geographical knowledge about country flags of the world. 
This is a final project I developed at the end of Coders Lab IT School, during the course Javascript Developer:React.
I would like to add more options to it within a month.

## Table of Contents
- [General information](#general-information)
- [Technologies](#technologies)
- [Getting started](#getting-started)
- [Status](#status)

#### General information #####
The aim of the quiz is to recognize as many national flags as you can.
At the moment the quiz consists of ten questions.
There are 4 answers to choose from. If you choose the correct one, you scores 1 point.
After the last answer is picked, you receive information about your score on the end screen.
If you are not satisfied with your result, you can click "Start again!" button and try one more time.

#### Technologies
The game was written with usage of:
- ReactJS
- React Router
- React Router Redirect
- Sass
- data from fetched API https://restcountries.eu/

#### Getting started

In order to start a game in command line enter: ```./node_modules/.bin/webpack-dev-server --hot```

Open link http://localhost:3001/#/ to start the quiz in the browser.


#### Status

The project is going to be developed. 
I would like to add new features to it such as:
 - after choosing correct answer it will turn into green colour
 - after choosing wrong answer it will turn into red colour and the correct answer will show up at the same time in green colour
 - possibility to check one's knowledge about flags only from chosen continent/s
 - possibility to check where is the country from correct answer situated on the world map
 