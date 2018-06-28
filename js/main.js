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
//code for the object rendering will go into the case for whichever is chosen at the end of our tool.... so case nine-eleven would have the dom manipulation for the object "nineEleven" as listed above... should probably be done to a table for each object property.


// we will need dom manip to present ResourceData / object data to a table / page or something
// based on form input..... could be a function we build for it.

//function to handle the forms... should iterate through and find the checked box and return its value for use

// constructor function for what to pass to the changing form element. this will need work.
/*function MakeForm(name, type, id){
  this.name = name; // name of the button ex: "Education"
  this.type = type; // type of form element: "radio", "checkbox", etc.
  this.id = id; // and ID to html i think we need
  this.class; // possibly the class if we need to pass it class info for css
} */
var e = document.getElementById(next)
//function to handle the forms... should iterate through and find the checked box and return its value for usevar e = document.getElementById(next)

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

case 'health':
  document.getElementById('startForm').style.display='none';
  document.getElementById('h-n-w').style.display='block';
  break;

case 'education':
  document.getElementById('startForm').style.display='none';
  document.getElementById('showEduForm').style.display='block';
  break;

case 'financial':
  //code here
  break;

case 'community':
  document.getElementById('startForm').style.display='none';
  break;

case 'employment':
  document.getElementById('startForm').style.display='none';
  break;

case 'healthCareBen':
  //code here
  break;

case 'menHealth':
  //coded here
  break;

case 'subsAbuse':
  //code here
  break;

case 'montGi':
  //code here
  break;

case 'post911':
  //code here
  break;

case 'vocRehab':
  //code here
  break;

case 'busLoan':
  //code here
  break;

case 'homLoan':
  //code here
  break;

case 'lglSer':
  //code here
  break;

case 'vfw':
  //code here
  break;

case 'al':
  //code here
  break;

case 'wwp':
  //code here
  break;

case 'veoa':
  //code here
  break;

case 'vra':
  //code here
  break;

case 'cha':
  //code here
  break;
}

// event handler for when "Next" on html page is clicked. this should take the value of the forms and pass it to javascript as "valueIn"
document.getElementById('next').onclick = function getFormValue(event){
  var valueIn = document.querySelector('input[name='Selector']:checked').value;
  return valueIn;
}


// functions to hide form.... i think functions will be ran in the switch case to hide previous form elements. might need one for showing and hiding each individual form group.
function resetForm() {
  var f= document.getElementById('f');
  f.reset();
  f.elements.foo.value= Element_getClassValue(f.elements.foo, 'value');
}

function Element_getClassValue(el, classname) {
  var prefix= classname+'=';
  var classes= el.className.split(/\s+/);
  for (var i= classes.length; i-->0;)
      if (classes[i].substring(0, prefix.length)===prefix)
          return classes[i].substring(prefix.length);
  return '';
}
// function to reset form selection...we can either use this in main.html <input type="reset" value="Reset" or this below in javascript pool...
document.getElementById("reset").onclick = function() {
  document.getElementById("number").value = "";
};

// event handler
var e = document.getElementById(next)
e.addEventListener('next', proccessForm());
// // storeform.innerHTML = '';
// storeForm.addEventListener('submit', form);
