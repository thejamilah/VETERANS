'use strict';

//constructor function that holds data for different resources presented.

function ResourceData(name, location, hours, phone, email){
  this.name = name;
  this.location = location;
  this.hours = hours;
  this.phone = phone;
  this.email = email;
}

//example build out of one resource.... basically building our own database to draw from
var nineEleven = new ResourceData('9/11 GI Bill', 'N/A', '8AM-5PM PST', '1-800-456-5656', 'va.gov.email@email.com');
var mgib = new ResourceData('MGIB', 'N/A', '8-8pm', '1-888-123-4567', 'va.gov.mgib@email.com');
var vfwSeattle = new ReadableStream('Veterans of Foreign Wars: Seattle', '612 Warf Ave.', '9AM-5PM', '555-555-5555', 'vfwseattle@email.com');

// we will need dom manip to present ResourceData / object data to a table / page or something
// based on form input..... could be a function we build for it.

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
  var valueIn = document.querySelector('input[name='Selector']:checked').value;
  return valueIn;
}


// functions to hide form.... i think functions will be ran in the switch case to hide previous form elements. might need one for showing and hiding each individual form group.

// function to reset form selection...we can either use this in main.html <input type="reset" value="Reset" or this below in javascript pool...
document.getElementById("reset").onclick = function() {
  document.getElementById("number").value = "";
};

// event handler
var e = document.getElementById(next)
e.addEventListener('next', proccessForm());
// // storeform.innerHTML = '';
// storeForm.addEventListener('submit', form);
