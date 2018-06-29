'use strict';

//constructor function that holds data for different resources presented.

function ResourceData(name, location, hours, phone, email, link){
  this.name = name;
  this.location = location;
  this.hours = hours;
  this.phone = phone;
  this.email = email;
  this.link = link;
}

//example build out of one resource.... basically building our own database to draw from
var str = this.name;
// Health Care Benefits Resources

var vaChoice = new ResourceData('Va Choice Act', '810 Vermont Avenue, NW Washington DC, ', 'N/A', '866-606-8198', 'N/A', str.link("https://www.va.gov/COMMUNITYCARE/programs/veterans/VCP/index.asp"));
var vaMission = new ResourceData('VA Mission Act of 2018', 'N/A', 'N/A', 'N/A', 'N/A', str.link("https://www.va.gov/COMMUNITYCARE/programs/veterans/VCP/index.asp"));

var wasSolHomeOrt = new ResourceData('Washington Soldiers Home Orting Wa', '1301 Orting Kapowsin Hwy, Orting, WA 98360', 'N/A', 'Main:(360) 893-4515 Admissions: (877) 838-7787', 'SophieP@dva.wa.gov');
var NatVetFound = new ResourceData('National Veterans Foundation', 'N/A', 'N/A', 'N/A', 'N/A', str.link('https://nvf.org'));
// Mental Health Resources
var vfwMenWell = new ResourceData('VFW Mental Wellness Campaign', 'N/A', 'N/A', 'N/A', 'N/A', str.link('https://www.vfw.org/assistance/mental-wellness'));
var vetCrisis = new ResourceData('Veterans Crisis Line', 'N/A', '24 Hours', '1-800-273-8255 (PRESS 1)', 'N/A', str.link('https://www.veteranscrisisline.net/?gclid=CjwKCAjw68zZBRAnEiwACw0eYc-Yat9KXcr8YN-JCKYbKBsa5stJgmF_-4QTS9ctcnMUMkG_hkVzNRoCqzYQAvD_BwE'));
var callCenHomelessVets = new ResourceData('National Call Center for Homeless Vets', 'N/A', '24 Hours', '1-877-424-3838', 'N/A', str.link('https://www.va.gov/homeless/nationalcallcenter.asp'));
//  Substance Abuse Resources
var vaSubAbusePro = new ResourceData('VA Substance Abuse Programs', 'N/A', 'N/A', '1-800-273-8255', 'N/A', str.link('https://www.va.gov/directory/guide/FindSUDprogram.cfm?program=0&inputaddress=University%20Place,%20WA%2098467,%20USA&statusok=1&latitude=47.204644&longitude=-122.538047&SEARCH_CRITERIA=1&country=us'));
var makeConnection = new ResourceData('maketheconnection.net', 'N/A', '24 Hours', 'N/A', 'N/A', str.link('https://maketheconnection.net/'));
var alanon = new ResourceData('Al-Anon.org', 'N/A', 'N/A', '(757) 563-1600', 'wso@al-anon.org', str.link('https://al-anon.org'));
// Education Resources
var mgib = new ResourceData('MGIB', 'N/A', '8-8pm', '1-888-123-4567', 'va.gov.mgib@email.com');
var nineEleven = new ResourceData('9/11 GI Bill', 'N/A', '8AM-5PM PST', '1-800-456-5656', 'va.gov.email@email.com');
var vocrehab = new ResourceData('VOC Rehab', 'N/A', 'N/A', 'N/A', 'N/A', str.link('https://www.benefits.va.gov/vocrehab/edu_voc_counseling.asp'));
// Financial and Legal Resources
var smBusLoans = new ResourceData('VA Small and Veteran Business Programs', 'N/A', 'N/A', 'N/A', 'N/A', str.link('https://www.va.gov/osdbu/programs/index.asphttps://www.va.gov/osdbu/programs/index.asp'));
var vaHomeLoan = new ResourceData('VA Home Loan', 'N/A', 'N/A', 'N/A', 'N/A', str.link('https://www.benefits.va.gov/homeloans/'));
var vfwLglAss = new ResourceData('VFW Legal Assistance', 'N/A', 'N/A', 'N/A', 'N/A', str.link('https://www.vfw.org/assistance'));
// Community Organizations 
var vfwSeattle = new ResourceData('Veterans of Foreign Wars: Seattle', '612 Warf Ave.', '9AM-5PM', '555-555-5555', 'vfwseattle@email.com');
var alSeattle = new ResourceData('American Legion', '3213 W Wheeler St, Seattle, WA 98199', 'N/A', '(206) 325-7697', 'N/A', str.link('https://www.legion.org/'));
var wwproject = new ResourceData('Wounded Warrior Project', 'N/A', 'N/A', 'N/A', 'N/A', str.link('https://www.woundedwarriorproject.org/'));
// Employment Resources
var veoact = new ResourceData('Veterans Employment Opportunities Act', 'N/A', 'N/A', 'N/A', 'N/A', str.link('https://www.benefits.va.gov/WARMS/docs/admin28/M28R/Part_VI/pt06_ch08_secA.pdf'));
var vrappointment = new ResourceData('Veterans Recruitment Appointment (VRA)', 'N/A', 'N/A', 'N/A', 'N/A', str.link('https://www.usajobs.gov/Help/working-in-government/unique-hiring-paths/veterans/vra/'));
var vow2hireheroes = new ResourceData('VOW to Hire Heroes Act', 'N/A', 'N/A', 'N/A', 'N/A', str.link('https://www.benefits.va.gov/vow/'));
// Homeless Resources
var millionairesClub = new ResourceData('The Millionaires Club - Seattle', '2515 Western Ave, Seattle, WA 98121', '24', '(206) 728-5627', 'N/A', str.link('https://www.millionairclub.org/'));
var vaHomelessOutreach = new ResourceData('VA Homeless Outreach Clinic - Seattle, WA', 'N/A', 'N/A', '(425)-203-7200', 'N/A', str.link('https://www.pugetsound.va.gov/services/homeless/index.asp'));
var compHouAllia = new ResourceData('Compass Housing Alliance - Seattle, WA', '77 S Washington ST, Seattle WA', '8:30am - 5pm', '(206)474-1910', 'N/A', str.link('http://www.compasshousingalliance.org/'));
var salvaArmySeattle = new ResourceData('The Salvation Army William Booth Center', '811 Maynard Ave S, Seattle, WA 98134', 'N/A', '(206) 621-0145', 'N/A', str.link('https://williamboothcenternw.salvationarmy.org/william_booth_center_us_west/allstories/all'));
var kingCoVetPro = new ResourceData('King County Veterans Program', '2106 2nd Ave, Suite 100, Seattle, WA 98121', '0830-1630 Walk-ins: Mon/Wed/Thurs 0830 - 1130 Tues 1300 - 1500', '(206) 477-8282', 'N/A', str.link('https://www.kingcounty.gov/depts/community-human-services/veterans.aspx'));
var natCoaliHomVets = new ResourceData('National Coalition for Homeless Veterans', 'N/A', 'N/A', 'N/A', 'N/A', str.link('http://www.nchv.org/'));
var homeVetStanDown = new ResourceData('Homeless Veteran Stand Downs', 'N/A', 'N/A', 'N/A', 'N/A', str.link('https://www.va.gov/homeless/events.asp'));
var vash = new ResourceData('VASH Program', 'N/A', 'N/A', 'N/A', 'N/A', str.link('https://portal.hud.gov/hudportal/HUD?src=/program_offices/public_indian_housing/programs/hcv/vash'));
var vfwTranEmpSer = new ResourceData('VFW Transition and Employment Services', 'N/A', 'N/A', 'N/A', 'N/A', str.link('https://www.vfw.org/assistance/employment-assistance'));
var build9 = new ResourceData('Building 9 for Veterans Transitional Housing Program - Retsil, WA', 'WA Veterans Home 1141 Beach Drive E, Building 9, Port Orchard, WA 98366', 'Mon - Fri 8:30 - 4:30','(360) 895-4371', 'N/A', str.link('http://www.dva.wa.gov/veteran-homes/building-9-veterans-transitional-housing-program'));



//code for the object rendering will go into the case for whichever is chosen at the end of our tool.... so case nine-eleven would have the dom manipulation for the object "nineEleven" as listed above... should probably be done to a table for each object property.


// we will need dom manip to present ResourceData / object data to a table / page or something
// based on form input..... could be a function we build for it.


//function to handle the forms... should iterate through and find the checked box and return its value for usevar e = document.getElementById(next)

var valueIn = '';

function queryStart(event){
  event.preventDefault();
  var radios = document.getElementsByClassName('first');
  for (var i = 0; i < radios.length; i++){
    if (radios[i].checked){
      console.log(radios[i].value);
      valueIn = radios[i].value;
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
  console.log('reached switch');
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

// REFACTOR STRETCH: functions to hide form.... i think functions will be ran in the switch case to hide previous form elements. might need one for showing and hiding each individual form group.

// function to reset form selection...we can either use this in main.html <input type="reset" value="Reset" or this below in javascript pool...
/*document.getElementById("reset").onclick = function() {
  document.getElementById("number").value = "";
};*/

// event handler
var submitStart = document.getElementById('startNext');
submitStart.addEventListener('click', queryStart);
