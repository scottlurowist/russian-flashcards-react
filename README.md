# Russian Flashcards React.js: Description

This project is a port of an web application that I wrote for 
[project 2](https://github.com/scottlurowist/russian_flashcards-web-app) of 
[General Assembly's SEI program](https://generalassemb.ly/education/software-engineering-immersive/new-york-city).
I chose to do Russian Flashcards because I speak Russian and have friends in Russia who
would like to use this app.

One twist on the flashcards in the original and this app is that it is requires typing. I know
as a language learning enthusiast that learning a language involves using as many senses as you can.
So I require users to type either English or Russian rather than simply "flipping a card". Perhaps 
a future version will required typing and then do the flipping for extra visual impact.

The port is from a web app using vanilla JavaScript,jQuery, SCSS, and HTML to React.js.
You can read about my
[design decisions](https://github.com/scottlurowist/russian_flashcards-web-app#readme) 
with respect to that project. I chose to deviate from the GA provided template to demonstrate
my thinking and to write my own MVC-light framework with a view state controller since the project
requirements stated that the app must be an SPA. This app reflects how I would build an app under
those General Assembly requirements, based upon my knowledge gained from a Masters in
Computer Science and my real-world software development experience.

With this port, I am free to do things the way that I would want to do them using React.js
and React Bootstrap. Version 1 of this app will try to mimic the functionality of the 
[first version](https://github.com/scottlurowist/russian_flashcards-web-app) of 
Russian Flashcards so as to provide a contrast between a modern framework and a roll-your-own
approach.

The application communicates with a backend web API implemented with Express.js,
Mongoose.js, MongoDB, and of course Node.js. I implemented the backend and it is deployed to Heroku.
This was done for [the first version](https://github.com/scottlurowist/russian_flashcards-web-app)
of the original app. That code may be found here:
[Russian Flashcards Web API](https://github.com/scottlurowist/russian-flashcards-webapi-server).
This code may be expanded in the future as the Russian Flashcards React app grows.


### Technologies Directly Used

- JavaScript
- React.js using JSX, React Router, and React Bootstrap
- React.js scaffolding using "create-react-app"
