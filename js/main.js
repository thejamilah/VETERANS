'use strict';

//constructor function that holds data for different resources presented.
var headline = ['Name' , 'Location' , 'Hours' , 'Phone' , 'E-Mail' , 'Website'];
function ResourceData(name, location, hours, phone, email, link){
  this.name = name;
  this.location = location;
  this.hours = hours;
  this.phone = phone;
  this.email = email;
  this.link = link;
}

//example build out of one resource.... basically building our own database to draw from
// Health Care Benefits Resources

var vaChoice = new ResourceData('Va Choice Act', ' Mail Only: 810 Vermont Avenue, NW Washington DC 20420', '7am-8pm M-F Pacific Time', '866-606-8198', 'N/A', str.link('https://www.va.gov/COMMUNITYCARE/programs/veterans/VCP/index.asp'));
var vaMission = new ResourceData('VA Mission Act of 2018', 'Mail Only: 810 Vermont Avenue, NW Washington DC 20420', '7am-8pm M-F Pacific Time', '866-606-8198', 'N/A', str.link('https://www.va.gov/COMMUNITYCARE/programs/veterans/VCP/index.asp'));
var wasSolHomeOrt = new ResourceData('Washington Soldiers Home Ortiam:30-ng Wa', '1301 Orting Kapowsin Hwy, Orting, WA 98360', '8am-4:30pm M-F', 'Main:(360) 893-4515 Admissions: (877) 838-7787', 'SophieP@dva.wa.gov');-
var NatVetFound = new ResourceData('National Veterans Foundation', '5777 West Century Boulevard, Suite 350, Los Angeles, CA 90045', '9am-5pm M-F Pacific Time', '888-777-4443', 'rich@nvf.org', str.link('https://nvf.org'));
// Mental Health Resources
var vfwMenWell = new ResourceData('VFW Mental Wellness Campaign', '13109 E Mirabeau Parkway, Spokane, WA 99216', '8am-4:30pm M-F (24/7 general redirect)', '509-444-8387', 'cheriknoxcrafts@gmail.com', str.link('https://www.vfw.org/assistance/mental-wellness'));
var vetCrisis = new ResourceData('Veterans Crisis Line', 'N/A', '24 Hours', '1-800-273-8255 (PRESS 1)', 'text - 838255', str.link('https://www.veteranscrisisline.net/?gclid=CjwKCAjw68zZBRAnEiwACw0eYc-Yat9KXcr8YN-JCKYbKBsa5stJgmF_-4QTS9ctcnMUMkG_hkVzNRoCqzYQAvD_BwE'));
var callCenHomelessVets = new ResourceData('National Call Center for Homeless Vets', 'N/A', '24 Hours', '1-877-424-3838', 'N/A', str.link('https://www.va.gov/homeless/nationalcallcenter.asp'));
//  Substance Abuse Resources
var vaSubAbusePro = new ResourceData('VA Substance Abuse Programs', '9600 Veterans Dr., Lakewood, WA 98493 / 1660 S. Columbian Way, Seattle, WA 98108', '24 Hours', '1-800-273-8255', 'N/A', str.link('https://www.va.gov/directory/guide/FindSUDprogram.cfm?program=0&inputaddress=University%20Place,%20WA%2098467,%20USA&statusok=1&latitude=47.204644&longitude=-122.538047&SEARCH_CRITERIA=1&country=us'));
var makeConnection = new ResourceData('maketheconnection.net', 'N/A', '24 Hours', 'N/A', 'N/A', str.link('https://maketheconnection.net/'));
var alanon = new ResourceData('Al-Anon.org', '1600 Corporate Landing Parkway, Virginia Beach, VA 23454', '8am-6pm Eastern Standard Time', '(888) 425-2666', 'wso@al-anon.org', str.link('https://al-anon.org'));
// Education Resources
var mgib = new ResourceData('MGIB', 'N/A', '8-8pm', '1-888-442-4551', 'va.gov.mgib@email.com');
var nineEleven = new ResourceData('9/11 GI Bill', 'N/A', '8AM-5PM PST', '1-888-442-4551', 'va.gov.email@email.com');
var vocrehab = new ResourceData('VOC Rehab', 'Jackson Federal Building, 915 2nd Ave, Seattle, WA 98174', '8am-4pm M-F', '800-827-1000', 'N/A', str.link('https://www.benefits.va.gov/vocrehab/edu_voc_counseling.asp'));
// Financial and Legal Resources
var smBusLoans = new ResourceData('VA Small and Veteran Business Programs', '810 Vermone Avenue, NW Washington, DC 20420 Mail Only', '8am-6pm Eastern Standard Time', '866-584-2344', 'osdbu@va.gov', str.link('https://www.va.gov/osdbu/'));
var vaHomeLoan = new ResourceData('VA Home Loan', '1102 Quince St SE, Olympia, WA 98504 Mail Only', '8am-5pm M-F', '800-562-2308', 'N/A', 'VA Home Loan');
var vfwLglAss = new ResourceData('VFW Legal Assistance', 'N/A', 'N/A', '877-447-4487', 'N/A', 'VFW Legal Assistance');
// Community Organizations 
var vfwSeattle = new ResourceData('Veterans of Foreign Wars', '2812 NW Market St., Seattle, WA 98107', 'N/A', '206-782-8618', 'vfwseattle@email.com', 'Veterans of Foreign Wars');
var alSeattle = new ResourceData('American Legion', '8201 Lake City Way NE, Seattle, WA 98115', '6:30pm-7:15pm 1st Tuesday of the Month', '(206) 552-0836', 'commander@post206.org', str.link('American Legion');
var wwproject = new ResourceData('Wounded Warrior Project', 'N/A', '9am-7pm Eastern Standard Time', '888-997-2586', 'resourcecenter@woundedwarriorproject.org', 'Wounded Warrior Project');
// Employment Resources
var veoact = new ResourceData('Veterans Employment Opportunities Act', 'N/A', 'N/A', 'N/A', 'N/A', 'Veterans Employment Opportunities Act');
var vrappointment = new ResourceData('Veterans Recruitment Appointment (VRA)', 'N/A', 'N/A', 'N/A', 'N/A', 'Veterans Recruitment Appointment (VRA)');
var vow2hireheroes = new ResourceData('VOW to Hire Heroes Act', '1360 Union Hill Road, Bldg. 2, Suite A, Alpharetta, GA 30004', 'N/A', '844-634-1520', 'vets@hireheroeusa.org', 'VOW to Hire Heroes Act');
// Homeless Resources
var millionairesClub = new ResourceData('The Millionaires Club - Seattle', '2515 Western Ave, Seattle, WA 98121', '24', '(206) 728-5627', 'N/A', 'The Millionaires Club - Seattle');
var vaHomelessOutreach = new ResourceData('VA Homeless Outreach Clinic - Seattle, WA', 'N/A', 'N/A', '(425)-203-7200', 'N/A', 'VA Homeless Outreach Clinic - Seattle, WA');
var compHouAllia = new ResourceData('Compass Housing Alliance - Seattle, WA', '77 S Washington ST, Seattle WA', '8:30am - 5pm', '(206)474-1910', 'N/A', 'Compass Housing Alliance - Seattle, WA');
//code for the object rendering will go into the case for whichever is chosen at the end of our tool.... so case nine-eleven would have the dom manipulation for the object "nineEleven" as listed above... should probably be done to a table for each object property.

var vaChoice = new ResourceData ('Va Choice Act', '810 Vermont Avenue, NW Washington DC, ', 'N/A', '866-606-8198', 'N/A', 'VA CHOICE ACT');
var vaMission = new ResourceData('VA Mission Act of 2018', 'N/A', 'N/A', 'N/A', 'N/A', 'VA Mission Act of 2018');
var waSoldier = new ResourceData('Washington Soldiers Home Orting Wa', '1301 Orting Kapowsin Hwy, Orting, WA 98360', 'N/A', 'Main:(360) 893-4515 Admissions: (877) 838-7787', 'SophieP@dva.wa.gov');
var naNational = new ResourceData('National Veterans Foundation', 'N/A', 'N/A', 'N/A', 'N/A', 'National Veterans Foundation');

vaChoice
var nameEl = document.getElementById('name');
nameEl.textContent = 'Name: ' + vaChoice.name;
var locEl = document.getElementById('location');
locEl.textContent = 'Location : ' + vaChoice.location;
var hourEl = document.getElementById('hours');
hourEl.textContent = 'Hours : ' + vaChoice.hours;
var phEl = document.getElementById('phone');
phEl.textContent = 'Phone : ' + vaChoice.phone;
var emailEl = document.getElementById('email');
emailEl.textContent = 'Email : ' + vaChoice.email;
var linkStr = vaChoice.link;
var url = linkStr.link("https://www.va.gov/COMMUNITYCARE/programs/veterans/VCP/index.asp");
document.getElementById("link").innerHTML = url;

naNational
var nameEl = document.getElementById('name');
nameEl.textContent = 'Name: ' + naNational.name;
var locEl = document.getElementById('location');
locEl.textContent = 'Location : ' + naNational.location;
var hourEl = document.getElementById('hours');
hourEl.textContent = 'Hours : ' + naNational.hours;
var phEl = document.getElementById('phone');
phEl.textContent = 'Phone : ' + naNational.phone;
var emailEl = document.getElementById('email');
emailEl.textContent = 'Email : ' + naNational.email;
var linkStr = naNational.link;
var url = linkStr.link("https://nvf.org");
document.getElementById("link").innerHTML = url;

compHouAllia
var nameEl = document.getElementById('name');
nameEl.textContent = 'Name: ' + compHouAllia.name;
var locEl = document.getElementById('location');
locEl.textContent = 'Location : ' + compHouAllia.location;
var hourEl = document.getElementById('hours');
hourEl.textContent = 'Hours : ' + compHouAllia.hours;
var phEl = document.getElementById('phone');
phEl.textContent = 'Phone : ' + compHouAllia.phone;
var emailEl = document.getElementById('email');
emailEl.textContent = 'Email : ' + compHouAllia.email;
var linkStr = compHouAllia.link;
var url = linkStr.link("http://www.compasshousingalliance.org/");
document.getElementById("link").innerHTML = url;

vaHomelessOutreach
var nameEl = document.getElementById('name');
nameEl.textContent = 'Name: ' + vaHomelessOutreach.name;
var locEl = document.getElementById('location');
locEl.textContent = 'Location : ' + vaHomelessOutreach.location;
var hourEl = document.getElementById('hours');
hourEl.textContent = 'Hours : ' + vaHomelessOutreach.hours;
var phEl = document.getElementById('phone');
phEl.textContent = 'Phone : ' + vaHomelessOutreach.phone;
var emailEl = document.getElementById('email');
emailEl.textContent = 'Email : ' + vaHomelessOutreach.email;
var linkStr = vaHomelessOutreach.link;
var url = linkStr.link("https://www.pugetsound.va.gov/services/homeless/index.asp");
document.getElementById("link").innerHTML = url;

millionairesClub
var nameEl = document.getElementById('name');
nameEl.textContent = 'Name: ' + millionairesClub.name;
var locEl = document.getElementById('location');
locEl.textContent = 'Location : ' + millionairesClub.location;
var hourEl = document.getElementById('hours');
hourEl.textContent = 'Hours : ' + millionairesClub.hours;
var phEl = document.getElementById('phone');
phEl.textContent = 'Phone : ' + millionairesClub.phone;
var emailEl = document.getElementById('email');
emailEl.textContent = 'Email : ' + millionairesClub.email;
var linkStr = millionairesClub.link;
var url = linkStr.link("https://www.millionairclub.org/");
document.getElementById("link").innerHTML = url;



vow2hireheroes
var nameEl = document.getElementById('name');
nameEl.textContent = 'Name: ' + vow2hireheroes.name;
var locEl = document.getElementById('location');
locEl.textContent = 'Location : ' + vow2hireheroes.location;
var hourEl = document.getElementById('hours');
hourEl.textContent = 'Hours : ' + vow2hireheroes.hours;
var phEl = document.getElementById('phone');
phEl.textContent = 'Phone : ' + vow2hireheroes.phone;
var emailEl = document.getElementById('email');
emailEl.textContent = 'Email : ' + vow2hireheroes.email;
var linkStr = vow2hireheroes.link;
var url = linkStr.link("https://www.benefits.va.gov/vow/ and http://www.hireheroesusa.org/");
document.getElementById("link").innerHTML = url;

vrappointment
var nameEl = document.getElementById('name');
nameEl.textContent = 'Name: ' + vrappointment.name;
var locEl = document.getElementById('location');
locEl.textContent = 'Location : ' + vrappointment.location;
var hourEl = document.getElementById('hours');
hourEl.textContent = 'Hours : ' + vrappointment.hours;
var phEl = document.getElementById('phone');
phEl.textContent = 'Phone : ' + vrappointment.phone;
var emailEl = document.getElementById('email');
emailEl.textContent = 'Email : ' + vrappointment.email;
var linkStr = vrappointment.link;
var url = linkStr.link("https://www.usajobs.gov/Help/working-in-government/unique-hiring-paths/veterans/vra/");
document.getElementById("link").innerHTML = url;

veoact
var nameEl = document.getElementById('name');
nameEl.textContent = 'Name: ' + veoact.name;
var locEl = document.getElementById('location');
locEl.textContent = 'Location : ' + veoact.location;
var hourEl = document.getElementById('hours');
hourEl.textContent = 'Hours : ' + veoact.hours;
var phEl = document.getElementById('phone');
phEl.textContent = 'Phone : ' + veoact.phone;
var emailEl = document.getElementById('email');
emailEl.textContent = 'Email : ' + veoact.email;
var linkStr = veoact.link;
var url = linkStr.link("https://www.benefits.va.gov/WARMS/docs/admin28/M28R/Part_VI/pt06_ch08_secA.pdf");
document.getElementById("link").innerHTML = url;

wwproject
var nameEl = document.getElementById('name');
nameEl.textContent = 'Name: ' + wwproject.name;
var locEl = document.getElementById('location');
locEl.textContent = 'Location : ' + wwproject.location;
var hourEl = document.getElementById('hours');
hourEl.textContent = 'Hours : ' + wwproject.hours;
var phEl = document.getElementById('phone');
phEl.textContent = 'Phone : ' + wwproject.phone;
var emailEl = document.getElementById('email');
emailEl.textContent = 'Email : ' + wwproject.email;
var linkStr = wwproject.link;
var url = linkStr.link("https://www.woundedwarriorproject.org/");
document.getElementById("link").innerHTML = url;

alSeattle
var nameEl = document.getElementById('name');
nameEl.textContent = 'Name: ' + alSeattle.name;
var locEl = document.getElementById('location');
locEl.textContent = 'Location : ' + alSeattle.location;
var hourEl = document.getElementById('hours');
hourEl.textContent = 'Hours : ' + alSeattle.hours;
var phEl = document.getElementById('phone');
phEl.textContent = 'Phone : ' + alSeattle.phone;
var emailEl = document.getElementById('email');
emailEl.textContent = 'Email : ' + alSeattle.email;
var linkStr = alSeattle.link;
var url = linkStr.link("https://www.legion.org/ and http://www.post206.org/");
document.getElementById("link").innerHTML = url;

vfwSeattle
var nameEl = document.getElementById('name');
nameEl.textContent = 'Name: ' + vfwSeattle.name;
var locEl = document.getElementById('location');
locEl.textContent = 'Location : ' + vfwSeattle.location;
var hourEl = document.getElementById('hours');
hourEl.textContent = 'Hours : ' + vfwSeattle.hours;
var phEl = document.getElementById('phone');
phEl.textContent = 'Phone : ' + vfwSeattle.phone;
var emailEl = document.getElementById('email');
emailEl.textContent = 'Email : ' + vfwSeattle.email;
var linkStr = vfwSeattle.link; 
var url = linkStr.link("www.vfwseattle.org/");
document.getElementById("link").innerHTML = url;

vfwLglAss
var nameEl = document.getElementById('name');
nameEl.textContent = 'Name: ' + vfwLglAss.name;
var locEl = document.getElementById('location');
locEl.textContent = 'Location : ' + vfwSeattle.location;
var hourEl = document.getElementById('hours');
hourEl.textContent = 'Hours : ' + vfwLglAss.hours;
var phEl = document.getElementById('phone');
phEl.textContent = 'Phone : ' + vfwLglAss.phone;
var emailEl = document.getElementById('email');
emailEl.textContent = 'Email : ' + vfwLglAss.email;
var linkStr = vfwLglAss.link;
var url = linkStr.link("https://www.va.gov/ogc/legalservices.asp and http://statesidelegal.org/findinghelp");
document.getElementById("link").innerHTML = url;

vaHomeLoan
var nameEl = document.getElementById('name');
nameEl.textContent = 'Name: ' + vaHomeLoan.name;
var locEl = document.getElementById('location');
locEl.textContent = 'Location : ' + vaHomeLoan.location;
var hourEl = document.getElementById('hours');
hourEl.textContent = 'Hours : ' + vaHomeLoan.hours;
var phEl = document.getElementById('phone');
phEl.textContent = 'Phone : ' + vaHomeLoan.phone;
var emailEl = document.getElementById('email');
emailEl.textContent = 'Email : ' + vaHomeLoan.email;
var linkStr = vaHomeLoan.link;
var url = linkStr.link("https://www.benefits.va.gov/homeloans/");
document.getElementById("link").innerHTML = url;




// code for the object rendering will go into the case for whichever is chosen at the end of our tool.... so case nine-eleven would have the dom manipulation for the object "nineEleven" as listed above... should probably be done to a table for each object property.


// // we will need dom manip to present ResourceData / object data to a table / page or something
// // based on form input..... could be a function we build for it.


// //function to handle the forms... should iterate through and find the checked box and return its value for usevar e = document.getElementById(next)

var valueIn = null;

// // switch case build for values returned from form
// // 'valueIn' should come from event handler to decide what form was selected.
// // add more cases as needed for the form (there will be a lot)

function queryStart(event){
  event.preventDefault();
  var radios = document.getElementsByClassName('first');
  for (var i = 0; i < radios.length; i++){
    if (radios[i].checked){
      console.log(radios[i].value);

      switch(radios[i].value){

      case 'health':
        document.getElementById('startForm').style.display = 'none';
        document.getElementById('healthForm').style.display = 'block';
        break;

      case 'education':
        console.log('reached switch');
        document.getElementById('startForm').style.display = 'none';
        document.getElementById('edForm').style.display = 'block';
        break;

      case 'financial':
        document.getElementById('startForm').style.display = 'none';
        document.getElementById('finForm').style.display = 'block';
        break;

      case 'community':
        document.getElementById('startForm').style.display = 'none';
        document.getElementById('comOrgForm').style.display = 'block';
        break;

      case 'employment':
        document.getElementById('startForm').style.display = 'none';
        document.getElementById('employAndHome').style.display = 'block';
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
    }}}

// // REFACTOR STRETCH: functions to hide form.... i think functions will be ran in the switch case to hide previous form elements. might need one for showing and hiding each individual form group.

// event handler
var submitStart = document.getElementById('startNext');
submitStart.addEventListener('click', queryStart);
