import '../styles/styles.css'

if (module.hot) {
  module.hot.accept()
}

/* Lesson code */
function Person (fullName, favColor) {
  this.name = fullName;
  this.favoriteColor = favColor;
  this.greet = function() {
    console.log("Hello there, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
  }
}

let mike = new Person("Mike Stirm", "green");
mike.greet();

let sally = new Person("Sally Stirm", "yellow");
sally.greet();
