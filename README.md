# MultiStateButton
A proof of concept inspired by a article saw in Medium about UI/UX Design in Web Frontend Development

The article: https://uxplanet.org/7-basic-rules-for-button-design-63dcdf5676b4#d92c

## How it's work
To doing a multi-state button with this library you need three things:
* The First is to call the JS File, like the HTML page do in the example upload here.
* The second is to choose any elements and add the class *m-button* to say to the js to look after it, and to create inside this button the different state of your button, for now you only can create two the first one and the last one, separate each other by a loading div.
* The third is start the JS library for that you have one great function called init, that initialize the first state of your button.

## How I make it interactive
Only take a instance of mButton of the JS, and call click method, here you can pass two value, a selector of you button, and a callback function with two default parameter corresponding with the resolve and reject called by Promise, because yes the library use **Promise** :) 

## Where it's work
As a proof of Concept work, it's not recommend to use it in production, the library actually use a lot of new ES6 feature, like promise, arrow functions or forEach function.
So if you want to use it for professional use, besides to correcting bugs, you'll need to pass the library to Babel for make compatible it for old browser.
