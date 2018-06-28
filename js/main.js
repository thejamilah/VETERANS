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


//function to handle the forms... should iterate through and find the checked box and return its value for usevar e = document.getElementById(next)

var valueIn = '';

function queryStart(){
  var radios = document.getElementsByClassName('first');
  for (var i = 0; i < radios.length; i++){
    if (radios[i].checked){
      console.log(radios[i].value);
      valueIn = radios[i].checked.value;
      return valueIn;
    }
  }
}

// switch case build for values returned from form
// 'valueIn' should come from event handler to decide what form was selected.
// add more cases as needed for the form (there will be a lot)
switch(valueIn){

case 'health':
  document.getElementById('startForm').style.display = 'none';
  document.getElementById('h-n-w').style.display = 'block';
  break;

case 'education':
  document.getElementById('startForm').style.display = 'none';
  document.getElementById('showEduForm').style.display = 'block';
  break;

case 'financial':
  //code here
  break;

case 'community':
  document.getElementById('startForm').style.display = 'none';
  break;

case 'employment':
  document.getElementById('startForm').style.display = 'none';
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

// functions to hide form.... i think functions will be ran in the switch case to hide previous form elements. might need one for showing and hiding each individual form group.

// function to reset form selection...we can either use this in main.html <input type="reset" value="Reset" or this below in javascript pool...
/*document.getElementById("reset").onclick = function() {
  document.getElementById("number").value = "";
};*/

// event handler
document.getElementById('next').addEventListener('click', queryStart());
