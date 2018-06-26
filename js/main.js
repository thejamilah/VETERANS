'use strict';

// constructor function for what to pass to the changing form element. this will need work.
function MakeForm(name){
  this.name = name; // name of the button ex: "Education"
  this.type = type; // type of form element: "radio", "checkbox", etc.
  this.id = id; // and ID to html i think we need
  this.class; // possibly the class if we need to pass it class info for css
}

// switch case build for values returned from form
// 'valueIn' should come from event handler to decide what form was selected.
// add more cases as needed for the form (there will be a lot)
switch(valueIn){

case 'education':
  //code to change the form element to what we need after education is chosen
  break;

case 'h-n-w':
  //run some code here
  break;

case 'homelessness':
  //run some code here;
  break;

case 'services':
  //run some code here
  break;
}

// event handler for when "Next" on html page is clicked. this should take the value of the forms and pass it to javascript as "valueIn"



// functions to hide form.... i think functions will be ran in the switch case to hide previous form elements. might need one for showing and hiding each individual form group.
