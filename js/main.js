'use strict';

// constructor function for what to pass to the changing form element. this will need work.
function MakeForm(name, type, id){
  this.name = name; // name of the button ex: "Education"
  this.type = type; // type of form element: "radio", "checkbox", etc.
  this.id = id; // and ID to html i think we need
  this.class; // possibly the class if we need to pass it class info for css
}

//function to handle the forms... should iterate through and find the checked box and return its value for use

function proccessForm(form){
	for (var i = 0; i < form.Selector.length; i++) {
	if (form.Selector[i].checked){
		break;
		}
	}
	var valueIn = form.Selector.value;
}

// switch case build for values returned from form
// 'valueIn' should come from event handler to decide what form was selected.
// add more cases as needed for the form (there will be a lot)
switch(valueIn){

case 'education':
  document.getElementById('startForm').style.display='none';
  document.getElementById('showEduForm').style.display='block';
  break;

case 'h-n-w':
  document.getElementById('startForm').style.display='none';
  document.getElementById('h-n-w').style.display='block';
  break;

case 'employment':
  document.getElementById('startForm').style.display='none';
  break;

case 'services':
  document.getElementById('startForm').style.display='none';
  break;
}

// event handler for when "Next" on html page is clicked. this should take the value of the forms and pass it to javascript as "valueIn"
document.getElementById('next').onclick = function getFormValue(event){
  var valueIn = document.querySelector('input[name='selector']:checked').value;
  return valueIn;
}


// functions to hide form.... i think functions will be ran in the switch case to hide previous form elements. might need one for showing and hiding each individual form group.
